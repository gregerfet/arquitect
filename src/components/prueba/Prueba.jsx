'use client'

import styles from "../prueba/prueba.module.css"
import { useState, useEffect, useRef } from "react"

const Prueba = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      containerRef.current.classList.add(styles.expandedAnimated);
    } else {
      containerRef.current.classList.remove(styles.expandedAnimated);
    }
  }, [isExpanded]);

  return (
    <div ref={containerRef} className={`${styles.container} ${isExpanded ? styles.expanded : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
  {isExpanded && <div className={styles.expandedText}>Este es el texto expandido</div>}
</div>
  );
}
export default Prueba;