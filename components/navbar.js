import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-amber-400 py-4">
      <div className="px-4">
        <a href="./">
          <img
            className="hidden sm:w-24 md:w-32"
            src="/logo.png"
            alt="marsex logo"
          />
        </a>
      </div>
      <div className="list-none">
        <ul className="font-medium flex justify-between px-8  space-x-4 text">
          <a href="#">
            <li>TEAMS</li>
          </a>
          <a href="#">
            <li>SOCIETY</li>
          </a>
          <a href="#">
            <li>ALUMNI</li>
          </a>
          <a href="#">
            <li>GALLERY</li>
          </a>
          <a href="#">
            <li>SPONSOR</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
