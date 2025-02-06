import { NavLink, Outlet } from "react-router";

export function Layout() {
    return (
        <div>
            <div className="bg-gray-50 p-4 border-b flex space-x-10 smooch-sans-titulo inline-block">
                <NavLink className="transition duration-500 transform hover:scale-150" to="/">Home</NavLink>
                <NavLink className="hover:text-[#fdbe00] transition duration-500 transform hover:scale-150" to="/pericias">Pericias</NavLink>
                <NavLink className="hover:text-[#00fd90] transition duration-500 transform hover:scale-150" to="/vantagens">Vantagens</NavLink>
                <NavLink className="hover:text-[#fd0046] transition duration-500 transform hover:scale-150" to="/desvantagens">Desvantagens</NavLink>
                <NavLink className="hover:text-[#fd00ac] transition duration-500 transform hover:scale-150" to="/arquetipos">Arquetipos</NavLink>
                <NavLink className="transition duration-500 transform hover:scale-150" to="/favoritos">Favoritos</NavLink>
            </div>

            <div className="bg-gray-100 p-4 smooch-sans-corpo">
                <Outlet />
            </div>

            <div className="bg-gray-50 p-4 border-t">
                TADS &copy; 2025
            </div>
        </div>
    )
}