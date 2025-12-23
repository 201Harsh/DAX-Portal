import Image from "next/image";

const DeskAbout = () => {
  return (
    <div
      id="show-desk"
      className="h-screen w-full bg-red-300 absolute -z-10 opacity-0"
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src="/images/About/me.png"
          alt="about"
          className=" absolute top-1/4 left-1/2 -translate-x-1/2 z-10 object-contain h-full w-full"
        />
        <Image
          src="/images/About/nsky.png"
          alt="about"
          fill
          sizes="100% 100% auto"
          className=" absolute z-1 h-full w-full object-cover"
          unoptimized
        />
        <Image
          src="/images/About/city.png"
          alt="about"
          fill
          sizes="100% 100% auto"
          className=" absolute z-5 h-full w-full object-cover"
          unoptimized
        />
      </div>
    </div>
  );
};

export default DeskAbout;
