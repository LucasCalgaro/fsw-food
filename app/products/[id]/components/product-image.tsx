"use client";
import { Button } from "@/app/_components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageProps {
  product: Pick<Product, "name" | "imageUrl">;
}
const ProductImage = ({ product }: ProductImageProps) => {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <div className="relative h-[360px] w-full">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
      />
      <Button
        className="absolute left-4 top-4 h-11 w-11 rounded-full bg-white p-2 text-foreground hover:text-white"
        onClick={goBack}
      >
        <ChevronLeft size={20} />
      </Button>
    </div>
  );
};

export default ProductImage;
