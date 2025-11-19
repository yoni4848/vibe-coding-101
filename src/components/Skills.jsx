const Skills = () => {
  const programmingLanguages = [
    { name: 'HTML', icon: '□' },
    { name: 'CSS', icon: '◇' },
    { name: 'Javascript', icon: '○' },
    { name: 'C', icon: '△' },
    { name: 'C++', icon: '▽' },
    { name: 'Java', icon: '◆' },
    { name: 'Python', icon: '◉' },
    { name: 'Assembly', icon: '▢' },
  ];

  const tools = [
    { name: 'Git & Github', icon: '◪' },
    { name: 'VS Code', icon: '◫' },
    { name: 'XCode', icon: '⬒' },
    { name: 'Terminal', icon: '⬓' },
    { name: 'Claude Code', icon: '◰' },
    { name: 'InteliJ', icon: '◱' },
    { name: 'Cursor', icon: '◲' },
    { name: 'MySQL', icon: '◳' },
  ];

  return (
    <section id="Skills" className="py-24 px-4 bg-gradient-to-b from-amber-50 to-stone-100 relative overflow-hidden">
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
            Skills
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="h-1 w-32 bg-amber-700"></div>
            <div className="w-4 h-4 bg-orange-600 transform rotate-45 mx-4"></div>
            <div className="h-1 w-32 bg-amber-700"></div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-10 text-center uppercase tracking-wider border-b-2 border-amber-700 inline-block pb-2 block w-full">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {programmingLanguages.map((lang, index) => (
              <div
                key={index}
                className="group relative bg-amber-50 border-4 border-stone-800 hover:border-amber-600 transition-all duration-300 transform hover:scale-105"
              >
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-600 group-hover:bg-orange-700 transition-colors"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-600 group-hover:bg-orange-700 transition-colors"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-600 group-hover:bg-orange-700 transition-colors"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-600 group-hover:bg-orange-700 transition-colors"></div>

                <div className="border-2 border-amber-700 p-6 text-center bg-gradient-to-br from-amber-50 to-orange-50">
                  <div className="text-4xl mb-2 font-bold text-amber-900">{lang.icon}</div>
                  <div className="h-px bg-amber-700 my-3"></div>
                  <p className="text-stone-900 font-bold uppercase tracking-wide text-sm">{lang.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative separator */}
        <div className="flex items-center justify-center my-16">
          <div className="h-2 w-full bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
          <div className="w-8 h-8 bg-stone-900 transform rotate-45 mx-4 flex-shrink-0"></div>
          <div className="h-2 w-full bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
        </div>

        {/* Tools and Technologies */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-10 text-center uppercase tracking-wider border-b-2 border-amber-700 inline-block pb-2 block w-full">
            Tools and Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-stone-100 border-4 border-stone-800 hover:border-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-600 group-hover:bg-amber-700 transition-colors"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-600 group-hover:bg-amber-700 transition-colors"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-600 group-hover:bg-amber-700 transition-colors"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-orange-600 group-hover:bg-amber-700 transition-colors"></div>

                <div className="border-2 border-orange-700 p-6 text-center bg-gradient-to-br from-stone-50 to-amber-50">
                  <div className="text-4xl mb-2 font-bold text-orange-800">{tool.icon}</div>
                  <div className="h-px bg-orange-700 my-3"></div>
                  <p className="text-stone-900 font-bold uppercase tracking-wide text-sm">{tool.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 mt-16"></div>
      <div className="absolute bottom-2 left-0 right-0 h-4 bg-stone-900"></div>
    </section>
  );
};

export default Skills;
