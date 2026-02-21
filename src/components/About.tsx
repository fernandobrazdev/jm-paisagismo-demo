import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Clock,
  Wrench,
  Calendar,
  Shield,
  Award,
} from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Equipe Qualificada",
    description: "Profissionais treinados e capacitados",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Agilidade em todas as etapas",
  },
  {
    icon: Wrench,
    title: "Equipamentos Profissionais",
    description: "Maquinário moderno e eficiente",
  },
  {
    icon: Calendar,
    title: "Compromisso com Prazos",
    description: "Entregas dentro do cronograma",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Normas de segurança rigorosas",
  },
  {
    icon: Award,
    title: "Normas Ambientais",
    description: "Práticas sustentáveis e responsáveis",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-secondary/30 leaf-pattern">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Sobre Nós
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Especialistas em{" "}
              <span className="text-primary">áreas verdes</span> e conservação
              urbana
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos especialistas em paisagismo, manutenção de áreas verdes e
              conservação urbana, oferecendo soluções completas para manter
              espaços organizados, seguros e bem cuidados. Nossa equipe está
              preparada para atender desde pequenos jardins residenciais até
              grandes áreas corporativas e públicas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com anos de experiência no mercado, construímos uma reputação
              sólida baseada na qualidade do serviço, pontualidade e
              atendimento personalizado às necessidades de cada cliente.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card-nature p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
