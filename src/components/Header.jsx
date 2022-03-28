import logo from "../images/logo.svg";
import mobileHeroImg from "../images/mobile/image-hero-mobile.png";
import tabletHeroImg from "../images/tablet/image-hero.png";
import desktopHeroImgLeft from "../images/desktop/image-hero-left.png";
import desktopHeroImgRight from "../images/desktop/image-hero-right.png";

const Header = () => {
  return (
    <header className="mb-16 flex w-full flex-col items-center md:mb-20 xl:mb-[6.875rem]">
      <a className="mt-12 mb-[3.375rem] md:mb-16" href="#">
        <img src={logo} alt="" />
      </a>
      <div className="flex flex-col items-center xl:-ml-8 xl:h-[22.375rem] xl:w-[104.44vw] xl:flex-row xl:items-start xl:justify-center xl:gap-[6.11rem]">
        <div className="mb-12 md:mb-[4.5rem] xl:hidden">
          <img className="md:hidden" src={mobileHeroImg} alt="" />
          <img
            className="hidden md:block xl:hidden"
            src={tabletHeroImg}
            alt=""
          />
        </div>
        <div className="hidden xl:block">
          <img src={desktopHeroImgLeft} alt="" />
        </div>
        <div className="flex flex-col items-center xl:mt-[2.938rem]">
          <div className="mb-8 flex w-[20.438rem] flex-col items-center gap-6 text-center md:w-[28.563rem] xl:w-[37.5vw]">
            <h1 className="text-[2.5rem] font-black leading-[2.75rem] tracking-normal text-[#28283D] md:text-[3rem] md:leading-[3rem]">
              Group Chat <br /> for Everyone
            </h1>
            <p className="text-base font-medium leading-[1.625rem] tracking-normal text-[#87879D]">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>
          </div>
          <div className="flex w-[12.063rem] flex-col items-center gap-4 md:w-[21.75rem] md:flex-row">
            <a
              className="flex h-[3.625rem] w-[12.063rem] items-center justify-center rounded-[29px] bg-[#4D96A9] text-base font-black leading-[1.625rem] text-white hover:bg-[#71C0D4]"
              href="#"
            >
              Download&nbsp;<span className="text-[#8FE3F9]">v1.3</span>
            </a>
            <a
              className="flex h-[3.625rem] w-[8.688rem] items-center justify-center rounded-[29px] bg-[#855FB1] text-base font-black leading-[1.625rem] tracking-normal text-white hover:bg-[#B18BDD]"
              href="#"
            >
              What is it?
            </a>
          </div>
        </div>
        <div className="mt-[3.438rem] hidden xl:block">
          <img src={desktopHeroImgRight} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
