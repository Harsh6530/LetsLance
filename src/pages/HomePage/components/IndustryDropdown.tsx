import { Link, NavLink, useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { Industry } from "../../../interfaces/Data";
import { useState } from "react";
import MaterialIcon from "../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";

export default function IndustryDropdown() {
  const [industries] = useFetch<Industry[]>("/data/industries.json");
  const [expand, setExpand] = useState(false);

  return (
    <section className="p-page flex flex-col gap-y-6 rounded-t-[3rem] bg-background py-24 mobile:py-16">
      <div className="flex flex-col gap-y-2">
        <div className="font-tienne text-[2.5rem] font-light mobile:text-[2rem]">
          Solving with precision, delivering with pride
        </div>
        <div className="w-[50%] text-lg font-semibold mobile:w-[100%]">
          Whether it's small start-ups in the ideation stage, mid-sized
          companies concentrating on growth, or major corporations actively
          optimising operations across various industries, we excel at
          delivering the best-suited solution as per the specific demands.
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-x-6 gap-y-4 text-lg mobile:text-base">
        {industries &&
          industries.map(
            (industry, i) =>
              industry.id < (expand ? Infinity : 7) && (
                <Link
                  to={`/industries/${industry.id}`}
                  className="whitespace-nowrap rounded-3xl bg-back px-4 py-2 text-front duration-300 hover:scale-110 hover:cursor-pointer hover:bg-opacity-60"
                  key={i}
                >
                  {industry.title}
                </Link>
              )
          )}
        <button
          className="flex items-center"
          onClick={() => setExpand((e) => !e)}
        >
          <p>show {expand ? "less" : "more"}</p>
          <MaterialIcon codepoint={expand ? "e5ce" : "e5cf"} />
        </button>
      </div>
    </section>
  );
}
