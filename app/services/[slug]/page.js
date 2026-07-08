import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServicePage from "@/components/ServicePage";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: `${service.title} | کابینت نیروانا`,
    description: service.lead,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();
  return <ServicePage service={service} />;
}
