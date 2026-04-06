import logo from "../assets/logo.jpg";

function Head() {
  return (
    <nav className="bg-transparent fixed w-full z-20 top-0">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6 py-3">

        <a href="/" className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          <img src={logo} alt="logo" className="h-8 w-8 rounded-full object-cover" />
          Ticks N Lines
        </a>

        <div className="flex items-center gap-4 md:order-2">

          <div className="relative hidden md:block">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search..."
              className="w-56 pl-10 pr-4 py-2 text-sm bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-blue-500 transition focus:w-72"
            />
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>

        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <a href="/" className="flex items-center gap-1 hover:text-blue-600 transition">
            Home
          </a>

          <a href="/about" className="flex items-center gap-1 hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
              <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-4.418 0-8 3.134-8 7h16c0-3.866-3.582-7-8-7Z" />
            </svg> 
            About
          </a>

          <a href="/services" className="flex items-center gap-1 hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
              <path d="M19.14 12.94a7.49 7.49 0 0 0 .06-.94 7.49 7.49 0 0 0-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.65l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.28 7.28 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.59.23-1.13.54-1.63.94l-2.39-.96a.5.5 0 0 0-.61.22L2.71 8.83a.5.5 0 0 0 .12.65l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.65l1.92 3.32c.14.24.43.34.69.22l2.39-.96c.5.4 1.04.72 1.63.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.59-.23 1.13-.54 1.63-.94l2.39.96c.26.12.55.02.69-.22l1.92-3.32a.5.5 0 0 0-.12-.65l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z" />
            </svg>
                 Services
          </a>

          <a href="/contact" className="flex items-center gap-1 hover:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
              <path d="M2 4h20v16H2V4Zm10 7 8-5H4l8 5Zm0 2-8-5v10h16V8l-8 5Z" />
            </svg>
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Head;