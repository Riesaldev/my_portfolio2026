


export default function Header() {
  return (
    <header className="flex w-full py-6 px-16 items-center justify-between sticky top-0 z-30 bg-transparent backdrop-blur-sm rounded-2xl">
      <h1 className="text-2xl font-bold tracking-wide font-playfair text-white">
        RIESAL
      </h1>
      <nav className="flex items-center gap-8">
        <a
          href="#"
          className="text-lg text-white hover:text-black transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#"          className="text-lg text-white hover:text-black transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#"          className="text-lg text-white hover:text-black transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#"          className="text-lg text-white hover:text-black transition-colors duration-300"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}