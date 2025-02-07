import Header from './header';
import Footer from './footer';

const CurrencyConverter = () => {
  const indicators = [
    { name: 'UTM', value: '$62.345' },
    { name: 'UF', value: '$35.983,45' },
    { name: 'Dólar', value: '$987,56' },
    { name: 'Euro', value: '$1.076,89' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Ticker de Indicadores Económicos */}
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

      {/* Banner Publicitario Superior */}
      <div className="bg-gray-400 p-2">
        <div className="container mx-auto">
          <div className="h-16 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">Espacio Publicitario 728x90</span>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Barra Lateral Izquierda - Oculto en móviles */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-4">
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="h-[600px] flex items-center justify-center text-center">
                  <span className="text-gray-500">Espacio Publicitario<br />300x600</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Sección Principal */}
          <div className="col-span-12 lg:col-span-8">
            {/* Tarjeta del Conversor */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Conversor de Divisas a CLP</h1>
              <p className="text-lg text-blue-600 mb-6">1 USD = CLP $987,71 (Actualizado hoy)</p>
              
              {/* Formulario de Conversión */}
              <div className="space-y-6">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <select className="col-span-12 md:col-span-5 p-3 border rounded-lg bg-white">
                    <option>USD - Dólar Estadounidense</option>
                    <option>EUR - Euro</option>
                    <option>GBP - Libra Esterlina</option>
                    <option>ARS - Peso Argentino</option>
                  </select>
                  
                  <div className="col-span-12 md:col-span-2 flex justify-center">
                    <button className="p-2 text-blue-600 transform rotate-90 md:rotate-0">
                      <i className="fas fa-exchange-alt text-2xl"></i>
                    </button>
                  </div>
                  
                  <select className="col-span-12 md:col-span-5 p-3 border rounded-lg bg-gray-50" disabled>
                    <option>CLP - Peso Chileno</option>
                  </select>
                </div>
                
                <div className="relative">
                  <input 
                    type="number" 
                    value="1000"
                    className="w-full p-3 border rounded-lg text-2xl font-bold pr-24" 
                  />
                  <span className="absolute right-3 top-4 text-gray-500 text-lg">USD</span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold">
                  Convertir Ahora
                </button>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600 text-center">CLP $ 987.710</p>
                  <p className="text-gray-600 text-center mt-2">Tipo de cambio promedio del mercado</p>
                </div>
              </div>

              {/* Tabla de Conversiones Rápidas */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Conversiones comunes</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 5, 10, 50, 100, 500, 1000, 5000].map((amount) => (
                    <div key={amount} className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-semibold">{amount} USD</p>
                      <p className="text-blue-600">= ${amount * 987}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sección Informativa */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información sobre divisas</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">¿Cómo funcionan los tipos de cambio?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Los tipos de cambio representan el valor de una moneda en relación a otra. En Chile, el valor oficial del dólar es establecido por el Banco Central según transacciones del mercado financiero. Factores como inflación, estabilidad política y comercio internacional afectan su valor diariamente.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">¿Por qué varían las tasas?</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Fluctuaciones en los mercados internacionales</li>
                    <li>Decisiones de política monetaria</li>
                    <li>Demanda y oferta de divisas</li>
                    <li>Situación económica del país</li>
                    <li>Eventos geopolíticos relevantes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Consejos para conversiones</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-600 mb-2">Mejor momento</h4>
                      <p>Las mañanas entre 9:00-11:00 AM suelen tener menor volatilidad</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-600 mb-2">Comisiones</h4>
                      <p>Compara entre diferentes casas de cambio y bancos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Publicitario Inferior */}
            <div className="mb-8">
              <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Espacio Publicitario 728x90</span>
              </div>
            </div>
          </div>

          {/* Barra Lateral Derecha - Oculto en móviles */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-4">
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="h-[600px] flex items-center justify-center text-center">
                  <span className="text-gray-500">Espacio Publicitario<br />300x600</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CurrencyConverter;