import React from 'react';

const TarjetaProfesional = ({ nombre, rol, matricula, imagen }) => {
  return (
    <div className="bg-stone-800 p-4 rounded-xl border border-stone-700 flex items-center gap-4 text-left max-w-xs w-full mx-auto">
     
      <div className="w-16 h-16 rounded-full overflow-hidden bg-stone-700 border border-amber-500 shrink-0 flex items-center justify-center">
        <img 
          src={imagen || "https://placeholder.com"} 
          alt={nombre} 
          className="w-full h-full object-cover"
        />
      </div>

    
      <div className="min-w-0">
        <h4 className="text-stone-100 font-bold text-sm uppercase truncate">
          {nombre}
        </h4>
        <p className="text-amber-400 text-xs font-semibold tracking-wide">
          {rol}
        </p>
        {matricula && (
          <p className="text-stone-400 text-[10px] mt-0.5">
            M.N. {matricula}
          </p>
        )}
      </div>
    </div>
  );
};

export default TarjetaProfesional;