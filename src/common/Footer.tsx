import { Link } from "react-router-dom";

const footerItems = [
  {
    title: "Explore",
    features: [
      { title: "Home", to: "/" },
      { title: "Company", to: "/company" },
    ],
  },
  {
    title: "About",
    features: [
      {
        title: "Our Story",
        to: "/company",
      },
    ],
  },
  {
    title: "Legal",
    features: [
      {
        title: "Terms of use",
        to: "/TermsAndConditions",
      },
      {
        title: "Privacy",
        to: "/privacy",
      },
    ],
  },
];

const socials = [
  {
    name: "LinkedIn",
    icon: "https://img.icons8.com/ios/50/linkedin.png",
    link: "https://www.linkedin.com/company/letslancehk",
  },
  // {
  //   name: "Instagram",
  //   icon: "https://img.icons8.com/ios/50/instagram.png",
  //   link: "",
  // },
  // {
  //   name: "Facebook",
  //   icon: "https://img.icons8.com/ios/50/facebook-new.png",
  //   link: "",
  // },
];

export default function Footer() {
  return (
    <section className="relative bg-background">
      {/* <h1 className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-[30%] text-center text-[10rem] font-extrabold tracking-wider text-primary">
        LETSLANCE
      </h1> */}
      <footer className="p-page relative flex flex-row rounded-t-[4rem] bg-primary pb-8 pt-16 text-white mobile:flex-col mobile:rounded-t-[2rem] mobile:pb-8">
        <div className="basis-3/5">
          <div className="text-xl font-bold uppercase tracking-wider text-foreground">
            The one-stop destination for tech outsourcing
          </div>
          <div className="my-8 flex flex-row justify-between gap-x-8">
            {footerItems.map((item, i) => (
              <div key={i} className="flex flex-col gap-y-3">
                <div className="text-xl font-medium"> {item.title}</div>
                <div className="text-md flex flex-col gap-y-2">
                  {item.features.map((feature, k) => (
                    <Link
                      className="duration-150 hover:scale-110 hover:cursor-pointer"
                      to={feature.to}
                      key={k}
                    >
                      {feature.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col items-end mobile:items-center">
          <div className="flex flex-row items-center gap-x-2">
            <p className="mr-3 text-xl">Socials : </p>
            {socials.map((social, i) => (
              <Link to={social.link} key={i}>
                <img src={social.icon} alt={social.name} className="invert" />
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="relative z-10 ml-8 mt-16 w-[70%] self-end bg-foreground py-6 text-center text-3xl font-bold text-primary duration-300 before:absolute before:left-0 before:top-0 before:-z-1 before:h-full
            before:w-full before:-translate-y-2 before:translate-x-2 before:bg-foreground before:bg-opacity-30 before:duration-inherit before:content-visible hover:-translate-y-1 hover:translate-x-1
            hover:before:-translate-x-1 hover:before:translate-y-1 mobile:mt-8 mobile:self-start"
          >
            Contact Us
          </Link>
        </div>
      </footer>
    </section>
  );
}
