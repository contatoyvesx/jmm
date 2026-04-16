import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background antialiased">
      
      {/* HEADER FIXO */}
      <SiteHeader />

      {/* CONTEÚDO */}
      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* FOOTER */}
      <SiteFooter />

    </div>
  );
}
