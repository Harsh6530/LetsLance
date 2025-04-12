import { twMerge } from "tailwind-merge";

export default function ContactInfo() {
  return (
    <section className="p-page rounded-t-[3rem] bg-background py-12">
      <h1 className="text-center text-4xl font-semibold mobile:text-2xl">
        What are you waiting for?
      </h1>

      <p className="mt-4 text-center text-lg mobile:mt-2 mobile:text-sm">
        We’re always happy to hear from you!
      </p>

      <div className="mt-12 flex flex-col items-center justify-center">
        <p className="text-xl font-medium">
          Email: <span className="font-normal">letslance001@gmail.com</span>
        </p>
        <p className="mt-2 text-xl font-medium">
          Contact: <span className="font-normal">+91 9653594353</span>
        </p>
      </div>
    </section>
  );
}
