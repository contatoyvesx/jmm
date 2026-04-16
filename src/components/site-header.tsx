import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sobre", label: "A Empresa" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container-tight flex h-16 items-center justify-between sm:h-18">
        <Link
          to="/"
          className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary text-sm font-black tracking-tighter text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-[1.03]">
            JMM
          </div>

          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight sm:text-[15px]">
              JMM Alumínios
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Ilimitado
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-sm font-medium text-foreground/75 transition-all duration-300 hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              activeProps={{
                className:
                  "text-foreground !font-semibold after:w-full",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            size="sm"
            className="rounded-none px-5 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Link to="/contato">Seja revendedor</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-border/60 p-2 text-foreground transition-colors duration-300 hover:bg-secondary lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-tight flex flex-col py-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border/50 py-3.5 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-foreground last:border-0"
              activeProps={{ className: "text-foreground !font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              <span>{item.label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}

          <Button
            asChild
            size="sm"
            className="mt-4 h-11 rounded-none"
          >
            <Link to="/contato" onClick={() => setOpen(false)}>
              Seja revendedor
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
