import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import RestaurantImage from "./components/resturant-image";
import Image from "next/image";
import { Star } from "lucide-react";
import DeliveryInfo from "@/app/_components/restaurants/delivery-info";
import ProductList from "@/app/_components/products/product-list";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}
const RestaurantPage = async ({ params: { id } }: RestaurantPageProps) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id,
    },
    include: {
      categories: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          Product: {
            where: {
              restaurantId: id,
            },
            include: {
              restaurant: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!restaurant) {
    return notFound();
  }

  const topSellingProducts = await db.product.findMany({
    where: {
      restaurant: {
        id: restaurant.id,
      },
    },
    include: {
      restaurant: true,
    },
    take: 10,
  });

  return (
    <>
      <RestaurantImage restaurant={restaurant} />
      <div className="relative mt-[-30px] rounded-t-2xl bg-white py-5">
        <div className="flex items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-xl font-semibold">{restaurant.name}</h1>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-foreground px-2 py-[2px] font-semibold text-white ">
            <Star size={16} className="fill-yellow-400 text-yellow-400" /> 5.0
          </div>
        </div>
        <div className="px-5">
          <DeliveryInfo restaurant={restaurant} />
        </div>
        <div className="flex gap-4 overflow-x-scroll p-5 [&::-webkit-scrollbar]:hidden">
          {restaurant.categories.map((category) => (
            <div
              className="min-w-[167px] rounded-full bg-[#f4f4f5] py-1 text-center text-xs text-muted-foreground"
              key={category.id}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-4">
          <h2 className="px-5 font-semibold">Mais Pedidos</h2>
          <ProductList products={topSellingProducts} />
        </div>

        {restaurant.categories.map((category) => (
          <div className="mt-4 space-y-4" key={category.id}>
            <h2 className="px-5 font-semibold">{category.name}</h2>
            <ProductList products={category.Product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantPage;
