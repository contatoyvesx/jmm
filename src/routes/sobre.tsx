import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "A Empresa — JMM Alumínios Ilimitado" },
      {
        name: "description",
        content:
          "Conheça a história da JMM Alumínios Ilimitado: 40 anos fabricando panelas e utensílios de alumínio com padrão industrial.",
      },
      { property: "og:title", content: "A Empresa — JMM Alumínios" },
      {
        property: "og:description",
        content: "Quatro décadas de tradição industrial em alumínio.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      <section className="bg-primary text-primary-foreground">
        <div className="container-tight py-16 md:py-20">
          <p className="heading-eyebrow text-primary-foreground/60 mb-4">Quem somos</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl text-balance">
            Indústria brasileira. Padrão sem concessões.
          </h1>
        </div>
      </section>

      <section className="container-tight py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
        <img
          src={factoryImg}
          alt="Linha de produção JMM Alumínios"
          width={1400}
          height={900}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
            Uma trajetória forjada na indústria.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Fundada em 1985, a JMM Alumínios Ilimitado começou como uma pequena oficina de
            estamparia. Com o tempo e o compromisso de fabricar produtos cada vez melhores,
            crescemos até nos tornar uma das referências nacionais em utensílios de alumínio.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Hoje, ocupamos um parque industrial moderno, contamos com uma equipe altamente
            qualificada e atendemos clientes do varejo ao food service em todo o Brasil.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-tight">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Missão",
                text: "Fabricar utensílios de alumínio que combinem qualidade industrial, durabilidade e desempenho na cozinha.",
              },
              {
                title: "Visão",
                text: "Ser a marca de referência em utensílios de alumínio no Brasil, presente em cada lar e em cada cozinha profissional.",
              },
              {
                title: "Valores",
                text: "Qualidade sem concessões, respeito ao cliente, valorização das pessoas e compromisso com a indústria nacional.",
              },
            ].map((b) => (
              <div key={b.title}>
                <div className="h-px w-12 bg-primary mb-6" />
                <h3 className="text-2xl font-bold mb-3">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tight py-20">
        <div className="max-w-2xl mb-12">
          <p className="heading-eyebrow mb-4">Marcos</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
            Quatro décadas em movimento.
          </h2>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-4">
          {[
            { year: "1985", text: "Fundação como pequena oficina familiar de estamparia." },
            { year: "1998", text: "Inauguração da primeira unidade fabril própria." },
            { year: "2010", text: "Expansão nacional e abertura de novos canais B2B." },
            { year: "2024", text: "Mais de 120 produtos no catálogo e equipe de 200+ colaboradores." },
          ].map((m) => (
            <div key={m.year} className="bg-background p-8">
              <div className="text-3xl font-black mb-2">{m.year}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-tight py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance max-w-2xl mx-auto">
            Faça parte da rede de revendedores JMM.
          </h2>
          <Button asChild size="lg" variant="secondary" className="rounded-none mt-8 h-12 px-6">
            <Link to="/contato">
              Entre em contato <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
