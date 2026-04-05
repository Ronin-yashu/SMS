"use client";
import { CldImage } from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {
  return (
    <CldImage
      src="https://res.cloudinary.com/dbuolgwko/image/upload/v1774462262/socialfeed/cuicptvj6c2o2icasbai.jpg" // Use this sample image or upload your own via the Media Library
      width="500" // Transform the image: auto-crop to square aspect_ratio
      height="500"
      alt='error'
      crop={{
        type: 'auto',
        source: true
      }}
    />
  );
}