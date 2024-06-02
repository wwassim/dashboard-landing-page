import Image from "next/image";
import logo from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

const Footer = () => {
  return (
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="pt-[80px] pb-[40px]">
        <div className="flex items-center justify-center gap-x-[12px] ">
          <Image src={logo} alt="logo" />
          <p className="font-bold text-[#36485C] text-[17px]">Jan Marshal</p>
        </div>
        <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
          <li className="">Features</li>
          <li className="">Pricing</li>
          <li className="">Enterprise</li>
          <li className="">Careers</li>
        </ul>
        <p className="pt-[56px] text-center text-[14px] font-medium text-[#36485C] sm:pt-5">
          © Copyright 2024. Your Site. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
          <Image src={Facebook} alt="facebook" />
          <Image src={Twitter} alt="Twitter" />
          <Image src={Feed} alt="Feed" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
