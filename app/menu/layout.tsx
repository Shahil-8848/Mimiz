import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Menu",
  description: "Explore the delicious vegetarian menu at Mimiz Cafe Birtamode. Check out our signature Momos, Chatamari, hand-dripped coffees, sizzling mains, and sweet treats.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
