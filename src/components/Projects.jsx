export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-2xl mb-4">Projects</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[1,2,3].map(i => (
          <div key={i} className="p-4 bg-white/5 backdrop-blur border border-white/10 rounded">
            Project {i}
          </div>
        ))}
      </div>
    </section>
  );
}