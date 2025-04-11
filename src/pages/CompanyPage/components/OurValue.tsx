export default function OurValue() {
  const values = [
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize our clients' needs and work closely with them to deliver tailored solutions.",
    },
    {
      title: " Innovation and Creativity",
      description:
        "We embrace innovation and creativity to develop cutting-edge solutions for our clients.",
    },
    {
      title: "Integrity and Transparency",
      description:
        "We maintain honesty, integrity, and transparency in all our interactions and processes.",
    },
    {
      title: "Collaboration and Communication",
      description:
        "We foster a collaborative environment, valuing open communication and teamwork.",
    },
    {
      title: "Continuous Learning and Growth",
      description:
        "We continuously enhance our skills and stay updated with the latest industry trends.",
    },
  ];
  return (
    <section className="p-page flex gap-x-6 bg-background py-20 mobile:flex-col mobile:gap-y-6">
      <div className="flex w-[45%] flex-col justify-center gap-y-2 mobile:w-full">
        <div className="flex flex-col gap-y-1">
          <div className="text-[2rem] font-bold"> Our Firms, Our Values</div>
          <div className="h-[2px] w-full bg-primary" />
        </div>
        <div className="text-xl font-semibold">
          Our shared values and complementary skills have created a powerful
          partnership aiming to deliver our alternative capabilities to wealth
          companies.{" "}
        </div>
      </div>
      <div className="flex w-[55%] flex-wrap gap-x-8 gap-y-8 mobile:w-[100%] mobile:justify-evenly">
        {values.map((value, i) => (
          <div
            className="flex w-[30%] flex-col gap-y-4 rounded-3xl bg-primary px-4 py-6 text-back mobile:w-[44%] mobile:justify-evenly"
            key={i}
          >
            <div className="flex flex-col gap-y-2">
              <div className="text-xl">{value.title}</div>
              <div className="h-[1px] w-full bg-back mobile:text-sm" />
            </div>
            <div>{value.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
