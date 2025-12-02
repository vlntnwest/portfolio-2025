import { useEffect, useRef } from "react";

export function useInfiniteClone(originalRef, threshold = 300) {
  const lastCloneRef = useRef(null); // pour garder la trace du dernier clone

  useEffect(() => {
    const originalNode = originalRef.current;
    if (!originalNode) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollBottom =
        document.body.scrollHeight - (scrollTop + windowHeight);

      if (scrollBottom < threshold) {
        const clone = originalNode.cloneNode(true);

        // si on a déjà un clone, on ajoute après le dernier clone
        const insertAfter = lastCloneRef.current || originalNode;
        insertAfter.insertAdjacentElement("afterend", clone);

        // on mémorise ce dernier clone
        lastCloneRef.current = clone;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [originalRef, threshold]);
}
