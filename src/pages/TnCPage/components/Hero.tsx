export default function Hero() {
  return (
    <section className="relative -z-10 h-[83vh] mobile:overflow-clip">
      <div className="fixed left-0 top-0 h-full w-full">
        <img
          src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg="
          className="h-[88vh] w-full object-cover"
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-front bg-opacity-70" />
        <div className="p-page absolute left-0 top-48 flex h-full w-full justify-center">
          <div className="flex flex-col gap-y-5 mobile:w-[90%] mobile:pt-32 ">
            <h1 className="font-tienne text-[6rem] font-medium leading-tight text-back drop-shadow-lg mobile:text-[4rem]">
              Terms of Use
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
