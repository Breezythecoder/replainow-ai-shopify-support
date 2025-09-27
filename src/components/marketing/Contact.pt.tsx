import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactPt = () => {
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
          _subject: `Mensagem do formulrio de contato de ${data.name}`
        })
      });

      if (response.ok) {
        toast({ title: "Obrigado!", description: "Entraremos em contato em breve." });
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({ 
        title: "Erro", 
        description: "No foi possvel enviar a mensagem. Tente novamente ou escreva diretamente para support@replainow.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Contato
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Email: <a href="mailto:support@replainow.com" className="story-link">support@replainow.com</a>
        </p>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="name">Nome</label>
              <Input id="name" name="name" placeholder="Joo Silva" required />
            </div>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="email">Email</label>
              <Input id="email" name="email" type="email" placeholder="voce@loja.com" required />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="message">Mensagem</label>
            <Textarea id="message" name="message" placeholder="Como podemos ajudar?" rows={5} required />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="hero" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPt;