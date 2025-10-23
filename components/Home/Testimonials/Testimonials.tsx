import React, { useRef, useEffect, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

type Testimonial = {
  avatar: string;
  name: string;
  message: string;
  role?: string;
  profileUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    avatar: "/avatars/lakshminair.jpg",
    name: "Lakshmi Nair",
    role: "Project Manager, Neology, Inc.",
    message:
      "I worked with Thamjid at Flycatch Infotech. He consistently delivered high-quality work with efficiency and precision. He has strong technical skills, clear communication, and a collaborative mindset. A reliable and talented developer I would highly recommend.",
    profileUrl: "https://www.linkedin.com/in/lakshmi-soman-nair/", 
  },
  {
    avatar: "/avatars/manuramachandran.jpg",
    name: "Dr. MAanu Mundapatt Ramachandran",
    role: "Academicians: Computer Science @ Ministry of Education - UAE",
    message:
      "Thamjid is exceptionally talented in programming, analytical reasoning, and problem-solving. He has demonstrated a natural ability to grasp complex concepts quickly and apply them effectively to both academic and practical projects.",
    profileUrl: "https://www.linkedin.com/in/dr-manu-mundappat-ramachandran-3686591a6/",
  },
  {
    avatar: "/avatars/arunnramesh.jpg",
    name: "Arunn Ramesh",
    role: "Project Manager, Flycatch Infotech",
    message:
      "I had the pleasure of working with Thamjid, an excellent Python developer with strong problem-solving skills and a keen eye for writing clean, efficient code. I highly recommend him for any challenging development role.",
    profileUrl: "https://www.linkedin.com/in/arunn-ramesh-cspo%C2%AE-637b12151/",
  },
  {
    avatar: "/avatars/rnandhukishor.jpg",
    name: "R Nandhu Kishor",
    role: "Senior Software Developer, Flycatch Infotech",
    message:
      "Thamjid is an awesome team player. Had worked with him in a project. He is great at understanding requirements and getting done whats required, good at handling international clients. I would highly recommend him for future lead roles.",
    profileUrl: "https://www.linkedin.com/in/nanthukishor/",
  },
  {
    avatar: "/avatars/rafeequent.jpg",
    name: "Rafeeque NT",
    role: "Senior Software Developer, Micro Objects",
    message:
      "I really enjoyed working with Thamjid. he’s a reliable and talented backend developer who made my work so much easier by building smooth and efficient APIs. He’s always supportive, easy to work with, and brings a problem-solving attitude.",
    profileUrl: "https://www.linkedin.com/in/rafeequent/",
  },
];

const LOOP_FACTOR = 2; // Duplicate testimonials for seamless looping

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Infinite auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame: number;
    let speed = 0.5; // px per frame

    function animate() {
      if (!isDragging) {
        container.scrollLeft += speed;
        // Loop back to start for infinite effect
        if (
          container.scrollLeft >=
          container.scrollWidth / LOOP_FACTOR
        ) {
          container.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isDragging]);

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
      // Loop manually if needed
      const maxScroll = containerRef.current.scrollWidth / LOOP_FACTOR;
      if (containerRef.current.scrollLeft < 0) {
        containerRef.current.scrollLeft = maxScroll + containerRef.current.scrollLeft;
      } else if (containerRef.current.scrollLeft > maxScroll) {
        containerRef.current.scrollLeft = containerRef.current.scrollLeft - maxScroll;
      }
    }
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  // Touch events for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
      const maxScroll = containerRef.current.scrollWidth / LOOP_FACTOR;
      if (containerRef.current.scrollLeft < 0) {
        containerRef.current.scrollLeft = maxScroll + containerRef.current.scrollLeft;
      } else if (containerRef.current.scrollLeft > maxScroll) {
        containerRef.current.scrollLeft = containerRef.current.scrollLeft - maxScroll;
      }
    }
  };
  const onTouchEnd = () => setIsDragging(false);

  // Duplicate testimonials for seamless looping
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="TestimonialsSection"
      className="my-16 px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-72"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0 mb-10">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 04.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Testimonials
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: "auto" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {displayTestimonials.map((t, i) => (
          <div
            key={i}
            className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-xl p-6 flex-1 min-w-[320px] max-w-md mx-auto flex flex-col items-center relative overflow-hidden group hover:bg-white/20 hover:border-AAAccent/40 transition-all duration-500 hover:shadow-AAAccent/20"
            style={{ userSelect: "none" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-AAAccent/5 to-AAsecondary/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-AATextPrimary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex flex-col items-center w-full h-full">
              <a href="https://www.linkedin.com/in/thamjid-mannarayil/details/recommendations/" target="_blank" tabIndex={-1}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 border-2 border-primary hover:scale-105 transition-transform"
                  draggable={false}
                />
              </a>
              <p className="text-lg italic text-center mb-4 text-AATextSecondary">
                &quot;{t.message}&quot;
              </p>
              <div className="text-center">
                {/* Name links to profile */}
                <a
                  href={t.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold font-sans text-AAsecondary text-base hover:underline"
                >
                  {t.name}
                </a>
                {t.role && (
                  <span className="block text-sm text-AATextMuted">{t.role}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}