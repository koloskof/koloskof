#!/usr/bin/env bash
set -Eeuo pipefail

echo "🔧 Переименование файлов и директорий с пробелами в kebab-case..."

cd "$(dirname "$0")/../src"

# Функция для преобразования имени в kebab-case
to_kebab_case() {
    echo "$1" | sed 's/[[:space:]]\+/-/g' | sed 's/[^a-zA-Z0-9.-]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g' | tr '[:upper:]' '[:lower:]'
}

# Переименование директорий (сначала самые глубокие)
echo "📁 Переименование директорий..."
find . -name "* *" -type d -depth | while IFS= read -r dir; do
    parent_dir=$(dirname "$dir")
    old_name=$(basename "$dir")
    new_name=$(to_kebab_case "$old_name")
    
    if [ "$old_name" != "$new_name" ]; then
        new_path="$parent_dir/$new_name"
        echo "  📁 $dir -> $new_path"
        
        if [ ! -e "$new_path" ]; then
            mv "$dir" "$new_path"
        else
            echo "    ⚠️  Целевая директория уже существует: $new_path"
        fi
    fi
done

# Переименование файлов
echo "📄 Переименование файлов..."
find . -name "* *" -type f | while IFS= read -r file; do
    parent_dir=$(dirname "$file")
    old_name=$(basename "$file")
    
    # Сохраняем расширение файла
    extension="${old_name##*.}"
    name_without_ext="${old_name%.*}"
    
    # Если файл без расширения
    if [ "$old_name" = "$extension" ]; then
        new_name=$(to_kebab_case "$old_name")
    else
        new_name_without_ext=$(to_kebab_case "$name_without_ext")
        new_name="$new_name_without_ext.$extension"
    fi
    
    if [ "$old_name" != "$new_name" ]; then
        new_path="$parent_dir/$new_name"
        echo "  📄 $file -> $new_path"
        
        if [ ! -e "$new_path" ]; then
            mv "$file" "$new_path"
        else
            echo "    ⚠️  Целевой файл уже существует: $new_path"
        fi
    fi
done

echo "✅ Переименование завершено!"
echo "🔍 Проверяем оставшиеся файлы с пробелами..."

remaining_dirs=$(find . -name "* *" -type d | wc -l)
remaining_files=$(find . -name "* *" -type f | wc -l)

echo "📊 Результат:"
echo "  - Директорий с пробелами: $remaining_dirs"
echo "  - Файлов с пробелами: $remaining_files"

if [ "$remaining_dirs" -eq 0 ] && [ "$remaining_files" -eq 0 ]; then
    echo "🎉 Все файлы и директории успешно переименованы!"
else
    echo "⚠️  Остались файлы/директории с пробелами. Проверьте вручную."
fi
