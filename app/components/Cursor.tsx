"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e: MouseEvent) => {
      // মেইন ডট কার্সার
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // বড় সার্কেল ফলোয়ার (একটু লেট করে আসবে যা স্মুথনেস তৈরি করে)
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* মেইন ডট */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* বড় ফলোয়ার সার্কেল */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-blue-500/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
          {/* আপনার ছবির মতো ছোট ডট চাইলে এর ভেতর আরেকটি ডট দিতে পারেন */}
          <div className="w-1 h-1 bg-blue-300 rounded-full opacity-50" />
      </div>
    </>
  );
};

export default CustomCursor;