import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 py-4">
        <Search />
      </div>
      <div className="px-5 py-4">
        <CategoryList />
      </div>
      <div className="px-5 py-4">
        <Image
          src="/images/promo-banner-01.png"
          alt="Até 30% de Desconto"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
      <div className="space-y-4 py-4">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-bold">Pedidos Recomendados</h2>
          <Button
            variant={"ghost"}
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver Todos
            <ChevronRight size={16} />
          </Button>
        </div>
        <ProductList />
      </div>
    </>
  );
}
