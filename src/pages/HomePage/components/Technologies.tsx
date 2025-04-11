import useFetch from "../../../hooks/useFetch";
import { Project, Skill } from "../../../interfaces/Data";

export default function Technologies() {
  const [skills] = useFetch<Skill[]>("/data/skills.json");
  return (
    <section className="p-page relative flex flex-col gap-y-8 overflow-hidden bg-primary py-16 text-back mobile:items-center">
      <div className="absolute left-0 top-0 z-[8] h-full w-full bg-front bg-opacity-80 mobile:hidden" />
      <div className="absolute left-0 top-0 w-full mobile:hidden">
        <img
          src="https://t4.ftcdn.net/jpg/04/87/58/29/360_F_487582961_L9BTMIHHiUEJZZUpEVyMfwdbNY7Vg55d.jpg"
          className="w-full "
        />
      </div>
      <div className="z-[10] border-b-2 pb-2 text-3xl ">
        Technologies we have worked with
      </div>
      <div className="z-[10] flex w-full flex-wrap justify-center gap-x-8 gap-y-8">
        {skills &&
          skills.map((skill, i) => (
            <div className="aspect-square w-[6ch]" key={i}>
              <img src={skill.imageUrl} alt={skill.name} />
            </div>
          ))}
      </div>
    </section>
  );
}
