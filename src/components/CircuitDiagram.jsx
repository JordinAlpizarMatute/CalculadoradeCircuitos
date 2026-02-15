function CircuitDiagram({ type }) {
  const diagrams = {
    ohm: (
      <svg width="400" height="200" viewBox="0 0 400 200" className="circuit-svg">
        {/* Circuito básico Ley de Ohm */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <polygon points="0 0, 10 5, 0 10" fill="#6366f1" />
          </marker>
        </defs>
        
        {/* Batería */}
        <line x1="50" y1="80" x2="50" y2="120" stroke="#6366f1" strokeWidth="3" />
        <line x1="40" y1="90" x2="60" y2="90" stroke="#6366f1" strokeWidth="3" />
        <line x1="45" y1="110" x2="55" y2="110" stroke="#6366f1" strokeWidth="3" />
        <text x="20" y="105" fill="#f1f5f9" fontSize="14" fontWeight="bold">V</text>
        
        {/* Cables */}
        <line x1="50" y1="80" x2="200" y2="80" stroke="#10b981" strokeWidth="2" />
        <line x1="200" y1="120" x2="50" y2="120" stroke="#10b981" strokeWidth="2" />
        
        {/* Resistencia */}
        <rect x="180" y="70" width="40" height="40" fill="none" stroke="#ec4899" strokeWidth="3" rx="5" />
        <path d="M 185 85 L 190 75 L 195 95 L 200 75 L 205 95 L 210 75 L 215 85" 
              stroke="#ec4899" strokeWidth="2" fill="none" />
        <text x="200" y="65" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">R</text>
        
        {/* Flecha de corriente */}
        <line x1="120" y1="80" x2="160" y2="80" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x="140" y="70" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">I</text>
      </svg>
    ),
    
    resistors: (
      <svg width="400" height="250" viewBox="0 0 400 250" className="circuit-svg">
        {/* Resistencias en Serie y Paralelo */}
        
        {/* Serie */}
        <text x="50" y="30" fill="#f1f5f9" fontSize="16" fontWeight="bold">Serie:</text>
        <line x1="50" y1="60" x2="100" y2="60" stroke="#10b981" strokeWidth="2" />
        
        {/* R1 */}
        <rect x="100" y="50" width="30" height="20" fill="none" stroke="#ec4899" strokeWidth="2" rx="3" />
        <text x="115" y="45" fill="#f1f5f9" fontSize="10">R1</text>
        
        <line x1="130" y1="60" x2="150" y2="60" stroke="#10b981" strokeWidth="2" />
        
        {/* R2 */}
        <rect x="150" y="50" width="30" height="20" fill="none" stroke="#ec4899" strokeWidth="2" rx="3" />
        <text x="165" y="45" fill="#f1f5f9" fontSize="10">R2</text>
        
        <line x1="180" y1="60" x2="230" y2="60" stroke="#10b981" strokeWidth="2" />
        
        {/* Paralelo */}
        <text x="50" y="140" fill="#f1f5f9" fontSize="16" fontWeight="bold">Paralelo:</text>
        
        <line x1="50" y1="170" x2="100" y2="170" stroke="#10b981" strokeWidth="2" />
        <line x1="100" y1="160" x2="100" y2="180" stroke="#10b981" strokeWidth="2" />
        
        {/* R1 arriba */}
        <line x1="100" y1="160" x2="130" y2="160" stroke="#10b981" strokeWidth="2" />
        <rect x="130" y="150" width="30" height="20" fill="none" stroke="#ec4899" strokeWidth="2" rx="3" />
        <text x="145" y="145" fill="#f1f5f9" fontSize="10">R1</text>
        <line x1="160" y1="160" x2="190" y2="160" stroke="#10b981" strokeWidth="2" />
        
        {/* R2 abajo */}
        <line x1="100" y1="180" x2="130" y2="180" stroke="#10b981" strokeWidth="2" />
        <rect x="130" y="170" width="30" height="20" fill="none" stroke="#ec4899" strokeWidth="2" rx="3" />
        <text x="145" y="205" fill="#f1f5f9" fontSize="10">R2</text>
        <line x1="160" y1="180" x2="190" y2="180" stroke="#10b981" strokeWidth="2" />
        
        <line x1="190" y1="160" x2="190" y2="180" stroke="#10b981" strokeWidth="2" />
        <line x1="190" y1="170" x2="240" y2="170" stroke="#10b981" strokeWidth="2" />
      </svg>
    ),
    
    capacitors: (
      <svg width="400" height="200" viewBox="0 0 400 200" className="circuit-svg">
        {/* Circuito RC */}
        
        {/* Batería */}
        <line x1="50" y1="80" x2="50" y2="120" stroke="#6366f1" strokeWidth="3" />
        <line x1="40" y1="90" x2="60" y2="90" stroke="#6366f1" strokeWidth="3" />
        <line x1="45" y1="110" x2="55" y2="110" stroke="#6366f1" strokeWidth="3" />
        <text x="20" y="105" fill="#f1f5f9" fontSize="14" fontWeight="bold">V</text>
        
        {/* Cables */}
        <line x1="50" y1="80" x2="350" y2="80" stroke="#10b981" strokeWidth="2" />
        <line x1="350" y1="120" x2="50" y2="120" stroke="#10b981" strokeWidth="2" />
        
        {/* Resistencia */}
        <rect x="120" y="70" width="40" height="40" fill="none" stroke="#ec4899" strokeWidth="3" rx="5" />
        <text x="140" y="65" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">R</text>
        
        {/* Capacitor */}
        <line x1="250" y1="70" x2="250" y2="110" stroke="#10b981" strokeWidth="3" />
        <line x1="260" y1="70" x2="260" y2="110" stroke="#10b981" strokeWidth="3" />
        <line x1="240" y1="90" x2="250" y2="90" stroke="#10b981" strokeWidth="2" />
        <line x1="260" y1="90" x2="270" y2="90" stroke="#10b981" strokeWidth="2" />
        <text x="255" y="65" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">C</text>
        
        {/* Indicador de carga */}
        <text x="200" y="30" fill="#f59e0b" fontSize="12">τ = R × C</text>
        <circle cx="255" cy="90" r="30" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
      </svg>
    ),
    
    inductors: (
      <svg width="400" height="200" viewBox="0 0 400 200" className="circuit-svg">
        {/* Circuito RL */}
        
        {/* Batería */}
        <line x1="50" y1="80" x2="50" y2="120" stroke="#6366f1" strokeWidth="3" />
        <line x1="40" y1="90" x2="60" y2="90" stroke="#6366f1" strokeWidth="3" />
        <line x1="45" y1="110" x2="55" y2="110" stroke="#6366f1" strokeWidth="3" />
        
        {/* Cables */}
        <line x1="50" y1="80" x2="350" y2="80" stroke="#10b981" strokeWidth="2" />
        <line x1="350" y1="120" x2="50" y2="120" stroke="#10b981" strokeWidth="2" />
        
        {/* Resistencia */}
        <rect x="120" y="70" width="40" height="40" fill="none" stroke="#ec4899" strokeWidth="3" rx="5" />
        <text x="140" y="65" fill="#f1f5f9" fontSize="14" fontWeight="bold" textAnchor="middle">R</text>
        
        {/* Inductor (bobina) */}
        <path d="M 230 90 Q 235 70, 240 90 T 250 90 T 260 90 T 270 90" 
              stroke="#f59e0b" strokeWidth="3" fill="none" />
        <line x1="220" y1="90" x2="230" y2="90" stroke="#10b981" strokeWidth="2" />
        <line x1="270" y1="90" x2="280" y2="90" stroke="#10b981" strokeWidth="2" />
        <text x="245" y="65" fill="#f1f5f9" fontSize="14" fontWeight="bold">L</text>
        
        {/* Campo magnético */}
        <circle cx="245" cy="90" r="35" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
        <text x="200" y="30" fill="#f59e0b" fontSize="12">τ = L / R</text>
      </svg>
    ),
    
    ac: (
      <svg width="400" height="200" viewBox="0 0 400 200" className="circuit-svg">
        {/* Circuito RLC en serie */}
        
        {/* Fuente AC */}
        <circle cx="50" cy="100" r="25" fill="none" stroke="#6366f1" strokeWidth="3" />
        <path d="M 35 100 Q 42.5 90, 50 100 T 65 100" stroke="#6366f1" strokeWidth="2" fill="none" />
        <text x="50" y="145" fill="#f1f5f9" fontSize="12" fontWeight="bold" textAnchor="middle">AC</text>
        
        {/* Cables */}
        <line x1="75" y1="100" x2="110" y2="100" stroke="#10b981" strokeWidth="2" />
        <line x1="350" y1="100" x2="25" y2="100" stroke="#10b981" strokeWidth="2" />
        
        {/* Resistencia */}
        <rect x="110" y="90" width="30" height="20" fill="none" stroke="#ec4899" strokeWidth="2" rx="3" />
        <text x="125" y="85" fill="#f1f5f9" fontSize="10">R</text>
        
        {/* Inductor */}
        <path d="M 160 100 Q 165 85, 170 100 T 180 100 T 190 100" 
              stroke="#f59e0b" strokeWidth="2" fill="none" />
        <text x="175" y="85" fill="#f1f5f9" fontSize="10">L</text>
        
        {/* Capacitor */}
        <line x1="210" y1="90" x2="210" y2="110" stroke="#10b981" strokeWidth="2" />
        <line x1="218" y1="90" x2="218" y2="110" stroke="#10b981" strokeWidth="2" />
        <line x1="200" y1="100" x2="210" y2="100" stroke="#10b981" strokeWidth="2" />
        <line x1="218" y1="100" x2="228" y2="100" stroke="#10b981" strokeWidth="2" />
        <text x="214" y="85" fill="#f1f5f9" fontSize="10">C</text>
        
        <line x1="228" y1="100" x2="350" y2="100" stroke="#10b981" strokeWidth="2" />
        
        {/* Fórmula */}
        <text x="200" y="30" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">
          Z = √(R² + (XL - XC)²)
        </text>
      </svg>
    ),
  };

  return (
    <div className="circuit-diagram">
      {diagrams[type] || diagrams.ohm}
    </div>
  );
}

export default CircuitDiagram;
