import * as React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "images/chest.png", width: "305px", height: "300px", top: "50%", left: "46%" },
  { src: "images/totem.png", width: "275px", height: "700px", top: "15.5%", left: "7%" },
];

const imagesMobile = [
  { src: "images/chest.png", width: "152px", height: "150px", top: "35%", left: "25%" },
];

const Scene: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  if (isMobile) {
    return (
      <div className="scene-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(images/bg-mobile.png)` }} 
        ></div>
        {imagesMobile.map((image, index) => (
          <motion.div
            key={index}
            className="totem-image"
            style={{
              backgroundImage: `url(${image.src})`,
              width: image.width,
              height: image.height,
              top: image.top,
              left: image.left,
              position: "absolute",
            }}
            animate={image.src === "images/chest.png" ? { scale: [1, 1.2, 1] } : {}}
            transition={image.src === "images/chest.png" ? { duration: 2, repeat: Infinity } : {}}
          ></motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="scene-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(images/bg.png)` }} 
      ></div>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="totem-image"
          style={{
            backgroundImage: `url(${image.src})`,
            width: image.width,
            height: image.height,
            top: image.top,
            left: image.left,
            position: "absolute",
          }}
          animate={image.src === "images/chest.png" ? { scale: [1, 1.2, 1] } : {}}
          transition={image.src === "images/chest.png" ? { duration: 2, repeat: Infinity } : {}}
        ></motion.div>
      ))}
    </div>
  );
};

export default Scene;
