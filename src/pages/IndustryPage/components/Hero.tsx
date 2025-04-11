import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Industry, Project } from "../../../interfaces/Data";
import { useLocation } from "react-router-dom";
import { useForceUpdate } from "../../../hooks/useForceUpdate";

export default function Hero(props: { industry: Industry }) {
  const [projects, setProjects] = useState<Project[] | null>([]);

  const location = useLocation();

  useFetch<Project[]>("/data/projects.json", {
    callback: (data) => {
      setProjects(data.filter((i) => props.industry?.projects.includes(i.id)));
    },
    dependancies: [location],
  });

  return (
    <section className="relative -z-10 h-[75vh]">
      <div className="h-[80vh]" />
      <img
        src={props.industry.image}
        className="fixed left-0 top-0 h-[80vh] w-full object-cover"
      />

      <div className="fixed left-0 top-0 z-0 h-full w-full bg-front bg-opacity-60" />
      <div className="p-page fixed top-0 flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h1 className="font-tienne text-5xl font-medium leading-tight text-back drop-shadow-lg">
            {props.industry.title}
          </h1>
          <p className="text-lg text-back">{props.industry.description}</p>
        </div>
        <div className="flex gap-x-2 mobile:flex-wrap mobile:justify-center mobile:gap-y-2">
          {projects &&
            projects?.map((project, i) => (
              <div
                className="w-max rounded-2xl bg-back px-4 py-2 font-bold text-front"
                key={i}
              >
                {project.name}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
