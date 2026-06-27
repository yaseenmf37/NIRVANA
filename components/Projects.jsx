"use client";
import { useState } from "react";
import { projects, filters } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Lightbox from "@/components/Lightbox";

export default function Projects() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);

  const shown =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="projects">
      <div className="container">
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter ${active === f.key ? "is-active" : ""}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery">
          {shown.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <Lightbox project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
