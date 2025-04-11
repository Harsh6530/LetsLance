export default function Hero() {
  return (
    <section className="relative -z-10 h-[83vh]">
      <div className="fixed left-0 top-0 h-full w-full">
        <img
          src="https://free4kwallpapers.com/uploads/originals/2021/03/01/hong-kong-skyline.-wallpaper_.jpg"
          className="h-[88vh] w-full object-cover"
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-front bg-opacity-60" />
        <div className="p-page absolute left-0 top-0 flex h-full w-full">
          <div className="flex w-1/2 flex-col justify-center gap-y-5 mobile:w-full">
            <h1 className="font-tienne text-5xl font-medium leading-tight text-back drop-shadow-lg">
              Unlocking Your Digital Potential, One Project at a Time
            </h1>
            <p className="text-lg text-back mobile:text-xl">
              Our flexible business models enable clients to utilize on-demand
              skills of our software engineers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
