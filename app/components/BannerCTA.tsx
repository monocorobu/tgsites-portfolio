"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function BannerCTA() {
  return (
    <section className="relative w-full overflow-visible bg-gradient-to-r from-gold via-gold-light to-gold-dark py-4 md:py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-black font-display font-medium text-base md:text-2xl leading-tight">
            Se o seu negócio não aparece no Google, o cliente encontra o concorrente. <span className="font-bold underline">Você aparece?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://api.whatsapp.com/send/?phone=5512991015387&text=Olá+%2AThales,+tudo+bem?%2A%21+Quero+fortalecer+a+presença+digital+do+meu+negócio+com+um+site+profissional."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-gold font-body font-black uppercase tracking-tight text-sm md:text-base px-6 py-3 flex items-center gap-2 shadow-lg hover:bg-gray-900 transition-colors"
          >
            Quero meu site profissional <span>→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Detalhe do Recorte (Cutout) com Seta - Reduzido para o design mais fino */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 scale-75">
        <div className="relative flex items-center justify-center">
          <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center border-4 border-gold">
            <ChevronDown className="text-gold w-6 h-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
