// Utilidades para cálculos de circuitos eléctricos

// ========== LEY DE OHM ==========

export const calculateVoltage = (current, resistance) => {
  return current * resistance;
};

export const calculateCurrent = (voltage, resistance) => {
  return voltage / resistance;
};

export const calculateResistance = (voltage, current) => {
  return voltage / current;
};

export const calculatePower = (voltage, current) => {
  return voltage * current;
};

export const calculatePowerFromVI = (voltage, current) => {
  return voltage * current;
};

export const calculatePowerFromIR = (current, resistance) => {
  return Math.pow(current, 2) * resistance;
};

export const calculatePowerFromVR = (voltage, resistance) => {
  return Math.pow(voltage, 2) / resistance;
};

// ========== RESISTENCIAS ==========

export const calculateSeriesResistance = (resistors) => {
  return resistors.reduce((sum, r) => sum + parseFloat(r || 0), 0);
};

export const calculateParallelResistance = (resistors) => {
  const validResistors = resistors.filter(r => r && parseFloat(r) > 0);
  if (validResistors.length === 0) return 0;
  
  const sum = validResistors.reduce((sum, r) => sum + (1 / parseFloat(r)), 0);
  return 1 / sum;
};

export const voltageDivider = (vin, r1, r2) => {
  return vin * (r2 / (r1 + r2));
};

export const currentDivider = (itotal, r1, r2) => {
  return itotal * (r2 / (r1 + r2));
};

// Código de colores de resistencias
export const colorCodes = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  gray: 8,
  grey: 8,
  white: 9,
};

export const multiplierCodes = {
  black: 1,
  brown: 10,
  red: 100,
  orange: 1000,
  yellow: 10000,
  green: 100000,
  blue: 1000000,
  violet: 10000000,
  gold: 0.1,
  silver: 0.01,
};

export const toleranceCodes = {
  brown: 1,
  red: 2,
  green: 0.5,
  blue: 0.25,
  violet: 0.1,
  gray: 0.05,
  grey: 0.05,
  gold: 5,
  silver: 10,
};

export const decodeResistorColor = (band1, band2, multiplier, tolerance) => {
  const value1 = colorCodes[band1.toLowerCase()] || 0;
  const value2 = colorCodes[band2.toLowerCase()] || 0;
  const mult = multiplierCodes[multiplier.toLowerCase()] || 1;
  const tol = toleranceCodes[tolerance.toLowerCase()] || 5;
  
  const resistance = (value1 * 10 + value2) * mult;
  return { resistance, tolerance: tol };
};

// ========== CAPACITORES ==========

export const calculateSeriesCapacitance = (capacitors) => {
  const validCaps = capacitors.filter(c => c && parseFloat(c) > 0);
  if (validCaps.length === 0) return 0;
  
  const sum = validCaps.reduce((sum, c) => sum + (1 / parseFloat(c)), 0);
  return 1 / sum;
};

export const calculateParallelCapacitance = (capacitors) => {
  return capacitors.reduce((sum, c) => sum + parseFloat(c || 0), 0);
};

export const calculateCapacitiveReactance = (frequency, capacitance) => {
  return 1 / (2 * Math.PI * frequency * capacitance);
};

export const calculateRCTimeConstant = (resistance, capacitance) => {
  return resistance * capacitance;
};

export const calculateCapacitorEnergy = (capacitance, voltage) => {
  return 0.5 * capacitance * Math.pow(voltage, 2);
};

// ========== INDUCTORES ==========

export const calculateSeriesInductance = (inductors) => {
  return inductors.reduce((sum, l) => sum + parseFloat(l || 0), 0);
};

export const calculateParallelInductance = (inductors) => {
  const validInds = inductors.filter(l => l && parseFloat(l) > 0);
  if (validInds.length === 0) return 0;
  
  const sum = validInds.reduce((sum, l) => sum + (1 / parseFloat(l)), 0);
  return 1 / sum;
};

export const calculateInductiveReactance = (frequency, inductance) => {
  return 2 * Math.PI * frequency * inductance;
};

export const calculateRLTimeConstant = (resistance, inductance) => {
  return inductance / resistance;
};

export const calculateInductorEnergy = (inductance, current) => {
  return 0.5 * inductance * Math.pow(current, 2);
};

// ========== CIRCUITOS AC ==========

export const calculateImpedance = (resistance, reactance) => {
  return Math.sqrt(Math.pow(resistance, 2) + Math.pow(reactance, 2));
};

export const calculatePhaseAngle = (resistance, reactance) => {
  return Math.atan(reactance / resistance) * (180 / Math.PI);
};

export const calculateResonantFrequency = (inductance, capacitance) => {
  return 1 / (2 * Math.PI * Math.sqrt(inductance * capacitance));
};

export const calculateQFactor = (reactance, resistance) => {
  return reactance / resistance;
};

export const calculatePowerFactor = (realPower, apparentPower) => {
  return realPower / apparentPower;
};

export const calculateApparentPower = (voltage, current) => {
  return voltage * current;
};

export const calculateReactivePower = (voltage, current, phaseAngle) => {
  return voltage * current * Math.sin(phaseAngle * Math.PI / 180);
};

// ========== CONVERSIÓN DE UNIDADES ==========

export const convertUnits = {
  // Resistencia
  resistance: {
    'Ω': 1,
    'kΩ': 1000,
    'MΩ': 1000000,
    'mΩ': 0.001,
  },
  
  // Capacitancia
  capacitance: {
    'F': 1,
    'mF': 0.001,
    'µF': 0.000001,
    'nF': 0.000000001,
    'pF': 0.000000000001,
  },
  
  // Inductancia
  inductance: {
    'H': 1,
    'mH': 0.001,
    'µH': 0.000001,
    'nH': 0.000000001,
  },
  
  // Corriente
  current: {
    'A': 1,
    'mA': 0.001,
    'µA': 0.000001,
    'kA': 1000,
  },
  
  // Voltaje
  voltage: {
    'V': 1,
    'mV': 0.001,
    'kV': 1000,
    'MV': 1000000,
  },
  
  // Potencia
  power: {
    'W': 1,
    'mW': 0.001,
    'kW': 1000,
    'MW': 1000000,
  },
  
  // Frecuencia
  frequency: {
    'Hz': 1,
    'kHz': 1000,
    'MHz': 1000000,
    'GHz': 1000000000,
  },
};

export const convert = (value, fromUnit, toUnit, type) => {
  const units = convertUnits[type];
  if (!units || !units[fromUnit] || !units[toUnit]) return value;
  
  const baseValue = value * units[fromUnit];
  return baseValue / units[toUnit];
};

// ========== FORMATEO ==========

export const formatNumber = (num, decimals = 2) => {
  if (isNaN(num) || !isFinite(num)) return '0';
  
  // Notación científica para números muy grandes o pequeños
  if (Math.abs(num) >= 1000000 || (Math.abs(num) < 0.001 && num !== 0)) {
    return num.toExponential(decimals);
  }
  
  return num.toFixed(decimals);
};

export const formatWithUnit = (value, unit) => {
  return `${formatNumber(value)} ${unit}`;
};

// ========== VALIDACIÓN ==========

export const validatePositive = (value) => {
  const num = parseFloat(value);
  return !isNaN(num) && num > 0;
};

export const validateNumber = (value) => {
  const num = parseFloat(value);
  return !isNaN(num) && isFinite(num);
};
