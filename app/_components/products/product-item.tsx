import { Prisma } from "@prisma/client";
import Image from "next/image";
import {
  calculateProductTotalPrice,
  formatCurrency,
} from "../../_lib/_helpers/price";
import Link from "next/link";
import DiscountBadge from "../discount-badge";
import { cn } from "@/app/_lib/utils";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
  className?: string;
}

const ProductItem = ({ product, className }: ProductItemProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className={cn("min-w-[150px] space-y-2", className)}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute left-2 top-2">
            <DiscountBadge product={product} />
          </div>
        )}
      </div>
      <div>
        <h2 className="truncate text-sm">{product.name}</h2>
        <div className="flex items-center gap-1">
          <h3 className="font-semibold">
            {formatCurrency(calculateProductTotalPrice(product))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          {product.restaurant.name}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
