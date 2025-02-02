import { NavLink, Outlet } from "react-router";

export function Layout() {
    return (
        <div>
            <div className="p-4 border-b space-x-8 smooch-sans-titulo">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pericias">Pericias</NavLink>
                <NavLink to="/vantagens">Vantagens</NavLink>
                <NavLink to="/desvantagens">Desvantagens</NavLink>
                <NavLink to="/arquetipos">Arquetipos</NavLink>
                <NavLink to="/favoritos">Favoritos</NavLink>

            </div>

            <div className="p-4 smooch-sans-corpo">
                <Outlet />
            </div>

            <div className="p-4 border-t">
                TADS &copy; 2025
            </div>
        </div>
    )
}