import { Navigation } from "@/components/navigation";
import Footer from "../component/Footer";

export default function Delivery() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center text-balance">
            Catering & Delivery
          </h1>

          <div className="space-y-8">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4">Catering Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bring Luminaire's culinary excellence to your venue. We provide
                full-service catering for corporate events, celebrations, and
                special occasions with customized menus and professional
                service.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>• Minimum 20 guests</p>
                <p>• Customizable multi-course menus</p>
                <p>• Professional wait staff included</p>
                <p>• Full bar service available</p>
              </div>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-4">Delivery Options</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Enjoy Luminaire's dishes from the comfort of your home. Our
                carefully packaged meals are delivered fresh and ready to enjoy.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>• Thursday - Sunday, 5PM - 10PM</p>
                <p>• Delivery within 5 miles of restaurant</p>
                <p>• Minimum order: Rs.50</p>
                <p>• Pre-order 24 hours in advance</p>
              </div>
            </section>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
              <p className="mb-6">
                Contact our catering team for personalized quotes and menu
                recommendations.
              </p>
              <a
                href="mailto:catering@luminaire.com"
                className="inline-block px-8 py-2 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
