import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  color: string;
  link: string;
}

const projects: Project[] = [
  {
    image: "/images/projects/shantitrip.png",
    title: "ShantiTrip",
    description:
      "Facilitating great travel experiences is all we care about. We go out of our way to make sure you travel your way, and with zero anxiety.",
    color: "#ef9494",
    link: "https://www.shantitrip.in",
  },
  {
    image: "/images/projects/ideavault.png",
    title: "Ideavault",
    description:
      "ideavault is a fintech company building a trusted financial ecosystem with advisors, brokers and other market participants for the investor. Our products are to be used everyday across the Hong Kong capital markets landscape by the most respected brands to provide delightful customer experiences.",
    color: "#93d6f2",
    link: "https://www.ideavaulthk.com",
  },
  {
    image: "/images/projects/business-unlimited.png",
    title: "Business Unlimited",
    description:
      "Business Unlimited is dedicated to helping individuals and businesses achieve their financial and personal growth goals. Our team of experts provides comprehensive 360-degree development programs to steer you towards your 'Rich Life.'",
    color: "#9bb271",
    link: "https://business-unlimited.biz/",
  },
];

export default function Projects() {
  return (
    <section className="p-page py-12">
      <div className="flex flex-col gap-y-6 text-center mobile:gap-y-3">
        <h1 className="text-5xl font-semibold mobile:text-3xl">
          Some of our work
        </h1>
        <p className="text-lg mobile:text-sm">
          Here are a few projects we are proud of and would love to highlight
          them for you
        </p>
      </div>
      <div className="flex flex-col gap-y-20 py-20">
        {projects.map((project, i) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
      <div
        className="flex -translate-x-3 translate-y-3 gap-x-10 rounded-sm  p-8 duration-300 after:absolute after:left-0 after:top-0 after:-z-1 after:h-full after:w-full
        after:-translate-y-6 after:translate-x-6 after:bg-inherit after:opacity-50 after:duration-inherit hover:translate-x-0 hover:translate-y-0 hover:after:translate-x-0
        hover:after:translate-y-0 mobile:flex-col"
        style={{ backgroundColor: project.color }}
      >
        <img
          src={project.image}
          className="w-1/3 rounded mobile:w-full mobile:self-center"
          alt={project.title}
        />
        <div className="flex flex-col gap-y-5 py-2 text-black mobile:py-5">
          <h4 className="text-3xl font-semibold mobile:text-2xl">
            {project.title}
          </h4>
          <p className="text-lg mobile:text-sm">{project.description}</p>
          <Link
            to={project.link}
            target="__blank"
            className="w-max rounded-md bg-black bg-opacity-50 px-6 py-1 text-lg text-white duration-300 hover:scale-105"
          >
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
