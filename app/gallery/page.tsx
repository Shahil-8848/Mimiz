"use client";

import { Navigation } from "@/components/navigation";
import Footer from "../component/Footer";
import { useState } from "react";
import { Utensils, Leaf, Clock, Star } from "lucide-react";

const menuData = {
  Appetizers: [
    {
      name: "Momo (Steam/Fried)",
      price: "Rs. 180",
      description:
        "Traditional dumplings with choice of chicken, buff, or veg filling, served with spicy achar",
      spicy: true,
      popular: true,
    },
    {
      name: "Chatamari",
      price: "Rs. 150",
      description:
        "Nepali rice crepe topped with minced meat, egg, and fresh vegetables",
      spicy: false,
      popular: false,
    },
    {
      name: "Sukuti Sadeko",
      price: "Rs. 280",
      description:
        "Dried buffalo meat tossed with onions, chilies, and Himalayan spices",
      spicy: true,
      popular: true,
    },
    {
      name: "Choila",
      price: "Rs. 250",
      description: "Grilled spiced meat marinated in traditional Newari style",
      spicy: true,
      popular: false,
    },
  ],
  "Main Courses": [
    {
      name: "Dal Bhat Tarkari Set",
      price: "Rs. 350",
      description:
        "Complete Nepali meal with lentil soup, rice, seasonal vegetables, pickle, and papad",
      spicy: false,
      popular: true,
    },
    {
      name: "Thakali Khana Set",
      price: "Rs. 450",
      description:
        "Traditional Thakali platter with dal, bhat, gundruk, and meat curry",
      spicy: true,
      popular: true,
    },
    {
      name: "Newari Khaja Set",
      price: "Rs. 550",
      description: "Authentic Newari feast with chiura, wo, choila, and bara",
      spicy: true,
      popular: false,
    },
    {
      name: "Gorkhali Lamb",
      price: "Rs. 580",
      description: "Tender lamb cooked in rich gravy with aromatic spices",
      spicy: true,
      popular: false,
    },
    {
      name: "Kukhura Ko Masu",
      price: "Rs. 420",
      description:
        "Traditional chicken curry cooked with fresh tomatoes and spices",
      spicy: true,
      popular: false,
    },
    {
      name: "Vegetable Thukpa",
      price: "Rs. 280",
      description:
        "Hearty noodle soup with mixed vegetables and mountain herbs",
      spicy: false,
      popular: false,
    },
  ],
  Desserts: [
    {
      name: "Sel Roti with Aloo Achar",
      price: "Rs. 120",
      description: "Sweet rice bread rings served with spiced potato curry",
      spicy: false,
      popular: true,
    },
    {
      name: "Jeri Swari",
      price: "Rs. 150",
      description: "Traditional sweet made from rice flour in sugar syrup",
      spicy: false,
      popular: false,
    },
    {
      name: "Sikarni",
      price: "Rs. 180",
      description: "Creamy sweetened yogurt with dry fruits and cardamom",
      spicy: false,
      popular: true,
    },
    {
      name: "Yomari",
      price: "Rs. 160",
      description: "Steamed dumpling filled with chaku and sesame seeds",
      spicy: false,
      popular: false,
    },
  ],
  Beverages: [
    {
      name: "Masala Chiya",
      price: "Rs. 80",
      description: "Traditional spiced milk tea with aromatic herbs",
      spicy: false,
      popular: true,
    },
    {
      name: "Butter Tea (Po Cha)",
      price: "Rs. 100",
      description: "Traditional Tibetan butter tea with salt",
      spicy: false,
      popular: false,
    },
    {
      name: "Lassi (Sweet/Salty)",
      price: "Rs. 120",
      description: "Refreshing yogurt-based drink",
      spicy: false,
      popular: true,
    },
    {
      name: "Fresh Lime Soda",
      price: "Rs. 90",
      description: "Chilled lime drink with soda and mint",
      spicy: false,
      popular: false,
    },
    {
      name: "Raksi (Local Spirit)",
      price: "Rs. 200",
      description: "Traditional Nepali distilled alcoholic beverage",
      spicy: false,
      popular: false,
    },
  ],
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Utensils className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover authentic Nepali flavors crafted with traditional recipes
              and the finest local ingredients
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card border border-border text-foreground hover:border-primary hover:shadow-md"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {menuData[selectedCategory as keyof typeof menuData].map(
              (item, i) => (
                <div
                  key={i}
                  className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-primary transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}

                  {/* Item Header */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground mb-2 pr-20">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-primary">
                        {item.price}
                      </span>
                      {item.spicy && (
                        <span className="text-red-500 text-sm font-medium flex items-center gap-1">
                          🌶️ Spicy
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Order Button */}
                  <button className="w-full py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-md">
                    Add to Order
                  </button>
                </div>
              )
            )}
          </div>

          {/* Special Notes Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Dietary Info */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Dietary Options</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We offer vegetarian and vegan options for most dishes.
                    Please inform our staff about any dietary restrictions or
                    allergies.
                  </p>
                </div>
              </div>
            </div>

            {/* Timing Info */}
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Preparation Time</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Most dishes are prepared fresh to order and may take 15-25
                    minutes. Traditional Dal Bhat sets require advance notice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offer Banner */}
          <div className="p-8 bg-primary text-primary-foreground rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-3">
              Traditional Thakali Khana Set
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Experience the authentic flavors of the Himalayas with our special
              Thakali platter. Perfect for sharing and exploring traditional
              Nepali cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-all font-medium shadow-lg">
                Order Now
              </button>
              <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all font-medium">
                View Full Set
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
