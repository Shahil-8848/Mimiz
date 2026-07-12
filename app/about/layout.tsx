import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the philosophy, organic values, and team behind Mimiz Cafe in Birtamode, Jhapa. Read our story and see why every visit genuinely feels new.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
