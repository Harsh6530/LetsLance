import MaterialIcon from "../../../common/MaterialIcon";
import useModal from "../../../hooks/useModal";

export default function ImageModal(props: { image: string }) {
  const modal = useModal();
  return (
    <div className="relative w-[60%] overflow-hidden rounded-[2rem] bg-primary mobile:w-[90%]">
      <button
        className="absolute right-4 top-4 z-[110] text-back hover:cursor-pointer mobile:top-2"
        onClick={() => {
          modal.hide();
        }}
      >
        <MaterialIcon codepoint="e5cd" className="text-[2rem]" />
      </button>
      <div className="top-0 px-12 pt-3 text-[3rem] font-extrabold text-back opacity-50 mobile:px-2 mobile:text-xl">
        Better view, Better Work!
      </div>
      <img src={props.image} alt="image" />
    </div>
  );
}
