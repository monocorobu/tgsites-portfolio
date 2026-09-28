"use client";

import React, { useEffect } from "react";

export default function SecurityProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Disable right-click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Disable shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // F12
            if (e.key === "F12") {
                e.preventDefault();
                window.location.href = "https://www.google.com";
            }

            // Ctrl + Shift + I/J/C
            if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) {
                e.preventDefault();
                window.location.href = "https://www.google.com";
            }

            // Ctrl + U (View Source)
            if (e.ctrlKey && e.key === "u") {
                e.preventDefault();
                window.location.href = "https://www.google.com";
            }
        };

        // Detect if DevTools is opened via window resizing or other means
        const detectDevTools = () => {
            const threshold = 160;
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;

            if (widthThreshold || heightThreshold) {
                window.location.href = "https://www.google.com";
            }
        };

        let resizeTimer: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(detectDevTools, 500);
        };

        window.addEventListener("contextmenu", handleContextMenu);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleResize);

        // Check less frequently for DevTools
        const interval = setInterval(detectDevTools, 5000);

        return () => {
            window.removeEventListener("contextmenu", handleContextMenu);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);
            clearInterval(interval);
            clearTimeout(resizeTimer);
        };
    }, []);

    return <>{children}</>;
}
