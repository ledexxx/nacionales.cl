import Header from './header';
import Footer from './footer';


// Componente principal CurrencyConverter
const CurrencyConverter = () => {

  
  const indicators = [
    { name: 'UTM', value: '$62.345' },
    { name: 'UF', value: '$35.983,45' },
    { name: 'Dólar', value: '$987,56' },
    { name: 'Euro', value: '$1.076,89' },
  ];


  return (
    <div className="min-h-screen">
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
                {/* Top Ad Banner */}
                <div className="bg-gray-400 p-2">
                  <div className="container mx-auto">
                    <div className="h-16 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500">Espacio Publicitario 728x90</span>
                    </div>
                  </div>
                </div>

                
      {/* Contenido principal */}
      <main className="container mx-auto px-4 mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Sección del conversor de monedas */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h1 className="text-2xl font-bold text-gray-800">Conversor Dólar a Peso Chileno</h1>
              <p className="text-gray-600 mt-2">1 USD = CLP $ 987,71</p>
              
              {/* Formulario de conversión */}
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <select className="col-span-5 p-3 border rounded-lg">
                    <option>AED - Dirham de Emiratos</option>
                    <option>COP - Pesos Colombianos</option>
                    <option>VEF - Bolivar Fuerte Venezolano</option>
                  </select>
                  
                  <button className="col-span-2 text-blue-600 mx-auto">
                    <i className="fas fa-exchange-alt fa-rotate-90"></i>
                  </button>
                  
                  <select className="col-span-5 p-3 border rounded-lg">
                    <option>CLP - Peso Chileno</option>
                  </select>
                </div>
                
                <input type="number" value="268.00000000" 
                       className="w-full p-3 border rounded-lg text-lg font-medium" />
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Convertir
                </button>
                
                <div className="text-2xl font-bold text-blue-600 mt-4">CLP $ 368,00</div>
              </div>

              {/* Tabla de conversiones */}
              <div className="mt-8 overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">AED</td>
                      <td className="py-3 text-gray-600">CLP $ 368,00</td>
                      <td className="py-3 font-medium">PVG</td>
                      <td className="py-3 text-gray-600">CLP $ 0,00</td>
                    </tr>
                    {/* Más filas de la tabla */}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sección de impuestos (pendiente de contenido) */}
            <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
              {/* Contenido de impuestos */}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
      
    </div>

    

    
  );
};

export default CurrencyConverter;