import MaterialIcon from "../../../common/MaterialIcon";
import useModal from "../../../hooks/useModal";
import ImageModal from "./ImageModal";

export default function Gallery(props: { images: string[] }) {
  const modal = useModal();
  return (
    <div className="p-page relative flex w-full flex-wrap gap-y-12 overflow-hidden rounded-t-[2rem] bg-background pb-24 mobile:pt-32">
      {/* <div className="absolute left-0 top-0 flex w-full bg-transparent font-tienne text-[12rem] font-extrabold tracking-wide opacity-40 mobile:hidden">
        Image Gallery
      </div>
      <div className="absolute left-2 top-0 flex w-full bg-transparent font-tienne text-[6rem] font-extrabold tracking-wide opacity-40 widescreen:hidden">
        Gallery
      </div> */}
      <div className="z-10 flex flex-wrap justify-between gap-y-24 mobile:gap-y-12">
        {props.images.map((image, i) => (
          <div
            key={i}
            className=" hover:before:scale-y-4 group relative flex w-[30%] flex-col gap-y-2 duration-300 before:absolute before:left-0 before:top-0
          before:-z-1 before:h-full before:w-full before:translate-x-4 before:translate-y-4 before:scale-y-90 before:rounded-xl before:bg-primary before:bg-opacity-60 before:duration-inherit before:content-visible
         hover:before:translate-x-2 hover:before:translate-y-1 hover:before:scale-x-110 hover:before:scale-y-[120%] hover:before:bg-opacity-100 mobile:w-[95%]"
          >
            <img src={image} alt="image" className="rounded-xl " />
            <button
              className="self-end text-back opacity-0 hover:cursor-pointer group-hover:opacity-100 mobile:opacity-100"
              onClick={() => {
                modal.show(<ImageModal image={image} />);
              }}
            >
              <MaterialIcon codepoint="e89e" className="text-3xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
