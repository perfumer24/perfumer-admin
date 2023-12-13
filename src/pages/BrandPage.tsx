import React from "react";
import useBrandsQuery from "../hooks/useBrandsQuery";

export default function BrandPage() {
  const { data: brands, isLoading, isError } = useBrandsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.ko_name}</li>
        ))}
      </ul>
    </div>
  );
}
