import { Service } from "../../../interfaces/Data";
export default function Hero(props: { service: Service }) {
  return (
    <section className="relative -z-10 h-[90vh] mobile:overflow-clip">
      <div className="fixed left-0 top-0 h-full w-full">
        <img
          src="https://images.pexels.com/photos/872698/pexels-photo-872698.jpeg?cs=srgb&dl=pexels-nextvoyage-872698.jpg&fm=jpg"
          className="h-[88vh] w-full object-cover"
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-front bg-opacity-90" />
        <div className="p-page absolute left-0 top-0 flex h-full w-full items-center gap-x-12">
          <div className="flex w-[55%] flex-col gap-y-5 mobile:w-[90%] mobile:pt-12 widescreen:justify-center">
            <h1 className="font-tienne text-5xl font-medium leading-tight text-back drop-shadow-lg mobile:text-4xl">
              {props.service.title}
            </h1>
            <p className="text-lg text-back mobile:text-sm">
              {props.service.description}
            </p>
          </div>
          <div className="aspect-auto w-[40%] mobile:hidden">
            <img
              src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"
              alt="computer"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
