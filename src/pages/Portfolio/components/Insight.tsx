import useFetch from "../../../hooks/useFetch";
import { Industry, Project } from "../../../interfaces/Data";

export default function Insight() {
  const [projects] = useFetch<Project[]>("/data/projects.json");
  const [industries] = useFetch<Industry[]>("/data/industries.json");

  function findTitle(ids: number[], industries: Industry[]) {
    return industries
      .filter((item: Industry) => ids.includes(item.id))
      .map((item: Industry) => item.title);
  }
  return (
    <section className="p-page flex flex-col gap-y-4 rounded-t-[2rem] bg-back py-20 mobile:gap-y-2 mobile:py-12">
      <div className="font-tienne text-[2.5rem]">Our Portfolio</div>
      <div className="flex gap-x-16 mobile:flex-col mobile:gap-y-12">
        <div className=" relative overflow-hidden rounded-[1rem] bg-primary shadow-[rgba(0,_0,_0,_0.55)_0px_25px_50px_-12px]">
          <div className="absolute bottom-6 rounded-r-3xl bg-back py-2 pl-4 pr-6 text-xl font-bold text-front shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            Featured insight
          </div>
          <img
            src="/images/portfolio-banner.png"
            alt="collage"
            className="aspect-auto "
          />
        </div>
        <div className="flex basis-1/2 flex-col gap-y-6 mobile:gap-y-4">
          <div className="text-3xl">Featured</div>
          <div className="flex flex-col gap-y-4 mobile:gap-y-4">
            {projects &&
              industries &&
              projects.map(
                (project, i) =>
                  i < 4 && (
                    <div className="border-t pt-2 mobile:pt-1">
                      {/* <div className="flex flex-row">
                        {findTitle(project.industry, industries).map(
                          (title: string, i) => (
                            <div
                              key={i}
                              className={`${
                                i > 0
                                  ? "border-l-2 border-primary border-opacity-50 pl-2"
                                  : "pr-2"
                              } text-sm`}
                            >
                              {title}
                            </div>
                          )
                        )}
                      </div> */}
                      <div className="text-lg font-semibold">
                        {project.name}:
                      </div>
                      <div className="text-base">{project.title}</div>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
