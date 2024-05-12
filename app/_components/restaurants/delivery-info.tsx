import { formatCurrency } from "@/app/_lib/_helpers/price";
import { Bike, Timer } from "lucide-react";
import { Card } from "../ui/card";
import { Restaurant } from "@prisma/client";

interface DeliveryInfoProps {
  restaurant: Pick<Restaurant, "deliveryFee" | "deliveryTimeMinutes">;
}
const DeliveryInfo = ({ restaurant }: DeliveryInfoProps) => {
  return (
    <Card className="mt-6 flex justify-around py-3">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Entrega</span>
          <Bike size={14} />
        </div>
        {Number(restaurant.deliveryFee) > 0 ? (
          <p className="text-sm font-semibold">
            {formatCurrency(Number(restaurant.deliveryFee))}
          </p>
        ) : (
          <p className="text-sm font-semibold">Gratis</p>
        )}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Entrega</span>
          <Timer size={14} />
        </div>
        <p className="text-sm font-semibold">
          {restaurant.deliveryTimeMinutes} min
        </p>
      </div>
    </Card>
  );
};

export default DeliveryInfo;
