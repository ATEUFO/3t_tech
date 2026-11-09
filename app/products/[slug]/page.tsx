import { getProductBySlug, products } from "@/lib/data/products";
import ClientPage from "./ClientPage";

// Requis pour l'export statique (output: 'export') avec des routes dynamiques
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <ClientPage slug={resolvedParams.slug} />;
}
