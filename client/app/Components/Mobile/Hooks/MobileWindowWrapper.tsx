import { FaLessThan } from "react-icons/fa6";

const MobileWindowWrapper = ({ Componet, name }: any) => {
  const Wrapped = (props: any) => {
    return (
      <>
        <div className="w-full flex items-center gap-12">
          <div className="flex items-center justify-center gap-2 text-blue-400">
            <FaLessThan className="w-3 h-3" />
            <h5 className="text-sm">Go Back</h5>
          </div>
          <div className="flex items-center justify-center gap-2 text-blue-400 ml-16">
            <h4>{name}</h4>
          </div>
        </div>

        <Componet {...props} />
      </>
    );
  };

  return Wrapped;
};

export default MobileWindowWrapper;
