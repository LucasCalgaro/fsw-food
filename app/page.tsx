import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

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
    </>
  );
}
