import { Link } from "react-scroll";

export default function Navigation({ menuList }) {
  return (
    <nav className="lg:static fixed top-0 -left-full lg:bg-transparent bg-red-50 lg:w-auto w-full lg:h-auto h-full z-[900]">
      <button className="lg:hidden flex bg-cyan-500 rounded-full p-1 absolute right-2 top-2">
        <span className="material-symbols-outlined text-black">close</span>
      </button>
      <ul className="flex lg:flex-row flex-col gap-3 lg:pt-0 pt-10 lg:ps-0 ps-5 ">
        {menuList?.map((item, i) => (
          <li key={i}>
            <Link
              to={item}
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              className="px-5 py-2 hover:bg-cyan-500 [&.active]:bg-cyan-500 text-black hover:text-white [&.active]:text-white font-semibold capitalize rounded-md cursor-pointer"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
