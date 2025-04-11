import MaterialIcon from "../../../common/MaterialIcon";

const testimonialsContent = [
  {
    name: "Rahul Agarwal",
    position: " Co-founder of IdeaVault",
    imgUrl:
      "https://media.licdn.com/dms/image/D4E03AQEMPDWbc_2bJg/profile-displayphoto-shrink_400_400/0/1681248489821?e=1694044800&v=beta&t=9MtG9i1G4LrScM7lufpNHNpI_GI6YzvBYKSEq9pQHZY",
    description:
      "Letslance HK has truly been a game-changer for us at IdeaVault. Their proficiency in technical consulting coupled with their deep understanding of the fintech landscape has catalyzed our product development and helped us achieve our targets faster than we ever thought possible. They didn't just meet our requirements, they became an integral part of our team, guiding us through the complex process with ease and efficiency. It has been a pleasure working with Letslance HK and I'd highly recommend them to any fintech company seeking top-tier technical consulting and solutions.",
  },
  {
    name: "Aryan Agarwal",
    position: " Co-founder of Grid Flow",
    imgUrl:
      "https://media.licdn.com/dms/image/C5603AQEHEhqvtVcyIA/profile-displayphoto-shrink_400_400/0/1642414486225?e=1694044800&v=beta&t=MvrhXgjbOTy2q7SwXNfrDJ4foMZUVLUC9pDz9Eoka4o",
    description:
      "Grid Flow's journey to becoming a leading name in EV solutions wouldn't have been possible without the incredible assistance from Letslance HK. Their team didn't just bring technical expertise to the table, they brought innovation, creativity, and a unique perspective that helped us build robust and scalable solutions. The expertise they provided allowed us to streamline our processes, improve productivity, and create a better experience for our customers. It is rare to find a tech consulting firm that combines such a high degree of proficiency with a keen understanding of the EV market. I wholeheartedly recommend Letslance HK to anyone in need of tech consulting and solutions",
  },
  {
    name: "Mayukhraj Ray",
    position: "Co-founder of LyteBryte Limited",
    imgUrl:
      "https://media.licdn.com/dms/image/D4D03AQHHdl1nt9ZTfg/profile-displayphoto-shrink_400_400/0/1679288337421?e=1694044800&v=beta&t=jOwxrahavgGpO61dspBan3SEISFnfJQVVF5fZ1PUMC8",
    description:
      "When we first started LyteBryte, we knew that we had a good idea. However, turning that idea into a tangible, workable product required a level of technical expertise that was outside of our wheelhouse. That's where Letslance HK came in. Their team helped us transform our idea into a reality, and for that, we are incredibly grateful. Their commitment to excellence, their professionalism, and their willingness to go the extra mile to ensure that our platform worked flawlessly has left a lasting impression on our team. Any tech-based company looking for top-notch consulting and innovative solutions should look no further than Letslance HK.",
  },
];

export default function Testimonials() {
  return (
    <div className="p-page flex flex-col gap-y-8 bg-back py-12">
      <div className="border-b-2 border-primary pb-1 text-4xl font-bold">
        Testimonials
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-8">
        {testimonialsContent.map((testimonial, i) => (
          <div
            key={i}
            className="flex w-[80%%] flex-col justify-between gap-y-4 rounded-[3rem] bg-primary px-12 py-8 text-white mobile:px-6"
          >
            <div
              className={`flex items-center gap-x-4 border-b-2 pb-4 mobile:flex-col`}
            >
              <img
                src={testimonial.imgUrl}
                alt={testimonial.name}
                className="w-[15%] self-center rounded-full mobile:w-[50%]"
              />
              <div className="flex flex-col">
                <MaterialIcon codepoint="e244" className="text-[3rem]" />
                <div className="mobile:text-sm">{testimonial.description}</div>
              </div>
            </div>
            <div className="flex flex-col self-end mobile:text-end">
              <div className="text-xl font-bold mobile:text-lg">
                {testimonial.name}
              </div>
              <div className="font-semibold mobile:text-base">
                {testimonial.position}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
