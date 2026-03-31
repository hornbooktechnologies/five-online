import Image from "next/image";
import Container from "@/app/components/common/Container";

export default function DifferentiatorSection({
  headline,
  points = [],
  calloutQuestion,
  image,
  imageAlt,
}) {
  return (
    <>
      <section className="bg-[#f8f8f8]">
        <Container>
          <div className="flex justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8 pl-5">{headline}</h2>
              <ul className="space-y-2 mb-8 pl-5">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {point.icon}
                    <span className="text-base leading-relaxed">{point.title}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium mb-3 pl-5">Every engagement begins with one question:</p>
              <div className="bg-[#E6FFD9] p-5">
                <p className="text-lg font-semibold leading-snug">
                  {calloutQuestion}
                </p>
                <p className="text-sm mt-2">
                  Our model is consultative, structured, and performance-oriented.                 </p>
                <p className="text-sm mt-2">
                  We don&apos;t just build — we challenge assumptions.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={image}
                alt={imageAlt}
                width={525}
                height={582}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
