const Footer = () => {
  return (
    <footer className="relative -mt-[1.75rem] h-[26.75rem] w-full xl:h-[19.25rem]">
      <div className="absolute top-0 left-0 flex h-[26.75rem] w-full flex-col items-center bg-[#4D96A9]/90 pt-[5.75rem] text-center bg-blend-overlay xl:h-[19.25rem] xl:flex-row  xl:justify-center xl:pt-[7.25rem] xl:pb-[6.5rem] xl:text-left">
        <h2 className="mb-6 w-[20.438rem] text-[2rem] font-black leading-9 tracking-normal text-[#fafafa] md:mb-8 md:w-[28.563rem] md:text-[2.5rem] md:leading-[2.75rem] xl:mr-[7.813rem] xl:mb-0 xl:w-[21.875rem] xl:self-start">
          Experience more together
        </h2>
        <p className="mb-8 w-[20.438rem] text-lg font-medium leading-[1.625rem] tracking-normal text-[#fafafa] md:mb-10 md:w-[35.813rem] xl:mr-[5.75rem] xl:mb-0 xl:w-[21.875rem] xl:self-start">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <a
          className="flex h-[3.625rem] w-[12.063rem] items-center justify-center rounded-[29px] bg-[#855FB1] text-base font-black leading-[1.625rem] text-white hover:bg-[#B18BDD]"
          href="#"
        >
          Download&nbsp;<span className="text-[#D9B8FF]">v1.3</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
