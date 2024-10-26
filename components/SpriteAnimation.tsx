import React, { useState, useEffect } from "react";

interface AnimationInfo {
  name: string;
  startFrame: number;
  frameCount: number;
}

interface SpriteAnimationProps {
  frameWidth: number;
  frameHeight: number;
  columns: number;
  rows: number;
  frameRate: number;
  className: string;
  animations?: AnimationInfo[];
  currentAnimation?: string;
  adjustment?: number;
  playOnce?: boolean;
}

const SpriteAnimation: React.FC<SpriteAnimationProps> = ({
  frameWidth,
  frameHeight,
  columns,
  rows,
  frameRate,
  animations,
  currentAnimation,
  adjustment,
  className,
  playOnce = false,
}) => {
  const [frame, setFrame] = useState(0);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  const animationInfo = animations
    ? animations.find((animation) => animation.name === currentAnimation)
    : null;

  useEffect(() => {
    if (animationInfo) {
      const interval = setInterval(() => {
        setFrame((prevFrame) => {
          const nextFrame = (prevFrame + 1) % animationInfo.frameCount;
          if (playOnce && nextFrame === 0) {
            setHasPlayedOnce(true);
            clearInterval(interval);
            return prevFrame;
          }
          return nextFrame;
        });
      }, 1000 / frameRate);

      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setFrame((prevFrame) => {
          const nextFrame = (prevFrame + 1) % (columns * rows);
          if (playOnce && nextFrame === 0) {
            setHasPlayedOnce(true);
            clearInterval(interval);
            return prevFrame;
          }
          return nextFrame;
        });
      }, 1000 / frameRate);

      return () => clearInterval(interval);
    }
  }, [frameRate, animationInfo, playOnce]);

  const frameIndex = animationInfo ? animationInfo.startFrame + frame : frame;
  const bgPositionX = -(frameIndex % columns) * frameWidth;
  const bgPositionY = -Math.floor(frameIndex / columns) * frameHeight;

  return (
    <div
      className={className}
      style={{
        backgroundPositionX: `${bgPositionX}px`,
        backgroundPositionY: `${bgPositionY}px`,
        backgroundSize: `${columns * (frameWidth + (adjustment ?? 0))}px ${
          rows * frameHeight
        }px`,
        width: frameWidth,
        height: frameHeight,
        display: "block",
      }}
    />
  );
};

export default SpriteAnimation;