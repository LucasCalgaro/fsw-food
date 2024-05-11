import { Restaurant } from "@prisma/client";
import { BikeIcon, Star, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_lib/_helpers/price";

interface RestaurantItemProps {
  restaurant: Restaurant;
}
const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="min-w-[276px] max-w-[276px] space-y-3">
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />

        <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-white px-2 py-[2px] text-sm font-semibold text-black">
          <Star size={14} className="fill-yellow-400 text-yellow-400" /> 5,0
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="text-sm font-semibold">{restaurant.name}</h2>
        <div className="flex gap-4">
          <div className="flex gap-1 text-xs text-foreground">
            <BikeIcon size={16} className="text-primary" />{" "}
            {Number(restaurant.deliveryFee) == 0
              ? `Entrega Grátis`
              : `${formatCurrency(Number(restaurant.deliveryFee))}`}
          </div>
          <div className="flex gap-1 text-xs text-foreground">
            <TimerIcon size={16} className="text-primary" />{" "}
            {Number(restaurant.deliveryTimeMinutes)} min
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
