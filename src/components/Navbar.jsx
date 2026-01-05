export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl rounded-full bg-white/80 backdrop-blur-md shadow-sm px-6 py-3 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-lg">
        <div className="w-6 h-6 bg-black rounded-md" />
        coup.
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-600">
        <li className="hover:text-black cursor-pointer">How it Works</li>
        <li className="hover:text-black cursor-pointer">Pricing</li>
        <li className="hover:text-black cursor-pointer">Use Case</li>
        <li className="hover:text-black cursor-pointer">FAQ</li>
      </ul>

      {/* CTA */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
        Contact Sales
      </button>
    </nav>
  );
}
