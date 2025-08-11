import inbox from "@/assets/mock-inbox.jpg";
import chat from "@/assets/mock-chat.jpg";
import { useInView } from "@/hooks/useInView";

const Screens = () => {
  const inboxView = useInView<HTMLImageElement>();
  const chatView = useInView<HTMLImageElement>();

  return (
    <section id="demo" aria-labelledby="demo-heading" className="py-16 md:py-24 bg-muted/40">
      <div className="container">
        <h2 id="demo-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          So sieht ReplAInow in deinem Shopify-Admin aus
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Übersichtlich, schnell und nahtlos integriert.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <figure>
            <img
              ref={inboxView.ref}
              src={inbox}
              alt="Mockup: Shopify Inbox mit AI-Antwortvorschlag"
              className={`rounded-xl border bg-card w-full shadow-sm ${inboxView.inView ? 'animate-fade-in hover-scale' : 'opacity-0'}`}
              loading="lazy"
            />
            <figcaption className="sr-only">Shopify Inbox mit AI-Antwort</figcaption>
          </figure>
          <figure>
            <img
              ref={chatView.ref}
              src={chat}
              alt="Mockup: Chatfenster mit KI-Unterstützung"
              className={`rounded-xl border bg-card w-full shadow-sm ${chatView.inView ? 'animate-fade-in hover-scale' : 'opacity-0'}`}
              loading="lazy"
            />
            <figcaption className="sr-only">Chatfenster mit KI-Unterstützung</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Screens;
