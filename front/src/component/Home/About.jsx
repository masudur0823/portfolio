import SectionLayout from "./Layout/SectionLayout";

export default function About() {
  const aboutText = "Here is the details information about my work journey and skills"
  return (
    <SectionLayout title="About" className="">
      <p className="md:w-1/2 w-full m-auto text-gray-500 font-regular md:text-xl text-sm text-center px-5">
        {aboutText}
      </p>
      <div className="container px-10">
          
      </div>
    </SectionLayout>
  );
}
