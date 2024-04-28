import useLayout from "../hooks/useLayout";
import Navigation from "./Navigation";
const menuList = ["home", "about", "projects", "contact"];

export default function Header() {
  const { setTop } = useLayout();
  return (
    <div className="h-16 bg-white px-8 flex justify-between items-center border-b sticky z-[999] top-0">
      <h1 className="text-2xl font-semibold">Logo</h1>
      <Navigation menuList={menuList} />
      <span
        class="material-symbols-outlined lg:hidden"
        onClick={() => setTop(true)}
      >
        menu
      </span>
    </div>
  );
}
