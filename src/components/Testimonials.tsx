import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Almeida",
    role: "Síndico - Condomínio Parque Verde",
    content:
      "A JM Paisagismo transformou completamente as áreas verdes do nosso condomínio. O trabalho foi impecável e dentro do prazo acordado. Recomendo muito!",
    rating: 5,
  },
  {
    name: "Maria Helena Silva",
    role: "Gerente Administrativa - Tech Solutions",
    content:
      "Contratamos para a manutenção dos jardins da empresa e o resultado superou nossas expectativas. Equipe profissional e pontual.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo Santos",
    role: "Diretor - Clube Atlético Municipal",
    content:
      "O gramado do nosso campo de futebol nunca esteve tão bonito. A JM entende do assunto e entrega qualidade em cada serviço.",
    rating: 5,
  },
  {
    name: "Ana Paula Ferreira",
    role: "Proprietária - Residência Jardins",
    content:
      "Desde que a JM assumiu a manutenção do meu jardim, não tenho mais preocupações. Sempre impecável e com preço justo.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-nature relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
