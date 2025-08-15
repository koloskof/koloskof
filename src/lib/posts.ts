
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import crypto from 'crypto';

const postsDirectory = path.join(process.cwd(), 'src/blog');

function generateShortId(fileName: string): string {
  return crypto.createHash('md5').update(fileName).digest('hex').substring(0, 8);
}

export async function getSortedPostsData() {
  // Get file names under /src/blog
  const fileNames = fs.readdirSync(postsDirectory).filter(fileName => fileName.endsWith('.md'));
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    // Use short ID for files with non-ASCII characters or long names
    const shortId = generateShortId(fileName);
    const cleanFileName = fileName.replace(/\.md$/, '');
    const hasNonAscii = /[^\x00-\x7F]/.test(cleanFileName);
    const id = (fileName.length > 50 || hasNonAscii) ? shortId : cleanFileName;

    try {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const stats = fs.statSync(fullPath);
      const date = stats.birthtime.toISOString().split('T')[0];

      // Get title and content
      const lines = fileContents.split('\n');
      const firstLine = lines[0];
      
      // Determine title and handle duplication
      const firstLineClean = firstLine.replace(/#/g, '').replace(/\*\*/g, '').trim();
      let title;
      let rawContent;

      if (firstLine.startsWith('##')) {
        // Extract title from markdown heading (only ## headings)
        title = firstLine.replace(/#/g, '').replace(/\*\*/g, '').trim();
        // Skip the heading line for content
        let contentStartIndex = 1;
        while (contentStartIndex < lines.length && lines[contentStartIndex].trim() === '') {
          contentStartIndex++;
        }
        rawContent = lines.slice(contentStartIndex).join('\n').trim();
      } else {
        // Use filename as title
        const fileTitle = fileName.replace(/\.md$/, '').replace(/_/g, ' ').replace(/\*\*/g, '');
        
        // Check if first line contains the same content as filename (with or without additional content)
        if (firstLineClean === fileTitle || firstLineClean.startsWith(fileTitle)) {
          // If first line has additional content (like URLs), use that as title
          if (firstLineClean.length > fileTitle.length) {
            title = firstLineClean;
          } else {
            title = fileTitle;
          }
          // Skip the first line for content since it matches the title
          let contentStartIndex = 1;
          while (contentStartIndex < lines.length && lines[contentStartIndex].trim() === '') {
            contentStartIndex++;
          }
          rawContent = lines.slice(contentStartIndex).join('\n').trim();
        } else {
          // First line doesn't match filename, use filename as title and keep all content
          title = fileTitle;
          rawContent = fileContents.trim();
        }
      }

      // Extract tags (hashtags starting with #)
      const tagRegex = /#(\w+)/g;
      const tagMatches = rawContent.match(tagRegex) || [];
      const tags = tagMatches.map(tag => tag.substring(1)); // Remove # symbol

      // Remove tags from content
      const contentWithoutTags = rawContent.replace(tagRegex, '').trim();

      // Combine the data with the id and original fileName for lookup
      return {
        id,
        title,
        date,
        content: contentWithoutTags,
        tags,
        fileName, // Keep original filename for file access
      };
    } catch (error) {
      // Skip files that cause errors (like ENAMETOOLONG)
      console.warn(`Skipping file ${fileName}:`, error.message);
      return null;
    }
  })); // Remove null entries
  const filteredData = allPostsData.filter(Boolean);
  
  // Sort posts by date
  return filteredData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string) {
  try {
    // First, try to find the file by matching ID
    const fileNames = fs.readdirSync(postsDirectory).filter(fileName => fileName.endsWith('.md'));
    let targetFileName = null;
    
    // Look for exact match first
    const exactMatch = fileNames.find(fileName => fileName.replace(/\.md$/, '') === id);
    if (exactMatch) {
      targetFileName = exactMatch;
    } else {
      // Look for short ID match
      const shortIdMatch = fileNames.find(fileName => generateShortId(fileName) === id);
      if (shortIdMatch) {
        targetFileName = shortIdMatch;
      }
    }

    if (!targetFileName) {
      return null;
    }

    const fullPath = path.join(postsDirectory, targetFileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const stats = fs.statSync(fullPath);
    const date = stats.birthtime.toISOString().split('T')[0];

    // Get title and content
    const lines = fileContents.split('\n');
    const firstLine = lines[0];
    
    // Determine title and handle duplication
    const firstLineClean = firstLine.replace(/#/g, '').replace(/\*\*/g, '').trim();
    let title;
    let content;

    if (firstLine.startsWith('##')) {
      // Extract title from markdown heading (only ## headings)
      title = firstLine.replace(/#/g, '').replace(/\*\*/g, '').trim();
      // Skip the heading line for content
      let contentStartIndex = 1;
      while (contentStartIndex < lines.length && lines[contentStartIndex].trim() === '') {
        contentStartIndex++;
      }
      content = lines.slice(contentStartIndex).join('\n');
    } else {
      // Use filename as title
      const fileTitle = targetFileName.replace(/\.md$/, '').replace(/_/g, ' ').replace(/\*\*/g, '');
      
      // Check if first line contains the same content as filename (with or without additional content)
      if (firstLineClean === fileTitle || firstLineClean.startsWith(fileTitle)) {
        // If first line has additional content (like URLs), use that as title
        if (firstLineClean.length > fileTitle.length) {
          title = firstLineClean;
        } else {
          title = fileTitle;
        }
        // Skip the first line for content since it matches the title
        let contentStartIndex = 1;
        while (contentStartIndex < lines.length && lines[contentStartIndex].trim() === '') {
          contentStartIndex++;
        }
        content = lines.slice(contentStartIndex).join('\n');
      } else {
        // First line doesn't match filename, use filename as title and keep all content
        title = fileTitle;
        content = fileContents;
      }
    }

    // Extract tags and remove them from content
    const tagRegex = /#(\w+)/g;
    const tagMatches = content.match(tagRegex) || [];
    const tags = tagMatches.map(tag => tag.substring(1)); // Remove # symbol
    const contentWithoutTags = content.replace(tagRegex, '').trim();

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(contentWithoutTags);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      title,
      date,
      tags,
    };
  } catch (error) {
    console.error(`Error reading post ${id}:`, error.message);
    return null;
  }
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory).filter(fileName => fileName.endsWith('.md'));
    return fileNames.map((fileName) => {
        try {
            const shortId = generateShortId(fileName);
            const cleanFileName = fileName.replace(/\.md$/, '');
            const hasNonAscii = /[^\x00-\x7F]/.test(cleanFileName);
            const id = (fileName.length > 50 || hasNonAscii) ? shortId : cleanFileName;
            
            return {
                params: {
                    id,
                },
            };
        } catch (error) {
            console.warn(`Skipping file ${fileName} in getAllPostIds:`, error.message);
            return null;
        }
    }).filter(Boolean);
}
