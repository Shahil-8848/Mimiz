import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table",
  description: "Reserve your table online at Mimiz Cafe Birtamode, Jhapa. Secure a spot for lunch, dinner, or special celebrations with family and friends.",
};

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
