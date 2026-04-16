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
  const features = [
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
  ];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 industrial-grid opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />

        <div className="container-tight relative grid gap-10 py-14 sm:py-16 md:gap-12 md:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="heading-eyebrow mb-4 text-primary-foreground/60 sm:mb-6">
              Indústria nacional · desde 1985
            </p>

            <h1 className="text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Alumínio que <span className="text-steel">resiste</span> ao tempo.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:mt-6 sm:text-base md:text-lg">
              Panelas, frigideiras e utensílios fabricados com alumínio de alta espessura.
              Desempenho industrial para a sua cozinha e para o seu negócio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-12 rounded-none px-6 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Link to="/produtos">
                  Ver produtos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-none border-primary-foreground/30 bg-transparent px-6 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contato">Seja revendedor</Link>
              </Button>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-primary-foreground/10 pt-6 sm:mt-14 sm:gap-6 sm:pt-8">
              <div>
                <div className="text-2xl font-black sm:text-3xl">40+</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-primary-foreground/60 sm:text-xs">
                  anos de mercado
                </div>
              </div>
              <div>
                <div className="text-2xl font-black sm:text-3xl">120+</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-primary-foreground/60 sm:text-xs">
                  itens no catálogo
                </div>
              </div>
              <div>
                <div className="text-2xl font-black sm:text-3xl">100%</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-primary-foreground/60 sm:text-xs">
                  produção nacional
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in-95 duration-700">
            <div className="absolute -inset-4 rounded-3xl bg-primary-foreground/5 blur-2xl" />
            <div className="overflow-hidden border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
              <img
                src={heroImg}
                alt="Conjunto de panelas de alumínio polido"
                width={1600}
                height={1100}
                className="relative h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="container-tight py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="heading-eyebrow mb-4">Por que JMM</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tradição industrial. Padrão de qualidade que não negocia.
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-8"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-5 inline-flex rounded-full border border-border bg-secondary p-3 transition-colors duration-300 group-hover:border-primary/20 group-hover:bg-primary/5">
                <f.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUTOS DESTAQUE */}
      <section className="bg-secondary py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="container-tight">
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="heading-eyebrow mb-4">Nossa linha</p>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Produtos feitos para durar.
              </h2>
            </div>

            <Button asChild variant="outline" className="w-full rounded-none sm:w-auto">
              <Link to="/produtos">
                Ver catálogo completo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
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

                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.category}
                  </p>
                  <h3 className="mb-2 text-lg font-bold">{p.name}</h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="container-tight grid gap-10 py-16 sm:py-20 md:gap-12 md:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="relative">
          <div className="overflow-hidden border border-border bg-background shadow-xl">
            <img
              src={factoryImg}
              alt="Interior da fábrica JMM Alumínios"
              width={1400}
              height={900}
              loading="lazy"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>

        <div>
          <p className="heading-eyebrow mb-4">A empresa</p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Quatro décadas forjando qualidade em alumínio.
          </h2>

          <p className="mb-4 leading-relaxed text-muted-foreground">
            A JMM Alumínios Ilimitado nasceu da paixão pela indústria e do compromisso com o
            que é bem feito. Hoje, somos referência em panelas e utensílios de alumínio,
            atendendo lares, restaurantes e revendedores em todo o Brasil.
          </p>

          <p className="mb-8 leading-relaxed text-muted-foreground">
            Cada peça que sai da nossa fábrica passa por rigoroso controle de qualidade. É
            essa atenção ao detalhe que faz da JMM uma marca de confiança.
          </p>

          <Button asChild variant="outline" className="w-full rounded-none sm:w-auto">
            <Link to="/sobre">
              Conheça nossa história <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-tight grid gap-6 py-14 sm:py-16 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:py-20 lg:py-24">
          <div>
            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Quer revender produtos JMM no seu negócio?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
              Trabalhamos com condições especiais para lojistas, distribuidores e atacadistas.
              Fale com nosso time comercial.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-12 w-full rounded-none px-8 transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
          >
            <Link to="/contato">
              Falar com a JMM <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
