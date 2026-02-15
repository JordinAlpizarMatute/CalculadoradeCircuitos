# ⚡ Circuit Calculator - Calculadora de Circuitos Eléctricos

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Una calculadora web completa y moderna para circuitos eléctricos con visualización de diagramas, diseñada para estudiantes y profesionales de ingeniería eléctrica y electrónica.

![Circuit Calculator](https://via.placeholder.com/800x400/667eea/ffffff?text=Circuit+Calculator)

## 🎯 Características

### ⚡ Ley de Ohm
- Calcular Voltaje (V = I × R)
- Calcular Corriente (I = V / R)
- Calcular Resistencia (R = V / I)
- Calcular Potencia (P = V × I)

### 🔌 Resistencias
- Resistencias en Serie
- Resistencias en Paralelo
- Divisor de Voltaje
- Código de Colores (próximamente)

### 🔋 Capacitores
- Capacitores en Serie
- Capacitores en Paralelo
- Reactancia Capacitiva (Xc)
- Constante de Tiempo RC

### 🧲 Inductores
- Inductores en Serie
- Inductores en Paralelo
- Reactancia Inductiva (XL)
- Constante de Tiempo RL

### 📊 Circuitos AC
- Impedancia (Z)
- Frecuencia de Resonancia
- Factor de Potencia

### ✨ Extras
- 📈 Visualización de diagramas de circuitos
- 📜 Historial de cálculos
- 🎨 Diseño moderno y colorido
- 📱 Responsivo (funciona en móvil y desktop)
- 🌙 Interfaz oscura elegante
- ⚡ Cálculos en tiempo real
- 💾 Sin necesidad de backend

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool ultra rápido
- **Lucide React** - Iconos modernos
- **CSS3** - Estilos personalizados con variables CSS
- **GitHub Pages** - Hosting gratuito

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `src/App.css`:

```css
:root {
  --primary: #6366f1;    /* Color principal */
  --secondary: #ec4899;  /* Color secundario */
  --success: #10b981;    /* Color de éxito */
  /* ... más colores */
}
```

### Agregar Nuevas Calculadoras

1. Edita `src/data/calculators.js`
2. Agrega tu calculadora al array correspondiente:

```javascript
{
  id: 'nueva-calc',
  title: 'Mi Nueva Calculadora',
  description: 'Descripción breve',
  formula: 'X = Y + Z',
  inputs: [
    { name: 'y', label: 'Valor Y', unit: 'unidad', type: 'number' },
    { name: 'z', label: 'Valor Z', unit: 'unidad', type: 'number' },
  ],
  output: { label: 'Resultado X', unit: 'unidad' },
  calculate: (values) => values.y + values.z,
}
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres agregar más calculadoras o mejorar las existentes:

1. Haz Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-calculadora`)
3. Commit tus cambios (`git commit -m 'Agregar calculadora de...'`)
4. Push a la rama (`git push origin feature/nueva-calculadora`)
5. Abre un Pull Request

### Ideas para Contribuir

- [ ] Calculadora de código de colores de resistencias
- [ ] Calculadora de transformadores
- [ ] Calculadora de cables y conductores
- [ ] Exportar resultados a PDF
- [ ] Modo claro/oscuro
- [ ] Calculadora de eficiencia energética
- [ ] Soporte para múltiples idiomas

## 📖 Fórmulas Utilizadas

### Ley de Ohm
- **Voltaje:** V = I × R
- **Corriente:** I = V / R
- **Resistencia:** R = V / I
- **Potencia:** P = V × I = I² × R = V² / R

### Resistencias
- **Serie:** Rtotal = R1 + R2 + R3 + ...
- **Paralelo:** 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ...
- **Divisor de Voltaje:** Vout = Vin × (R2 / (R1 + R2))

### Capacitores
- **Serie:** 1/Ctotal = 1/C1 + 1/C2 + ...
- **Paralelo:** Ctotal = C1 + C2 + C3 + ...
- **Reactancia:** Xc = 1 / (2π × f × C)
- **Tiempo RC:** τ = R × C

### Inductores
- **Serie:** Ltotal = L1 + L2 + L3 + ...
- **Paralelo:** 1/Ltotal = 1/L1 + 1/L2 + ...
- **Reactancia:** XL = 2π × f × L
- **Tiempo RL:** τ = L / R

### AC
- **Impedancia:** Z = √(R² + X²)
- **Resonancia:** fr = 1 / (2π × √(L × C))
- **Factor de Potencia:** PF = P / S

## 🐛 Reportar Bugs

Si encuentras algún bug o tienes sugerencias:

1. Abre un [Issue](https://github.com/tu-usuario/circuit-calculator/issues)
2. Describe el problema claramente
3. Incluye pasos para reproducirlo
4. Agrega capturas de pantalla si es posible

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

⭐ Si este proyecto te fue útil, dale una estrella en GitHub!

Made with ⚡ and ❤️ for electrical engineering students
