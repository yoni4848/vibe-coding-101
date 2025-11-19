const About = () => {
  return (
    <section id="About" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          About Me
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Hello! I'm <span className="font-bold text-purple-600">Yonas</span>, a Junior studying Computer Science at
            <span className="font-semibold text-indigo-600"> SF State University</span> with a deep passion for web development
            and personal growth. I'm constantly excited about learning new technologies and pushing myself to become the best
            software engineer I can be. Whether it's diving into the latest JavaScript frameworks, exploring backend architectures,
            or experimenting with new design patterns, I approach every coding challenge with curiosity and determination.
            I'm always eager to take on new challenges, contribute to meaningful projects, and connect with fellow developers
            and creators who share the same passion for building something great.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
