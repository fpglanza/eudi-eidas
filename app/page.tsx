import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          EUDI Wallet & eIDAS 2.0 per PMI italiane
        </h1>
        <p className="text-lg text-muted-foreground">
          Implementazione pratica di identità digitale, firme elettroniche e onboarding KYC/KYB.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <a href="/vendors">Confronta i vendor</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/guides/guida-introduzione">Leggi le guide</a>
          </Button>
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        {[
          { t: "EUDI Wallet", d: "Cos'è, timeline UE e come prepararsi alla compatibilità." },
          { t: "eIDAS 2.0", d: "Requisiti per firme, sigilli e servizi fiduciari qualificati." },
          { t: "Onboarding KYC/KYB", d: "Flussi per PMI: verifica identità, firma contratti, audit." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border p-6">
            <h3 className="font-semibold text-xl">{c.t}</h3>
            <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Iscriviti per aggiornamenti e checklist operative
        </h2>
        <div
          className="max-w-xl mx-auto"
          dangerouslySetInnerHTML={{
            __html:
              process.env.NEXT_PUBLIC_LEAD_EMBED_HTML ||
              `<!-- TODO: incolla qui l'embed Beehiiv/MailerLite -->`,
          }}
        />
        <p className="text-xs text-center text-muted-foreground mt-2">
          Iscrivendoti, accetti privacy e termini. Disiscrizione in qualsiasi momento.
        </p>
      </section>
      <LeadForm />
    </main>
  );
}
