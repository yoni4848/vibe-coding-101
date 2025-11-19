const Skills = () => {
  const programmingLanguages = [
    { name: 'HTML', color: 'from-orange-400 to-orange-600' },
    { name: 'CSS', color: 'from-blue-400 to-blue-600' },
    { name: 'Javascript', color: 'from-yellow-400 to-yellow-600' },
    { name: 'C', color: 'from-gray-400 to-gray-600' },
    { name: 'C++', color: 'from-blue-500 to-blue-700' },
    { name: 'Java', color: 'from-red-400 to-red-600' },
    { name: 'Python', color: 'from-green-400 to-green-600' },
    { name: 'Assembly', color: 'from-purple-400 to-purple-600' },
  ];

  const tools = [
    { name: 'Git & Github', icon: '🔀' },
    { name: 'VS Code', icon: '💻' },
    { name: 'XCode', icon: '🍎' },
    { name: 'Terminal', icon: '⌨️' },
    { name: 'Claude Code', icon: '🤖' },
    { name: 'InteliJ', icon: '💡' },
    { name: 'Cursor', icon: '✨' },
    { name: 'MySQL', icon: '🗄️' },
  ];

  return (
    <section id="Skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          Skills
        </h2>

        {/* Programming Languages */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {programmingLanguages.map((lang, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${lang.color} p-6 text-center`}>
                  <p className="text-white font-semibold text-lg">{lang.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Technologies */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Tools and Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-purple-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <p className="text-gray-800 font-medium">{tool.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
