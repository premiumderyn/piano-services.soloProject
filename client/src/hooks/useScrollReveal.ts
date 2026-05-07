import { useEffect, useRef } from 'react';

type Animation = 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'fade';

interface UseScrollRevealOptions {
  animation?: Animation;
  duration?: number;   // ms
  delay?: number;      // ms
  threshold?: number;  // 0–1, скільки елемента має бути видно
  once?: boolean;      // анімувати тільки раз
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  animation = 'fade-up',
  duration = 600,
  delay = 0,
  threshold = 0.15,
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.dataset.reveal = animation;
    el.style.setProperty('--reveal-duration', `${duration}ms`);
    el.style.setProperty('--reveal-delay', `${delay}ms`);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove('is-revealed');
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, duration, delay, threshold, once]);

  return ref;
}

// ── Stagger-хук для списків ──────────────────────────────────────────────────
// Приймає кількість дочірніх елементів і застосовує зростаючий delay до кожного

interface UseStaggerRevealOptions {
  animation?: Animation;
  duration?: number;
  staggerDelay?: number;  // ms між кожним елементом
  threshold?: number;
  once?: boolean;
}

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>({
  animation = 'fade-up',
  duration = 500,
  staggerDelay = 100,
  threshold = 0.1,
  once = true,
}: UseStaggerRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];

    children.forEach((child, i) => {
      child.dataset.reveal = animation;
      child.style.setProperty('--reveal-duration', `${duration}ms`);
      child.style.setProperty('--reveal-delay', `${i * staggerDelay}ms`);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => child.classList.add('is-revealed'));
          if (once) observer.disconnect();
        } else if (!once) {
          children.forEach((child) => child.classList.remove('is-revealed'));
        }
      },
      { threshold }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [animation, duration, staggerDelay, threshold, once]);

  return ref;
}