"use client";

import axios from "axios";
import Controls from "@/components/Controls";
import List from "@/components/List";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "@/config";
import Card from "@/components/Card";

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <main className="main">
      <Controls />
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name.common,
            info: [
              {
                title: "Population",
                description: c.population,
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital[0],
              },
            ],
          };
          return <Card key={c.name.common} {...countryInfo} />;
        })}
      </List>
    </main>
  );
}
