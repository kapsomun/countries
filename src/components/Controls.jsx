"use client";

import React, { useMemo, useState } from "react";
import Search from "./Search";
import CustomSelect from "./CustomSelect";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Controls = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("Filter by region");

  const switchRegion = useMemo(() => {
    return (newRegion) => {
      setRegion((currentRegion) =>
        newRegion === currentRegion ? region : newRegion
      );
    };
  }, [region]);

  return (
    <div className="container">
      <div className="controls">
        <Search search={search} setSearch={setSearch} />
        <CustomSelect
          options={options}
          region={region}
          switchRegion={switchRegion}
        />
      </div>
    </div>
  );
};

export default Controls;
