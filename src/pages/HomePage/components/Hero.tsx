export default function Hero() {
  return (
    <section className="relative -z-10 h-[83vh] mobile:overflow-clip">
      <div className="fixed left-0 top-0 h-full w-full">
        <video
          src="/videos/hero.mp4"
          className="h-[88vh] w-full object-cover"
          autoPlay
          muted
          loop
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-front bg-opacity-80" />
        <div className="p-page absolute left-0 top-0 flex h-full w-full">
          <div className="flex w-1/2 flex-col gap-y-5 mobile:w-[90%] mobile:pt-32 widescreen:justify-center">
            <h1 className="font-tienne text-5xl font-medium leading-tight text-back drop-shadow-lg mobile:text-4xl">
              We help bring your ideas to life with our Tech expertise.
            </h1>
            <p className="text-lg text-back">
              With flawless quality, we not only build websites and apps but
              help your company reach new heights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BG() {
  return (
    <div className="absolute left-0 top-0 -z-10 h-full w-full mobile:-rotate-90 mobile:scale-50">
      <div className="absolute left-28 top-40 h-20 w-20 rounded-md bg-primary bg-opacity-10" />
      <div className="absolute bottom-40 left-28 h-24 w-32 rounded-md bg-foreground bg-opacity-10" />
      <div className="absolute left-80 top-56 h-24 w-44 rounded-md bg-foreground bg-opacity-20" />
      {/* <div className="absolute bottom-40 left-72 h-36 w-20 rounded-md bg-primary bg-opacity-10" /> */}
      <div className="absolute left-[25rem] top-20 h-20 w-10 rounded-md bg-back bg-opacity-10" />
      <div className="absolute bottom-52 left-[38rem] h-52 w-32 rounded-md bg-foreground bg-opacity-10" />
      {/* <div className="absolute bottom-10 left-[27rem] h-40 w-32 rounded-md bg-foreground bg-opacity-10" /> */}
      <div className="absolute bottom-16 left-80 h-16 w-32 rounded-md bg-secondary bg-opacity-10" />
      <div className="absolute right-28 top-40 h-24 w-32 rounded-md bg-foreground bg-opacity-10" />
      <div className="absolute right-96 top-32 h-14 w-52 rounded-md bg-back bg-opacity-10" />
    </div>
  );
}
