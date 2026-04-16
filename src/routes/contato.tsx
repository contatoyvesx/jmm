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
      { property: "og:title", content: "Contato — JMM Alumínios" },
      { property: "og:description", content: "Fale com nosso time comercial." },
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
      <section className="bg-primary text-primary-foreground">
        <div className="container-tight py-16 md:py-20">
          <p className="heading-eyebrow text-primary-foreground/60 mb-4">Fale conosco</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl text-balance">
            Vamos conversar sobre o seu pedido.
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/70 leading-relaxed">
            Atendemos consumidores finais, lojistas, distribuidores e o food service.
            Preencha o formulário ou utilize um dos canais ao lado.
          </p>
        </div>
      </section>

      <section className="container-tight py-16 md:py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="text-2xl font-bold mb-8">Canais diretos</h2>
          <ul className="space-y-6">
            {[
              { Icon: Phone, label: "Telefone comercial", value: "(11) 4000-0000" },
              { Icon: Mail, label: "E-mail", value: "contato@jmmaluminios.com.br" },
              { Icon: MapPin, label: "Endereço", value: "Av. Industrial, 1000\nSão Paulo — SP" },
              { Icon: Clock, label: "Atendimento", value: "Seg. a Sex., 8h às 18h" },
            ].map(({ Icon, label, value }) => (
              <li key={label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  <div className="text-sm font-medium mt-1 whitespace-pre-line">{value}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 p-6 bg-secondary border-l-2 border-primary">
            <h3 className="font-bold mb-2">É revendedor?</h3>
            <p className="text-sm text-muted-foreground">
              Temos política comercial diferenciada para lojistas, distribuidores e
              atacadistas. Identifique-se no formulário e nosso time comercial dará
              prioridade ao seu contato.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-background border border-border p-8">
          <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" name="name" required className="rounded-none h-11" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-none h-11"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" name="phone" className="rounded-none h-11" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company">Empresa (opcional)</Label>
              <Input id="company" name="company" className="rounded-none h-11" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                className="rounded-none resize-none"
                placeholder="Conte-nos qual produto te interessa, volume estimado, ou tire suas dúvidas."
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="rounded-none h-12 mt-2"
            >
              {submitting ? "Enviando..." : (<>Enviar mensagem <Send className="ml-2 h-4 w-4" /></>)}
            </Button>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}
