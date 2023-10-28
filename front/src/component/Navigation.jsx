import { Link } from "react-scroll";
import useLayout from "../hooks/useLayout";

export default function Navigation({ menuList }) {
  const { top, setTop } = useLayout();
  return (
    <nav className={`lg:static fixed ${top ? "top-0" :"-top-full"}  left-0 lg:bg-transparent transition-all leading-4 bg-red-50 lg:w-auto w-full lg:h-auto h-full z-[900]`}>
      <button className="lg:hidden flex bg-cyan-500 rounded-full p-1 absolute right-2 top-2" onClick={()=> setTop(false)}>
        <span className="material-symbols-outlined text-black">close</span>
      </button>
      <ul className="flex lg:flex-row flex-col justify-center items-center lg:gap-3 gap-10 h-screen">
        {menuList?.map((item, i) => (
          <li key={i}>
            <Link
              to={item}
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
              className="px-5 py-2 hover:bg-cyan-500 [&.active]:bg-cyan-500 text-black hover:text-white [&.active]:text-white font-semibold capitalize rounded-md cursor-pointer"
              onClick={()=> setTop(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
