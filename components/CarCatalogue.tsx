// components/CarCatalogue.tsx

"use client";

import { CarProps } from "@/types";
import CarCard from "./CarCard";

interface CarCatalogueProps {
    data: CarProps[];
}

const CarCatalogue = ({ data }: CarCatalogueProps) => {
    if (!Array.isArray(data)) {
        return <p>No cars found</p>;
    }

    return (
        <section>
            <div className="car-catalogue__cars-wrapper">
                {data.map((car, index) => (
                    <CarCard key={index} car={car} />
                ))}
            </div>
        </section>
    );
};

export default CarCatalogue;
