import { useState } from "react";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    id: "1",
    label: "Services",
    slug: "/services",
  },
  {
    id: "2",
    label: "Projects",
    slug: "/projects",
  },
  {
    id: "3",
    label: "About",
    slug: "/about",
  },
  {
    id: "4",
    label: "Contact",
    slug: "/Contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className=" items-center justify-between p-5 flex flex-wrap">
      <Logo />

      <Button
        onClick={() => setShowMenu(!showMenu)}
        variant="outline"
        className="bg-transparent text-accent cursor-pointer"
      >
        {showMenu ? <X /> : <Menu />}
      </Button>

      {showMenu && (
        <div className=" w-full mt-5 flex flex-col gap-y-2 py-5 px-3 text-sm text-primary-foreground bg-primary rounded-sm">
          {navLinks.map((nav) => (
            <NavLink key={nav.id} to={nav.slug}>
              {nav.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
