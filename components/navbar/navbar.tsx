import { links } from "@/lib/data";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 border-b border-primary-foreground bg-background">
      <div className="flex justify-between items-center h-full px-4">
        <ul className="flex items-center gap-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="hover:underline" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle className="ml-auto" />
      </div>
    </nav>
  );
};

export default Navbar;
