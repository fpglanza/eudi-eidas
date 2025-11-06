"use client";

export default function LeadForm() {
  const src = process.env.NEXT_PUBLIC_LEAD_IFRAME_SRC;

  if (!src) return null;

  return (
    <section className="text-center">
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
