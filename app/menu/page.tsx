"use client";

import { Navigation } from "@/components/navigation";
import Footer from "../component/Footer";
import { useState } from "react";
import { Utensils, Leaf, Clock, Star, Flame } from "lucide-react";
import Image from "next/image";
import MenuSection from "../component/Menu";

const menuData = {
  Appetizers: [
    {
      name: "Momo (Steam/Fried)",
      price: "Rs. 180",
      description:
        "Traditional dumplings with choice of chicken, buff, or veg filling, served with spicy achar",
      image:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
      spicy: true,
      popular: true,
    },
    {
      name: "Chatamari",
      price: "Rs. 150",
      description:
        "Nepali rice crepe topped with minced meat, egg, and fresh vegetables",
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",
      spicy: false,
      popular: false,
    },
    {
      name: "Sukuti Sadeko",
      price: "Rs. 280",
      description:
        "Dried buffalo meat tossed with onions, chilies, and Himalayan spices",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      spicy: true,
      popular: true,
    },
    {
      name: "Choila",
      price: "Rs. 250",
      description: "Grilled spiced meat marinated in traditional Newari style",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
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
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
      spicy: false,
      popular: true,
    },
    {
      name: "Thakali Khana Set",
      price: "Rs. 450",
      description:
        "Traditional Thakali platter with dal, bhat, gundruk, and meat curry",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
      spicy: true,
      popular: true,
    },
    {
      name: "Newari Khaja Set",
      price: "Rs. 550",
      description: "Authentic Newari feast with chiura, wo, choila, and bara",
      image:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
      spicy: true,
      popular: false,
    },
    {
      name: "Gorkhali Lamb",
      price: "Rs. 580",
      description: "Tender lamb cooked in rich gravy with aromatic spices",
      image:
        "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80",
      spicy: true,
      popular: false,
    },
    {
      name: "Kukhura Ko Masu",
      price: "Rs. 420",
      description:
        "Traditional chicken curry cooked with fresh tomatoes and spices",
      image:
        "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80",
      spicy: true,
      popular: false,
    },
    {
      name: "Vegetable Thukpa",
      price: "Rs. 280",
      description:
        "Hearty noodle soup with mixed vegetables and mountain herbs",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
      spicy: false,
      popular: false,
    },
  ],
  Desserts: [
    {
      name: "Sel Roti with Aloo Achar",
      price: "Rs. 120",
      description: "Sweet rice bread rings served with spiced potato curry",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
      spicy: false,
      popular: true,
    },
    {
      name: "Jeri Swari",
      price: "Rs. 150",
      description: "Traditional sweet made from rice flour in sugar syrup",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
      spicy: false,
      popular: false,
    },
    {
      name: "Sikarni",
      price: "Rs. 180",
      description: "Creamy sweetened yogurt with dry fruits and cardamom",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
      spicy: false,
      popular: true,
    },
    {
      name: "Yomari",
      price: "Rs. 160",
      description: "Steamed dumpling filled with chaku and sesame seeds",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
      spicy: false,
      popular: false,
    },
  ],
  Beverages: [
    {
      name: "Masala Chiya",
      price: "Rs. 80",
      description: "Traditional spiced milk tea with aromatic herbs",
      image:
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
      spicy: false,
      popular: true,
    },
    {
      name: "Butter Tea (Po Cha)",
      price: "Rs. 100",
      description: "Traditional Tibetan butter tea with salt",
      image:
        "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
      spicy: false,
      popular: false,
    },
    {
      name: "Lassi (Sweet/Salty)",
      price: "Rs. 120",
      description: "Refreshing yogurt-based drink",
      image:
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80",
      spicy: false,
      popular: true,
    },
    {
      name: "Fresh Lime Soda",
      price: "Rs. 90",
      description: "Chilled lime drink with soda and mint",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80",
      spicy: false,
      popular: false,
    },
    {
      name: "Raksi (Local Spirit)",
      price: "Rs. 200",
      description: "Traditional Nepali distilled alcoholic beverage",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
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
      <main className="pb-20 min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 pt-8">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Utensils className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Our Menu
            </h1>
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
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg scale-105"
                  : "bg-card border border-border text-foreground hover:border-primary hover:shadow-md hover:scale-102"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {menuData[selectedCategory as keyof typeof menuData].map(
              (item, i) => (
                <div
                  key={i}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Popular Badge */}
                    {item.popular && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        Popular
                      </div>
                    )}

                    {/* Spicy Badge */}
                    {item.spicy && (
                      <div className="absolute top-4 left-4 flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                        <Flame className="w-3.5 h-3.5" />
                        Spicy
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Item Header */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                          {item.price}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2 group-hover:line-clamp-none transition-all">
                      {item.description}
                    </p>

                    {/* Order Button */}
                    <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2">
                      <Utensils className="w-4 h-4" />
                      Add to Order
                    </button>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Special Notes Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Dietary Info */}
            <div className="p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Dietary Options</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer vegetarian and vegan options for most dishes.
                    Please inform our staff about any dietary restrictions or
                    allergies.
                  </p>
                </div>
              </div>
            </div>

            {/* Timing Info */}
            <div className="p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Preparation Time</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Most dishes are prepared fresh to order and may take 15-25
                    minutes. Traditional Dal Bhat sets require advance notice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offer Banner */}
          <div className="relative p-10 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white rounded-2xl text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

            <div className="relative z-10">
              <div className="inline-block p-3 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Traditional Thakali Khana Set
              </h2>
              <p className="text-white/95 mb-8 max-w-2xl mx-auto text-lg">
                Experience the authentic flavors of the Himalayas with our
                special Thakali platter. Perfect for sharing and exploring
                traditional Nepali cuisine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-amber-700 rounded-xl hover:bg-gray-50 transition-all font-bold shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Order Now
                </button>
                <button className="px-10 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all font-bold backdrop-blur-sm">
                  View Full Set
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
