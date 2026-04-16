import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Factory, ShieldCheck, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import heroImg from "@/assets/hero-cookware.jpg";
import factoryImg from "@/assets/factory.jpg";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JMM Alumínios Ilimitado — Fábrica de Panelas e Utensílios" },
      {
        name: "description",
        content:
          "Fabricante brasileira de panelas, frigideiras e utensílios de alumínio com qualidade industrial. Atendemos revendedores em todo o país.",
      },
      { property: "og:title", content: "JMM Alumínios Ilimitado" },
      {
        property: "og:description",
        content: "Panelas e utensílios de alumínio com qualidade industrial.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="container-tight relative grid gap-12 py-20 lg:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="heading-eyebrow text-primary-foreground/60 mb-6">
              Indústria nacional · desde 1985
            </p>
            <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              Alumínio que <span className="text-steel">resiste</span> ao tempo.
            </h1>
            <p className="mt-6 max-w-lg text-base md:text-lg text-primary-foreground/70 leading-relaxed">
              Panelas, frigideiras e utensílios fabricados com alumínio de alta espessura.
              Desempenho industrial para a sua cozinha e para o seu negócio.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="rounded-none h-12 px-6">
                <Link to="/produtos">
                  Ver produtos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none h-12 px-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contato">Seja revendedor</Link>
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-primary-foreground/10 pt-8">
              <div>
                <div className="text-3xl font-black">40+</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">
                  anos de mercado
                </div>
              </div>
              <div>
                <div className="text-3xl font-black">120+</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">
                  itens no catálogo
                </div>
              </div>
              <div>
                <div className="text-3xl font-black">100%</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1">
                  produção nacional
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary-foreground/5 blur-2xl" />
            <img
              src={heroImg}
              alt="Conjunto de panelas de alumínio polido"
              width={1600}
              height={1100}
              className="relative w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="container-tight py-20 md:py-28">
        <div className="max-w-2xl mb-16">
          <p className="heading-eyebrow mb-4">Por que JMM</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Tradição industrial. Padrão de qualidade que não negocia.
          </h2>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Factory,
              title: "Produção própria",
              desc: "Parque industrial verticalizado, do alumínio bruto ao produto acabado.",
            },
            {
              icon: ShieldCheck,
              title: "Garantia de fábrica",
              desc: "Controle de qualidade em todas as etapas e garantia em toda a linha.",
            },
            {
              icon: Truck,
              title: "Entrega nacional",
              desc: "Logística para revendedores e atacadistas em todo o território brasileiro.",
            },
            {
              icon: Award,
              title: "Alumínio premium",
              desc: "Espessura reforçada e acabamento polido para máxima durabilidade.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-background p-8">
              <f.icon className="h-7 w-7 mb-6" />
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUTOS DESTAQUE */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-tight">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="heading-eyebrow mb-4">Nossa linha</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Produtos feitos para durar.
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-none">
              <Link to="/produtos">
                Ver catálogo completo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <article
                key={p.id}
                className="group bg-background border border-border hover:border-primary transition-colors"
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
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {p.category}
                  </p>
                  <h3 className="text-lg font-bold mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE TEASER */}
      <section className="container-tight py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={factoryImg}
            alt="Interior da fábrica JMM Alumínios"
            width={1400}
            height={900}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <p className="heading-eyebrow mb-4">A empresa</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Quatro décadas forjando qualidade em alumínio.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A JMM Alumínios Ilimitado nasceu da paixão pela indústria e do compromisso com o
            que é bem feito. Hoje, somos referência em panelas e utensílios de alumínio,
            atendendo lares, restaurantes e revendedores em todo o Brasil.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Cada peça que sai da nossa fábrica passa por rigoroso controle de qualidade. É
            essa atenção ao detalhe que faz da JMM uma marca de confiança.
          </p>
          <Button asChild variant="outline" className="rounded-none">
            <Link to="/sobre">
              Conheça nossa história <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-tight py-20 md:py-24 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Quer revender produtos JMM no seu negócio?
            </h2>
            <p className="mt-3 text-primary-foreground/70 max-w-xl">
              Trabalhamos com condições especiais para lojistas, distribuidores e atacadistas.
              Fale com nosso time comercial.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="rounded-none h-12 px-8">
            <Link to="/contato">
              Falar com a JMM <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
