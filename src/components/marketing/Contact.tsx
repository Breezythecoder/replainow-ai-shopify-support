import { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Danke!", description: "Wir melden uns zeitnah bei dir." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Kontakt
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          E-Mail: <a href="mailto:support@replainow.com" className="story-link">support@replainow.com</a>
        </p>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="name">Name</label>
              <Input id="name" name="name" placeholder="Max Mustermann" required />
            </div>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="email">E-Mail</label>
              <Input id="email" name="email" type="email" placeholder="you@shop.de" required />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="message">Nachricht</label>
            <Textarea id="message" name="message" placeholder="Wie können wir helfen?" rows={5} required />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="hero">Nachricht senden</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
