const Contact = () => {
  return (
    <footer id="Contact" className="bg-stone-900 text-amber-100 py-24 px-4 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>
      <div className="absolute top-2 left-0 right-0 h-4 bg-amber-700"></div>

      {/* Decorative geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-8 border-amber-800 transform rotate-45 opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border-8 border-orange-800 transform rotate-12 opacity-20"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Title */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-1 w-32 bg-amber-600"></div>
            <div className="w-4 h-4 bg-orange-600 transform rotate-45 mx-4"></div>
            <div className="h-1 w-32 bg-amber-600"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-amber-100 tracking-widest uppercase border-b-4 border-amber-600 inline-block pb-3">
            Let's Connect
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="h-1 w-32 bg-amber-600"></div>
            <div className="w-4 h-4 bg-orange-600 transform rotate-45 mx-4"></div>
            <div className="h-1 w-32 bg-amber-600"></div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-16 relative bg-stone-800 border-8 border-amber-700">
          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-orange-600"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-600"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-orange-600"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-orange-600"></div>

          <div className="border-4 border-amber-600 p-8 md:p-12">
            <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto font-serif leading-relaxed">
              Feel free to reach out. I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of an amazing team.
            </p>
          </div>
        </div>

        {/* Social Links - Wright geometric style */}
        <div className="flex justify-center gap-8 mb-16">
          {/* Email */}
          <a
            href="mailto:yonasmelkie@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Email"
          >
            <div className="w-20 h-20 bg-amber-700 border-4 border-stone-900 group-hover:border-amber-500 transition-all relative overflow-hidden">
              <div className="absolute inset-2 border-2 border-stone-900 group-hover:border-amber-400 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-stone-900 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
            </div>
            <div className="text-center mt-3 text-amber-100 font-bold uppercase text-sm tracking-wider">Email</div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yoni4848"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="GitHub"
          >
            <div className="w-20 h-20 bg-amber-700 border-4 border-stone-900 group-hover:border-amber-500 transition-all relative overflow-hidden">
              <div className="absolute inset-2 border-2 border-stone-900 group-hover:border-amber-400 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-stone-900 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
            <div className="text-center mt-3 text-amber-100 font-bold uppercase text-sm tracking-wider">GitHub</div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yonas-melkie-60b9712a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="LinkedIn"
          >
            <div className="w-20 h-20 bg-amber-700 border-4 border-stone-900 group-hover:border-amber-500 transition-all relative overflow-hidden">
              <div className="absolute inset-2 border-2 border-stone-900 group-hover:border-amber-400 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-stone-900 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </div>
            <div className="text-center mt-3 text-amber-100 font-bold uppercase text-sm tracking-wider">LinkedIn</div>
          </a>
        </div>

        {/* Decorative separator */}
        <div className="flex items-center justify-center my-12">
          <div className="h-2 w-full bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
          <div className="w-8 h-8 bg-amber-600 transform rotate-45 mx-4 flex-shrink-0"></div>
          <div className="h-2 w-full bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
        </div>

        {/* Copyright */}
        <div className="border-t-4 border-amber-700 pt-8">
          <p className="text-amber-200 font-serif">
            © 2025 Yonas Melkie
          </p>
          <p className="text-amber-300 mt-2 text-sm uppercase tracking-widest">
            Inspired by Frank Lloyd Wright
          </p>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-amber-700"></div>
      <div className="absolute bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>
    </footer>
  );
};

export default Contact;
