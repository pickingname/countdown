"use client";

import { useEffect, useRef, useState } from "react";

interface ImageWithPosition {
  image: HTMLImageElement;
  x: number;
  y: number;
}

const ImageCanvas = () => {
  const canvasRef = useRef(null);
  const [imagePositions, setImagePositions] = useState<ImageWithPosition[]>([]);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadImages = async () => {
      const imageUrls = Array.from(
        { length: 20 },
        (_, index) => `https://picsum.photos/200?random=${index}`
      );

      const loadedImages = await Promise.all(
        imageUrls.map((url) => {
          return new Promise<HTMLImageElement>((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
          });
        })
      );

      // Generate positions once when images are loaded
      const positions = loadedImages.map((img) => ({
        image: img,
        x: Math.random() * (800 - img.width),
        y: Math.random() * (600 - img.height),
      }));

      setImagePositions(positions);
      drawImages(positions);
    };

    loadImages();
  }, []);

  const drawImages = (positions: ImageWithPosition[]) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(offset.x, offset.y);
    ctx.scale(scale, scale);

    positions.forEach(({ image, x, y }) => {
      ctx.drawImage(image, x, y, image.width, image.height);
    });

    ctx.restore();
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY;
    const zoomFactor = delta > 0 ? 1.1 : 0.9;

    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const newScale = scale * zoomFactor;
    const newOffset = {
      x: offset.x - mouseX * (zoomFactor - 1),
      y: offset.y - mouseY * (zoomFactor - 1),
    };

    setScale(newScale);
    setOffset(newOffset);
    drawImages(imagePositions);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const newOffset = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    };

    setOffset(newOffset);
    drawImages(imagePositions);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col items-center pt-20">
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="border border-black cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
    </div>
  );
};

export default ImageCanvas;
