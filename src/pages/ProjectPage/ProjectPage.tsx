import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Project } from "../../interfaces/Data";
import useFetch from "../../hooks/useFetch";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import OtherProject from "./components/OtherProjects";
export default function ProjectPage() {
  let { id } = useParams();
  const projectId = Number(id);
  if (!projectId) return <Navigate to="/" />;
  const [project, setProject] = useState<Project | null>(null);

  useFetch<Project[]>("/data/projects.json", {
    callback: (data) => {
      setProject(data.filter((i) => i.id === projectId)[0]);
    },
  });

  return (
    <>
      {project ? (
        <>
          <Hero
            title={project.title}
            name={project.name}
            description={project.description}
          />
          <Gallery images={project.images} />
          {/* <OtherProject id={projectId} /> */}
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}
