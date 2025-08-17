#!/usr/bin/env bash
set -Eeuo pipefail
trap 'c=$?; echo "::error::setup.sh упал на строке $LINENO (команда: ${BASH_COMMAND}) с кодом $c"; exit $c' ERR

echo "Shell: $SHELL"
echo "PWD: $(pwd)"
echo "Node: $(command -v node || true) $(node -v 2>/dev/null || true)"
echo "NPM:  $(command -v npm || true)  $(npm -v 2>/dev/null || true)"
echo "Python: $(command -v python || true) $(python -V 2>/dev/null || true)"
echo "Файлы в корне:"; ls -la

# --- КОМАНДЫ ДЛЯ KOLOSKOF NEXT.JS ПРОЕКТА ---

echo "🚀 Настройка проекта КОЛОСКОВ.РФ..."

# Проверка версий Node.js
echo "📋 Проверка требований..."
node_version=$(node -v | sed 's/v//')
required_node="18.0.0"
if [ "$(printf '%s\n' "$required_node" "$node_version" | sort -V | head -n1)" != "$required_node" ]; then
    echo "::error::Требуется Node.js >= $required_node, установлена версия: $node_version"
    exit 1
fi

# Установка зависимостей
echo "📦 Установка зависимостей..."
npm ci

# Проверка конфигурации TypeScript
echo "🔍 Проверка TypeScript конфигурации..."
npx tsc --noEmit

# Линтинг кода
echo "🧹 Проверка качества кода..."
npm run lint

# Сборка проекта
echo "🏗️  Создание production сборки..."
npm run build

# Проверка размера бандла
echo "📊 Анализ размера сборки..."
du -sh .next/static/chunks/* | sort -hr | head -10

# Проверка доступности изображений
echo "🖼️  Проверка ресурсов..."
if [ ! -f "public/колосков.png" ]; then
    echo "::warning::Основное изображение не найдено: public/колосков.png"
fi

# Проверка структуры контента
echo "📚 Проверка контента..."
content_dirs=("src/blog" "src/2-specifikaciya-po-produktovoj-razrabotke" "src/3-modulnaya-finansovaya-platforma" "src/4-koncepcii-finansovyh-servisov")
for dir in "${content_dirs[@]}"; do
    if [ -d "$dir" ]; then
        count=$(find "$dir" -name "*.md" | wc -l)
        echo "  ✓ $dir: $count файлов"
    else
        echo "  ⚠️  $dir: директория не найдена"
    fi
done

echo "✅ Настройка завершена успешно!"
echo "🌐 Для запуска в production используйте: npm start"
echo "🔧 Для разработки используйте: npm run dev"
