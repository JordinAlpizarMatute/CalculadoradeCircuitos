# 🚀 Guía de Inicio Rápido - Circuit Calculator

## ⚡ Instalación Express (5 minutos)

### 1. Clonar el proyecto
```bash
git clone https://github.com/tu-usuario/circuit-calculator.git
cd circuit-calculator
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar
```bash
npm run dev
```

¡Listo! Abre http://localhost:5173 en tu navegador 🎉

---

## 📝 Comandos Principales

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Preview de la build |
| `npm run deploy` | Despliega a GitHub Pages |

---

## 🎯 Uso Básico

### Ejemplo: Calcular Corriente

1. Selecciona la categoría **"Ley de Ohm"**
2. Haz clic en **"Calcular Corriente"**
3. Ingresa:
   - Voltaje: `12` V
   - Resistencia: `100` Ω
4. Clic en **"Calcular"**
5. Resultado: `0.12 A` (120 mA)

### Ejemplo: Resistencias en Serie

1. Categoría **"Resistencias"**
2. Calculadora **"Resistencias en Serie"**
3. Ingresa valores:
   - R1: `100` Ω
   - R2: `220` Ω
   - R3: `330` Ω (clic en "Agregar")
4. Resultado: `650 Ω`

---

## 🌐 Publicar en GitHub Pages

### Paso 1: Preparar el repositorio

```bash
# Crear repositorio en GitHub (nombre: circuit-calculator)
# Luego:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/circuit-calculator.git
git push -u origin main
```

### Paso 2: Configurar vite.config.js

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/circuit-calculator/', // ← Tu nombre de repo
})
```

### Paso 3: Desplegar

```bash
npm run deploy
```

### Paso 4: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: **gh-pages** branch
4. Save

🎉 Tu calculadora estará en: `https://TU-USUARIO.github.io/circuit-calculator/`

---

## 🎨 Personalización Rápida

### Cambiar colores principales

Edita `src/App.css`:

```css
:root {
  --primary: #FF6B6B;      /* Rojo */
  --secondary: #4ECDC4;    /* Turquesa */
  --success: #95E1D3;      /* Verde agua */
}
```

### Cambiar título de la app

Edita `src/App.jsx`:

```jsx
<h1>
  <Zap size={40} />
  Mi Calculadora     {/* ← Cambia aquí */}
</h1>
```

---

## 🆘 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error al desplegar
```bash
# Verificar que la rama gh-pages existe
git branch -a

# Si no existe, crearla manualmente
npm run build
git subtree push --prefix dist origin gh-pages
```

### La página no carga en GitHub Pages
- Verifica que `base` en `vite.config.js` coincida con tu repo
- Espera 2-3 minutos después del deploy
- Limpia caché del navegador (Ctrl + F5)

---

## 📚 Recursos Útiles

- [Documentación React](https://react.dev/)
- [Guía Vite](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev/)
- [GitHub Pages Docs](https://docs.github.com/pages)

---

## 💡 Tips

✅ Usa Chrome DevTools para inspeccionar elementos
✅ Modifica CSS en vivo para ver cambios
✅ Agrega `console.log()` en las funciones calculate para debug
✅ Usa React DevTools extension para inspeccionar componentes

---

¿Necesitas ayuda? Abre un [Issue](https://github.com/tu-usuario/circuit-calculator/issues) 🙋‍♂️
