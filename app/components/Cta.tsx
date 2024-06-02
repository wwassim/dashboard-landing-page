import Image from "next/image";
import Arrow from "../../public/assets/arrow.png";
const Cta = () => {
  return (
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="w-full rounded-[16px] py-14 px-8 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 lg:py-[89px] lg:px-[300px]">
        <h1 className="text-white font-medium text-[32px] lg:text-[56px] lg:leading-[64px] text-center">
          Monitor your website like a pro
        </h1>
        <p className="pt-6 text-center lg:text-[20px] text-white">
          Join over 800+ happy site owners boosting productivity and efficiency!
        </p>
        <div className="flex flex-col gap-y-8 items-center pt-[40px] lg:pt-[56px] lg:flex-row lg:gap-y-0 lg:gap-x-8  lg:justify-center">
          <button className="rounded text-pink-500 bg-white py-4 px-8 w-fit lg:text-medium lg:text-[18px]">
            Try for free
          </button>
          <button className="text-white text-meduim flex gap-x-2  lg:text-[18px]">
            Contact Sales <Image src={Arrow} alt="arrow png" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
