import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Careers() {
  const positions = [
    { title: "Line Cook", department: "Kitchen", type: "Full-time" },
    { title: "Server", department: "Front of House", type: "Full-time" },
    { title: "Sommelier", department: "Beverage", type: "Full-time" },
    { title: "Pastry Chef", department: "Kitchen", type: "Full-time" },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center text-balance">
            Join Our Team
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            We are looking for passionate culinary professionals to join our
            award-winning team
          </p>

          <div className="space-y-4 mb-12">
            {positions.map((pos, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-lg border border-border flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-lg">{pos.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {pos.department}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-semibold text-sm">
                    {pos.type}
                  </p>
                  <button className="mt-2 text-sm text-primary hover:underline">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Why Work at Luminaire?</h2>
            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li>Work with award-winning culinary professionals</li>
              <li>Competitive salary and benefits package</li>
              <li>Professional development and training opportunities</li>
              <li>Collaborative and inclusive work environment</li>
              <li>Health insurance and retirement plans</li>
            </ul>

            <div className="mt-8">
              <p className="text-foreground mb-4">
                Interested in joining our team? Send your resume and cover
                letter to:
              </p>
              <a
                href="mailto:careers@luminaire.com"
                className="text-primary font-medium hover:underline"
              >
                careers@luminaire.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
