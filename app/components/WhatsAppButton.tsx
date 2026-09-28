"use client";

/* 
   WhatsAppButton - Otimizado para Performance 
   Substituído Framer Motion por CSS Puro
*/

export default function WhatsAppButton() {
    return (
        <a
            href="https://api.whatsapp.com/send/?phone=5512991015387&text=Olá+%2AThales,+tudo+bem?%2A%21+Estava+no+seu+site+e+gostaria+de+mais+informações."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Contact on WhatsApp"
        >
            <style jsx>{`
                @keyframes whatsapp-wiggle {
                    0%, 100% { transform: rotate(0deg); }
                    10%, 30%, 50% { transform: rotate(-10deg); }
                    20%, 40% { transform: rotate(10deg); }
                }
                .wiggle-animation {
                    animation: whatsapp-wiggle 0.5s ease-in-out;
                    animation-delay: 5s;
                    animation-iteration-count: 1; /* Roda uma vez a cada ciclo de 8s (5s delay + 3s intervalo) simulado */
                }
                /* Simulação do repeatDelay: 3 do framer-motion via CSS puro */
                .auto-wiggle {
                    animation: whatsapp-wiggle 0.5s ease-in-out infinite;
                    animation-delay: 5s;
                }
            `}</style>

            <img
                src="/whatsapp.svg"
                alt="WhatsApp"
                className="w-7 h-7 brightness-0 invert group-hover:rotate-12 transition-transform"
            />

            {/* Red dot indicator */}
            <span className="absolute top-0 right-0 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
        </a>
    );
}
