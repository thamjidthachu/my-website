import React, { useRef, useEffect, useState } from "react";

type Testimonial = {
  avatar: string;
  name: string;
  message: string;
  role?: string;
};

const testimonials: Testimonial[] = [
  {
    avatar: "/avatars/lakshminair.jpg",
    name: "Lakshmi Nair",
    role: "Project Manager, Neology, Inc.",
    message:
      "I worked with Thamjid at Flycatch Infotech. He consistently delivered high-quality work with efficiency and precision. He has strong technical skills, clear communication, and a collaborative mindset. A reliable and talented developer I would highly recommend.",
  },
  {
    avatar: "/avatars/arunnramesh.jpg",
    name: "Arunn Ramesh",
    role: "Project Manager, Flycatch Infotech",
    message:
      "I had the pleasure of working with Thamjid, an excellent Python developer with strong problem-solving skills and a keen eye for writing clean, efficient code. I highly recommend him for any challenging development role.",
  },
  {
    avatar: "/avatars/rnandhukishor.jpg",
    name: "R Nandhu Kishor",
    role: "Senior Software Developer, Flycatch Infotech",
    message:
      "Thamjid is an awesome team player. Had worked with him in a project. He is great at understanding requirements and getting done whats required, good at handling international clients. I would highly recommend him for future lead roles.",
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
    <section className="my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
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
            className="bg-white dark:bg-neutral-900 shadow-lg rounded-xl p-6 flex-1 min-w-[320px] max-w-md mx-auto flex flex-col items-center"
            style={{ userSelect: "none" }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4 border-2 border-primary"
              draggable={false}
            />
            <p className="text-lg italic text-center mb-4 text-neutral-700 dark:text-neutral-300">
              “{t.message}”
            </p>
            <div className="text-center">
              <span className="font-semibold font-sans text-AAsecondary text-base">{t.name}</span>
              {t.role && (
                <span className="block text-sm text-neutral-500">{t.role}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}