import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    const { name, email, message } = formData;
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'El nombre es requerido';
    }

    if (email.trim() === '') {
      errors.email = 'El correo electrónico es requerido';
    } else if (!isValidEmail(email)) {
      errors.email = 'El correo electrónico no es válido';
    }

    if (message.trim() === '') {
      errors.message = 'El mensaje es requerido';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Envío del formulario utilizando EmailJS
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send('service_xwza1j8', 'template_dgzhji2', templateParams, 'DdIqSLWEEb1JzjBud')
      .then(() => {
        console.log('Correo electrónico enviado con éxito');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setErrors({});
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
      });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-lg font-extrabold md:text-4xl text-center text-indigo-600 mb-10">
        Formulario de Contacto
      </h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="text-indigo-600 font-bold">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ingrese su nombre"
            className="block w-full px-4 py-2 mt-2 text-gray-700 border border-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-indigo-600 font-bold">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ingrese su correo electrónico"
            className="block w-full px-4 py-2 mt-2 text-gray-700 border border-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-indigo-600 font-bold">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ingrese su mensaje"
            className="block w-full px-4 py-2 mt-2 text-gray-700 border border-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            rows="5"
            required
          ></textarea>
           {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
