export default function ProjectCard({ project, onOpen }) {
  const clickable = typeof onOpen === "function";
  return (
    <article
      className={`card ${clickable ? "card--clickable" : ""}`}
      onClick={clickable ? () => onOpen(project) : undefined}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen(project);
              }
            }
          : undefined
      }
    >
      <div
        className="card__img"
        style={{ backgroundImage: `url(${project.img})` }}
      />
      <div className="card__overlay">
        {clickable && (
          <span className="card__zoom" aria-hidden="true">
            ⤢
          </span>
        )}
        <span className="card__tag">{project.tag}</span>
        <h3 className="card__title">{project.title}</h3>
        <span className="card__sub">{project.sub}</span>
      </div>
    </article>
  );
}
