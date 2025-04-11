export default function WhyUs() {
  return (
    <section className="p-page flex py-12 mobile:flex-col-reverse mobile:py-0">
      <div className="flex flex-1 flex-col gap-y-12 mobile:gap-y-5">
        <div className="flex flex-col gap-y-5 text-center mobile:gap-y-2">
          <h1 className="text-5xl font-semibold mobile:text-3xl">Why Us</h1>
          <p className="text-lg">
            The most dilligent and dedicated developers work with us
          </p>
        </div>
        <p className="text-sm mobile:text-justify">
          Our developers are not just experts in their respective fields; they
          are also genuinely passionate about what they do. We foster a work
          environment that values their happiness and well-being, recognizing
          that when our developers are content and fulfilled, their work excels
          to new heights.
          <br />
          We take pride in treating our developers with the utmost respect and
          care. By offering competitive compensation, providing continuous
          professional development opportunities, and promoting a healthy
          work-life balance, we ensure that they feel valued and motivated. Our
          company culture thrives on open communication, collaboration, and a
          shared sense of purpose, encouraging our developers to bring their
          best selves to each project.
          <br />
          This commitment to our developers' welfare translates directly into
          the exceptional quality of our services. When our team is happy and
          motivated, they go above and beyond to deliver outstanding results.
          Whether it's crafting cutting-edge websites, developing innovative
          applications, or providing reliable tech outsourcing solutions, our
          developers consistently exceed expectations.
        </p>
      </div>
      <video
        className="w-2/5 mobile:w-full"
        src="/videos/dilligent-work.mp4"
        autoPlay
        muted
        loop
      />
    </section>
  );
}
