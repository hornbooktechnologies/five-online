import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const videos = [
  { id: "LOZ_JA8RPyY", title: "Client Testimonial 1" },
  { id: "4npzSxlU6nI", title: "Client Testimonial 2" },
  { id: "aipV7u2Da3s", title: "Client Testimonial 3" },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-black">
      <Container>
        <SectionHeading
          title="Real Words. Real Wins."
          subtitle="These stories reveal why brands choose Five Online"

        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
