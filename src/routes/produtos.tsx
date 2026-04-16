import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import { products } from "@/data/products";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — JMM Alumínios Ilimitado" },
      {
        name: "description",
        content:
          "Conheça a linha completa de panelas, frigideiras, assadeiras e utensílios de alumínio fabricados pela JMM.",
      },
      { property: "og:title", content: "Produtos — JMM Alumínios" },
      {
        property: "og:description",
        content: "Linha completa de panelas e utensílios de alumínio JMM.",
      },
    ],
  }),
  component: ProdutosPage,
});

function ProdutosPage() {
  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState<string>("Todos");

  const filtered = active === "Todos" ? products : products.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container-tight py-16 md:py-20">
          <p className="heading-eyebrow text-primary-foreground/60 mb-4">Catálogo</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl text-balance">
            Linha completa de alumínio para cozinhas exigentes.
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/70 leading-relaxed">
            Da panela doméstica ao utensílio profissional, fabricamos cada item com o mesmo
            padrão industrial de qualidade.
          </p>
        </div>
      </section>

      <section className="container-tight py-16">
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium border transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group bg-background border border-border hover:border-primary transition-colors flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {p.category}
                </p>
                <h3 className="text-lg font-bold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                <ul className="space-y-1 text-xs text-foreground/80 border-t border-border pt-4">
                  {p.specs.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-muted-foreground">—</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-tight py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance max-w-2xl mx-auto">
            Precisa de um produto específico ou volume sob encomenda?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Atendemos pedidos personalizados para revendedores, redes e indústrias.
          </p>
          <Button asChild size="lg" className="rounded-none mt-8 h-12 px-6">
            <Link to="/contato">
              Solicitar orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
