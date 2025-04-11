import MaterialIcon from "../../../common/MaterialIcon";

export default function Hero(props: {
  name: string;
  title: string;
  description: string;
}) {
  const technologies = [
    {
      name: "Javascript",
      codepoint: "eb7c",
    },
    {
      name: "React",
      codepoint: "ead3",
    },
    {
      name: "ExpressJs",
      codepoint: "e86f",
    },
    {
      name: "NodeJs",
      codepoint: "e1b0",
    },
  ];
  return (
    <section className="relative -z-10 h-[100vh] bg-primary py-28 text-back">
      <div className="p-page fixed flex h-full w-full flex-col items-start gap-y-16 text-start mobile:gap-y-12">
        <div className="flex flex-col items-start justify-center gap-y-4 mobile:gap-y-2">
          <div className="flex flex-col items-center justify-center">
            <div className="self-start font-tienne text-5xl font-medium leading-tight drop-shadow-lg">
              {props.name}
            </div>
            <div className="self-start text-lg">{props.title}</div>
          </div>
          <div className="h-[1px] w-full bg-white bg-opacity-20" />
          <div className="w-[60%] text-xl mobile:w-[100%]">
            {props.description}
          </div>
        </div>
        <div className="flex flex-col gap-y-6 self-start">
          <div className="w-full border-b-2 border-back border-opacity-20 pb-2 text-start text-2xl">
            Technologies Used
          </div>
          <div className="flex gap-x-12 mobile:flex-wrap mobile:gap-y-6">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className=" relative flex aspect-square min-w-[35%] flex-col items-center justify-center bg-back text-2xl text-front duration-300 before:absolute before:left-0 before:top-0
                before:-z-1 before:h-full before:w-full before:-translate-y-2 before:translate-x-2 before:bg-back before:bg-opacity-30 before:duration-inherit before:content-visible
                hover:-translate-y-1 hover:translate-x-1 hover:before:-translate-x-1 hover:before:translate-y-1 mobile:min-w-[35%]"
              >
                <MaterialIcon
                  codepoint={tech.codepoint}
                  className="text-[2rem]"
                />
                <div>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-y-2 self-center">
          <div className="text-xl ">Explore the project gallery</div>
          <img
            src="https://recruitinginmotion.com/wp-content/uploads/2018/02/scrolldown.gif"
            alt="scroll"
            className="w-[15%] invert"
          />
        </div>
      </div>
    </section>
  );
}
