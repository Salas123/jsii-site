"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
    { src: "/photography/photo1.jpg", alt: "Photography image 1" },
    { src: "/photography/photo2.jpg", alt: "Photography image 2" },
    { src: "/photography/photo3.jpg", alt: "Photography image 3" },
];

export default function Page() {
    const [current, setCurrent] = useState(0);
    const total = slides.length;

    const prev = () => setCurrent((current + total - 1) % total);
    const next = () => setCurrent((current + 1) % total);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "2rem" }}>
            <h1>Photography</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", maxWidth: "900px" }}>
                <button
                    onClick={prev}
                    style={{
                        border: "none",
                        background: "#111",
                        color: "#fff",
                        padding: "0.75rem 1rem",
                        borderRadius: "999px",
                        cursor: "pointer",
                    }}
                    aria-label="Previous photo"
                >
                    ‹
                </button>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#f2f2f2", borderRadius: "16px", overflow: "hidden" }}>
                    <Image
                        src={slides[current].src}
                        alt={slides[current].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 720px"
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <button
                    onClick={next}
                    style={{
                        border: "none",
                        background: "#111",
                        color: "#fff",
                        padding: "0.75rem 1rem",
                        borderRadius: "999px",
                        cursor: "pointer",
                    }}
                    aria-label="Next photo"
                >
                    ›
                </button>
            </div>
            <p style={{ margin: 0 }}>{current + 1} / {total}</p>
        </div>
    );
}
