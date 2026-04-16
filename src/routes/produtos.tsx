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
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 industrial-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_25%)]" />

        <div className="container-tight relative py-14 sm:py-16 md:py-20">
          <p className="heading-eyebrow mb-4 text-primary-foreground/60">Catálogo</p>

          <h1 className="max-w-4xl text-balance text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Linha completa de alumínio para cozinhas exigentes.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/72 sm:text-base">
            Da panela doméstica ao utensílio profissional, fabricamos cada item com o mesmo
            padrão industrial de qualidade.
          </p>
        </div>
      </section>

      <section className="container-tight py-12 sm:py-14 md:py-16">
        <div className="mb-8 border-b border-border pb-5 sm:mb-10 sm:pb-6">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "border border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-background text-foreground hover:border-primary/40 hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group flex h-full flex-col overflow-hidden border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.category}
                </p>

                <h3 className="mb-2 text-lg font-bold">{p.name}</h3>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="space-y-2 border-t border-border pt-4 text-xs text-foreground/80">
                  {p.specs.map((s) => (
                    <li key={s} className="flex gap-2 leading-relaxed">
                      <span className="text-muted-foreground">—</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-tight py-14 text-center sm:py-16 md:py-20">
          <h2 className="mx-auto max-w-3xl text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Precisa de um produto específico ou volume sob encomenda?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Atendemos pedidos personalizados para revendedores, redes e indústrias.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 h-12 rounded-none px-6 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Link to="/contato">
              Solicitar orçamento <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
