'use client'

import { FaStar, FaExternalLinkAlt } from 'react-icons/fa'

const placeholderStaff = Array.from({ length: 6 }, (_, i) => ({
  name: `Staff Member ${i + 1}`,
  image: `/placeholder.jpg`, // Put real images in /public
  bio: `This is a short bio about Staff Member ${i + 1}. They're passionate about math, mentoring, and helping students grow.`,
}))

export default function StaffPage() {
  return (
    <div className="space-y-12 text-center text-gray-800">
      <div>
        <h1 className="text-4xl font-bold mb-4">The Staff</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Meet our dedicated team of tutors and mentors. Each brings a unique background and a shared passion for helping students thrive. Scroll to explore everyone!
        </p>
      </div>

      {/* Staff Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto overflow-y-auto">
        {placeholderStaff.map((person, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center space-y-3"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-32 h-32 object-cover rounded-full border shadow"
            />
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-sm text-gray-600">{person.bio}</p>
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <div className="bg-white p-8 rounded-xl shadow-md max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">What Parents Are Saying</h2>
        <div className="flex justify-center space-x-1 text-yellow-400 text-2xl mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-1">Parent {i}</h3>
                <p className="text-sm text-gray-600 italic">
                  “This program really helped my child build confidence in math. The instructors are amazing!”
                </p>
              </div>
              <div className="mt-3 flex text-yellow-400 text-lg">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book a Session Reminder */}
      <div className="text-center">
        <a
          href="/tutoring"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium shadow-md transition"
        >
          Book a Session Now <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  )
}
