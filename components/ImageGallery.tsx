"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images?: GalleryImage[];
  imagesJson?: string; 
};

export default function ImageGallery({ images, imagesJson }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);

  // Prefer the array prop; fall back to parsing imagesJson from MDX
  let list: GalleryImage[] = images ?? [];

  if (list.length === 0 && imagesJson) {
    try {
      const parsed = JSON.parse(imagesJson);
      if (Array.isArray(parsed)) {
        list = parsed;
      }
    } catch {
      // invalid JSON — leave list empty
    }
  }

  if (list.length === 0) {
    return (
      <div className="my-10 border border-red-500 p-4 text-sm">
        ImageGallery: no images (check images or imagesJson prop)
      </div>
    );
  }

  const prev = () => {
    setCurrent((i) => (i === 0 ? list.length - 1 : i - 1));
  };

  const next = () => {
    setCurrent((i) => (i === list.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="my-10">
      {/* Main image */}
      <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl">
        <Image
          src={list[current].src}
          alt={list[current].alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 896px"
        />

        {list.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 border border-black bg-white px-3 py-1.5 text-sm hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 border border-black bg-white px-3 py-1.5 text-sm hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {list.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {list.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2.5 w-2.5 rounded-full border border-black transition-colors cursor-pointer ${index === current ? "bg-black" : "bg-white"
                }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter + caption */}
      <p className="mt-2 text-center text-sm text-neutral-500">
        {list[current].alt}
        {list.length > 1 && (
          <span className="ml-2">
            ({current + 1} / {list.length})
          </span>
        )}
      </p>
    </div>
  );
}
