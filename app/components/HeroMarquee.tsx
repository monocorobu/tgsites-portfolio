interface HeroMarqueeProps {
    className?: string;
}

export default function HeroMarquee({ className = "" }: HeroMarqueeProps) {
    const textItems = [
        "SITES PROFISSIONAIS -",
        "LANDING PAGES -",
        "PRESENÇA DIGITAL -",
        "DESIGN SOB MEDIDA -",
        "NEGÓCIOS NO GOOGLE -",
        "TGSITES -"
    ];

    return (
        <div className={`overflow-hidden whitespace-nowrap py-8 flex w-full relative ${className}`}>
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-container {
                    display: flex;
                    white-space: nowrap;
                    animation: marquee 30s linear infinite;
                    width: max-content;
                }
                @media (prefers-reduced-motion: reduce) {
                    .marquee-container {
                        animation: none;
                    }
                }
            `}</style>

            <div className="marquee-container">
                {/* Content repeated twice for seamless loop */}
                {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex shrink-0">
                        {textItems.map((text, i) => (
                            <span
                                key={`${groupIndex}-${i}`}
                                className="font-display font-light uppercase inline-block px-8 text-3xl md:text-4xl lg:text-5xl xl:text-7xl"
                            >
                                {text}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
