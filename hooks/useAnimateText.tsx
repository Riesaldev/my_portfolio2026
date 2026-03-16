"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useAnimateText<T extends HTMLElement = HTMLElement>(options?: {
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
  start?: string;
}): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // 1. Convertir texto en spans animables
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes: Text[] = [];

    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      if (node.textContent?.trim()) textNodes.push(node);
    }

    textNodes.forEach((node) => {
      // Dividir el texto en palabras y mantener los espacios
      const words = node.textContent!.split(/(\s+)/);

      const wrapper = document.createElement("span");
      wrapper.innerHTML = words
        .map(
          (w) =>
            w.trim() === ""
              ? w.replace(/ /g, "&nbsp;")
                : `<span class="inline-block opacity-0 translate-y-3">${w}</span>`
        )
        .join("");

      node.replaceWith(wrapper);
    });

    const spans = root.querySelectorAll("span");

    // 2. Animación controlada por ScrollTrigger
    const anim = gsap.to(spans, {
      opacity: 1,
      y: 0,
      ease: "power3.out",
      duration: options?.duration ?? 0.6,
      stagger: options?.stagger ?? 0.015,
      paused: true,
    });

    const trigger = ScrollTrigger.create({
      trigger: root,
      start: options?.start ?? "top 80%",
      onEnter: () => anim.play(),
      once: true, // solo una vez
    });

    return () => {
      trigger.kill();
      anim.kill();
    };
  }, []);

  return ref;
}
