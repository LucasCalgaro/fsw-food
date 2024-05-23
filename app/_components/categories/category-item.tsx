import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/categories/${category.id}/products`}>
      <div className="flex min-h-16 items-center justify-center gap-3 rounded-full px-10 py-2 shadow-md">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={30}
          height={30}
        />
        <span className="inline-block text-sm font-semibold">
          {category.name}
        </span>
      </div>
    </Link>
  );
};

export default CategoryItem;
