#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync, readFileSync, existsSync } from 'fs';
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
      .replace(/:\s+/g, ':') // Remover espacios después de :
      .replace(/,\s+/g, ',') // Remover espacios después de ,
      .replace(/{\s+/g, '{') // Remover espacios después de {
      .replace(/}\s+/g, '}') // Remover espacios antes de }
      .trim();

    writeFileSync(file, minified);
    console.log(`✅ CSS optimizado: ${file}`);
  } catch (error) {
    console.warn(`⚠️  Error optimizando ${file}:`, error.message);
  }
});

// Optimización adicional de JS
jsFiles.forEach(file => {
  try {
    const content = readFileSync(file, 'utf8');
    // Remover console.logs y debugger statements adicionales
    const optimized = content
      .replace(/console\.(log|info|debug|warn)\([^)]*\);?/g, '') // Remover console statements
      .replace(/debugger;?/g, '') // Remover debugger
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remover comentarios de bloque
      .replace(/\/\/.*$/gm, '') // Remover comentarios de línea
      .replace(/\s+/g, ' ') // Comprimir espacios
      .trim();

    if (optimized.length < content.length) {
      writeFileSync(file, optimized);
      console.log(`✅ JS optimizado: ${file} (${content.length - optimized.length} bytes ahorrados)`);
    }
  } catch (error) {
    console.warn(`⚠️  Error optimizando JS ${file}:`, error.message);
  }
});

// 2. Agregar service worker registration con performance optimizada
const htmlFiles = glob.sync('dist/**/*.html');
htmlFiles.forEach(file => {
  try {
    let content = readFileSync(file, 'utf8');

    // Agregar registro del service worker optimizado
    const swScript = `
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js', {
            scope: '/',
            updateViaCache: 'none'
          })
          .then(registration => {
            console.log('SW registrado:', registration.scope);
          })
          .catch(error => {
            console.log('SW falló:', error);
          });
        });
      }
    </script>
    `;

    // Solo agregar si no existe ya
    if (!content.includes('serviceWorker')) {
      content = content.replace('</body>', `${swScript}</body>`);
      writeFileSync(file, content);
      console.log(`✅ Service Worker agregado a: ${file}`);
    }
  } catch (error) {
    console.warn(`⚠️  Error modificando ${file}:`, error.message);
  }
});

// 3. Optimizar imágenes si hay herramientas disponibles
try {
  const imageFiles = glob.sync('dist/_astro/*.{jpg,jpeg,png}');
  if (imageFiles.length > 0) {
    console.log(`📸 Encontradas ${imageFiles.length} imágenes para revisar tamaños...`);

    imageFiles.forEach(file => {
      const stats = readFileSync(file);
      const sizeKB = Math.round(stats.length / 1024);
      if (sizeKB > 500) {
        console.log(`⚠️  Imagen grande detectada: ${file} (${sizeKB}KB)`);
      }
    });
  }
} catch (error) {
  console.warn('⚠️  Error verificando imágenes:', error.message);
}

// 4. Generar reporte de optimización
const totalFiles = cssFiles.length + jsFiles.length + htmlFiles.length;
console.log(`\n📊 Reporte de optimización:`);
console.log(`   🎨 CSS files: ${cssFiles.length}`);
console.log(`   📜 JS files: ${jsFiles.length}`);
console.log(`   📄 HTML files: ${htmlFiles.length}`);
console.log(`   📁 Total files optimizados: ${totalFiles}`);

console.log('✨ Optimizaciones completadas!'); 