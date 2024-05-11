import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center justify-center gap-3 rounded-full px-10 py-2 shadow-md">
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
  );
};

export default CategoryItem;
