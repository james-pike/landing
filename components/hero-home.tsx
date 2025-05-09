export default function HeroHome() {
  return (
    <section className="md:h-screen ">
      <div className="h-[300px] md:h-[50vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.png')"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center pt-10">
            <div className="text-center text-white">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-black">Welcome to Mourning Spring</h1>
              <p className="text-xl">play. . . sing . . . walk . . .& write through it all</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[300px] md:h-[50vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero2.jpeg')"
          }}
        >
          <div 
            className="absolute inset-0 bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/poem.png')",
              backgroundSize: "contain"
            }}
          />
      
        </div>
      </div>
    </section>
  )
}