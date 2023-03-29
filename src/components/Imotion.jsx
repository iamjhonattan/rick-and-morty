import { useState, useEffect } from "react";
import "./styles-components/Imotion.css";

export default function Imotion() {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // Deshabilitar la animación después de que se complete
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, []);

  return (
    <div className="imotion">
      {animate && <div className="background-imotion" />}
    </div>
  );
}
