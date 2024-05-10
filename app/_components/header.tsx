import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src="/logo.png" alt="FSW Foods" width={110} height={30} />
      <Button variant="outline" size={"icon"}>
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
