import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance">
            About Restro V
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2018, Restro V represents the pinnacle of fine dining
                excellence. Our journey began with a simple vision: to create a
                space where culinary artistry meets warm hospitality, where
                every meal becomes an unforgettable memory.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in the transformative power of exceptional food.
                Every dish that leaves our kitchen is a testament to our
                commitment to excellence, innovation, and respect for
                traditional culinary techniques. We source only the finest
                ingredients, many from local purveyors with whom we have built
                lasting relationships.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Our Chef</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chef Michel Laurent brings 25 years of international culinary
                experience, having trained under Michelin-starred chefs across
                Europe and Asia. His innovative approach to classical French
                cuisine has earned Luminaire critical acclaim and a loyal
                following of discerning diners.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li>✓ Sourcing sustainable, locally-grown ingredients</li>
                <li>✓ Continuous training and development of our team</li>
                <li>✓ Personalized service that anticipates every need</li>
                <li>✓ Creating unforgettable dining experiences</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
