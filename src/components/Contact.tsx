import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@jmpaisagismo.com.br",
    href: "mailto:contato@jmpaisagismo.com.br",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Belo Horizonte, MG e Região",
    href: null,
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg a Sex: 8h às 18h | Sáb: 8h às 12h",
    href: null,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim() || formData.name.length > 100) {
      toast.error("Por favor, insira um nome válido.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length > 20) {
      toast.error("Por favor, insira um telefone válido.");
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || formData.email.length > 255) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }
    if (!formData.message.trim() || formData.message.length > 1000) {
      toast.error("Por favor, insira uma mensagem válida (máximo 1000 caracteres).");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Build WhatsApp message with encoded values
    const whatsappMessage = encodeURIComponent(
      `Olá! Vim pelo site.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\n\nMensagem: ${formData.message}`
    );
    
    window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, "_blank");
    
    toast.success("Mensagem enviada! Você será redirecionado para o WhatsApp.");
    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Contato
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário ou utilize um dos nossos canais de atendimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="card-nature"
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  maxLength={100}
                  required
                  className="h-12 bg-background border-border"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  type="tel"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  maxLength={20}
                  required
                  className="h-12 bg-background border-border"
                />
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  maxLength={255}
                  required
                  className="h-12 bg-background border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  maxLength={1000}
                  required
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="card-nature flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
