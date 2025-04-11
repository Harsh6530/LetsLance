import { Link } from "react-router-dom";
import MaterialIcon from "../../../common/MaterialIcon";
import useFetch from "../../../hooks/useFetch";
import { Service } from "../../../interfaces/Data";

export default function ServiceSection() {
  const [services] = useFetch<Service[]>("/data/services.json");
  return (
    <div className="p-page flex flex-col gap-y-8 bg-background py-16 text-primary">
      <div className="border-b-2 border-primary text-[2rem] font-bold">
        Services we provide
      </div>
      <div className="flex flex-wrap gap-x-12 gap-y-12">
        {services &&
          services.map(
            (service, i) =>
              service.id < 5 && (
                <Link
                  to={`/services/${service.id}`}
                  className="group flex w-[45%] flex-col gap-y-4 rounded-[1rem] bg-primary px-6 py-6 text-back hover:cursor-pointer mobile:w-full"
                  key={i}
                >
                  <div className="self-center">
                    <MaterialIcon
                      codepoint={service.codepoint}
                      className="text-[5rem]"
                    />
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <div className="border-b pb-2 text-2xl">
                      {service.title}
                    </div>
                    <div className="">{service.description}</div>
                  </div>
                  <div className="flex h-[3px] w-[6ch] items-center justify-end  bg-back duration-300 group-hover:w-[8ch] mobile:w-[4ch]">
                    <MaterialIcon
                      codepoint="e409"
                      className="translate-x-3 text-[2rem] font-thin"
                    />
                  </div>
                </Link>
              )
          )}
      </div>
    </div>
  );
}
