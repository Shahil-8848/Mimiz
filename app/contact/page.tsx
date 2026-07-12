import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import Footer from "../component/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Find contact info, opening hours, location details, or send a direct message to Mimiz Cafe Birtamode. We are ready to host you.",
};

export default function Contact() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center text-balance">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">hello@luminaire.com</p>
            </div>

            <div className="p-6 bg-card rounded-lg border border-border text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-muted-foreground">
                123 Gourmet Lane, Culinary City, CC 12345
              </p>
            </div>
          </div>

          <div className="bg-muted rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions or special requests? We would love to hear from
              you. Contact us for reservations, catering inquiries, or general
              information.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <textarea
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
