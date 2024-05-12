import { Restaurant } from "@prisma/client";
import { BikeIcon, Heart, Star, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../../_lib/_helpers/price";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/app/_lib/utils";

interface RestaurantItemProps {
  restaurant: Restaurant;
  className?: string;
}
const RestaurantItem = ({ restaurant, className }: RestaurantItemProps) => {
  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className={cn("min-w-[276px] max-w-[276px]", className)}
    >
      <div className="space-y-3">
        <div className="relative h-[136px] w-full">
          <Image
            src={restaurant.imageUrl}
            alt={restaurant.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />

          <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-white px-2 py-[2px] text-sm font-semibold text-black">
            <Star size={14} className="fill-yellow-400 text-yellow-400" /> 5.0
          </div>
          <Button className="absolute right-2 top-2 h-8 w-8 rounded-full bg-accent-foreground p-2">
            <Heart className="fill-white text-white" />
          </Button>
        </div>
        <div className="space-y-1">
          <h2 className="text-sm font-semibold">{restaurant.name}</h2>
          <div className="flex gap-4 text-xs text-foreground">
            <div className="flex gap-1">
              <BikeIcon size={14} className="text-primary" />{" "}
              {Number(restaurant.deliveryFee) == 0
                ? `Entrega Grátis`
                : `${formatCurrency(Number(restaurant.deliveryFee))}`}
            </div>
            <div className="flex gap-1">
              <TimerIcon size={14} className="text-primary" />{" "}
              {Number(restaurant.deliveryTimeMinutes)} min
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;
