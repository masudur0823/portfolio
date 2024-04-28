import { works } from "../../data/worksdata";
import Container from "../Container";
import SectionLayout from "./Layout/SectionLayout";

export default function Projects() {
  return (
    <SectionLayout title="Projects" className="bg-cyan-50">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 ">
          {works?.map((project, index) => (
            <div
              key={index}
              className="transition-all duration-300 hover:shadow-lg rounded-lg text-center pt-2 pb-7"
            >
              <img src={project?.img} alt={project?.title} />
              <h3 className="font-bold text-2xl font-inter-tight pt-4">
                {project?.title}
              </h3>

              <p className="text-gray-500 mt-4 capitalize">{project?.desc}</p>

              <p className="text-gray-500 mb-4">Tools: {project?.tools}</p>
              <a
                href={project?.link}
                target="_blank"
                className="bg-cyan-500 text-white md:px-8 px-5 md:py-2 py-1 rounded-md font-semibold"
              >
                View Site
              </a>
            </div>
          ))}
        </div>
      </Container>
    </SectionLayout>
  );
}
