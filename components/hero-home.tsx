export default function HeroHome() {
  return (
    <section className="h-screen">
      <div className="h-[300px] md:h-[50vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/mockup-image-01.jpg')"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-black">Your website, reimagined</h1>
              <p className="text-xl">Our landing page template works on all devices</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[300px] md:h-[50vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/mockup-image-01.jpg')"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="h2 lg:text-5xl mb-4 font-red-hat-display font-black">Beautiful Results Forever</h2>
              <a className="btn text-white bg-teal-500 hover:bg-teal-400" href="#0">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}