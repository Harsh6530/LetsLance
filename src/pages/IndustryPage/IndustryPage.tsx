import { Navigate, useLocation, useParams } from "react-router-dom";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Industry } from "../../interfaces/Data";
import { Project } from "../../interfaces/Data";
import Projects from "./components/Projects";

export default function IndustryPage() {
  let { id } = useParams();
  const industryId = Number(id);
  if (!industryId) return <Navigate to="/" />;
  const [industry, setIndustry] = useState<Industry | null>(null);

  const location = useLocation();

  const [_, loading] = useFetch<Industry[]>("/data/industries.json", {
    callback: (data) => {
      setIndustry(data.filter((i) => i.id === industryId)[0]);
    },
    dependancies: [location],
  });

  return (
    <>
      {industry ? (
        <>
          {!loading && <Hero industry={industry} />}
          {!loading && <Projects industry={industry} />}
        </>
      ) : (
        <div className="flex h-screen items-center justify-center text-3xl font-medium italic">
          Loading...
        </div>
      )}
    </>
  );
}
