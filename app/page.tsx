// app/page.tsx
'use client'

import { FaStar } from 'react-icons/fa'

export default function HomePage() {
  return (
    <div className="text-center space-y-10">
      <div>
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Math Made Simple</h1>
        <p className="text-lg text-gray-700 italic">Est. 2024 | Explore. Understand. Thrive.</p>
      </div>

      <section className="text-gray-700 max-w-3xl mx-auto text-base leading-relaxed">
        <p>
          <strong className="font-semibold"></strong>{' '}
          Math Made Simple is an organization dedicated to helping students find joy in problem-solving and tackling difficult math questions. We believe that while math can be tedious and requires patience, it becomes incredibly rewarding, and even fun, once students begin to understand and master it. Our goal is to guide students through that journey—building confidence, curiosity, and a love for learning through engaging and thoughtful instruction.
        </p>
      </section>

      <section className="text-xl font-semibold text-gray-800">
        <p>
          With over <span className="text-blue-700 font-bold">30+ students</span> and an exciting team of instructors from Houston-area schools and top colleges, we’re here to help your child feel ahead of the curve in math.
        </p>
      </section>

<div className="max-w-md mx-auto space-y-2">
  <img
    src="/growth.png"
    alt="Student growth chart"
    className="rounded-lg shadow-md w-full"
  />
  <p className="text-sm italic text-gray-600">Note: it goes over 100 because of extra credit</p>
</div>

{/* From the Parents - Combined Section */}
<div className="bg-white p-8 rounded-xl shadow-md max-w-5xl mx-auto">
  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">From the Parents:</h2>
  <div className="flex justify-center space-x-1 text-yellow-400 text-2xl mb-6">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} />
    ))}
  </div>

{/* Review Grid Inside the Box */}
<div className="grid md:grid-cols-3 gap-6">
  {[
    {
      name: 'Middle School Parent, Bellaire',
      quote: 'My son said he learned a lot. It was nice he took his shoes off. Very polite.',
    },
    {
      name: 'Lower School Parent, West U',
      quote:
        'He got along well with the children and kept them engaged, which is sometimes a challenge!',
    },
    {
      name: 'Middle School Parent, Sugar Land',
      quote:
        'Prepared for the session, Eased in well with the kid, Connected well, Calm and Composed, Patient',
    },
  ].map((review, i) => (
    <div
      key={i}
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

      {/* Contact Info */}
      <footer className="text-sm text-gray-700 pt-12">
        <p>
          <span className="font-semibold">Contact Info:</span>{' '}
          <a
            href="mailto:keshav.harpavat@gmail.com"
            className="text-blue-700 underline hover:text-blue-900"
          >
            keshav.harpavat@gmail.com
          </a>
          , 469-880-2538, Houston, Texas, 77401
        </p>
      </footer>
    </div>
  )
}
