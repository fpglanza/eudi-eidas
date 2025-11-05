"use client";

export default function LeadForm() {
  const src = process.env.NEXT_PUBLIC_LEAD_IFRAME_SRC;

  if (!src) return null;

  return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-semibold mb-2">
        Resta aggiornato sul progetto EUDI
      </h2>
      <p className="text-muted-foreground mb-8">
        Guide pratiche, novità e strumenti per PMI italiane.
      </p>

      <div className="flex justify-center">
        <iframe
          src={src}
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            maxWidth: "480px",
            height: "150px",
          }}
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Iscrivendoti accetti di ricevere aggiornamenti e puoi annullare in
        qualsiasi momento.
      </p>
    </section>
  );
}
