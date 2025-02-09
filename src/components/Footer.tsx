import React from 'react';
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer: React.FC = () => {

    return (
        <div>
            <h2 className="text-4xl font-bold">3D&T é um material da Jambô Editora</h2>
            <h2 className="text-2xl font-bold">Todos os direitos reservados aos proprietarios</h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 w-full">
                <div className='flex flex-col justify-center items-center gap-4'>
                    <a href="https://site.jamboeditora.com.br/3det/">
                        <img src="/assets/3DeT.png" alt="" className='w-40 rounded'/>
                    </a>
                    <a href="https://jamboeditora.com.br/">
                        <img src="/assets/Logo-Jambo.png" alt="" className='w-40 bg-black rounded-md p-2'/>
                    </a>
                </div>

                <div>
                    <div className="m-5 flex flex-col items-start sm:space-x-6">
                    <h2 className="text-4xl mb-4 font-bold">Links Úteis</h2>
                        <NavLink className="text-2xl transition duration-500 transform hover:scale-110" to="/">Home</NavLink>
                        <NavLink className="text-2xl  self-start hover:text-[#fdbe00] transition duration-500 transform hover:scale-110" to="/pericias">Pericias</NavLink>
                        <NavLink className="text-2xl  self-start hover:text-[#00fd90] transition duration-500 transform hover:scale-110" to="/vantagens">Vantagens</NavLink>
                        <NavLink className="text-2xl  self-start hover:text-[#fd0046] transition duration-500 transform hover:scale-110" to="/desvantagens">Desvantagens</NavLink>
                        <NavLink className="text-2xl  self-start hover:text-[#fd00ac] transition duration-500 transform hover:scale-110" to="/arquetipos">Arquetipos</NavLink>
                        <NavLink className="text-2xl  self-start hover:text-[#fd6000] transition duration-500 transform hover:scale-110" to="/favoritos">Favoritos</NavLink>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">Redes do Dev</h2>
                    <div className="m-5 flex flex-col lg:flex-row items-center gap-4">
                        <a href="https://www.linkedin.com/in/nathan-brito-1750b61b5/" target="_blank" rel="noopener noreferrer" 
                        className="text-gray-500 text-5xl hover:text-blue-800 transition duration-300">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/Nathan-Brito" target="_blank" rel="noopener noreferrer" 
                        className="text-gray-500 text-5xl hover:text-black transition duration-300">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="mailto:nathansilvabrito@hotmail.com" 
                        className="text-gray-500 text-5xl hover:text-red-600 transition duration-300">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl font-bold">Feito de fã para fãs</h2>
        </div>
    )
}

export default Footer;