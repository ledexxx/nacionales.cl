import { useState, useEffect } from 'react';
import { Flame, ArrowUp } from 'lucide-react';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const indicators = [
    { name: 'UTM', value: '$62.345' },
    { name: 'UF', value: '$35.983,45' },
    { name: 'Dólar', value: '$987,56' },
    { name: 'Euro', value: '$1.076,89' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  {/* Función para el botón de volver arriba */}
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Área de Contenido Principal */}
          <div className="col-span-12 lg:col-span-8">
            {/* Banner Publicitario de HuevoHost */}
            <div className="mb-6 bg-[#0c3a54] rounded-lg p-6 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center md:space-x-4 text-center md:text-blue-900 mb-4 md:mb-0">
                  <img src="/HuevoHost.png" alt="HuevoHost" className="w-18 mb-4 md:mb-0 md:w-[500px] lg:w-[500px]" />
                  <div>
                    <p className="text-white/90 mt-1">El mejor hosting para tu sitio web</p>
                  </div>
                </div>
                <button className="bg-white text-orange-500 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition w-full md:w-auto">
                  Visitar Ahora
                </button>
              </div>
            </div>

            {/* Noticias de Última Hora */}
            <section className="mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <Flame className="text-red-500 w-6 h-6" />
                <h2 className="text-2xl font-bold text-gray-800">Últimas Noticias</h2>
              </div>
              {/* Array de noticias */}
              <div className="space-y-6">
                {[
                  {
                    image: "https://www.df.cl/noticias/site/artic/20230420/imag/foto_0000000320230420205411/Litio--_1.jpg",
                    title: "Chile anuncia nueva estrategia estatal para la industria del litio",
                    description: "Gobierno presenta plan para crear empresa nacional del litio y modelo de participación público-privada...",
                    link: "https://www.latercera.com/negocios/noticia/gobierno-anuncia-nueva-estrategia-estatal-para-la-industria-del-litio/X4BZ5Y6ZRND3XJZJYF7DZQK3HU/"
                  },
                  {
                    image: "https://www.ceosim.cl/wp-content/uploads/2024/08/1.China-y-Chile-en-Alianza-Comercial.jpg",
                    title: "Chile y China acuerdan modernizar tratado de libre comercio",
                    description: "Ambos países iniciarán negociaciones para actualizar el acuerdo comercial vigente desde 2006...",
                    link: "https://www.df.cl/economia-y-politica/mercados/chile-y-china-acuerdan-modernizar-tratado-de-libre-comercio"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?auto=format&fit=crop&q=80&w=1200&h=675",
                    title: "Informe ONU: Chile entre los países más vulnerables al cambio climático",
                    description: "Nuevo reporte internacional destaca riesgos en recursos hídricos y zonas costeras...",
                    link: "https://www.emol.com/noticias/Nacional/2023/10/05/1083857/chile-cambio-climatico-onu.html"
                  },
                  {
                    image: "https://www.ex-ante.cl/wp-content/uploads/2023/10/A_UNO_1508590-e1696894885702.jpg",
                    title: "Conflicto en Medio Oriente: Chile condena ataques a civiles",
                    description: "Cancillería emite declaración oficial sobre escalada de violencia entre Israel y Palestina...",
                    link: "https://www.cooperativa.cl/noticias/pais/relaciones-exteriores/chile-condena-ataques-contra-civiles-en-el-conflicto-entre-israel/2023-10-07/193032.html"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200&h=675",
                    title: "Chile participa en cumbre de los BRICS como país invitado",
                    description: "Delegación nacional asistió a reunión de bloque emergente en Sudáfrica...",
                    link: "https://www.latercera.com/la-tercera-pm/noticia/chile-participa-como-invitado-en-la-cumbre-de-los-brics-en-sudafrica/2B4Y4Y4Y4Y4Y4Y4Y4Y4Y4Y4Y/"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200&h=675",
                    title: "Nuevo récord: Energías renovables superan el 60% de la matriz eléctrica",
                    description: "Reporte mensual del Coordinador Eléctrico Nacional marca hito histórico...",
                    link: "https://www.df.cl/empresas/energia/energias-renovables-superan-60-de-participacion-en-matriz-electrica"
                  },
                  {
                    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200&h=675",
                    title: "Chile anuncia nuevo proyecto de inteligencia artificial en salud pública",
                    description: "Sistema de IA ayudará a predecir demanda en hospitales y optimizar recursos...",
                    link: "https://www.latercera.com/la-tercera-pm/noticia/chile-anuncia-nuevo-proyecto-de-inteligencia-artificial-en-salud-publica/2B4Y4Y4Y4Y4Y4Y4Y4Y4Y4Y4Y/"
                  }
                ].map((news, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-xs font-semibold text-blue-900 uppercase">
                        {index < 3 ? 'Nacional' : 'Internacional'}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{news.title}</h3>
                      <p className="text-gray-600 mt-2">{news.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-gray-500">Octubre 2023</span>
                        <a 
                          href={news.link} 
                          className="text-blue-900 hover:text-blue-700 font-semibold"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Leer más →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Publicidad en Línea */}
            <div className="mb-8">
              <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500">Espacio Publicitario 728x90</span>
              </div>
            </div>
          </div>

          {/* Barra Lateral */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            {/* Publicidad en la Barra Lateral */}
            <div className="bg-gray-200 p-4 rounded-lg">
              <div className="h-64 flex items-center justify-center">
                <span className="text-gray-500">Espacio Publicitario 300x600</span>
              </div>
            </div>

            {/* Widget de Noticias Más Leídas */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Lo más leído</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Histórica medalla de oro para Chile",
                    summary: "Deportista nacional logra hazaña histórica en competencia internacional de atletismo.",
                    reads: "5.2k"
                  },
                  {
                    title: "Descubren nueva especie en el sur",
                    summary: "Científicos chilenos identifican nueva especie de flora endémica en la Patagonia.",
                    reads: "4.8k"
                  },
                  {
                    title: "Innovación en educación digital",
                    summary: "Nuevo programa de educación online beneficiará a estudiantes de zonas remotas.",
                    reads: "4.1k"
                  },
                  {
                    title: "Récord en exportaciones de vino",
                    summary: "Vinos chilenos alcanzan cifras históricas en mercados internacionales.",
                    reads: "3.9k"
                  },
                  {
                    title: "Avance en energías renovables",
                    summary: "Chile lidera ranking latinoamericano en implementación de energía solar.",
                    reads: "3.5k"
                  }
                ].map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl font-bold text-blue-900">{index + 1}</span>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.summary}</p>
                        <span className="text-xs text-gray-500 mt-2 block">{item.reads} lecturas</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publicidad Fija */}
            <div className="sticky top-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <div className="h-64 flex items-center justify-center">
                  <span className="text-gray-500">Espacio Publicitario 300x250</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />

      {/* Botón de Volver Arriba */}
      <button
        onClick={scrollToTop}
        className={`${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        } fixed bottom-8 right-8 bg-blue-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50`}
        aria-label="Volver al inicio"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;