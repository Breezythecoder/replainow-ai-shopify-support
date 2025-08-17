import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactIt = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      // Send email using Formspree (free service for contact forms)
      const response = await fetch('https://formspree.io/f/xgvewbae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          message: data.message,
          _replyto: data.email,
          _subject: `Modulo di contatto messaggio da ${data.name}`
        })
      });

      if (response.ok) {
        toast({ title: "Grazie!", description: "Ti contatteremo presto." });
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({ 
        title: "Errore", 
        description: "Impossibile inviare il messaggio. Riprova o scrivi direttamente a support@replainow.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contatto" aria-labelledby="contact-heading" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Contatto
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          E-Mail: <a href="mailto:support@replainow.com" className="story-link">support@replainow.com</a>
        </p>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="name">Nome</label>
              <Input id="name" name="name" placeholder="Mario Rossi" required />
            </div>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="email">E-Mail</label>
              <Input id="email" name="email" type="email" placeholder="tu@negozio.it" required />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="message">Messaggio</label>
            <Textarea id="message" name="message" placeholder="Come possiamo aiutarti?" rows={5} required />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="hero" disabled={isSubmitting}>
              {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactIt;