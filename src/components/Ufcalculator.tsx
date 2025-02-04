import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import Header from './header';
import Footer from './footer';

const UFCalculator: React.FC = () => {
  const [ufValue] = useState(35983.45); // Valor actual de la UF
  const [amount, setAmount] = useState<string>('');
  const [calculationType, setCalculationType] = useState<'toUF' | 'toCLP'>('toUF');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const numAmount = parseFloat(amount.replace(/[.,]/g, '').replace(/[^\d.-]/g, ''));

    if (isNaN(numAmount)) {
      setResult(null);
      return;
    }

    if (calculationType === 'toUF') {
      setResult(numAmount / ufValue);
    } else {
      setResult(numAmount * ufValue);
    }
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('es-CL', {
      minimumFractionDigits: calculationType === 'toUF' ? 2 : 0,
      maximumFractionDigits: calculationType === 'toUF' ? 2 : 0,
    }).format(num);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^-?\d*[.,]?\d*$/.test(value) || value === '') {
      setAmount(value);
    }
  };

  const indicators = [
    { name: 'UTM', value: '$62.345' },
    { name: 'UF', value: '$35.983,45' },
    { name: 'Dólar', value: '$987,56' },
    { name: 'Euro', value: '$1.076,89' },
  ];

  return (
    <>
      <Header />

         {/* Economic Indicators Ticker */}
         <div className="bg-orange-500 text-white overflow-hidden whitespace-nowrap">
        <div className="animate-ticker inline-flex space-x-8 py-2">
          {[...indicators, ...indicators].map((indicator, index) => (
            <div key={index} className="inline-flex items-center space-x-2">
              <span className="font-semibold">{indicator.name}:</span>
              <span>{indicator.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar Ad - Hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-4">
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="h-[600px] flex items-center justify-center text-center">
                  <span className="text-gray-500">Espacio Publicitario<br />160x600</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Calculator Content */}
          <main className="col-span-12 lg:col-span-8">
            {/* Top Banner Ad */}
            <div className="mb-8">
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="h-24 flex items-center justify-center">
                  <span className="text-gray-500">Espacio Publicitario 728x90</span>
                </div>
              </div>
            </div>

            {/* Calculator Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center space-x-3 mb-8">
                <Calculator className="w-8 h-8 text-blue-900" />
                <h1 className="text-3xl font-bold text-gray-800">Calculadora UF</h1>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <p className="text-blue-900">
                  <span className="font-semibold">Valor actual UF:</span>{' '}
                  ${formatNumber(ufValue)}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de conversión
                    </label>
                    <select
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={calculationType}
                      onChange={(e) => setCalculationType(e.target.value as 'toUF' | 'toCLP')}
                    >
                      <option value="toUF">Pesos chilenos a UF</option>
                      <option value="toCLP">UF a pesos chilenos</option>
                    </select>
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {calculationType === 'toUF' ? 'Monto en pesos chilenos' : 'Monto en UF'}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        {calculationType === 'toUF' ? '$' : 'UF'}
                      </span>
                      <input
                        type="text"
                        className="w-full pl-8 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder={calculationType === 'toUF' ? '1.000.000' : '100,00'}
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition duration-200 shadow-md"
                >
                  Calcular
                </button>

                {result !== null && (
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Resultado:</h2>
                    <p className="text-2xl font-bold text-blue-900">
                      {calculationType === 'toUF' ? 'UF ' : '$'}
                      {formatNumber(result)}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Information Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información sobre la UF</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">¿Qué es la UF?</h3>
                  <p className="text-gray-600">
                    La Unidad de Fomento (UF) es una unidad de cuenta reajustable de acuerdo con la inflación,
                    utilizada en Chile. Su valor se ajusta diariamente según las variaciones del IPC y es
                    ampliamente utilizada en transacciones financieras.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">¿Para qué se usa?</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Créditos hipotecarios</li>
                    <li>Contratos de arriendo</li>
                    <li>Inversiones financieras</li>
                    <li>Valores de propiedades</li>
                    <li>Contratos a largo plazo</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">¿Cómo se calcula?</h3>
                  <p className="text-gray-600">
                    El valor de la UF se ajusta diariamente según la variación del IPC del mes anterior,
                    distribuida en los días del mes en curso. Este ajuste lo realiza el Banco Central de
                    Chile y se publica en su sitio web.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Banner Ad */}
            <div className="mb-8">
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="h-24 flex items-center justify-center">
                  <span className="text-gray-500">Espacio Publicitario 728x90</span>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar Ad - Hidden on mobile */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-4">
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="h-[600px] flex items-center justify-center text-center">
                  <span className="text-gray-500">Espacio Publicitario<br />160x600</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

        <Footer />
    </>
  );
};

export default UFCalculator;