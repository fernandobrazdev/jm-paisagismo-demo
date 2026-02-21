import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-cta)" }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-foreground/10" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary-foreground/10" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Precisa manter sua área verde sempre{" "}
            <span className="underline decoration-wavy decoration-primary-foreground/50">
              bonita e organizada?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado sem
            compromisso. Estamos prontos para transformar seu espaço!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-whatsapp text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
            <a href="#contato">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Phone className="w-5 h-5" />
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
