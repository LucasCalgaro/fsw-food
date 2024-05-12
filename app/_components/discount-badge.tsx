import { Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";

interface DiscountBadgeProps {
  product: Pick<Product, "discountPercentage">;
}

const DiscountBadge = ({ product }: DiscountBadgeProps) => {
  return (
    <div className="flex items-center gap-1 rounded-full bg-primary px-3 py-[2px] text-xs font-semibold text-background">
      <ArrowDownIcon size={14} />
      <span className="block">{product.discountPercentage}%</span>
    </div>
  );
};

export default DiscountBadge;
