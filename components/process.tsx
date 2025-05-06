import Image from 'next/image'
import MockupImage02 from '@/public/images/mockup-image-02.jpg'
import MockupImage03 from '@/public/images/mockup-image-03.jpg'
import MockupImage04 from '@/public/images/mockup-image-04.jpg'

export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "We dive deep into your business goals, target audience, and market position to create a strategic foundation.",
      image: MockupImage02,
      alt: "Discovery phase"
    },
    {
      number: 2, 
      title: "Design",
      description: "Our creative team crafts stunning visuals and intuitive user experiences that reflect your brand identity.",
      image: MockupImage03,
      alt: "Design phase"
    },
    {
      number: 3,
      title: "Development",
      description: "We build robust, scalable solutions using cutting-edge technologies and best development practices.",
      image: MockupImage04,
      alt: "Development phase"
    },
    {
      number: 4,
      title: "Launch & Support",
      description: "We ensure a smooth deployment and provide ongoing maintenance to keep your digital presence running perfectly.",
      image: MockupImage04,
      alt: "Launch phase"
    }
  ];

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">We follow a strategic approach to bring your digital vision to life, combining creativity with technical expertise at every step.</p>
          </div>

          {/* Glow illustration */}
          <svg className="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block" aria-hidden="true" width={854} height="509" viewBox="0 0 854 509" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="iphonesill__a">
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="39.386%" id="iphonesill__b">
                <stop stopColor="#9F7AEA" offset="0%" />
                <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle fillOpacity=".64" fill="url(#iphonesill__a)" cx="300" cy="300" r="300" />
              <circle fillOpacity=".72" fill="url(#iphonesill__b)" cx="729" cy="384" r="240" />
            </g>
          </svg>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 sm:grid-cols-2  md:grid-cols-4 items-start md:max-w-none">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center">
                {/* Line connecting steps */}
                {index < steps.length - 1 && (
                  <div aria-hidden="true" className="absolute h-px opacity-50 bg-linear-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block" style={{ width: 'calc(100% - 48px)', left: 'calc(50% + 48px)', top: '24px' }}>
                    <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
                  </div>
                )}
                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600/25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">{step.number}</div>
                {/* Content */}
                <h3 className="h4 font-red-hat-display mb-2">{step.title}</h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">{step.description}</p>
                {/* Image */}
                <div className="inline-flex relative justify-center items-center">
                  <Image className="rounded-lg shadow-lg" src={step.image} width={290} height={290} alt={step.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}