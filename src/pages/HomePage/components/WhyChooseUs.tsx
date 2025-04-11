import MaterialIcon from "../../../common/MaterialIcon";

// const services = [
//   {
//     title: "Custom Software Development Services",
//     description:
//       "We offer customized software solutions for small to large organizations covering all their requirements for powerful software solutions.",
//     icon: "eb8e",
//     color: "#F48FB1",
//   },
//   {
//     title: "Mobile App Development Services",
//     description:
//       "In a highly competitive era, we update ourselves with advanced technologies to deliver robust and competitive mobile applications.",
//     icon: "e325",
//     color: "#66BB6A",
//   },
//   {
//     title: "eCommerce Development Services",
//     description:
//       "Flexibility, security, and quality are elements we focus on while providing eCommerce services across diverse industries.",
//     icon: "e8cc",
//     color: "#29B6F6",
//   },
//   {
//     title: "Website Development Services",
//     description:
//       "For robust web applications, you need experienced web developers. We have a team of skilled resources who will help you develop an efficient website.",
//     icon: "e894",
//     color: "#ad92aa",
//   },
// ];

const services = [
  {
    title: "On Demand, Flexible",
    description:
      "As your business requires, select the most appropriate remote workforce.",
    icon: "eb8e",
    color: "#F48FB1",
  },
  {
    title: "Cost Benefit",
    description:
      "With our Tech team based out of India, We provide pricing that is 3-4x cheaper than HK's industry standard.",
    icon: "e227",
    color: "#66BB6A",
  },
  {
    title: "20+ IT experts",
    description:
      "Scale up with engineers knowledgeable in several technologies",
    icon: "f8d9",
    color: "#29B6F6",
  },
  {
    title: "Eliminate Risk",
    description:
      "Success can be attained with agile project management and reliable delivery",
    icon: "ea76",
    color: "#ad92aa",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="p-page bg-background py-16">
      <div className="flex flex-col gap-y-2 text-center mobile:gap-y-2">
        <h1 className="text-5xl font-semibold mobile:text-3xl">
          Why Choose us?
        </h1>
        <p className="text-2xl mobile:text-base">
          We offer variety of software and web development services as per the
          requirement of client.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap justify-evenly gap-y-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="group flex w-[46%] cursor-default flex-col gap-y-5 rounded-2xl border-[2.5px] border-primary bg-white p-8 text-primary mobile:w-full"
          >
            <div className="flex items-center gap-x-5">
              <MaterialIcon
                codepoint={service.icon}
                className="rounded-md bg-primary p-2 text-5xl text-white duration-300 group-hover:-translate-y-1 group-hover:scale-105"
              />
              <h2 className="bg-clip-text text-xl font-semibold duration-300">
                {service.title}
              </h2>
            </div>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
