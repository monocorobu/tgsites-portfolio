"use client";



interface SectionDividerProps {
    label: string;
    className?: string;
}

export default function SectionDivider({ label, className = "" }: SectionDividerProps) {
    return (
        <div
            className={`sticky z-50 w-full bg-black ${className}`}
            style={{ top: "0px" }}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <span className="text-[10px] md:text-xs font-display tracking-[0.2em] text-gold uppercase">
                            {label}
                        </span>
                    </div>
                    <div className="w-full h-[1px] bg-gold/50" />
                </div>
            </div>
            {/* Gradient fade to ensure content doesn't pop in too abruptly under the line */}
            <div className="absolute inset-x-0 top-full h-8 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        </div>
    );
}
