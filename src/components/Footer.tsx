import { Leaf, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-JM-branco.png";

const Footer = () => {
  return (
    <footer className="bg-green-dark text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-dark" />
              </div> */}
              {/* <div>
                <span className="font-heading font-bold text-xl">
                  JM Paisagismo
                </span>
                <span className="block text-xs text-primary-foreground/70">
                  e Conservação
                </span>
              </div> */}
              <img src={logo} alt="JM Paisagismo" className="w-40" />
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Há mais de 10 anos transformando espaços com qualidade,
              profissionalismo e dedicação. Sua área verde em boas mãos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Sobre", "Serviços", "Portfólio", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} J.M Paisagismo e Conservação. Todos os
              direitos reservados.
            </p>
            {/* <p>
              Desenvolvido com <span className="text-green-grass">♥</span> para
              seu sucesso
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
