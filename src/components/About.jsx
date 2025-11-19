const About = () => {
  return (
    <section id="About" className="py-24 px-4 bg-gradient-to-b from-stone-100 to-amber-50 relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-stone-900"></div>
      <div className="absolute top-4 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>

      <div className="max-w-5xl mx-auto relative">
        {/* Decorative geometric corners */}
        <div className="absolute -top-12 -left-8 w-24 h-24 border-8 border-amber-700 opacity-30"></div>
        <div className="absolute -bottom-12 -right-8 w-24 h-24 border-8 border-orange-600 opacity-30"></div>

        {/* Title with Wright geometric accents */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-24 bg-amber-700"></div>
            <div className="w-4 h-4 bg-orange-600 transform rotate-45 mx-4"></div>
            <div className="h-1 w-24 bg-amber-700"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-widest uppercase border-b-4 border-amber-600 inline-block pb-3">
            About Me
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="h-1 w-24 bg-amber-700"></div>
            <div className="w-4 h-4 bg-orange-600 transform rotate-45 mx-4"></div>
            <div className="h-1 w-24 bg-amber-700"></div>
          </div>
        </div>

        {/* Content box with Prairie School style */}
        <div className="relative bg-amber-50 border-8 border-stone-800">
          {/* Corner squares - Wright detail */}
          <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-600"></div>
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-600"></div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-amber-600"></div>
          <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-amber-600"></div>

          {/* Inner border */}
          <div className="border-4 border-amber-600 p-12 md:p-16 bg-gradient-to-br from-amber-50 to-orange-50">
            <p className="text-lg md:text-xl text-stone-800 leading-relaxed font-serif">
              Hello! I'm <span className="font-bold text-amber-900 border-b-2 border-amber-600">Yonas</span>, a Junior studying Computer Science at
              <span className="font-bold text-stone-900"> SF State University</span> with a deep passion for web development
              and personal growth. I'm constantly excited about learning new technologies and pushing myself to become the best
              software engineer I can be. Whether it's diving into the latest JavaScript frameworks, exploring backend architectures,
              or experimenting with new design patterns, I approach every coding challenge with curiosity and determination.
              I'm always eager to take on new challenges, contribute to meaningful projects, and connect with fellow developers
              and creators who share the same passion for building something great.
            </p>

            {/* Decorative line accent */}
            <div className="mt-8 flex items-center">
              <div className="h-2 w-full bg-gradient-to-r from-amber-600 via-orange-600 to-transparent"></div>
              <div className="w-6 h-6 bg-stone-900 transform rotate-45 flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>
      <div className="absolute bottom-2 left-0 right-0 h-4 bg-stone-900"></div>
    </section>
  );
};

export default About;
