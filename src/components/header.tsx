import { useState } from 'react';
import { Calculator, Globe2, DollarSign, Facebook, Twitter, Menu, X as XIcon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0c3a54] shadow-lg relative">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" >
            <img className="h-[30px]" src="/nacionales-azul.png" alt="logo" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/uf-calculator" className="text-white hover:text-gray-200 transition flex items-center space-x-1">
              <Calculator className="w-4 h-4" />
              <span>UF</span>
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition flex items-center space-x-1">
              <Globe2 className="w-4 h-4" />
              <span>Directorio</span>
            </a>
            <a href="/currency-converter" className="text-white hover:text-gray-200 transition flex items-center space-x-1">
              <DollarSign className="w-4 h-4" />
              <span>Convertidor</span>
            </a>
            <div className="flex items-center space-x-4 ml-4">
              <div className="fb-like" data-share="true" data-width="450" data-show-faces="true"></div>
              <a href="#" className="text-white hover:text-gray-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-[#0c3a54] border-t border-[#0c3a54] z-50`}>
          <div className="px-4 py-3 space-y-4">
            <a href="/uf-calculator" className="text-white hover:text-gray-200 transition flex items-center space-x-2 py-2">
              <Calculator className="w-4 h-4" />
              <span>UF</span>
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition flex items-center space-x-2 py-2">
              <Globe2 className="w-4 h-4" />
              <span>Directorio</span>
            </a>
            <a href="/currency-converter" className="text-white hover:text-gray-200 transition flex items-center space-x-2 py-2">
              <DollarSign className="w-4 h-4" />
              <span>Convertidor</span>
            </a>
            <div className="flex items-center space-x-4 py-2">
              <div className="fb-like" data-share="true" data-width="450" data-show-faces="true"></div>
              <a href="#" className="text-white hover:text-gray-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;