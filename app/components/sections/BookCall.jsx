import Container from "../common/Container";
import Button from "../common/Button";

const bestFit = [
  "Running or launching a serious D2C / enterprise brand",
  "Focused on growth, not just design",
  "Ready to invest in performance-driven digital infrastructure",
  "Looking for long-term partnership",
];

const notIdeal = [
  "You are exploring low-cost options",
  "You only need basic website execution",
  "You are not yet ready to invest in growth",
];

const callSteps = [
  "Growth gap diagnosis",
  "Website conversion audit direction",
  "Revenue opportunity mapping",
  "Clear next step recommendation",
];

export default function BookCall() {
  return (
    <section id="book-call" className="py-20 sm:py-28 bg-zinc-950">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Top Banner */}
          <div className="text-center mb-12">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Want to build a website with us?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Schedule a 30-minute call to see if we are a good match.
            </h2>
          </div>

          {/* CEO Intro */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10 mb-10">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I am <span className="text-white font-semibold">Nayan Khandor</span> —
              CEO of Five Online, and together with our in-house team, we will work
              with you from start to finish. We work with a limited number of brands
              where we can create measurable impact — not just build websites.
            </p>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Best Fit */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Best fit if you are:
              </h3>
              <ul className="space-y-3">
                {bestFit.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-400">
                    <svg className="w-5 h-5 flex-shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Ideal */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Not ideal if:
              </h3>
              <ul className="space-y-3">
                {notIdeal.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-400">
                    <svg className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What Happens */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                What happens in the 30-min call:
              </h3>
              <ul className="space-y-3">
                {callSteps.map((item, i) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-400">
                    <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-amber-500/20 text-amber-500 text-xs font-bold">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button href="#book-call" variant="primary" size="lg">
              Book Strategy Call
            </Button>
            <p className="text-xs text-gray-500 mt-4 max-w-md mx-auto">
              DISCLAIMER: If your budget is under ₹1 lac, this is NOT for you.
              Under this revenue, do NOT book since your call will be CANCELLED
              automatically.
            </p>
            <p className="text-sm text-gray-500 mt-6">
              If you have a general inquiry, you can send it to our email:{" "}
              <a
                href="mailto:contact@fiveonline.in"
                className="text-amber-500 hover:underline"
              >
                contact@fiveonline.in
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
