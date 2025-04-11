import MaterialIcon from "../../../common/MaterialIcon";

export default function Innocation() {
  return (
    <section className="p-page flex flex-col gap-y-8 bg-primary py-24 text-back mobile:py-12">
      <div className="flex flex-row gap-x-8 mobile:flex-col mobile:gap-y-8">
        <div className="flex basis-[40%] flex-col gap-y-8 text-back">
          <div className="flex flex-col gap-y-2">
            <div className="text-3xl">Innovation is available to you now.</div>
            <div className="w-[70%] font-semibold">
              We create cutting-edge business software by combining Design
              Thinking and Practical Creativity
            </div>
          </div>
          <SmallCard />
        </div>
        <div className="group flex basis-[80%] overflow-hidden rounded-3xl mobile:flex-col-reverse">
          <div className="flex w-[50%] flex-col gap-y-6 bg-back px-8 py-28 text-front mobile:w-[100%] mobile:py-8">
            <div className="flex flex-col gap-y-2">
              <div className="text-3xl">Decision-making using agility</div>
              <div>
                We plan our entire process and produce high-quality work using
                our value-driven approach to designing custom software. Our
                software engineers ensure properly tested and measured
                processes, extracting productive end results by using Agile
                methodology by keeping a watch on everything including budget,
                time, resources, technology, and security.
              </div>
            </div>
            {/* <div className="flex h-[4px] items-center justify-end bg-front duration-300 group-hover:w-[12ch] mobile:h-[3px] mobile:w-[4ch] widescreen:w-[6ch]">
              <MaterialIcon
                codepoint="e409"
                className="translate-x-5 text-[3rem] font-thin mobile:translate-x-3 mobile:text-[2rem]"
              />
            </div> */}
          </div>
          <div className="flex-1">
            <img
              src="https://resources.scrumalliance.org/uploads/2020/11/2/AdobeStock_362306286-XXCT355Oy0OfEDxzWrHN5w.jpg"
              alt="agile"
              className="h-full object-cover duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="flex items-stretch gap-x-4 mobile:flex-col mobile:gap-y-8">
        {cardContent.map((card, i) => (
          <Card
            key={i}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

const cardContent = [
  {
    image:
      "https://static.wixstatic.com/media/75f28f_2e8f48828530404f8dcc3c17504127d1~mv2_d_5515_3983_s_4_2.jpg/v1/fill/w_640,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/75f28f_2e8f48828530404f8dcc3c17504127d1~mv2_d_5515_3983_s_4_2.jpg",
    title: "Team Extension",
    description:
      "Customers can use the capabilities of our software developers as needed thanks to our adaptable business models. With a focus on serving worldwide software outsourcing needs across a range of technologies, the skilled talent pool can help you expand your business and achieve your goals with both short- and long-term engagements at a reasonable cost.",
  },
  {
    image:
      "https://usabilitygeek.com/wp-content/uploads/2013/10/how-to-choose-laptop-for-web-design-and-development.jpg",
    title: "Providing solution by latest technologies",
    description:
      "Our solution-driven approach combined with the latest technology empowers your website to stand out from the competition, captivate your audience, and achieve your business goals. Experience the transformative power of innovation as we bring your website to the forefront of the digital landscape, delivering a seamless and engaging user experience that leaves a lasting impression on your visitors.",
  },
  // },
  // {
  //   image: "https://fellow.app/wp-content/uploads/2021/10/2.jpg",
  //   title: "User Oriented Approach",
  //   description:
  //     "Our implementation strategy is centred on modifying the special software solution for your unique requirements, encouraging collaboration, and minimising conflicts.",
  // },
];

export function SmallCard() {
  return (
    <div className="group flex basis-[80%] flex-col overflow-hidden rounded-3xl bg-back text-front">
      <img
        src="https://fellow.app/wp-content/uploads/2021/10/2.jpg"
        className="duration-300 group-hover:scale-110"
      />
      <div className="flex flex-col gap-y-4 px-6 py-8">
        <div className="flex flex-col gap-y-1">
          <div className="text-2xl">User Oriented Approach</div>
          <div>
            Our implementation strategy is centred on modifying the special
            software solution for your unique requirements, encouraging
            collaboration, and minimising conflicts.{" "}
          </div>
        </div>
        {/* <div className="flex h-[3px] w-[4ch] items-center justify-end bg-front duration-300 group-hover:w-[8ch]">
          <MaterialIcon
            codepoint="e409"
            className="translate-x-3 text-[2rem] font-thin"
          />
        </div> */}
      </div>
    </div>
  );
}

export function Card(props: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group basis-1/2 overflow-hidden rounded-3xl">
      <img
        src={props.image}
        alt="team"
        className="duration-300 group-hover:scale-[105%]"
      />
      <div className="flex h-full flex-col gap-y-6 bg-back px-8 py-16 text-front mobile:py-6">
        <div className="flex flex-col gap-y-2">
          <div className="text-3xl">{props.title}</div>
          <div className="text-lg">{props.description}</div>
        </div>
        {/* <div className="flex h-[3px] w-[6ch] items-center justify-end bg-front duration-300 group-hover:w-[8ch] mobile:w-[4ch]">
          <MaterialIcon
            codepoint="e409"
            className="translate-x-3 text-[2rem] font-thin"
          />
        </div> */}
      </div>
    </div>
  );
}
