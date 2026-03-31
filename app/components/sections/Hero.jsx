import Container from "../common/Container";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10 pt-24 sm:pt-32">
        <div className="max-w-4xl">
          <p className="text-amber-500 text-lg sm:text-xl font-medium mb-4 tracking-wide">
            Namaste.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            We Are India&apos;s Revenue-First{" "}
            <span className="text-amber-500">Web Design</span> Company.
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
            Five Online is a premium web design company helping enterprises and
            D2C brands increase leads, sales, and ROAS through
            conversion-driven websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#capabilities" variant="primary" size="lg">
              Explore Capabilities
            </Button>
            <Button href="#book-call" variant="secondary" size="lg">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
