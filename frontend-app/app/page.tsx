import { getHomePage } from "@/lib/strapi";
import { HeroSection } from "@/components/ui/hero-section";

export async function generateMetadata() {
  const strapiData = await getHomePage();
  return {
    title: strapiData?.title || "Home TIENDA",
    description: strapiData?.description || "Welcome to our website",
  };
}

export default async function Home() {
  const strapiData = await getHomePage();

  const [heroSections] = strapiData?.sections || [];

  return (
    //<HeroSection data={heroSections} />
    <main className="flex min-h-screen flex-col  p-12">
      <h1>LLEGASTE HASTA AQUI</h1>
    </main>
  );
}
