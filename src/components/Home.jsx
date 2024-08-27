import React from "react";
import Gato from "../assets/gato_hero.png";

const Home = () => {
  return (
    <div className="container mx-auto h-50 ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left  bg-gray-200">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-justify">
            El Mejor Cuidado para Mascotas en la Ciudad!
          </h1>
          <p className="text-lg mb-6 text-justify">
            Ya sea que te vayas de vacaciones, necesites un día para ti mismo o
            simplemente quieras darle a tu mascota un poco de mimo adicional,
            nuestro centro de cuidado para mascotas es el destino ideal.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Agenda tu cita
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Leer más
            </button>
          </div>
        </div>
        <div
          className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative h-0"
          style={{ paddingTop: "50%" }}
        >
          <img
            src={Gato}
            alt="Gato"
            className="absolute inset-0 w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
