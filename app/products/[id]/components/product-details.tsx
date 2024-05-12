"use client";
import DiscountBadge from "@/app/_components/discount-badge";
import ProductList from "@/app/_components/products/product-list";
import DeliveryInfo from "@/app/_components/restaurants/delivery-info";
import { Button } from "@/app/_components/ui/button";
import {
  calculateProductTotalPrice,
  formatCurrency,
} from "@/app/_lib/_helpers/price";
import { Prisma } from "@prisma/client";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>;
  relatedProducts: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
}

const ProductDetails = ({ product, relatedProducts }: ProductDetailsProps) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <>
      <div className="relative mt-[-40px] rounded-t-2xl bg-[#f4f4f5] p-5">
        <Link href={`/restaurants/${product.restaurant.id}`}>
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src={product.restaurant.imageUrl}
                alt={product.restaurant.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <span className="text-sm text-muted-foreground">
              {product.restaurant.name}
            </span>
          </div>
        </Link>

        <h1 className="mb-2 mt-1 text-xl font-semibold">{product.name}</h1>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                {formatCurrency(calculateProductTotalPrice(product))}
              </h2>
              {product.discountPercentage > 0 && (
                <DiscountBadge product={product} />
              )}
            </div>
            {product.discountPercentage > 0 && (
              <div className="text-sm text-muted-foreground">
                De:{" "}
                <span className="line-through">
                  {formatCurrency(Number(product.price))}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant={"ghost"}
              className="border border-solid border-muted-foreground hover:bg-muted"
              onClick={() => setItemQuantity((prev) => Math.max(prev - 1, 1))}
            >
              <MinusIcon />
            </Button>
            <span className="w-5 text-center font-semibold">
              {itemQuantity}
            </span>
            <Button
              size="icon"
              variant={"default"}
              className="border border-solid border-primary-foreground"
              onClick={() => setItemQuantity((prev) => prev + 1)}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>

        <DeliveryInfo restaurant={product.restaurant} />

        <div className="mt-6 space-y-3">
          <h3 className="font-semibold">Sobre</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="px-4 font-semibold">Produtos relacionados</h2>
        <ProductList products={relatedProducts} />
      </div>

      <div className="px-4 py-6">
        <Button className="w-full font-semibold">Adicionar à Sacola</Button>
      </div>
    </>
  );
};

export default ProductDetails;
