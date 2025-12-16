import Image from "next/image";

const Desktop = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden">
        <Image
          src="/images/wallpapermain.png"
          alt="Desktop Background"
          layout="fill"
          loading="lazy"
          objectFit="cover"
          className="h-full w-full object-cover"
          unoptimized
        />
      </div>
    </>
  );
};

export default Desktop;
