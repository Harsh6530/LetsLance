export default function Hero() {
  return (
    // <section className="relative flex h-[95vh] w-full overflow-hidden mobile:mb-6 mobile:mt-24 mobile:flex mobile:h-auto mobile:flex-col-reverse">
    //   <video
    //     src="/videos/contact-us.mp4"
    //     className="absolute bottom-0 right-0 -z-1 hidden translate-x-9 scale-125 mobile:static mobile:translate-x-0 mobile:scale-105"
    //     autoPlay
    //     muted
    //     loop
    //   />
    //   <img
    //     src="https://www.shareicon.net/data/2017/07/13/888376_office_512x512.png"
    //     alt="touch"
    //     className="basis-1/2"
    //   />

    //   <div className="p-page relative flex h-full w-3/5 flex-col justify-center gap-y-5 mobile:h-auto mobile:w-full mobile:gap-y-3">
    //     <h1 className="text-5xl font-semibold mobile:text-3xl">
    //       Let's Get in touch
    //     </h1>
    //     <h2 className="text-3xl tracking-wide mobile:text-sm widescreen:whitespace-nowrap">
    //       Do you have any queries? We're here to talk!
    //     </h2>
    //     <p className="mobile:text-sm">
    //       <br />
    //       Have a question, a project idea, or simply want to learn more about
    //       our services? Don't hesitate to get in touch with us. At LetsLanceHK,
    //       we value open communication and are here to provide you with the
    //       information and assistance you need.
    //       <br />
    //       <br />
    //       Our team of experts is ready to guide you through the process,
    //       understand your requirements, and offer tailored solutions that align
    //       with your business goals. We believe in building strong and lasting
    //       partnerships, and your satisfaction is our top priority.
    //     </p>

    //     <h3
    //       className="pointer-events-none absolute bottom-20 left-1/2 -translate-x-1/2 cursor-default whitespace-nowrap rounded-md border border-primary bg-primary bg-opacity-10
    //     px-10 py-2 text-xl text-primary selection:hidden mobile:static mobile:mt-3 mobile:translate-x-0 mobile:p-2 mobile:text-base"
    //     >
    //       Don't forget to Claim your{" "}
    //       <span className="text-2xl font-bold mobile:text-lg">Free</span>{" "}
    //       Quotation!
    //     </h3>
    //   </div>
    // </section>
    <section className="relative -z-10 h-[83vh] mobile:overflow-clip">
      <div className="fixed left-0 top-0 h-full w-full">
        <img
          src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg="
          className="h-[88vh] w-full object-cover"
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-front bg-opacity-70" />
        <div className="p-page absolute left-0 top-36 flex h-full w-full">
          <div className="flex w-[70%] flex-col gap-y-5 mobile:w-[90%] mobile:pt-16 ">
            <h1 className="font-tienne text-5xl font-medium leading-tight text-back drop-shadow-lg">
              Do you have any queries? We're here to talk!
            </h1>
            <p className="text-lg text-back mobile:text-base">
              Have a question, a project idea, or simply want to learn more
              about our services? Don't hesitate to get in touch with us. At
              LetsLanceHK, we value open communication and are here to provide
              you with the information and assistance you need.
              <br />
              Our team of experts is ready to guide you through the process,
              understand your requirements, and offer tailored solutions that
              align with your business goals. We believe in building strong and
              lasting partnerships, and your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
      {/* <h3
        className="pointer-events-none absolute bottom-20 left-1/2 z-[10] -translate-x-1/2 cursor-default whitespace-nowrap rounded-md border border-primary bg-white
        px-10 py-2 text-xl text-primary selection:hidden mobile:static mobile:mt-3 mobile:translate-x-0 mobile:p-2 mobile:text-base"
      >
        Don't forget to Claim your{" "}
        <span className="text-2xl font-bold mobile:text-lg">Free</span>{" "}
        Quotation!
      </h3> */}
    </section>
  );
}
