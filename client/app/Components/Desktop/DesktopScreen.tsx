import Image from "next/image";

const DesktopScreen = () => {
  return (
    <>
      <div className="h-screen w-full overflow-hidden">
        <Image
          src="/images/WallpaperMain.png"
          alt="Desktop Background"
          layout="fill"
          loading="lazy"
          className="h-full w-full xl:object-cover"
          unoptimized
        />
      </div>
    </>
  );
};

export default DesktopScreen;
