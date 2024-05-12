"use client";
import { Button } from "@/app/_components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeft, Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantImageProps {
  restaurant: Pick<Restaurant, "name" | "imageUrl">;
}
const RestaurantImage = ({ restaurant }: RestaurantImageProps) => {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <div className="relative h-[250px] w-full">
      <Image
        src={restaurant.imageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <Button
        className="absolute left-4 top-4 h-11 w-11 rounded-full bg-white p-2 text-foreground hover:text-white"
        onClick={goBack}
      >
        <ChevronLeft size={20} />
      </Button>
      <Button className="absolute right-4 top-4 h-11 w-11 rounded-full bg-accent-foreground p-2">
        <Heart className="fill-white text-white" />
      </Button>
    </div>
  );
};

export default RestaurantImage;
