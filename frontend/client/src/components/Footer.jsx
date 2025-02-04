import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            <p>© {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm">
            <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-gray-400"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
=======
    <footer className="bg-gradient-to-b from-[#1b3a28] to-[#0f2b1e] bg-opacity-60 backdrop-blur-3xl p-3 flex justify-center gap-8 items-center w-full">
      <p className="text-sm text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-green-400">
        © 2023 Agrify™. All Rights Reserved.
      </p>
      <div className="flex space-x-6 text-white">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-green-400 text-xl transition-all duration-300 transform hover:scale-125" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-green-400 text-xl transition-all duration-300 transform hover:scale-125" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-green-400 text-xl transition-all duration-300 transform hover:scale-125" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-green-400 text-xl transition-all duration-300 transform hover:scale-125" />
        </a>
      </div>
    </footer>
  );
};
>>>>>>> f00b114 (final by joshua)

export default Footer;
