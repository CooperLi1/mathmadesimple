'use client'

import { FaStar, FaExternalLinkAlt } from 'react-icons/fa'

const placeholderStaff = [
  {
    name: "Keshav Harpavat",
    image: "/keshavharpavat.png",
    bio: "Founder, President, Strake Jesuit College Preparatory School",
  },
  {
    name: "Ian Ngo",
    image: "/ianngo.png",
    bio: "Vice President, Co-Founder of Community Events, Strake Jesuit College Preparatory School",
  },
  {
    name: "Roger Li",
    image: "/rogerli.png",
    bio: "Strake Jesuit College Preparatory School",
  },
  {
    name: "Mac Stratton",
    image: "/macstratton.png",
    bio: "Strake Jesuit College Preparatory School",
  },
  {
    name: "Anika Harpavat",
    image: "/anikaharpavat.png",
    bio: "Stanford University",
  },
  {
    name: "Aarav Mahendru",
    image: "/aaravmahendru.jpg",
    bio: "Lamar High School",
  },
    {
    name: "Aaron Wang",
    image: "/aaronwang.jpg",
    bio: "Strake Jesuit College Preparatory School",
  },
  {
    name: "Tyler Horvath",
    image: "/tylerhorvath.png",
    bio: "Lamar High School",
  },
  {
    name: "Gabriel Fernandes",
    image: "/gabrielfernandes.jpg",
    bio: "Purdue University",
  },
  {
    name: "Faysal Alameddine",
    image: "/faysalalameddine.jpg",
    bio: "Georgetown University",
  },
  {
    name: "Clare Hayes",
    image: "/clarehayes.jpg",
    bio: "Incarnate Word Academy",
  },
  {
    name: "Ani Bellows",
    image: "/anibellows.jpg",
    bio: "University of Texas at Austin",
  },
  {
    name: "Kevin Chen",
    image: "/kevinchen.png",
    bio: "Stanford University",
  },
  {
    name: "Mateo Varcarcel",
    image: "/mateovarcarcel.png",
    bio: "Texas A&M University",
  },
  {
    name: "Amar Singh",
    image: "/amarsingh.png",
    bio: "Southwestern University",
  }
];

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
    {[
      {
        name: 'High School Parent, Woodlands',
        quote: 'I really liked how personalized the teaching was. It felt that my son had his own private tutor.',
      },
      {
        name: 'Middle School Parent, West U',
        quote:
          'My son actually looks forward to the sessions now!',
      },
      {
        name: 'High School Parent, Bellaire',
        quote:
          'I like how readily available the tutor was - he was always there to help my son.',
      },
    ].map((review, idx) => (
      <div
        key={idx}
        className="bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col justify-between"
      >
        <div>
          <h3 className="font-semibold text-lg mb-1">{review.name}</h3>
          <p className="text-sm text-gray-600 italic">“{review.quote}”</p>
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
