export const metadata = {
  title: 'FAQ - Appy',
  description: 'Page description',
}

import Hero from '@/components/hero-about'
import FeaturesGallery from '@/components/features-gallery'
import Timeline from '@/components/timeline'
import Career from '@/components/career'
import FeaturesAnimation from '@/components/features-animation'
import Team from '@/components/team'
import CtaContact from '@/components/cta-contact'
import Accordion from "@/components/accordion";


export default function FAQ() {

  const faqs = [
    {
      title: "When the software will be released?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title:
        "Are there any limits to the number of exported tools from Waitlist?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "Do you provide any support?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "What does the term “per software” mean in the License?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: true,
    },
    {
      title: "How is Waitlist different from X?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "What happens if I don't renew my license after one year?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "How does billing work?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
    {
      title: "What is your cancellation or refund policy?",
      text: "One-time Licenses are limited by the number of software. A software is essentially a tool hosted on a single web server or IP Address.",
      active: false,
    },
  ];

  return (
    <>
      <Hero />
      <div className="max-w-3xl mx-auto">
        <div className="space-y-1 px-4 pb-6">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text}
            </Accordion>
          ))}
        </div>
      </div>

      <CtaContact />
    </>
  )
}
