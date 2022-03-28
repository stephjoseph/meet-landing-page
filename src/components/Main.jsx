import womanVideoCall from "../images/desktop/image-woman-in-videocall.jpg";
import womenVideoChat from "../images/desktop/image-women-videochatting.jpg";
import menInMeeting from "../images/desktop/image-men-in-meeting.jpg";
import manTexting from "../images/desktop/image-man-texting.jpg";

const Main = () => {
  return (
    <main className="mb-16 flex w-full flex-col items-center gap-16 md:mb-20 md:gap-12 xl:mb-[4.5rem] xl:gap-20">
      <div className="grid w-[20.438rem] grid-cols-2 gap-x-[1.563rem] gap-y-6 md:w-[43.063rem] md:grid-cols-4 md:gap-[0.688rem] xl:w-[69.375rem] xl:gap-[1.875rem]">
        <div>
          <img className="rounded-[8px]" src={womanVideoCall} alt="" />
        </div>
        <div>
          <img className="rounded-[8px]" src={womenVideoChat} alt="" />
        </div>
        <div>
          <img className="rounded-[8px]" src={menInMeeting} alt="" />
        </div>
        <div>
          <img className="rounded-[8px]" src={manTexting} alt="" />
        </div>
      </div>
      <section className="flex w-[20.438rem] flex-col items-center gap-6 text-center md:w-[35.813rem] xl:w-[33.75rem]">
        <p className="text-base font-black uppercase leading-[1.625rem] tracking-[4px] text-[#4D96A9]">
          Built for modern use
        </p>
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-[2rem] font-black leading-9 tracking-normal text-[#28283D] md:w-[27.813rem] md:text-[2.5rem] md:leading-[2.75rem] xl:w-[27.813rem]">
            Smarter meetings, all in one place
          </h2>
          <p className="text-base font-medium leading-[1.625rem] tracking-normal text-[#87879D]  xl:text-lg">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            <br className="md:hidden xl:inline" />
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
