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

  if (!strapiData) return <div>Error cargando datos...</div>;

  const [heroSections] = strapiData?.sections || [];

  return (
    //<h1>LLEGASTE HASTA AQUI</h1>
    <main className="flex min-h-screen flex-col  p-12">
      <HeroSection data={heroSections} />
    </main>
  );
}
