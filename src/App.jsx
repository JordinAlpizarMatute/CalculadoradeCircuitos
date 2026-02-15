import { useState } from 'react';
import { Zap, Activity, Battery, TrendingUp, Github, Heart, BookOpen } from 'lucide-react';
import './App.css';
import { calculatorCategories, calculators } from './data/calculators';
import Calculator from './components/Calculator';
import CircuitDiagram from './components/CircuitDiagram';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('ohm');
  const [history, setHistory] = useState([]);

  const iconMap = {
    Zap: Zap,
    Activity: Activity,
    Battery: Battery,
    TrendingUp: TrendingUp,
  };

  const addToHistory = (calculatorName, result, unit) => {
    const entry = {
      id: Date.now(),
      calculator: calculatorName,
      result: `${result} ${unit}`,
      timestamp: new Date().toLocaleTimeString(),
    };
    setHistory([entry, ...history.slice(0, 9)]); // Mantener últimos 10
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>
          <Zap size={40} />
          Circuit Calculator
        </h1>
        <p>
          Calculadora completa de circuitos eléctricos con visualización de diagramas
        </p>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Category Selector */}
        <div className="category-selector">
          {calculatorCategories.map((category) => {
            const Icon = iconMap[category.icon] || Zap;
            return (
              <button
                key={category.id}
                className={`category-btn ${
                  selectedCategory === category.id ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  '--category-color': category.color,
                }}
              >
                <Icon size={20} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Calculator Grid */}
        <div className="calculator-grid">
          {calculators[selectedCategory]?.map((calc) => (
            <Calculator
              key={calc.id}
              calculator={calc}
              onCalculate={addToHistory}
            />
          ))}
        </div>

        {/* Circuit Diagram Demo */}
        <div className="calculator-card" style={{ gridColumn: '1 / -1' }}>
          <div className="calculator-header">
            <div className="calculator-icon">
              <Activity size={24} />
            </div>
            <div>
              <h3 className="calculator-title">Diagrama de Circuito Interactivo</h3>
              <p className="calculator-description">
                Visualización del circuito seleccionado
              </p>
            </div>
          </div>
          <CircuitDiagram type={selectedCategory} />
        </div>

        {/* History Panel */}
        {history.length > 0 && (
          <div className="history-panel">
            <div className="history-header">
              <h3>📊 Historial de Cálculos</h3>
              <button className="btn btn-secondary" onClick={clearHistory}>
                Limpiar
              </button>
            </div>
            <div className="history-list">
              {history.map((entry) => (
                <div key={entry.id} className="history-item">
                  <div>
                    <strong>{entry.calculator}</strong>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      {entry.timestamp}
                    </div>
                  </div>
                  <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
                    {entry.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Hecho con <Heart size={16} style={{ color: '#ec4899', display: 'inline' }} /> para estudiantes de ingeniería eléctrica
        </p>
        <div className="footer-links">
          <a href="https://github.com/tu-usuario/circuit-calculator" className="footer-link" target="_blank" rel="noopener noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a href="#docs" className="footer-link">
            <BookOpen size={18} />
            Documentación
          </a>
        </div>
        <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          © 2024 Circuit Calculator - Open Source (MIT License)
        </p>
      </footer>
    </div>
  );
}

export default App;
