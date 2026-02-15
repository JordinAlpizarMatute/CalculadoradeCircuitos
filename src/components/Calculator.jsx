import { useState } from 'react';
import { Calculator as CalcIcon, Plus, Trash2 } from 'lucide-react';

function Calculator({ calculator, onCalculate }) {
  const [values, setValues] = useState({});
  const [multiValues, setMultiValues] = useState(['', '']);
  const [result, setResult] = useState(null);

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const handleMultiChange = (index, value) => {
    const newValues = [...multiValues];
    newValues[index] = value;
    setMultiValues(newValues);
  };

  const addMultiInput = () => {
    setMultiValues([...multiValues, '']);
  };

  const removeMultiInput = (index) => {
    if (multiValues.length > 2) {
      const newValues = multiValues.filter((_, i) => i !== index);
      setMultiValues(newValues);
    }
  };

  const handleCalculate = () => {
    try {
      let calculatedResult;
      
      if (calculator.multiInput) {
        const validValues = multiValues.filter(v => v && !isNaN(parseFloat(v)));
        if (validValues.length === 0) {
          alert('Por favor ingresa valores válidos');
          return;
        }
        calculatedResult = calculator.calculate(validValues);
      } else {
        const allInputsValid = calculator.inputs.every(
          input => values[input.name] && !isNaN(parseFloat(values[input.name]))
        );
        
        if (!allInputsValid) {
          alert('Por favor completa todos los campos con valores válidos');
          return;
        }
        
        const numericValues = {};
        calculator.inputs.forEach(input => {
          numericValues[input.name] = parseFloat(values[input.name]);
        });
        
        calculatedResult = calculator.calculate(numericValues);
      }

      if (isNaN(calculatedResult) || !isFinite(calculatedResult)) {
        alert('Error en el cálculo. Verifica los valores ingresados.');
        return;
      }

      setResult(calculatedResult);
      onCalculate(calculator.title, calculatedResult.toFixed(4), calculator.output.unit);
    } catch (error) {
      alert('Error en el cálculo: ' + error.message);
    }
  };

  const handleReset = () => {
    setValues({});
    setMultiValues(['', '']);
    setResult(null);
  };

  return (
    <div className="calculator-card">
      <div className="calculator-header">
        <div className="calculator-icon">
          <CalcIcon size={24} />
        </div>
        <div>
          <h3 className="calculator-title">{calculator.title}</h3>
          <p className="calculator-description">{calculator.description}</p>
        </div>
      </div>

      <div className="formula-display">
        <code>{calculator.formula}</code>
      </div>

      {calculator.multiInput ? (
        <div>
          {multiValues.map((value, index) => (
            <div key={index} className="input-group">
              <label className="input-label">
                {calculator.inputLabel} {index + 1}
              </label>
              <div className="input-wrapper">
                <input
                  type="number"
                  className="input-field"
                  value={value}
                  onChange={(e) => handleMultiChange(index, e.target.value)}
                  placeholder="0"
                  step="any"
                />
                <div className="input-unit">{calculator.inputUnit}</div>
                {multiValues.length > 2 && (
                  <button
                    className="btn btn-secondary"
                    onClick={() => removeMultiInput(index)}
                    style={{ padding: '0.875rem' }}
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            className="btn btn-secondary"
            onClick={addMultiInput}
            style={{ width: '100%', marginBottom: '1rem' }}
          >
            <Plus size={18} />
            Agregar {calculator.inputLabel}
          </button>
        </div>
      ) : (
        calculator.inputs.map((input) => (
          <div key={input.name} className="input-group">
            <label className="input-label">{input.label}</label>
            <div className="input-wrapper">
              <input
                type={input.type}
                className="input-field"
                value={values[input.name] || ''}
                onChange={(e) => handleChange(input.name, e.target.value)}
                placeholder="0"
                step="any"
              />
              <div className="input-unit">{input.unit}</div>
            </div>
          </div>
        ))
      )}

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          className="btn btn-primary"
          onClick={handleCalculate}
          style={{ flex: 1 }}
        >
          Calcular
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {result !== null && (
        <div className="result-display">
          <div className="result-label">{calculator.output.label}</div>
          <div className="result-value">
            {result.toFixed(4)}
            <span className="result-unit">{calculator.output.unit}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculator;
