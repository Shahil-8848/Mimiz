import { Navigation } from "@/components/navigation";
import Footer from "../component/Footer";
import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      author: "Sarah Mitchell",
      rating: 5,
      text: "An absolutely extraordinary dining experience. The attention to detail, the food quality, and the service were all exceptional. We will definitely return.",
      date: "Nov 2024",
    },
    {
      author: "James Chen",
      rating: 5,
      text: "Luminaire is the finest restaurant I've ever visited. Chef Laurent's creations are true works of art. Highly recommended.",
      date: "Oct 2024",
    },
    {
      author: "Emma Wilson",
      rating: 5,
      text: "Perfect for our anniversary celebration. Every course was divine and the sommelier provided excellent wine pairings. Thank you for making our evening special.",
      date: "Oct 2024",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center text-balance">
            Guest Reviews
          </h1>

          <div className="space-y-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-card p-8 rounded-lg border border-border"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{review.author}</h3>
                    <p className="text-sm text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-muted p-8 rounded-lg border border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-muted-foreground mb-6">
              We'd love to hear about your dining experience at Luminaire.
            </p>
            <button className="px-8 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Write a Review
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
