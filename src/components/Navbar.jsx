import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ to, children }) => (
  <li className="block py-2 pl-3 pr-4 rounded hover:bg-blue-600 hover:text-white md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
    <Link to={to}>{children}</Link>
  </li>
);

const Navbar = () => {
  return (
    <nav
      className="bg-transparent border-gray-200 dark:bg-transparent flex items-center w-4/5 mx-auto my-3"
      aria-label="Global"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex-grow items-center lg:flex lg:basis-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <ListItem to="/">Home</ListItem>
            <ListItem to="/nosotros">Nosotros</ListItem>
            <ListItem to="/seguimientoPacientes">Seguimiento Pacientes</ListItem>
            <ListItem to="/contacto">Contacto</ListItem>
            <ListItem to="/servicios">Servicios</ListItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
