import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | IoT Club VIT Pune",
  description: "Explore the cutting-edge IoT prototypes, autonomous robotics, and smart systems engineered by our club members.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
