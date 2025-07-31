'use client'

import { FaStar, FaExternalLinkAlt } from 'react-icons/fa'

export default function TutoringPage() {
  return (
    <div className="text-center space-y-10 text-gray-800">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Tutoring</h1>
        <p className="text-lg max-w-3xl mx-auto">
          At <strong>Math Made Simple</strong>, we guarantee one-on-one tutoring with top instructors
          to ensure your child thrives. Whether it’s reviewing a tough test or getting ahead in class,
          we’re here to help. See our options below and sign up to get started.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="max-w-4xl mx-auto text-left space-y-6">
        <h2 className="text-2xl font-bold text-center">Tutoring Plans</h2>
        <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-blue-100 text-gray-800">
            <tr>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            <tr className="border-t">
              <td className="px-4 py-3 font-semibold">Quick Solve</td>
              <td className="px-4 py-3">30 mins</td>
              <td className="px-4 py-3">$17.50</td>
              <td className="px-4 py-3">Great for homework help or quick reviews</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-semibold">Standard</td>
              <td className="px-4 py-3">1 hour</td>
              <td className="px-4 py-3">$35</td>
              <td className="px-4 py-3">Ideal for mastering concepts and building skills</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3 font-semibold">Deep Dive</td>
              <td className="px-4 py-3">2 hours</td>
              <td className="px-4 py-3">$70</td>
              <td className="px-4 py-3">In-depth prep for tests or major challenges</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-gray-600 text-center">
          * $15 cancellation fee applies. 80% of tutoring fees go directly to tutors; 20% supports outreach and tools.
        </p>
      </div>

      {/* Google Form Link */}
      <div className="mt-6">
        <a
          href="https://forms.gle/Gkq6Ru6uBLEX7kV29"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow-md transition"
        >
          Fill Out Google Form to Get Started <FaExternalLinkAlt />
        </a>
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
        name: 'Parent A',
        quote: 'My son said he learned a lot. It was nice he took his shoes off. Very polite.',
      },
      {
        name: 'Parent B',
        quote:
          'He got along well with the children and kept them engaged, which is sometimes a challenge!',
      },
      {
        name: 'Parent C',
        quote:
          'Prepared for the session, Eased in well with the kid, Connected well, Calm and Composed, Patient',
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


      {/* Footer */}
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
