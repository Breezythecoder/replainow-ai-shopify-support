import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactNl = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      };

      const response = await fetch('https://formspree.io/f/xdknzpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: "Bericht verzonden!",
          description: "Bedankt voor je bericht. We nemen spoedig contact met je op.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Fout bij verzenden",
        description: "Er is iets misgegaan. Probeer het opnieuw of stuur een email naar support@replainow.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Heb je vragen? We helpen je graag verder.
          </p>
          <p className="text-muted-foreground">
            Of stuur direct een email naar:{" "}
            <a href="mailto:support@replainow.com" className="text-primary hover:underline">
              support@replainow.com
            </a>
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <Input
              name="name"
              placeholder="Je naam"
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Je email"
              required
              className="w-full"
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Je bericht..."
              required
              rows={5}
              className="w-full"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Verzenden..." : "Bericht versturen"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactNl;