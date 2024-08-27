import React from 'react';
import ClinicImage from "../assets/consultorioperros.jpg";  
import TeamImage from "../assets/Veterinary-Team.jpg"; 

const Nosotros = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-600">SOBRE NOSOTROS</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={ClinicImage} alt="Clínica Veterinaria" className="rounded-lg shadow-lg object-cover w-full h-64 md:h-full" />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg mb-4  text-justify">
              Nuestra clínica veterinaria se dedica a proporcionar el mejor cuidado posible para tus mascotas. Con años de experiencia y un equipo apasionado, ofrecemos una amplia gama de servicios que garantizan la salud y el bienestar de tu amigo peludo.
            </p>
            <p className="text-lg mb-4 text-justify">
              Creemos en un enfoque personalizado, adaptado a las necesidades únicas de cada mascota. Desde chequeos de rutina hasta procedimientos especializados, estamos aquí para ayudarte en cada paso del camino.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-12 md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={TeamImage} alt="Nuestro Equipo" className="rounded-lg shadow-lg object-cover w-full h-64 md:h-full" />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 text-indigo-600">Conoce a Nuestro Equipo</h3>
            <p className="text-lg  text-justify">
              Nuestro equipo está compuesto por veterinarios altamente capacitados y personal dedicado que trata a cada mascota como si fuera propia. Nos enorgullece nuestra atención al detalle y nuestro compromiso con la excelencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros