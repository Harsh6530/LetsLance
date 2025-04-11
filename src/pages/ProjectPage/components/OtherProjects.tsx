import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Project } from "../../../interfaces/Data";
import useFetch from "../../../hooks/useFetch";
export default function OtherProject(props: { id: number }) {
  let { id } = useParams();
  const projectId = Number(id);
  if (!projectId) return <Navigate to="/" />;
  const [projects, setProjects] = useState<Project[] | null>(null);

  useFetch<Project[]>("/data/projects.json", {
    callback: (data) => {
      setProjects(data);
    },
  });
  return (
    <div>
      {projects &&
        projects.map((project, i) => <div key={i} className=""></div>)}
    </div>
  );
}
