export default function Founders() {
  return (
    <section className="p-page flex gap-x-12 rounded-t-[3rem] bg-back py-16 mobile:flex-col mobile:gap-y-4">
      <div className="flex basis-1/2 flex-col justify-between gap-y-4 rounded-2xl bg-primary px-8 py-12 text-white">
        <div className="flex justify-between">
          <div className="self-end  border-b-2 border-primary pb-1 font-bold">
            <div className="text-3xl">Sagar Kumar</div>
            <div className="text-lg">Co-Founder</div>
          </div>
          <img
            src="/images/founders/yuv.jpg"
            alt="Yuv"
            className="z-[11] aspect-auto w-[35%] rounded-full"
          />
        </div>
        <div className="z-[110] border-b-2 pb-4">
          Introducing Sagar Kumar, the co-founder of LetsLance. Currently
          pursuing a degree in Economics at IIT Kharagpur, Sagar possesses a
          strong background in entrepreneurship. He has successfully completed his tenure as Vice President, Gymkhana IIT Kharagpur. Notably, Sagar's expertise lies in investment, where he has
          displayed remarkable proficiency.
          <br />

        </div>
        <div>
          <div>LinkedIn: https://www.linkedin.com/in/sagar-kumar-ab5041224/</div>
        
        </div>
      </div>
      <div className="relative flex basis-1/2 flex-col justify-between gap-y-4 rounded-2xl bg-primary px-8 py-12 text-white mobile:px-8 mobile:text-back mobile:before:bg-primary">
        <div className="flex justify-between">
          <div className="self-end  border-b-2 border-primary pb-1 font-bold">
            <div className="text-3xl">Keshav Garg</div>
            <div className="text-lg">Co-Founder</div>
          </div>
          <img
            src="/images/founders/aman.jpg"
            alt="Yuv"
            className="z-[11] aspect-auto w-[35%] rounded-full"
          />
        </div>
        <div className="z-[110] border-b-2 pb-4">
          Meet Keshav Garg, the visionary co-founder of LetsLance. Keshav is a
          rising star in the fintech industry with a wealth of experience in
          wealth and asset management, private equity, and venture capital. Despite his young age,
          Keshav has already established himself as an accomplished investor, with
          a strong track record of success in global equities.
          <br />
  
        </div>
        <div>
          <div>LinkedIn: https://www.linkedin.com/in/keshavgarg07/</div>
        </div>
      </div>
    </section>
  );
}
