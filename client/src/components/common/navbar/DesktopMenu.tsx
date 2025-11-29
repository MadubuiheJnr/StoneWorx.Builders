import { NavLink } from "react-router-dom";
import { navLinks } from "./nav-links-data";

const DesktopMenu = () => {
  return (
    <div className="flex items-center gap-x-5 ">
      {navLinks.map((link) => (
        <NavLink
          key={link.id}
          to={link.slug}
          className={`uppercase text-sm text-neutral-100 hover:text-neutral-300 hover:border-b hover:border-b-neutral-300 p-2 transition-all duration-300 ease-in-out`}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopMenu;
