import { Navigation } from "@/components/navigation";

import Footer from "../component/Footer";
export default function Team() {
  const team = [
    {
      name: "Chef Michel Laurent",
      role: "Executive Chef",
      bio: "25 years of culinary experience with Michelin stars across Europe and Asia",
    },
    {
      name: "Sophie Dubois",
      role: "Sous Chef",
      bio: "Specializes in French classical techniques and modern innovative cuisine",
    },
    {
      name: "Marcus Johnson",
      role: "Sommelier",
      bio: "Expert wine curator with deep knowledge of global wine regions",
    },
    {
      name: "Isabella Romano",
      role: "Pastry Chef",
      bio: "Award-winning pastry artisan creating memorable dessert experiences",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center text-balance">
            Our Team
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Meet the passionate culinary professionals who bring Luminaire to
            life
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-lg border border-border text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
