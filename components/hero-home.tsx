export default function HeroHome() {
  return (
    <section className="min-h-screen">
      <div className="relative h-[50vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center w-full"
          style={{
            backgroundImage: "url('/images/mockup-image-01.jpg')",
            height: '100%'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-black">Your website, reimagined</h1>
              <p className="text-xl">Our landing page template works on all devices</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[50vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center w-full"
          style={{
            backgroundImage: "url('/images/mockup-image-01.jpg')",
            height: '100%'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="h2 lg:text-5xl mb-4 font-red-hat-display font-black">Beautiful Results Forever</h2>
              <a className="btn text-white bg-teal-500 hover:bg-teal-400" href="#0">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}