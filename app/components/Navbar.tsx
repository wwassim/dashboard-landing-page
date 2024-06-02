import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];
const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center ">
        <Image src={Logo} alt="logo" />
        <div className="hidden lg:flex gap-x-[56px] pl-[74px]">
          {navLinks.map((item, i) => (
            <p className="text-[#36485C] font-medium" key={i}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-x-5 items-center ">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          Open an Account
        </p>
        <div className="flex items-center gap-x-2 ">
          <Image src={User} alt="User Profile" />
          <span className="hidden lg:block font-medium text-[#36485C]">
            Sign in
          </span>
        </div>
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
