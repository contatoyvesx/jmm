import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sobre", label: "A Empresa" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground sm:mt-24">
      <div className="container-tight grid gap-10 py-14 sm:gap-12 sm:py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link
            to="/"
            className="group mb-5 inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
          >
            <div className="flex h-10 w-10 items-center justify-center border border-white/15 bg-primary-foreground text-sm font-black tracking-tighter text-primary shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
              JMM
            </div>

            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight sm:text-[15px]">
                JMM Alumínios
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60">
                Ilimitado
              </div>
            </div>
          </Link>

          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/72">
            Fábrica de panelas e utensílios de alumínio com tradição em qualidade,
            durabilidade e atendimento a revendedores em todo o Brasil.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/60">
            Navegação
          </h3>

          <ul className="space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/60">
            Contato
          </h3>

          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full border border-white/10 bg-white/5 p-2">
                <Phone className="h-4 w-4 shrink-0" />
              </div>
              <span>(11) 4000-0000</span>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full border border-white/10 bg-white/5 p-2">
                <Mail className="h-4 w-4 shrink-0" />
              </div>
              <span>contato@jmmaluminios.com.br</span>
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full border border-white/10 bg-white/5 p-2">
                <MapPin className="h-4 w-4 shrink-0" />
              </div>
              <span>
                Av. Industrial, 1000
                <br />
                São Paulo — SP
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-tight flex flex-col items-start justify-between gap-2 py-5 text-xs text-primary-foreground/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} JMM Alumínios Ilimitado. Todos os direitos reservados.</p>
          <p>CNPJ 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
