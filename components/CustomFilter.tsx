"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options = [] }: CustomFilterProps) => {
  const router = useRouter();

  const [selected, setSelected] = useState(options.length > 0 ? options[0] : "");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0]);
    }
  }, [options]);

  const handleUpdateParams = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value.toLowerCase();
    setSelected(newValue);

    const newPathname = updateSearchParams(title, newValue);
    router.push(newPathname);
  };

  if (!options || options.length === 0) {
    return <div className="text-red-500">No options provided</div>;
  }

  return (
    <div className="w-fit">
      <select
        className="bg-light-white rounded-lg px-3 py-2 text-sm outline-none cursor-pointer"
        onChange={handleUpdateParams}
        value={selected}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomFilter;
