import { Link } from "react-router-dom";
import MaterialIcon from "../../../common/MaterialIcon";
import useFetch from "../../../hooks/useFetch";
import { Project } from "../../../interfaces/Data";
import { Industry } from "../../../interfaces/Data";

export default function AllInsight() {
  const [projects] = useFetch<Project[]>("/data/projects.json");
  const [industries] = useFetch<Industry[]>("/data/industries.json");

  function findTitle(ids: number[], industries: Industry[]) {
    return industries
      .filter((item: Industry) => ids.includes(item.id))
      .map((item: Industry) => item.title);
  }
  return (
    <div className="p-page bg-background py-12">
      <div className="flex flex-col gap-y-2">
        <div className="text-[2.5rem] font-bold">All Insight</div>
        <div className="h-[3px] rounded-xl bg-primary" />
      </div>

      <div className="flex flex-wrap justify-around gap-y-8 pt-12 mobile:justify-end mobile:pt-4">
        {/* <div className="flex w-[32%] flex-col gap-y-2">
          <div className="flex flex-row items-center gap-x-2">
            <MaterialIcon codepoint="e429" className="text-xl" />
            <div className="text-lg">Filter Insight</div>
          </div>
          <div className="flex flex-row justify-between border-b-2 border-primary pb-2">
            <div className="font-semibold">All Categories</div>
            <MaterialIcon codepoint="e5cf" />
          </div>
        </div> */}
        {projects &&
          industries &&
          projects.map((project, i) => (
            <Link
              to={`/projects/${project.id}`}
              key={i}
              className="flex w-[32%] flex-col overflow-hidden rounded-2xl bg-primary mobile:w-[100%]"
            >
              <img src={project.images[0]} alt="img" />

              <div className="flex flex-1 flex-col justify-between gap-y-2 px-4 py-6 text-back mobile:gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-wrap">
                    {/* {findTitle(project.industry, industries).map(
                        (title: string, i) =>
                          i < 2 && (
                            <div
                              key={i}
                              className={`${
                                i > 0
                                  ? "border-l-2 border-back border-opacity-50 pl-2"
                                  : "pr-2"
                              } w-max text-sm`}
                            >
                              {title}
                            </div>
                          )
                      )} */}
                  </div>
                  <div className="border-b border-back pb-1 text-2xl font-bold">
                    {project.name}
                  </div>
                  <div>
                    <div className="text-lg">{project.title}:</div>
                    <div className="text-[0.9rem]">{project.description}</div>
                  </div>
                </div>
                <button className="self-end rounded-2xl bg-back px-4 py-1 text-[1.15rem] text-front duration-300 hover:-translate-y-1">
                  Check out
                </button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
