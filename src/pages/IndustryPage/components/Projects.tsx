import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Industry, Project } from "../../../interfaces/Data";
import { useLocation, Link } from "react-router-dom";

export default function Projects(props: { industry: Industry }) {
  const [projects, setProjects] = useState<Project[] | null>(null);

  const location = useLocation();

  useFetch<Project[]>("/data/projects.json", {
    callback: (data) => {
      setProjects(data.filter((i) => props.industry?.projects.includes(i.id)));
    },
    dependancies: [location],
  });

  return (
    <div className="z-100 flex flex-col">
      <div className="h-12 rounded-t-3xl bg-background" />
      {projects?.map((project, i) => (
        <div
          key={i}
          className={`p-page flex gap-x-8 mobile:flex-col mobile:py-16 widescreen:py-14 ${
            i % 2 != 0 ? "flex-row-reverse bg-back text-end" : "bg-background"
          }`}
        >
          <img
            src={project.images[0]}
            alt="image"
            className="w-[50%] rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] mobile:w-[100%]"
          />
          <div className="flex w-full flex-col gap-y-8 px-4 pt-16 mobile:gap-y-4">
            <div className="font-bold">{props.industry.title}</div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <div className="text-3xl font-semibold">{project.name}</div>
                <div className="h-[2px] w-[100%] bg-primary " />
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="text-xl">{project.title}</div>
                <div>{project.description}</div>
              </div>
            </div>
            <Link
              className={` ${
                i % 2 == 0 ? "self-end" : "self-start"
              } rounded-2xl bg-primary px-4 py-2 text-xl font-semibold text-back duration-300 hover:-translate-y-1 mobile:self-start`}
              to={project.link}
              target="__blank"
            >
              Visit Website
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
