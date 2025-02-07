

const footer = () => {

    return  (

    
         <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img className="mb-4 h-8" src="/nacionales-azul.png" alt="logo nacionales" />
              <p className="text-sm text-gray-400">Los titulares son propiedad de sus autores correspondientes. El contenido en Nacionales.cl es generado automáticamente.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Herramientas</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Calculadora UF</a></li>
                <li><a href="#" className="hover:text-gray-300">Directorio</a></li>
                <li><a href="#" className="hover:text-gray-300">Convertidor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gray-300">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-gray-300">Política de privacidad</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Publicidad</h4>
              <p className="text-sm text-gray-400">Para consultas sobre publicidad:</p>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300">publicidad@nacionales.cl</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Nacionales.cl. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    );
};

export default footer;