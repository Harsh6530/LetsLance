import { useState } from "react";
import { twMerge } from "tailwind-merge";

const tech = [
  {
    title: "Frontend",
    items: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        name: "React",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
        name: "VueJs",
      },
      {
        image: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
        name: "NextJs",
      },
      {
        image: "https://nuxt.com/assets/design-kit/logo/icon-green.png",
        name: "Nuxt3",
      },
      {
        image:
          "https://cdn.iconscout.com/icon/free/png-256/free-typescript-2336947-1982828.png",
        name: "tsx",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
        name: "TailwindCss",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        image: "https://cdn.worldvectorlogo.com/logos/django.svg",
        name: "dJango",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
        name: "NodeJs",
      },
      {
        image: "https://grpc.io/img/logos/grpc-icon-color.png",
        name: "gRPC",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
        name: "Go",
      },
      {
        image:
          "https://i.pinimg.com/originals/39/b2/e4/39b2e4ad77c23a2c11e5950a7dfa2aec.png",
        name: "Prisma",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        image:
          "https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png",
        name: "MySQL",
      },
      {
        image:
          "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
        name: "Mongo DB",
      },
      {
        image:
          "https://cdn.icon-icons.com/icons2/2389/PNG/512/cassandra_logo_icon_145426.png",
        name: "Cassandra",
      },
      {
        image:
          "https://theonetechnologies.com/images/technologies/firebase.svg",
        name: "Firebase",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png",
        name: "AWS Dynamo",
      },
    ],
  },
  {
    title: "Mobile",
    items: [
      {
        image: "https://cdn.worldvectorlogo.com/logos/flutter-logo.svg",
        name: "Flutter",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        name: "React Native",
      },
      {
        image:
          "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
        name: "Swift",
      },
      {
        image: "https://cdn-icons-png.flaticon.com/512/38/38002.png",
        name: "Kotlin",
      },
      {
        image:
          "https://images.prismic.io/ionicframeworkcom/66cfdbef-e59d-463a-8e24-12cb233e9d97_ionic+logo+blue.png?auto=compress,format",
        name: "ionic",
      },
      {
        image:
          "https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png",
        name: "PWA",
      },
    ],
  },
];

export default function TechnologiesDump() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="p-page flex flex-col gap-y-12 bg-back py-12 duration-150">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-5xl font-semibold mobile:text-3xl">
          Technologies we specialize in
        </h1>
      </div>

      <div className="flex w-full justify-center gap-x-12 border-b border-front border-opacity-30 mobile:gap-x-5">
        {tech.map((item, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={twMerge(
              "border-b-4 border-transparent py-5 text-xl font-semibold duration-300 mobile:py-2 mobile:text-sm",
              selected === i && "border-primary text-primary"
            )}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-evenly gap-x-16 gap-y-8 py-8 mobile:gap-x-8 mobile:py-0">
        {tech[selected].items.map((item, i) => (
          <div
            key={i}
            className="group flex w-[11%] flex-col items-stretch justify-center text-center duration-300 mobile:w-[25%]"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="aspect-square object-contain p-5 opacity-70 brightness-0 duration-inherit group-hover:scale-110"
            />
            <h4 className="cursor-default whitespace-nowrap text-xl mobile:text-base">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
