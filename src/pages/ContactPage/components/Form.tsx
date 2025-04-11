import { twMerge } from "tailwind-merge";

export default function Form() {
  return (
    <section className="p-page rounded-t-[3rem] bg-background py-12">
      <h1 className="text-center text-4xl font-semibold mobile:text-2xl">
        What are you waiting for?
      </h1>

      <p className="mt-4 text-center text-lg mobile:mt-2 mobile:text-sm">
        Fill out the form below and we will be in touch with you in no time!
      </p>

      <form action="" className="mt-12 flex flex-col">
        <div className="flex flex-wrap justify-evenly gap-y-8">
          <FormInput className="" placeholder="Full Name" />
          <FormInput className="" placeholder="Company Name" />
          <FormInput className="" placeholder="Email Address" />
          <FormInput
            className=""
            conf={{ min: 0, max: 9999999999 }}
            type="number"
            placeholder="Phone Number"
          />
          <FormInput className="" placeholder="City" />
          <FormInput className="" placeholder="Country" />
        </div>
        <button className="mt-8 w-max self-center rounded-2xl bg-primary px-6 py-2 text-xl text-background duration-300 hover:-translate-y-1 hover:brightness-125">
          Submit
        </button>
      </form>
    </section>
  );
}

function FormInput(props: {
  className?: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  conf?: object;
}) {
  return (
    <input
      required
      {...props.conf}
      type={props.type || "text"}
      placeholder={props.placeholder}
      className={twMerge(
        "w-[46%] rounded-lg border-2 border-primary bg-transparent px-6 py-3 font-medium text-primary placeholder:text-primary placeholder:text-opacity-70 mobile:w-full",
        props.className
      )}
    />
  );
}
