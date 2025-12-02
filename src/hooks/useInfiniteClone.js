import { useState, useEffect } from "react";

export function useInfiniteScroll(initialItems, threshold = 400) {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollBottom =
        document.body.scrollHeight - (scrollTop + windowHeight);

      if (scrollBottom < threshold) {
        setItems((prev) => [...prev, ...initialItems]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialItems, threshold]);

  return items;
}
