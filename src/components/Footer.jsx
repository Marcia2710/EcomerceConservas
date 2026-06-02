import React from 'react';
import TarjetaProfesional from './TarjetaProfesional';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-10 mt-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
        
       
        <div>
          <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest mb-6">
            Profesionales a cargo de la producción
          </h3>
          
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
            
           
            <TarjetaProfesional 
              nombre=" Ana Martínez"
              rol="Tecnica en seguridad e Higiene"
              matricula="12345"
              imagen="/imagenes/profesional1.jpg" // Recuerda guardar la foto en public/imagenes/
            />

            
            <TarjetaProfesional 
              nombre="Ing. Carlos Rossi"
              rol="Jefe de Producción"
              matricula="67890"
              imagen="/imagenes/profesional2.jpg"
            />

            <TarjetaProfesional 
              nombre="Lucía Gómez"
              rol="Certificada en Manipulacion de alimentos"
              matricula="54321"
              imagen="/imagenes/profesional3.jpg"
            />

          </div>
        </div>

        
        <div className="border-t border-stone-800 pt-6 space-y-2">
          <p className="text-stone-200 font-bold uppercase tracking-wider text-xs">
            Análisis de Calidad Certificado por Profesionales de la industria alimentaria
          </p>
          <p className="text-xs text-stone-500">
            © Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;