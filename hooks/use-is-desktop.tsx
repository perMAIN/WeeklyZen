"use client";

import { useState, useEffect } from "react";

const DESKTOP_BREAKPOINT = 768;

export function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
        const onChange = () => {
            setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    return !!isDesktop;
} 