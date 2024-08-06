/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Counter = ({ start, end, duration, suffix }) => {
  const [count, setCount] = useState(start);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Stop observing after it has come into view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(
        end,
        Math.floor((progress / duration) * (end - start) + start)
      );
      setCount(increment);
      if (increment < end) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start, inView]);

  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <div ref={ref} className="text-6xl font-bold">
      <span>{formatNumber(count)}</span>
      <span className="text-white">{suffix}</span>
    </div>
  );
};

export default Counter;
