import React from "react";

const AnimatedScroll = () => {
  const animateScrollToBottom = () => {
    const scrollToBottom = () => {
      const currentPosition = window.scrollY || window.pageYOffset;
      const targetPosition = document.body.scrollHeight;
      const distance = targetPosition - currentPosition;
      const duration = 2000; // Adjust the duration as needed

      let startTime: number;

      const animation = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const progress = (currentTime - startTime) / duration;
        const easeInOutCubic =
          progress < 0.5
            ? 4 * progress ** 3
            : 1 - Math.pow(-2 * progress + 2, 3) / 2; // Easing function (you can use a different one)

        window.scrollTo(0, currentPosition + distance * easeInOutCubic);

        if (progress < 1) {
          window.requestAnimationFrame(animation);
        }
      };

      window.requestAnimationFrame(animation);
    };

    scrollToBottom();
  };
  const handleScrollToContact: () => void = () => {
    animateScrollToBottom();
  };
  return <div>AnimatedScroll</div>;
};

export default AnimatedScroll;
