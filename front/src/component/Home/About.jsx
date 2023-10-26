import SectionLayout from "./Layout/SectionLayout";

export default function About() {
  return (
    <SectionLayout title="About" className="">
      <p className="md:w-1/2 w-full m-auto text-gray-500 font-regular text-xl text-center px-5">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </p>
    </SectionLayout>
  );
}
