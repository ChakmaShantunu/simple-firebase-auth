import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
    return (
        <nav className="bg-white shadow-md px-6 py-4">
            <div className="max-w-5xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-600">
                    MyApp
                </h1>

                {/* Links */}
                <ul className="flex gap-6 items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                                : "text-gray-600 hover:text-blue-600 transition"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                                : "text-gray-600 hover:text-blue-600 transition"
                        }
                    >
                        Login
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Header;