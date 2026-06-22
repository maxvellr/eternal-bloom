import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    category: 'Booking & Consultations',
    questions: [
      {
        q: 'How do I request a consultation?',
        a: 'You can request a consultation through our online booking page, or by contacting the artist on their instagram. Consultations are free and typically last 30–45 minutes.',
      },
      {
        q: 'Is there a deposit required to book?',
        a: 'Yes, a non-refundable deposit is required to secure your appointment. The deposit amount varies by artist and project size and will be applied toward the final cost of your tattoo.',
      },
      {
        q: 'What should I bring to my consultation?',
        a: 'Bring any reference images, inspiration photos, or ideas you have for your tattoo. The more context you can provide, the better your artist can understand your vision. Screenshots, printouts, or a Pinterest board all work great.',
      },
    ],
  },
  {
    category: 'Pricing',
    questions: [
      {
        q: 'How much does a tattoo cost?',
        a: 'Pricing varies depending on the size, complexity, placement, and artist. Each artist has their own hourly rate and minimum charge.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'We do not offer payment plans. Full payment is due at the time of your appointment.',
      },
    ],
  },
  {
    category: 'The Tattoo Process',
    questions: [
      {
        q: 'How should I prepare for my appointment?',
        a: 'Get a good night\'s sleep, eat a full meal before your session, stay hydrated, and wear comfortable clothing that provides easy access to the area being tattooed. Avoid alcohol for at least 24 hours prior.',
      },
      {
        q: 'How long will my session take?',
        a: 'Session length depends on the size and complexity of your design. Small pieces may take 1–2 hours while larger, more detailed work can span multiple sessions. Your artist will give you a time estimate during your consultation.',
      },
      {
        q: 'Does getting a tattoo hurt?',
        a: 'Pain is subjective and varies by placement, individual pain tolerance, and session length. Some areas are more sensitive than others. Most clients describe the sensation as manageable and worth it.',
      },
      {
        q: 'Can I bring a friend?',
        a: 'Eternal Bloom is a private studio, so please ask your artist prior to your session and ensure guests remain respectful of the space and other clients.',
      },
    ],
  },
  {
    category: 'Aftercare',
    questions: [
      {
        q: 'How do I care for my new tattoo?',
        a: 'Your artist will provide detailed aftercare instructions at the end of your session.',
      },
      {
        q: 'What if my tattoo needs a touch-up?',
        a: 'Touch-ups are a normal part of the process. Reach out to your artist directly to schedule.',
      },
    ],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`mb-2 rounded-lg header-button ${open ? 'border-zinc-600' : 'border-zinc-800/80'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-4 text-left focus:outline-none"
      >
        <span className={`text-sm font-medium transition-colors ${open ? 'text-zinc-100' : 'text-zinc-400'}`}>
          {q}
        </span>
        <span
          className="ml-4 flex-shrink-0 text-zinc-500 transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'none' }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4">
          <p className="text-sm leading-relaxed text-zinc-400">{a}</p>
        </div>
      )}
    </div>
  )
}

function FAQ() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">

      {/* Hero */}
      <section className="border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Got Questions?
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Frequently Asked{' '}
            <span className="font-[Cardo] italic text-zinc-300">Questions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-6xl text-sm leading-relaxed text-zinc-400">
            Everything you need to know before your first visit. Can't find what you're looking for? Reach out and we'll get back to you.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {faqs.map(section => (
          <div key={section.category} className="mb-12">
            <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              {section.category}
            </h2>
            {section.questions.map(item => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-zinc-50">
            Still have questions?
          </h2>
          <p className="mt-4 text-sm text-zinc-400">
            We're happy to help. Book a consultation and we'll walk you through everything.
          </p>
          <div className="mt-8">
            <Link to="/booking" className="rounded-full bg-zinc-50 px-6 text-sm font-medium header-button transition-colors hover:bg-zinc-200">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default FAQ