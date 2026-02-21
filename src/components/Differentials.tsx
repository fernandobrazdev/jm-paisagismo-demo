import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  FileText,
  GraduationCap,
  Truck,
  CalendarCheck,
  Building,
} from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Respondemos em até 24 horas úteis",
  },
  {
    icon: FileText,
    title: "Orçamento sem Compromisso",
    description: "Avaliação e proposta gratuita",
  },
  {
    icon: GraduationCap,
    title: "Equipe Treinada",
    description: "Profissionais capacitados e experientes",
  },
  {
    icon: Truck,
    title: "Equipamentos Próprios",
    description: "Maquinário moderno e bem mantido",
  },
  {
    icon: CalendarCheck,
    title: "Contratos Mensais",
    description: "Manutenção periódica programada",
  },
  {
    icon: Building,
    title: "Atendimento Empresarial",
    description: "Soluções para todos os portes",
  },
];

const Differentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-green-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-green-grass blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-leaf blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-grass/20 text-green-grass font-semibold text-sm mb-4">
            Nossos Diferenciais
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Por que escolher a{" "}
            <span className="text-green-grass">J.M Paisagismo</span>?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Compromisso com qualidade e satisfação do cliente em cada projeto.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-grass/20 flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-green-grass" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-primary-foreground/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
