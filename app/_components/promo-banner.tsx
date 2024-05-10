import Image, { ImageProps } from "next/image";
const PromoBanner = (props: ImageProps) => {
  return (
    <div className="px-5 py-4">
      <Image
        width={0}
        height={0}
        className="h-auto w-full object-contain"
        sizes="100vw"
        quality={100}
        {...props}
      />
    </div>
  );
};

export default PromoBanner;
