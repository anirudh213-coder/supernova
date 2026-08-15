import { useState, useRef } from 'react';

export function useTilt(maxTilt = 14) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ pxX: 0, pxY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const calculateTilt = (clientX: number, clientY: number, target: HTMLDivElement) => {
    const rect = target.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    return {
      rotateX: -normY * maxTilt,
      rotateY: normX * maxTilt,
      x,
      y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!e.currentTarget) return;
    const tilt = calculateTilt(e.clientX, e.clientY, e.currentTarget);
    setRotate({ x: tilt.rotateX, y: tilt.rotateY });
    setCursorPos({ pxX: tilt.x, pxY: tilt.y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.currentTarget || !e.touches[0]) return;
    const touch = e.touches[0];
    const tilt = calculateTilt(touch.clientX, touch.clientY, e.currentTarget);
    setRotate({ x: tilt.rotateX, y: tilt.rotateY });
    setCursorPos({ pxX: tilt.x, pxY: tilt.y });
  };

  const handleInteractionStart = () => setIsHovered(true);

  const handleInteractionEnd = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return {
    cardRef,
    rotate,
    cursorPos,
    isHovered,
    handlers: {
      onMouseMove: handleMouseMove,
      onTouchMove: handleTouchMove,
      onMouseEnter: handleInteractionStart,
      onTouchStart: handleInteractionStart,
      onMouseLeave: handleInteractionEnd,
      onTouchEnd: handleInteractionEnd,
    },
  };
}