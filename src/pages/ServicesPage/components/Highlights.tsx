import MaterialIcon from "../../../common/MaterialIcon";
import { Service } from "../../../interfaces/Data";
export default function Highlights(props: { service: Service }) {
  return (
    <div className="p-page flex flex-wrap justify-around gap-x-12 gap-y-12 bg-background py-12">
      {props.service.highlights.map((highlight, i) => (
        <div
          className="flex w-[30%] flex-col gap-y-4 rounded-[3rem] bg-back px-6 py-8 text-primary mobile:w-full"
          key={i}
        >
          <MaterialIcon
            codepoint={highlight.codepoint}
            className="self-center text-[5rem]"
          />
          <div className="flex flex-col gap-y-4 self-center text-center">
            <div className="border-b-2  pb-2 text-2xl font-bold">
              {highlight.title}
            </div>
            <div>{highlight.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
