import Image from "next/image";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import Bluebutton from "../../public/assets/blue-button.svg";
import Greenbutton from "../../public/assets/green-button.svg";
import Pinkbutton from "../../public/assets/pink-button.svg";

const Features = () => {
  return (
    <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
        <div className="flex flex-col gap-x-6  lg:flex-row-reverse">
          <Image
            src={Feature1}
            alt="feature 1"
            className="hidden w-1/2 sm:block"
          />

          <div className="sm:w-1/2 lg:pr-[56px] lg:pt-[56px]">
            <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">
              Sales Monitoring
            </h3>
            <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Sales Monitoring
            </h1>
            <Image
              src={Feature1}
              alt="feature 1"
              className="pt-[24px] sm:hidden"
            />
            <p className="py-[24px] text-[#36485C] lg:text-[18px]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a birds eye view with our customizable
              dashboard.
            </p>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
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
            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
              Learn More{" "}
              <span>
                {" "}
                <Image src={Bluebutton} alt="Learn More" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-x-6  lg:flex-row">
          <Image
            src={Feature2}
            alt="feature 2"
            className="hidden w-1/2 sm:block"
          />

          <div className="sm:w-1/2 lg:pl-[56px] lg:pt-[56px]">
            <h3 className="font-medium text-[#00A424] lg:text-[18px]">
              Customer Support
            </h3>
            <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Get in touch with your customers
            </h1>
            <Image
              src={Feature2}
              alt="feature 2"
              className="pt-[24px] sm:hidden"
            />
            <p className="py-[24px] text-[#36485C] lg:text-[18px]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a birds eye view with our customizable
              dashboard.
            </p>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
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
            <p className="flex w-full items-center gap-x-[24px] pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
              Learn More{" "}
              <span>
                {" "}
                <Image src={Greenbutton} alt="Learn More" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-x-6  lg:flex-row-reverse">
          <Image
            src={Feature3}
            alt="feature 2"
            className="hidden w-1/2 sm:block"
          />

          <div className="sm:w-1/2 lg:pr-[56px] lg:pt-[56px]">
            <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
              Growth Monitoring
            </h3>
            <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Monitor your sites new subscribers
            </h1>
            <Image
              src={Feature3}
              alt="feature 2"
              className="pt-[24px] sm:hidden"
            />
            <p className="py-[24px] text-[#36485C] lg:text-[18px]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a birds eye view with our customizable
              dashboard.
            </p>
            <div className="flex  gap-x-3 lg:gap-x-8 lg:text-[18px] lg:pt-4">
              <div className="w-1/2 gap-y-3 flex flex-col justify-center">
                <h1 className="font-medium text-[20px] leading-[26px]  lg:leading-[40px] text-[#172026]">
                  100+
                </h1>
                <p className="text-[#36485C]">Lorem ipsum dolor sit</p>
              </div>
              <div className="w-1/2 gap-y-3 flex flex-col justify-center">
                <h1 className="font-medium text-[20px] leading-[26px] lg:text-[20px] lg:leading-[40px] text-[#172026]">
                  100+
                </h1>
                <p className="text-[#36485C]">Lorem ipsum dolor sit</p>
              </div>
            </div>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
              Learn More{" "}
              <span>
                {" "}
                <Image src={Pinkbutton} alt="Learn More" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
