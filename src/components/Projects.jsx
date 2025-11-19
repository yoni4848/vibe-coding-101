const Projects = () => {
  const projects = [
    {
      title: 'Calculator App',
      description: 'A Calculator app that handles basic operations.',
      technologies: 'HTML, CSS, JavaScript',
      link: 'calculator.html',
      emoji: '🧮',
    },
    {
      title: 'Banking System',
      description: 'Full-Stack web application built using Java and Springboot. (Vibe coded)',
      technologies: 'Java, Springboot',
      emoji: '🏦',
    },
    {
      title: 'Breakout Game',
      description: 'The classic breakout game built with Java.',
      technologies: 'Java',
      emoji: '🎮',
    },
    {
      title: 'Chuck Norris Cypher',
      description: 'Encryption/decryption tool built using Java.',
      technologies: 'Java',
      emoji: '🔐',
    },
    {
      title: 'menbesway.org',
      description: 'A non-profit live website built using typescript and react (Vibe coded).',
      technologies: 'TypeScript, React',
      link: 'https://menbesway.org/',
      emoji: '🌐',
    },
    {
      title: 'Tic-tac-toe Game',
      description: 'A command line based tic-tac-toe game built using Java.',
      technologies: 'Java',
      emoji: '⭕',
    },
  ];

  return (
    <section id="Projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          Recent Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-center">
                <div className="text-6xl mb-2">{project.emoji}</div>
              </div>

              <div className="p-6">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-purple-600 hover:text-pink-600 transition-colors mb-3 block"
                  >
                    {project.title} →
                  </a>
                ) : (
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                )}

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(', ').map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
