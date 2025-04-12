import { useState } from "react";
import MaterialIcon from "../../../common/MaterialIcon";
import { twMerge } from "tailwind-merge";

export default function KnowMore() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="p-page my-20 flex flex-col items-center bg-foreground bg-opacity-60 py-12 mobile:mb-0">
      <h4 className="text-center text-3xl font-semibold text-primary mobile:text-xl">
        Still Curious to know more?
      </h4>

      <p
        className={twMerge(
          "h-aut0 overflow-hidden duration-1000",
          expanded ? "mb-2 mt-10 max-h-[300vh]" : "m-0 max-h-0"
        )}
      >
        Welcome to LetsLance, your trusted partner for all your tech
        outsourcing, website development, app development, and more. Based in
        the vibrant city of Hong Kong, we take pride in delivering exceptional
        services that drive your business forward.
        <br />
        <br />
        At LetsLance, we understand that the key to delivering high-quality
        services lies in our team of happy and diligent developers. We go beyond
        just being experts in our respective fields - we are passionate
        individuals who genuinely love what we do. This passion reflects in the
        exceptional results we achieve for our clients.
        <br />
        <br />
        We believe that treating our developers well is paramount to their
        success and, in turn, the success of our services. We foster an
        environment that values their happiness and well-being, recognizing that
        when our developers are fulfilled, their work reaches new heights of
        excellence.
        <br />
        <br />
        By providing competitive compensation, continuous professional
        development opportunities, and promoting a healthy work-life balance, we
        ensure our developers feel valued and motivated. Our company culture
        thrives on open communication, collaboration, and a shared sense of
        purpose, empowering our developers to bring their best ideas and skills
        to every project.
        <br />
        <br />
        Our commitment to our developers' welfare directly translates into the
        highest quality of services we offer. When our team is motivated and
        satisfied, they go above and beyond to deliver outstanding results.
        Whether it's crafting innovative websites, developing cutting-edge
        applications, or providing reliable tech outsourcing solutions, our
        developers consistently exceed expectations.
        <br />
        <br />
        When you choose LetsLance, you're not just partnering with a company;
        you're collaborating with a team of talented professionals who are
        driven to see your business succeed. We understand that your success is
        our success, and that's why we are dedicated to providing you with
        unparalleled services.
        <br />
        <br />
        Experience the LetsLance difference, where our happy and diligent
        developers are ready to turn your visions into reality. Contact us today
        to discuss your project requirements and discover how we can deliver the
        highest quality solutions tailored to your business needs.
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className={twMerge("duration-500", expanded && "rotate-180")}
      >
        <MaterialIcon
          className="translate-y-2 text-6xl text-primary duration-150 hover:scale-125 hover:drop-shadow-md mobile:text-4xl"
          codepoint="e5cf"
        />
      </button>
    </section>
  );
}
