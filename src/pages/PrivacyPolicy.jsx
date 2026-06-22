function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">

      {/* Hero */}
      <section className="border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Privacy{' '}
            <span className="font-[Cardo] italic text-zinc-300">Policy</span>
          </h1>
          <p className="mx-auto mt-6 max-w-6xl text-sm leading-relaxed text-zinc-400">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-12">

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Overview</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            Eternal Bloom ("we," "us," or "our") operates the Eternal Bloom website. This page informs you of our policies regarding the collection, use, and disclosure of personal information we receive from users of our site. We take your privacy seriously and are committed to protecting your personal information.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Information We Collect</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            We collect information you provide directly to us when you book a consultation, contact us through the site, or otherwise communicate with us. This may include your name, email address, phone number, and any details you share about your tattoo project.
          </p>
          <p className="text-sm leading-relaxed text-zinc-400">
            We may also automatically collect certain information about your device and how you interact with our site, including your IP address, browser type, pages visited, and time spent on those pages.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">How We Use Your Information</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            We use the information we collect to:
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-400 list-none">
            {[
              'Process and manage your consultation bookings and appointments',
              'Communicate with you about your appointment, follow-ups, and aftercare',
              'Respond to your comments, questions, and requests',
              'Send you updates or information related to our studio, when you have opted in',
              'Improve and optimize our website and services',
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Information Sharing</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services (for example, a booking platform we use to manage appointments).
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Cookies</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            Our website may use cookies to enhance your experience. Cookies are small files placed on your device that help us understand how you use our site. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Data Security</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Third-Party Links</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Your Rights</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            You have the right to access, correct, or request deletion of the personal information we hold about you. To make such a request, please contact us directly at the email address below.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Changes to This Policy</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date at the top.
          </p>
        </div>

        <div className="space-y-4 border-t border-zinc-800/80 pt-12">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Contact Us</h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:hello@eternalbloomstudio.com" className="text-zinc-200 underline underline-offset-4 hover:text-white transition-colors">
              hello@eternalbloomstudio.com
            </a>.
          </p>
        </div>

      </section>
    </div>
  )
}

export default PrivacyPolicy