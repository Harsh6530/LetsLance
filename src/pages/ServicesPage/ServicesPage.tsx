import { Navigate, useLocation, useParams } from "react-router-dom";
import Hero from "./components/Hero";
import { useState } from "react";
import { Service } from "../../interfaces/Data";
import useFetch from "../../hooks/useFetch";
import Highlights from "./components/Highlights";

export default function ServicePage() {
  let { id } = useParams();
  const serviceId = Number(id);
  if (!serviceId) return <Navigate to="/" />;
  const [service, setService] = useState<Service | null>(null);

  const location = useLocation();
  useFetch<Service[]>("/data/services.json", {
    callback: (data) => {
      setService(data.filter((i) => i.id === serviceId)[0]);
    },
    dependancies: [location],
  });

  return (
    <>
      {service && <Hero service={service} />}
      {service && <Highlights service={service} />}
    </>
  );
}
