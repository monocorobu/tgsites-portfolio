
import { Instagram, Linkedin } from "lucide-react";

export default function SocialLinks() {
    return (
        <div className="flex flex-col gap-4">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <Instagram className="w-6 h-6 text-black transform transition-transform duration-500 hover-rotate-360" />
                <span className="text-sm font-medium text-black hidden md:block uppercase tracking-wider">
                    Instagram
                </span>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <Linkedin className="w-6 h-6 text-black transform transition-transform duration-500 hover-rotate-360" />
                <span className="text-sm font-medium text-black hidden md:block uppercase tracking-wider">
                    LinkedIn
                </span>
            </a>

            {/* Behance */}
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                {/* Behance Icon SVG */}
                <img
                    src="/behance-logo.svg"
                    alt="Behance"
                    className="w-6 h-6 text-black transform transition-transform duration-500 hover-rotate-360"
                />
                <span className="text-sm font-medium text-black hidden md:block uppercase tracking-wider">
                    Behance
                </span>
            </a>
        </div>
    );
}

