import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse photos of Mimiz Cafe Birtamode. View our beautiful dining hall, lush green interior, delicious vegetarian food, and craft beverages.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
