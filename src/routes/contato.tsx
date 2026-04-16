import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteLayout } from "@/components/site-layout";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — JMM Alumínios Ilimitado" },
      {
        name: "description",
        content:
          "Fale com a JMM Alumínios Ilimitado. Atendimento a clientes, revendedores e distribuidores em todo o Brasil.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Mensagem enviada!", {
        description: "Entraremos em contato em até 1 dia útil.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <SiteLayout>
      <Toaster />

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 industrial-grid opacity-25" />
        <div className="container-tight relative py-14 sm:py-16 md:py-20">
          <p className="heading-eyebrow mb-4 text-primary-foreground/60">Fale conosco</p>

          <h1 className="max-w-3xl text-balance text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Vamos conversar sobre o seu pedido.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/72 sm:text-base">
            Atendemos consumidores finais, lojistas, distribuidores e o food service.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="container-tight grid gap-10 py-12 sm:py-14 md:py-16 lg:grid-cols-[1fr_1.4fr]">
        
        {/* CONTATO */}
        <div>
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">Canais diretos</h2>

          <ul className="space-y-5">
            {[
              { Icon: Phone, label: "Telefone", value: "(11) 4000-0000" },
              { Icon: Mail, label: "E-mail", value: "contato@jmmaluminios.com.br" },
              { Icon: MapPin, label: "Endereço", value: "Av. Industrial, 1000\nSão Paulo — SP" },
              { Icon: Clock, label: "Horário", value: "Seg. a Sex., 8h às 18h" },
            ].map(({ Icon, label, value }) => (
              <li
                key={label}
                className="flex gap-4 border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  <div className="mt-1 text-sm font-medium whitespace-pre-line">
                    {value}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-l-2 border-primary bg-secondary p-5">
            <h3 className="mb-2 font-bold">É revendedor?</h3>
            <p className="text-sm text-muted-foreground">
              Temos condições especiais. Se identifique no formulário para prioridade.
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="border border-border bg-background p-6 sm:p-8 shadow-sm"
        >
          <h2 className="mb-6 text-xl font-bold sm:text-2xl">
            Envie sua mensagem
          </h2>

          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" required className="h-11 rounded-none" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" required className="h-11 rounded-none" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" className="h-11 rounded-none" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="company">Empresa</Label>
              <Input id="company" className="h-11 rounded-none" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                required
                rows={5}
                className="resize-none rounded-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="mt-2 h-12 rounded-none transition-transform duration-300 hover:-translate-y-0.5"
            >
              {submitting ? "Enviando..." : (
                <>
                  Enviar mensagem <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}
