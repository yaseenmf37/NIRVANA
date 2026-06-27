"use client";
import { useState } from "react";
import { faqs } from "@/data/faq";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-sec">
      <div className="container faq reveal">
        {faqs.map((item, i) => (
          <div className={`faq__item ${open === i ? "open" : ""}`} key={i}>
            <button
              className="faq__q"
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className="faq__icon">{open === i ? "−" : "+"}</span>
            </button>
            <div className="faq__a">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
