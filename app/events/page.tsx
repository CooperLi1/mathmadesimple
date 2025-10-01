'use client'

import { useState } from 'react'
import Slider from 'react-slick'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

/* Images */
const carouselImages = [
  '/carousel-4.jpg',
  '/carousel-3.jpg',
  '/carousel-2.jpg',
  '/carousel-1.png',
  '/carousel1.jpg',
  '/carousel2.jpg',
  '/carousel3.jpg',
  '/carousel4.jpg',
  '/carousel5.jpg',
  '/carousel6.jpg',
  '/carousel7.jpg',
  '/carousel8.jpg',
  '/carousel9.jpg',
  '/carousel10.jpg',
  '/carousel11.jpg',
  '/carousel12.png',
  '/carousel13.png',
  '/carousel14.png',
]

const southAfricaImages = ['/awarenet.jpg'] // Provided image
const fundraiserImages = ['/pratham.png'] // Optional placeholder

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
}

function ProjectPane({
  title,
  images,
  children,
}: {
  title: string
  images: string[]
  children: React.ReactNode
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="rounded-2xl shadow-md overflow-hidden h-[300px] bg-gray-100">
        {images?.length ? (
          <Slider {...sliderSettings}>
            {images.map((src, idx) => (
              <div key={idx}>
                <img src={src} alt={`${title} image ${idx + 1}`} className="w-full h-[300px] object-cover" />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="w-full h-full grid place-items-center text-gray-400 text-sm">No images yet</div>
        )}
      </div>
      <div className="text-left space-y-4">{children}</div>
    </div>
  )
}

export default function EventsPage() {
  const tabs = [
    { key: 'refugee', label: 'Refugee Tutoring Program' },
    { key: 'southafrica', label: 'South Africa Partnership' },
    { key: 'fundraiser', label: 'Fundraiser for Education Equality' },
  ] as const

  const [active, setActive] = useState<(typeof tabs)[number]['key']>('refugee')

  return (
    <div className="space-y-10 text-gray-800">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Community Projects</h1>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                active === t.key
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              aria-pressed={active === t.key}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Refugee Tutoring Program */}
        {active === 'refugee' && (
          <ProjectPane title="Refugee Tutoring Program" images={carouselImages}>
            <p>
              In partnership with{' '}
              <a
                href="https://kindredvanguard.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 font-medium"
              >
                Kindred Vanguard
              </a>{' '}
              and the{' '}
              <a
                href="https://www.volunteerhou.org/agency/detail/?agency_id=163363"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 font-medium"
              >
                Houston Multicultural Center
              </a>
              , we offer free tutoring and mentorship to Afghan refugee youth who fled the Taliban in 2021.
            </p>
            <p>
              Around once a month, we gather for a 60–90 minute math session filled with problem sets, games,
              confidence-building exercises, and shared laughter.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              <li>Our goal is to create a space of mutual learning, joy, and hope.</li>
              <li>No grades, no pressure — just fun math activities and quick level‑matching.</li>
              <li>Emphasis on confidence and group connection.</li>
            </ul>
          </ProjectPane>
        )}

        {/* South Africa Partnership */}
        {active === 'southafrica' && (
          <ProjectPane title="South Africa Partnership" images={southAfricaImages}>
            <p>
              In partnership with{' '}
              <a
                href="https://www.awarenet.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 font-medium"
              >
                Awarenet
              </a>
              , we virtually tutor children in a village near Cape Town, South Africa every Monday morning. Having one of
              the lowest levels of math proficiency in the world, we are eager to help and are currently preparing them
              for the South African Math Olympiad.
            </p>
            <p>
              Over time, we have built strong relationships with the students while helping them gradually improve their
              math skills.
            </p>
            <p>
              Planning ahead: We hope to travel to South Africa in March 2026 to meet the students, strengthen our
              connections, and host an exciting week of math instruction.
            </p>
          </ProjectPane>
        )}

        {/* Fundraiser for Education Equality */}
        {active === 'fundraiser' && (
          <ProjectPane title="Fundraiser for Education Equality" images={fundraiserImages}>
            <p>
              In partnership with{' '}
              <a
                href="https://www.prathamusa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900 font-medium"
              >
                Pratham USA
              </a>
              , we are raising funds to expand access to quality education for children in rural India.
            </p>
            <p>
              We support Pratham USA in its mission to expand educational opportunities for children in underprivileged
              villages across India. From September to December 2025, we are assisting with online giving campaigns and
              mini events to raise funds for educational equity in India.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.prathamusa.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-50 text-sm font-medium"
              >
                Donate via Pratham USA
              </a>
              <a
                href="mailto:keshav.harpavat@gmail.com"
                className="inline-block px-4 py-2 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-50 text-sm font-medium"
              >
                Contact us
              </a>
            </div>
          </ProjectPane>
        )}
      </div>

      {/* Collaborate Section (wording updated previously) */}
      <section className="mt-2 text-center bg-white rounded-xl shadow-md max-w-3xl mx-auto px-6 py-8">
        <h3 className="text-xl font-semibold mb-2">Collaborate with Us</h3>
        <p className="text-gray-700 mb-4">
          Interested in volunteering, sponsoring <span className="font-semibold">initiatives</span>, or learning more?
          We'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-700 font-medium">
          <a href="mailto:keshav.harpavat@gmail.com" className="flex items-center gap-2 hover:underline">
            <FaEnvelope /> keshav.harpavat@gmail.com
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <a href="tel:4698802538" className="flex items-center gap-2 hover:underline">
            <FaPhoneAlt /> 469-880-2538
          </a>
        </div>
      </section>
    </div>
  )
}
