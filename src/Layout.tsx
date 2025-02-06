import { useState } from "react";
import { NavLink, Outlet } from "react-router";

export function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="bg-gray-50 p-4 border-b flex flex-wrap items-center justify-between smooch-sans-titulo">
                <button 
                    className="sm:hidden p-2 border rounded-md focus:outline-none" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <div className={`flex flex-col sm:flex-row sm:space-x-6 ${menuOpen ? "block" : "hidden"} sm:flex`}>
                    <NavLink className="transition duration-500 transform hover:scale-110" to="/">Home</NavLink>
                    <NavLink className="hover:text-[#fdbe00] transition duration-500 transform hover:scale-110" to="/pericias">Pericias</NavLink>
                    <NavLink className="hover:text-[#00fd90] transition duration-500 transform hover:scale-110" to="/vantagens">Vantagens</NavLink>
                    <NavLink className="hover:text-[#fd0046] transition duration-500 transform hover:scale-110" to="/desvantagens">Desvantagens</NavLink>
                    <NavLink className="hover:text-[#fd00ac] transition duration-500 transform hover:scale-110" to="/arquetipos">Arquetipos</NavLink>
                    <NavLink className="transition duration-500 transform hover:scale-110" to="/favoritos">Favoritos</NavLink>
                </div>
            </div>

            <div className="bg-gray-100 p-4 smooch-sans-corpo">
                <Outlet />
            </div>

            <div className="bg-gray-50 p-4 border-t text-center">
                TADS &copy; 2025
            </div>
        </div>
    )
}
