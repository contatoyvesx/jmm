import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-tight py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center bg-primary-foreground text-primary font-black text-sm tracking-tighter">
              JMM
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">JMM Alumínios</div>
              <div className="text-[10px] uppercase tracking-widest text-primary-foreground/60">
                Ilimitado
              </div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">
            Fábrica de panelas e utensílios de alumínio com tradição em qualidade,
            durabilidade e atendimento a revendedores em todo o Brasil.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary-foreground/60">
            Navegação
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white text-primary-foreground/80">Início</Link></li>
            <li><Link to="/produtos" className="hover:text-white text-primary-foreground/80">Produtos</Link></li>
            <li><Link to="/sobre" className="hover:text-white text-primary-foreground/80">A Empresa</Link></li>
            <li><Link to="/contato" className="hover:text-white text-primary-foreground/80">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary-foreground/60">
            Contato
          </h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <span>(11) 4000-0000</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <span>contato@jmmaluminios.com.br</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Av. Industrial, 1000<br />São Paulo — SP</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-tight py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} JMM Alumínios Ilimitado. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
