import Check from "../../public/assets/check.svg";
import Image from "next/image";

const Pricing = () => {
  return (
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="py-[48px] lg:py-[60px]">
        <h1 className="text-[#172026] text-center text-[24px] lg:text-[42px] font-medium text-2xl">
          Flexible plans for you
        </h1>
        <div className="text-[#] pt-[16px] pb-[14px] text-center text-[#36485C] lg:text-[18px]">
          No hidden fees!
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-6 gap-y-6">
          <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col">
            <div className="">
              <h3 className="font-medium text-[#4328EB] lg:text-[18px] text-[20px]">
                Free trial
              </h3>
              <p className="text-[#36485C] pt-[12px] text-[18px] lg:text-[18px]">
                Perfect for testing the waters
              </p>
              <h2 className="pt-4  text-2xl font-medium lg:text-[32px]">
                0Dt<span className="text-[#5F7896]">/mo</span>
              </h2>
              <ul className="flex flex-col gap-y-2 pt-4 lg:text-[18px]">
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <Image src={Check} alt="Check" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <Image src={Check} alt="Check" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <Image src={Check} alt="Check" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
              <button className="w-full mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]">
                Start Trial
              </button>
            </div>
          </div>
          {/*  */}
          <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col">
            <div className="">
              <h3 className="font-medium text-[#4328EB] lg:text-[18px] text-[20px]">
                Free trial
              </h3>
              <p className="text-[#36485C] pt-[12px] text-[18px] lg:text-[18px]">
                Perfect for testing the waters
              </p>
              <h2 className="pt-4  text-2xl font-medium lg:text-[32px]">
                0Dt<span className="text-[#5F7896]">/mo</span>
              </h2>
              <ul className="flex flex-col gap-y-2 pt-4 lg:text-[18px]">
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <Image src={Check} alt="Check" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <Image src={Check} alt="Check" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <Image src={Check} alt="Check" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
              <button className="w-full mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]">
                Start Trial
              </button>
            </div>
          </div>
          {/*  */}
          <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col">
            <div className="">
              <h3 className="font-medium text-[#4328EB] lg:text-[18px] text-[20px]">
                Free trial
              </h3>
              <p className="text-[#36485C] pt-[12px] text-[18px] lg:text-[18px]">
                Perfect for testing the waters
              </p>
              <h2 className="pt-4  text-2xl font-medium lg:text-[32px]">
                0Dt<span className="text-[#5F7896]">/mo</span>
              </h2>
              <ul className="flex flex-col gap-y-2 pt-4 lg:text-[18px]">
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <Image src={Check} alt="Check" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <Image src={Check} alt="Check" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <Image src={Check} alt="Check" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
              <button className="w-full mt-[16px] rounded-[4px] bg-white py-[14px] font-medium text-[#4328EB]">
                Start Trial
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Pricing;
