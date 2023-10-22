import Navigation from "./Navigation";

export default function Header() {
  const menuList = ["home", "about", "projects", "contact"];


  return (
    <div className="h-16 bg-white px-8 flex justify-between items-center border-b lg:sticky z-[999] top-0">
      <h1 className="text-2xl font-semibold">Logo</h1>
      <Navigation menuList={menuList} />
    </div>
  );
}
