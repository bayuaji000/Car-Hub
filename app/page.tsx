import Hero from "@/components/Hero";
import CarCatalogue from "@/components/CarCatalogue";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: {
  searchParams?: { [key: string]: string | undefined }
}) {
  // safely access searchParams
  const manufacturer = searchParams?.manufacturer || "";
  const year = Number(searchParams?.year) || 2022;
  const fuel = searchParams?.fuel || "";
  const limit = Number(searchParams?.limit) || 10;
  const model = searchParams?.model || "";

  const allCars = await fetchCars({
    manufacturer,
    year,
    fuel,
    limit,
    model,
  });

  return (
    <>
      <Hero />
      <CarCatalogue data={allCars} />
    </>
  );
}
