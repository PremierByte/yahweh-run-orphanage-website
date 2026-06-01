const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">
            Be a Part of Their Story
          </h2>
          <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto relative z-10">
            Your support can change a child's life forever. Whether through
            donation, sponsorship, or volunteering, you can make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all">
              Sponsor a Child
            </button>
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
