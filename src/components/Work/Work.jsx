import React, { useEffect, useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Prevent body scroll when modal is open & close on Esc
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-white/10 bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
            aria-hidden="true"
          >
            {/* Image */}
            <div className="p-4 bg-gray-800/40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p
                className="text-gray-400 mb-4"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {project.description}
              </p>

              {/* tags */}
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA hint */}
              <div className="text-sm text-gray-400">Click to view details</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-auto"
          onClick={handleCloseModal}
          role="presentation"
        >
          <div
            className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // prevent backdrop click closing when clicking inside modal
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            style={{ maxHeight: "90vh" }} // ensures modal never exceeds viewport height
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
                aria-label="Close project modal"
              >
                &times;
              </button>
            </div>

            {/* Modal inner area scrolls if content too tall */}
            <div className="px-4 pb-6 overflow-auto" style={{ maxHeight: "calc(90vh - 64px)" }}>
              {/* Image area (constrained so it doesn't overflow) */}
              <div className="w-full flex justify-center bg-gray-900 px-2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full object-contain rounded-xl shadow-2xl"
                  // Constrain image height to viewport so it never grows bigger than screen:
                  style={{ maxHeight: window.innerWidth >= 1024 ? "50vh" : "40vh" }}
                />
              </div>

              {/* Content */}
              <div className="lg:p-8 p-6">
                <h3
                  id="project-title"
                  className="lg:text-3xl font-bold text-white mb-4 text-md"
                >
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-6 lg:text-base text-sm">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
