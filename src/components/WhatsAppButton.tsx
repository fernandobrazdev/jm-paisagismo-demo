import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      style={{
        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        boxShadow: "0 4px 20px -4px rgba(37, 211, 102, 0.5)",
      }}
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
