import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TreePine,
  Flower2,
  Home,
  Building2,
  Scissors,
  Brush,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Paisagismo",
    description:
      "Criação e execução de projetos paisagísticos personalizados para transformar qualquer espaço em um ambiente harmonioso e funcional.",
  },
  {
    icon: Flower2,
    title: "Gramados Esportivos",
    description:
      "Plantio, manutenção e recuperação de gramados para campos de futebol, quadras e áreas esportivas com padrão profissional.",
  },
  {
    icon: Home,
    title: "Jardins Residenciais",
    description:
      "Projetos completos de jardins para residências, desde o planejamento até a manutenção periódica.",
  },
  {
    icon: Building2,
    title: "Jardins Corporativos",
    description:
      "Soluções para empresas, condomínios e áreas públicas que valorizam a estética e o bem-estar dos usuários.",
  },
  {
    icon: TreePine,
    title: "Corte e Supressão de Árvores",
    description:
      "Serviços especializados de poda, corte e remoção de árvores com segurança e autorização legal.",
  },
  {
    icon: Scissors,
    title: "Manutenção de Jardins",
    description:
      "Serviços regulares de manutenção incluindo poda, adubação, controle de pragas e irrigação.",
  },
  {
    icon: Brush,
    title: "Limpeza Urbana",
    description:
      "Roçagem, varrição, pintura de meio-fio, raspagem e rastelamento para áreas públicas e privadas.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções completas em{" "}
            <span className="text-primary">paisagismo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços para atender todas as
            necessidades de áreas verdes e conservação urbana.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-nature hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-green-leaf flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
