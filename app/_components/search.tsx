import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Buscar Restaurantes" className="border-none" />
      <Button size={"icon"} className="px-2.5">
        <SearchIcon height={20} width={20} />
      </Button>
    </div>
  );
};

export default Search;
