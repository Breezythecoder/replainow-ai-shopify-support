import { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ContactEn = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Thank you!", description: "We'll get back to you soon." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="kontakt" aria-labelledby="contact-heading" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
          Contact
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Email: <a href="mailto:support@replainow.com" className="story-link">support@replainow.com</a>
        </p>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="name">Name</label>
              <Input id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <label className="text-sm" htmlFor="email">Email</label>
              <Input id="email" name="email" type="email" placeholder="you@shop.com" required />
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="message">Message</label>
            <Textarea id="message" name="message" placeholder="How can we help?" rows={5} required />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="hero">Send message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactEn;