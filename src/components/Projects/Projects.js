import React from 'react';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/1.jpg'
import img3 from '../../assets/1.jpg'

const Projects = () => {
    const projects = [
        {
          title: "Greeho-Sheba",
          url: "https://greeho-sheba-c3c63.web.app",
          description:
         "Full-stack service Providing website. Where customer and Provider can get each-other.",
          technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
          image: `${img1}`,
          time: "20 Oct 2022 - Present",
        },
        {
          title: "Get-Ride",
          url: "https://get-ride-44eec.web.app/",
          description: "This is a full-stack service Bicycle reselling platform.",
          technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
          image: `${img2}`,
          time: "23 Nov 2022 - Present",
        },
        {
          title: "Tour-Plan",
          url: "https://greeho-sheba-c3c63.web.app",
          description:
            "This is a full-stack customer review giving platform about tourist service.",
          technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
          image: `${img3}`,
          time: "20 Oct 2022 - Present",
        },
      ];
    return (
            <div id="projects" className="py-16 ml-7 mr-7 mx-auto w-62 lg:py-20 ">
              <h1 className="my-10 text-5xl text-center">Reserse Projects</h1>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <a
                    href={project.url}
                    key={project.name}
                    className="overflow-hidden text-white transition duration-100 rounded shadow-sm hover:-translate-y-2"
                  >
                    <div className="overflow-y-auto">
                      <img
                        src={project.image}
                        className="object-cover w-full h-52 "
                        alt=""
                      />
                    </div>
                    <div className="p-5 border bg-slate-200 opacity-70 h-62">
                      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <span className="text-gray-600">??? {project.time}</span>
                      </p>
                      <a
                        href="/"
                        aria-label="Category"
                        title="Visit the East"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        {project.title}
                      </a>
                      <p className="mb-2 text-gray-700">{project.description}</p>
                      <p className="mb-2 text-gray-700">
                        <span className="font-bold">Technologies: </span>
                        {project.technologies}.
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
    );
};

export default Projects;