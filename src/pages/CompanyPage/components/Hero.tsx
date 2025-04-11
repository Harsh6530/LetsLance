import { Link } from "react-router-dom";

export default function Hero() {
  return (
    // <section className="p-page flex flex-col items-center justify-center ">
    //   <h1 className="font-poppins mb-4 text-4xl font-bold text-front md:text-6xl mobile:text-center">
    //     Welcome to LetsLanceHK
    //   </h1>
    //   <p className="text-center text-lg text-front md:text-xl mobile:text-base">
    //     Your premier destination for top-notch tech outsourcing, website
    //     development, app development, and more.
    //   </p>
    //   <Link
    //     to="/contact"
    //     className="font-poppins mt-8 rounded-full bg-primary px-6 py-2 text-lg font-bold text-background transition duration-300 hover:bg-secondary mobile:text-base mobile:font-medium"
    //   >
    //     Get Started
    //   </Link>
    //   <div className="mt-8 flex w-[40%] overflow-hidden rounded-xl mobile:flex-col">
    //     <img
    //       src="https://static.vecteezy.com/system/resources/thumbnails/003/501/096/small/team-work-icons-composition-vector.jpg"
    //       className="w-full"
    //     />{" "}
    //     {/* <video src="" className="w-1/2 mobile:hidden" autoPlay muted loop /> */}
    //   </div>
    // </section>
    <section className="relative -z-10 h-[83vh]  mobile:overflow-clip">
      <div className="fixed left-0 top-0 h-full w-full">
        <img
          src="https://hongkongbusiness.hk/sites/default/files/styles/opengraph/public/2023-05/hong_kong_buildings.jpg?h=920929c4&itok=elMgwav5"
          className="h-[88vh] w-full object-cover"
        />
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-front bg-opacity-80" />
        <div className="p-page absolute left-0 top-0 flex h-full w-full ">
          <div className="flex w-1/2 flex-col gap-y-5 mobile:w-[90%] mobile:pt-48 widescreen:justify-center">
            <h1 className="font-tienne text-5xl font-medium leading-tight text-back drop-shadow-lg">
              Welcome to LetsLanceHK
            </h1>
            <p className="text-lg text-back">
              Your premier destination for top-notch tech outsourcing, website
              development, app development, and more.
            </p>
            {/* <Link
              to="/contact"
              className="font-poppins absolute top-96 z-[1] mt-28 w-max rounded-full  bg-background px-6 py-2 text-lg font-bold text-primary transition duration-300 hover:cursor-pointer hover:bg-secondary mobile:mt-16 mobile:text-base mobile:font-medium"
            >
              Get Started
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
