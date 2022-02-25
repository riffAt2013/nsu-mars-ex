export default function Navbar() {
  const buttonHandler = () => {
    const btn = document.getElementById("button");
    // const menu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {
      console.log("clicked");
      // menu.classList.toggle("hidden");
    });
  };

  return (
    <div className="flex justify-between bg-amber-400 py-4">
      <div className="px-4">
        <a href="./">
          <img
            className="w-32 sm:w-32 sm:block"
            src="/logo.png"
            alt="marsex logo"
          />
        </a>
      </div>
      {/* desktop links */}
      <div>
        <ul className="sm:font-medium sm:flex sm:justify-between sm:px-8 sm:space-x-4 hidden">
          <a href="#" className="hover:text-slate-200">
            <li>TEAMS</li>
          </a>
          <a href="#" className="hover:text-slate-200">
            <li>SOCIETY</li>
          </a>
          <a href="#" className="hover:text-slate-200">
            <li>ALUMNI</li>
          </a>
          <a href="#" className="hover:text-slate-200">
            <li>GALLERY</li>
          </a>
          <a href="#" className="hover:text-slate-200">
            <li>SPONSOR</li>
          </a>
        </ul>
      </div>

      {/* mobile menu container */}
      <div className="flex-col sm:hidden">
        {/* mobile menu icon */}
        <div className="pr-4">
          <button id="button" onClick={buttonHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* mobile links */}
        <div>
          <ul
            id="mobile-menu"
            className="font-medium flex-col pr-6 space-y-4 pt-2 mr-8 hidden"
          >
            <li>
              <a href="#" className="hover:text-slate-200">
                TEAMS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200">
                SOCIETY
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200">
                ALUMNI
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-slate-200">
                SPONSOR
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
