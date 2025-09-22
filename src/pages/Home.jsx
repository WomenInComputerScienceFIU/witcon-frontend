import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from "lucide-react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    { src: "", alt: "WitCON 2025 Conference" },
    { src: "", alt: "Networking at WitCON 2025" },
    { src: "", alt: "Panel Discussion" },
    { src: "", alt: "Technical Workshop" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="space-y-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">WiTCON 2025</h2>
        <p className="text-lg">
          Florida&apos;s largest student-led Women in Tech Conference
        </p>
        <p className="text-base">
          Hosted by Women in Computer Science at Florida International University
        </p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>March 27, 2026</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Graham Center Ballrooms, FIU Modesto Maidique Campus</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            <span>9:00 AM – 7:00 PM</span>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold mb-3">What is WiTCON?</h3>
        <p className="mb-3">
          WiTCON is the signature Women in Technology Conference at Florida
          International University.
        </p>
        <p className="mb-3">
          Join us for a full day of learning, networking, and empowerment of
          underrepresented local talent in tech.
        </p>
      </div>

      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold mb-3">Conference Highlights</h3>
        <div className="relative">
          <div className="relative overflow-hidden border">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
              }}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full border ${
                  index === currentImageIndex ? "bg-black" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

