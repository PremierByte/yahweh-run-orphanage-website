import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subTitle: string;
  bgImage?: string;
}

const PageHeader = ({
  title,
  subTitle,
  bgImage = "/images/slides/slide2.jpg",
}: PageHeaderProps) => {
  return (
    <section className="relative py-28 md:py-36 bg-primary overflow-hidden text-center md:rounded-b-4xl border-b border-line">
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt={`${title} background`}
            fill
            priority
            className="object-cover object-center grayscale opacity-40 mix-blend-multiply"
            sizes="100vw"
          />
          {/* Radial overlay to dim the edges and lock focus on the text content */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-stack/50" />
        </>
      )}

      {/* Pure Primary Color Overlay Layer to guarantee brand tone integration */}
      <div className="absolute inset-0 bg-primary/85 mix-blend-hard-light pointer-events-none" />

      {/* Subtle bottom dark fade to transition smoothly into standard page sections */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-stack to-transparent opacity-90" />

      {/* Foreground Text Structure */}
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 drop-shadow-sm">
          {title}
        </h1>
        <div className="w-16 h-1.5 bg-secondary mx-auto mb-6 rounded-full opacity-80" />
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-semibold leading-relaxed drop-shadow-sm">
          {subTitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
