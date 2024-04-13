import { gsap } from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const transitionElement = document.querySelector(".view");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      yPercent: 10,
      opacity: 0,
      visibility: "hidden",
    }).to(transitionElement, {
      yPercent: 0,
      opacity: 1,
      visibility: "visible",
      duration: 0.4,
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.querySelector(".view");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      yPercent: 0,
      opacity: 1,
      visibility: "visible",
    }).to(animationWrapper, {
      yPercent: -10,
      opacity: 0,
      duration: 0.4,
      visibility: "hidden",
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
