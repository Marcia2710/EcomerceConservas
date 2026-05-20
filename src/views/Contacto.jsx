import React, { useState } from 'react';

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarConsultaWhatsApp = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    if (!nombre || !mensaje) {
      alert("Por favor, completa al menos tu nombre y el mensaje.");
      return;
    }

    let texto = "👋 Nueva Consulta desde la Web 👋\n\n";
    texto = texto + "• Nombre: " + nombre + "\n";
    
    if (email) {
      texto = texto + "• Email: " + email + "\n";
    }
    
    texto = texto + "• Mensaje: " + mensaje + "\n";
    
    const numeroTelefono = "5491121769253";
    const url = "https://wa.me" + numeroTelefono + "?text=" + encodeURIComponent(texto);
    window.open(url, "_blank");

    // Limpiar campos
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-orange-200 shadow-sm overflow-hidden p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Lado Izquierdo: Información de la tienda */}
        <div className="space-y-6 bg-amber-50/50 p-6 rounded-xl border border-amber-100">
          <h2 className="text-2xl font-black text-stone-800 uppercase tracking-tight">
                Contáctanos
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            ¿Tienes dudas o necesitas mas informacion sobre nuestros productos,o quieres saber de los beneficios de los probióticos o te interesa hacer  pedidos mayoristas? Escríbenos y te responderemos lo antes posible.
          </p>
          
          <div className="space-y-3 pt-4 text-sm text-stone-700">
            <p className="flex items-center gap-2">
              <span>🏠</span> <strong>Ubicación:</strong> Merlo, Buenos Aires, Argentina
            </p>
            <p className="flex items-center gap-2">
              <span>📧</span> <strong>Email:</strong> info@boutiquefermentos.com
            </p>
            <p className="flex items-center gap-2">
              <span>⏰</span> <strong>Horarios:</strong> Lunes a Sábados de 09:00 a 19:00 hs
            </p>
          </div>
        </div>

        {/* Lado Derecho: Formulario interactivo */}
        <form onSubmit={enviarConsultaWhatsApp} className="space-y-4">
          <h3 className="text-lg font-bold text-stone-800 uppercase tracking-wide">
            Escríbenos tu mensaje
          </h3>
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Tu Nombre</label>
            <input 
              type="text" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Juan Pérez"
              className="w-full p-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Tu Correo (Opcional)</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="juan@example.com"
              className="w-full p-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase">¿En qué podemos ayudarte?</label>
            <textarea 
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe tu consulta aquí..."
              className="w-full p-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-amber-500 text-sm resize-none h-28"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-amber-700 text-white font-bold py-2.5 rounded-lg hover:bg-amber-800 transition-colors shadow-md"
          >
            Enviar Mensaje por WhatsApp 💬
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contacto;