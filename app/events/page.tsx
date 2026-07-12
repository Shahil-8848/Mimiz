import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import Footer from "../component/Footer";

export const metadata: Metadata = {
  title: "Events & Private Dining",
  description: "Plan your celebrations, parties, and corporate events at Mimiz Cafe Birtamode. Explore our private dining spaces and custom catering packages.",
};

export default function Events() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center text-balance">
            Events & Private Dining
          </h1>

          <div className="space-y-12">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4">Corporate Events</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Impress your clients and colleagues with an unforgettable
                corporate dining experience. We offer customized menus and
                professional service for business dinners, product launches, and
                team celebrations.
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Private dining rooms with capacity for 20-100 guests</li>
                <li>Customizable menus and wine pairings</li>
                <li>AV capabilities and presentation space</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4">Wedding Celebrations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your special day deserves an exceptional setting. Our
                experienced team will work with you to create a memorable
                celebration featuring exquisite cuisine and impeccable service.
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Rehearsal dinners and receptions</li>
                <li>Personalized multi-course menus</li>
                <li>Professional sommelier recommendations</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4">Private Dinners</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Celebrate milestones with intimate dining experiences. From
                birthdays to anniversaries, we create personalized events that
                exceed expectations.
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Intimate parties for up to 50 guests</li>
                <li>Custom menu creation</li>
                <li>Dedicated service team</li>
              </ul>
            </section>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Plan Your Event?
              </h3>
              <p className="mb-6">
                Contact our events coordinator to discuss your vision and
                preferences.
              </p>
              <a
                href="mailto:events@luminaire.com"
                className="inline-block px-8 py-2 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
