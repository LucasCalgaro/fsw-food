import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Link href={"/"}>
        <Image src="/logo.png" alt="FSW Foods" width={128} height={39} />
      </Link>
      <Button variant="outline" size={"icon"} className="border-none">
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
