#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync, readFileSync } from 'fs';
import { glob } from 'glob';

console.log('🚀 Iniciando optimizaciones post-build...');

// 1. Comprimir archivos CSS y JS adicionales
const cssFiles = glob.sync('dist/**/*.css');
const jsFiles = glob.sync('dist/**/*.js');

cssFiles.forEach(file => {
  try {
    const content = readFileSync(file, 'utf8');
    // Minificación adicional de CSS
    const minified = content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remover comentarios
      .replace(/\s+/g, ' ') // Comprimir espacios
      .replace(/;\s}/g, '}') // Optimizar punto y coma
      .trim();

    writeFileSync(file, minified);
    console.log(`✅ CSS optimizado: ${file}`);
  } catch (error) {
    console.warn(`⚠️  Error optimizando ${file}:`, error.message);
  }
});

// 2. Agregar service worker registration
const htmlFiles = glob.sync('dist/**/*.html');
htmlFiles.forEach(file => {
  try {
    let content = readFileSync(file, 'utf8');

    // Agregar registro del service worker antes del cierre de body
    const swScript = `
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registrado'))
            .catch(error => console.log('SW falló:', error));
        });
      }
    </script>
    `;

    content = content.replace('</body>', `${swScript}</body>`);
    writeFileSync(file, content);
    console.log(`✅ Service Worker agregado a: ${file}`);
  } catch (error) {
    console.warn(`⚠️  Error modificando ${file}:`, error.message);
  }
});

console.log('✨ Optimizaciones completadas!'); 