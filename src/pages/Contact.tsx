import { useState, FormEvent } from "react";
import { Github, Linkedin, BookOpen, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/tyler-reinmund/", label: "LinkedIn" },
  { icon: BookOpen, href: "https://scholar.google.com/citations?user=0jSTrAwAAAAJ&hl=en", label: "Google Scholar" },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Get the form data
    const formData = new FormData(e.currentTarget);
    
    // REPLACE 'YOUR_FORMSPREE_ID' with your actual ID from Formspree
    try {
      const response = await fetch("https://formspree.io/f/xvzbjzrn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({ 
          title: "Message sent!", 
          description: "Thank you for reaching out. I'll get back to you soon." 
        });
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || "Submission failed");
      }
    } catch (error) {
      toast({ 
        title: "Submission Error", 
        description: "There was a problem sending your message. Please try again or contact me via LinkedIn.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="animate-fade-in-up font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Contact
        </h1>
        <p className="animate-fade-in-up delay-100 mt-4 text-lg text-muted-foreground">
          Have a question or want to collaborate? Feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="animate-fade-in-up delay-200 mt-10 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message…" rows={5} required />
          </div>
          <Button type="submit" disabled={loading} className="active:scale-[0.98] transition-transform">
            <Send className="mr-2 h-4 w-4" />
            {loading ? "Sending…" : "Send Message"}
          </Button>
        </form>

        <div className="animate-fade-in-up delay-300 mt-16">
          <h2 className="font-display text-xl font-semibold text-foreground">Find me elsewhere</h2>
          <div className="mt-4 flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default Contact;
