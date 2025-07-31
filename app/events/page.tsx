'use client'

import Slider from 'react-slick'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const images = [
  '/carousel1.jpg',
  '/carousel2.jpg',
  '/carousel3.jpg',
  '/carousel4.jpg',
  '/carousel5.jpg',
  '/carousel6.jpg',
]

export default function EventsPage() {
    const settings = {
    dots: true,
    infinite: true,
    autoplay: true,              // ✅ enables autoplay
    autoplaySpeed: 2000,         // ⏱ 4 seconds per slide
    speed: 800,                  // 🎞 transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,         // optional: keeps sliding even on hover
    }

  return (
    <div className="text-center space-y-10 text-gray-800">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Community Events</h1>
        <p className="text-lg max-w-3xl mx-auto">
          In partnership with the <strong>Houston Multicultural Center</strong>, we offer free tutoring
          and mentorship to Afghan refugee youth who fled the Taliban.
        </p>
      </div>

      {/* Carousel and Description */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Carousel */}
        <div className="rounded-xl shadow-md overflow-hidden h-[300px]">
        <Slider {...settings}>
            {images.map((src, idx) => (
            <div key={idx}>
                <img
                src={src}
                alt={`Mentorship photo ${idx + 1}`}
                className="w-full h-[300px] object-cover"
                />
            </div>
            ))}
        </Slider>
        </div>

        {/* Description Text */}
        <div className="text-left space-y-4">
          <h2 className="text-xl font-semibold">About the Program</h2>
          <p>
            Every other Saturday, we gather for <strong>soccer and a 30–60 minute math session</strong> filled with games, confidence-building exercises, and shared laughter.
          </p>
          <p>
            Our goal is to create a space of <strong>mutual learning, joy, and hope</strong>.
          </p>
          <p>
            Our approach: No grades, no pressure — just <strong>fun math activities</strong>, quick level-matching, and an emphasis on confidence and group connection.
          </p>
        </div>
      </section>

      {/* Call to Collaborate */}
      <section className="mt-10 text-center bg-white rounded-xl shadow-md max-w-3xl mx-auto px-6 py-8">
        <h3 className="text-xl font-semibold mb-2">Collaborate with Us</h3>
        <p className="text-gray-700 mb-4">
          Interested in volunteering, sponsoring sessions, or learning more? We'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-700 font-medium">
          <a
            href="mailto:keshav.harpavat@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
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
