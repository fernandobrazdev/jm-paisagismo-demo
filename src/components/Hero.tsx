import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-landscaping.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Equipe JM Paisagismo trabalhando"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block px-4 py-2 rounded-full bg-green-grass/20 text-green-light font-medium text-sm mb-6"
          >
            Há mais de 10 anos transformando espaços
          </motion.span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Paisagismo e Conservação com{" "}
            <span className="text-green-grass">qualidade</span>, segurança e
            profissionalismo
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Atendemos condomínios, empresas, áreas públicas e residências com
            soluções completas em paisagismo e conservação urbana.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-whatsapp text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </Button>
            </a>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de falar com um especialista."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Phone className="w-5 h-5" />
                Falar com Especialista
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#sobre" className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <span className="text-sm font-medium">Saiba mais</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
