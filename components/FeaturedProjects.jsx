"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Lightbox from "@/components/Lightbox";

export default function FeaturedProjects({ category, limit = 6, showAll = true }) {
  const [selected, setSelected] = useState(null);

  const list = (category
    ? projects.filter((p) => p.category === category)
    : projects
  ).slice(0, limit);

  return (<></>
  );
}

  {/*
      <section className="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-head__eyebrow">نمونه‌کارها</span>
          <h2 className="section-head__title">برخی از پروژه‌های ما</h2>
          <p className="section-head__sub">هر پروژه یک داستان از کیفیت و دقت</p>
        </div>

        <div className="gallery">
          {list.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>

        {showAll && (
          <div className="center-btn">
            <Link href="/projects" className="btn btn--outline">
              مشاهده همه نمونه‌کارها <span className="arrow">←</span>
            </Link>
          </div>
        )}
      </div>

      {selected && (
        <Lightbox project={selected} onClose={() => setSelected(null)} />
      )} 
    </section>
    */}
