const Projects = () => {
  const projects = [
    {
      title: 'Calculator App',
      description: 'A Calculator app that handles basic operations.',
      technologies: 'HTML, CSS, JavaScript',
      link: 'calculator.html',
    },
    {
      title: 'Banking System',
      description: 'Full-Stack web application built using Java and Springboot. (Vibe coded)',
      technologies: 'Java, Springboot',
    },
    {
      title: 'Breakout Game',
      description: 'The classic breakout game built with Java.',
      technologies: 'Java',
    },
    {
      title: 'Chuck Norris Cypher',
      description: 'Encryption/decryption tool built using Java.',
      technologies: 'Java',
    },
    {
      title: 'menbesway.org',
      description: 'A non-profit live website built using typescript and react (Vibe coded).',
      technologies: 'TypeScript, React',
      link: 'https://menbesway.org/',
    },
    {
      title: 'Tic-tac-toe Game',
      description: 'A command line based tic-tac-toe game built using Java.',
      technologies: 'Java',
    },
  ];

  return (
    <section id="Projects" className="py-24 px-4 bg-gradient-to-b from-stone-100 to-amber-50 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-stone-900"></div>
      <div className="absolute top-4 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-32 bg-amber-700"></div>
            <div className="w-4 h-4 bg-orange-600 transform rotate-45 mx-4"></div>
            <div className="h-1 w-32 bg-amber-700"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-widest uppercase border-b-4 border-amber-600 inline-block pb-3">
            Recent Projects
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="h-1 w-32 bg-amber-700"></div>
            <div className="w-4 h-4 bg-orange-600 transform rotate-45 mx-4"></div>
            <div className="h-1 w-32 bg-amber-700"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-amber-50 border-8 border-stone-800 hover:border-amber-600 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Corner squares */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-600 group-hover:bg-orange-700 transition-colors"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-600 group-hover:bg-orange-700 transition-colors"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-amber-600 group-hover:bg-orange-700 transition-colors"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-amber-600 group-hover:bg-orange-700 transition-colors"></div>

              <div className="border-4 border-amber-600 bg-gradient-to-br from-amber-50 to-orange-50">
                {/* Top geometric pattern */}
                <div className="h-24 bg-stone-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-amber-600 transform rotate-45"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700"></div>
                </div>

                <div className="p-6">
                  {/* Title */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-4"
                    >
                      <div className="flex items-center">
                        <div className="h-px flex-1 bg-amber-700"></div>
                        <h3 className="text-xl font-bold text-stone-900 hover:text-amber-800 transition-colors uppercase tracking-wide px-3">
                          {project.title}
                        </h3>
                        <div className="h-px flex-1 bg-amber-700"></div>
                      </div>
                    </a>
                  ) : (
                    <div className="mb-4">
                      <div className="flex items-center">
                        <div className="h-px flex-1 bg-amber-700"></div>
                        <h3 className="text-xl font-bold text-stone-900 uppercase tracking-wide px-3">
                          {project.title}
                        </h3>
                        <div className="h-px flex-1 bg-amber-700"></div>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-stone-700 mb-6 font-serif leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="border-t-2 border-amber-700 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-stone-800 text-amber-100 px-3 py-1 border-2 border-amber-600 text-xs font-bold uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-2 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 mt-16"></div>
      <div className="absolute bottom-2 left-0 right-0 h-4 bg-stone-900"></div>
    </section>
  );
};

export default Projects;
