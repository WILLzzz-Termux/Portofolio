export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur bg-white/5 p-4 flex justify-between">
      <h1>Portfolio</h1>
      <div className="space-x-4">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}