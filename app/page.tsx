import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRight } from "lucide-react";
import { db } from "./_lib/prisma";
import PromoBanner from "./_components/promo-banner";

export default async function Home() {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
    take: 10,
  });

  return (
    <>
      <Header />
      <div className="px-5 py-4">
        <Search />
      </div>
      <div className="px-5 py-4">
        <CategoryList />
      </div>
      <div className="px-1 py-4">
        <PromoBanner
          src="/images/promo-banner-01.png"
          alt="Até 30% de Desconto"
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
        <ProductList products={products} />
        <div className="px-1 py-4">
          <PromoBanner
            src="/images/promo-banner-02.png"
            alt="A partir de R$17,90 em lanches"
          />
        </div>
      </div>
    </>
  );
}
