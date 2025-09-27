import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactZh = () => {
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
          _subject: ` ${data.name}`
        })
      });

      if (response.ok) {
        toast({ title: "", description: "" });
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({ 
        title: "", 
        description: " support@replainow.com",
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
          
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          : <a href="mailto:support@replainow.com" className="story-link">support@replainow.com</a>
        </p>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="name"></label>
              <Input id="name" name="name" placeholder="" required />
            </div>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="email"></label>
              <Input id="email" name="email" type="email" placeholder="you@shop.com" required />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="message"></label>
            <Textarea id="message" name="message" placeholder="" rows={5} required />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="hero" disabled={isSubmitting}>
              {isSubmitting ? "..." : ""}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactZh;