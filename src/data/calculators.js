// Definición de todas las calculadoras disponibles

export const calculatorCategories = [
  {
    id: 'ohm',
    name: 'Ley de Ohm',
    icon: 'Zap',
    color: '#6366f1',
  },
  {
    id: 'resistors',
    name: 'Resistencias',
    icon: 'Activity',
    color: '#ec4899',
  },
  {
    id: 'capacitors',
    name: 'Capacitores',
    icon: 'Battery',
    color: '#10b981',
  },
  {
    id: 'inductors',
    name: 'Inductores',
    icon: 'Coil',
    color: '#f59e0b',
  },
  {
    id: 'ac',
    name: 'Circuitos AC',
    icon: 'TrendingUp',
    color: '#3b82f6',
  },
];

export const calculators = {
  ohm: [
    {
      id: 'voltage',
      title: 'Calcular Voltaje',
      description: 'V = I × R',
      formula: 'V = I × R',
      inputs: [
        { name: 'current', label: 'Corriente (I)', unit: 'A', type: 'number' },
        { name: 'resistance', label: 'Resistencia (R)', unit: 'Ω', type: 'number' },
      ],
      output: { label: 'Voltaje', unit: 'V' },
      calculate: (values) => values.current * values.resistance,
    },
    {
      id: 'current',
      title: 'Calcular Corriente',
      description: 'I = V / R',
      formula: 'I = V / R',
      inputs: [
        { name: 'voltage', label: 'Voltaje (V)', unit: 'V', type: 'number' },
        { name: 'resistance', label: 'Resistencia (R)', unit: 'Ω', type: 'number' },
      ],
      output: { label: 'Corriente', unit: 'A' },
      calculate: (values) => values.voltage / values.resistance,
    },
    {
      id: 'resistance',
      title: 'Calcular Resistencia',
      description: 'R = V / I',
      formula: 'R = V / I',
      inputs: [
        { name: 'voltage', label: 'Voltaje (V)', unit: 'V', type: 'number' },
        { name: 'current', label: 'Corriente (I)', unit: 'A', type: 'number' },
      ],
      output: { label: 'Resistencia', unit: 'Ω' },
      calculate: (values) => values.voltage / values.current,
    },
    {
      id: 'power',
      title: 'Calcular Potencia',
      description: 'P = V × I',
      formula: 'P = V × I',
      inputs: [
        { name: 'voltage', label: 'Voltaje (V)', unit: 'V', type: 'number' },
        { name: 'current', label: 'Corriente (I)', unit: 'A', type: 'number' },
      ],
      output: { label: 'Potencia', unit: 'W' },
      calculate: (values) => values.voltage * values.current,
    },
  ],
  resistors: [
    {
      id: 'series',
      title: 'Resistencias en Serie',
      description: 'Rtotal = R1 + R2 + R3...',
      formula: 'Rtotal = R1 + R2 + R3 + ...',
      multiInput: true,
      inputLabel: 'Resistencia',
      inputUnit: 'Ω',
      output: { label: 'Resistencia Total', unit: 'Ω' },
      calculate: (resistors) => resistors.reduce((sum, r) => sum + parseFloat(r || 0), 0),
    },
    {
      id: 'parallel',
      title: 'Resistencias en Paralelo',
      description: '1/Rtotal = 1/R1 + 1/R2...',
      formula: '1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ...',
      multiInput: true,
      inputLabel: 'Resistencia',
      inputUnit: 'Ω',
      output: { label: 'Resistencia Total', unit: 'Ω' },
      calculate: (resistors) => {
        const valid = resistors.filter(r => r && parseFloat(r) > 0);
        if (valid.length === 0) return 0;
        const sum = valid.reduce((s, r) => s + (1 / parseFloat(r)), 0);
        return 1 / sum;
      },
    },
    {
      id: 'voltage-divider',
      title: 'Divisor de Voltaje',
      description: 'Vout = Vin × (R2/(R1+R2))',
      formula: 'Vout = Vin × (R2 / (R1 + R2))',
      inputs: [
        { name: 'vin', label: 'Voltaje de Entrada', unit: 'V', type: 'number' },
        { name: 'r1', label: 'Resistencia R1', unit: 'Ω', type: 'number' },
        { name: 'r2', label: 'Resistencia R2', unit: 'Ω', type: 'number' },
      ],
      output: { label: 'Voltaje de Salida', unit: 'V' },
      calculate: (values) => values.vin * (values.r2 / (values.r1 + values.r2)),
    },
  ],
  capacitors: [
    {
      id: 'cap-series',
      title: 'Capacitores en Serie',
      description: '1/Ctotal = 1/C1 + 1/C2...',
      formula: '1/Ctotal = 1/C1 + 1/C2 + ...',
      multiInput: true,
      inputLabel: 'Capacitancia',
      inputUnit: 'µF',
      output: { label: 'Capacitancia Total', unit: 'µF' },
      calculate: (caps) => {
        const valid = caps.filter(c => c && parseFloat(c) > 0);
        if (valid.length === 0) return 0;
        const sum = valid.reduce((s, c) => s + (1 / parseFloat(c)), 0);
        return 1 / sum;
      },
    },
    {
      id: 'cap-parallel',
      title: 'Capacitores en Paralelo',
      description: 'Ctotal = C1 + C2 + C3...',
      formula: 'Ctotal = C1 + C2 + C3 + ...',
      multiInput: true,
      inputLabel: 'Capacitancia',
      inputUnit: 'µF',
      output: { label: 'Capacitancia Total', unit: 'µF' },
      calculate: (caps) => caps.reduce((sum, c) => sum + parseFloat(c || 0), 0),
    },
    {
      id: 'capacitive-reactance',
      title: 'Reactancia Capacitiva',
      description: 'Xc = 1/(2πfC)',
      formula: 'Xc = 1 / (2π × f × C)',
      inputs: [
        { name: 'frequency', label: 'Frecuencia (f)', unit: 'Hz', type: 'number' },
        { name: 'capacitance', label: 'Capacitancia (C)', unit: 'µF', type: 'number' },
      ],
      output: { label: 'Reactancia Capacitiva', unit: 'Ω' },
      calculate: (values) => 1 / (2 * Math.PI * values.frequency * (values.capacitance * 0.000001)),
    },
    {
      id: 'rc-time',
      title: 'Constante de Tiempo RC',
      description: 'τ = R × C',
      formula: 'τ = R × C',
      inputs: [
        { name: 'resistance', label: 'Resistencia (R)', unit: 'Ω', type: 'number' },
        { name: 'capacitance', label: 'Capacitancia (C)', unit: 'µF', type: 'number' },
      ],
      output: { label: 'Constante de Tiempo', unit: 's' },
      calculate: (values) => values.resistance * (values.capacitance * 0.000001),
    },
  ],
  inductors: [
    {
      id: 'ind-series',
      title: 'Inductores en Serie',
      description: 'Ltotal = L1 + L2 + L3...',
      formula: 'Ltotal = L1 + L2 + L3 + ...',
      multiInput: true,
      inputLabel: 'Inductancia',
      inputUnit: 'mH',
      output: { label: 'Inductancia Total', unit: 'mH' },
      calculate: (inds) => inds.reduce((sum, l) => sum + parseFloat(l || 0), 0),
    },
    {
      id: 'ind-parallel',
      title: 'Inductores en Paralelo',
      description: '1/Ltotal = 1/L1 + 1/L2...',
      formula: '1/Ltotal = 1/L1 + 1/L2 + ...',
      multiInput: true,
      inputLabel: 'Inductancia',
      inputUnit: 'mH',
      output: { label: 'Inductancia Total', unit: 'mH' },
      calculate: (inds) => {
        const valid = inds.filter(l => l && parseFloat(l) > 0);
        if (valid.length === 0) return 0;
        const sum = valid.reduce((s, l) => s + (1 / parseFloat(l)), 0);
        return 1 / sum;
      },
    },
    {
      id: 'inductive-reactance',
      title: 'Reactancia Inductiva',
      description: 'XL = 2πfL',
      formula: 'XL = 2π × f × L',
      inputs: [
        { name: 'frequency', label: 'Frecuencia (f)', unit: 'Hz', type: 'number' },
        { name: 'inductance', label: 'Inductancia (L)', unit: 'mH', type: 'number' },
      ],
      output: { label: 'Reactancia Inductiva', unit: 'Ω' },
      calculate: (values) => 2 * Math.PI * values.frequency * (values.inductance * 0.001),
    },
    {
      id: 'rl-time',
      title: 'Constante de Tiempo RL',
      description: 'τ = L / R',
      formula: 'τ = L / R',
      inputs: [
        { name: 'inductance', label: 'Inductancia (L)', unit: 'mH', type: 'number' },
        { name: 'resistance', label: 'Resistencia (R)', unit: 'Ω', type: 'number' },
      ],
      output: { label: 'Constante de Tiempo', unit: 's' },
      calculate: (values) => (values.inductance * 0.001) / values.resistance,
    },
  ],
  ac: [
    {
      id: 'impedance',
      title: 'Impedancia',
      description: 'Z = √(R² + X²)',
      formula: 'Z = √(R² + X²)',
      inputs: [
        { name: 'resistance', label: 'Resistencia (R)', unit: 'Ω', type: 'number' },
        { name: 'reactance', label: 'Reactancia (X)', unit: 'Ω', type: 'number' },
      ],
      output: { label: 'Impedancia', unit: 'Ω' },
      calculate: (values) => Math.sqrt(Math.pow(values.resistance, 2) + Math.pow(values.reactance, 2)),
    },
    {
      id: 'resonant-frequency',
      title: 'Frecuencia de Resonancia',
      description: 'fr = 1/(2π√LC)',
      formula: 'fr = 1 / (2π × √(L × C))',
      inputs: [
        { name: 'inductance', label: 'Inductancia (L)', unit: 'mH', type: 'number' },
        { name: 'capacitance', label: 'Capacitancia (C)', unit: 'µF', type: 'number' },
      ],
      output: { label: 'Frecuencia de Resonancia', unit: 'Hz' },
      calculate: (values) => {
        const L = values.inductance * 0.001;
        const C = values.capacitance * 0.000001;
        return 1 / (2 * Math.PI * Math.sqrt(L * C));
      },
    },
    {
      id: 'power-factor',
      title: 'Factor de Potencia',
      description: 'PF = P / S',
      formula: 'PF = Potencia Real / Potencia Aparente',
      inputs: [
        { name: 'realPower', label: 'Potencia Real (P)', unit: 'W', type: 'number' },
        { name: 'apparentPower', label: 'Potencia Aparente (S)', unit: 'VA', type: 'number' },
      ],
      output: { label: 'Factor de Potencia', unit: '' },
      calculate: (values) => values.realPower / values.apparentPower,
    },
  ],
};
