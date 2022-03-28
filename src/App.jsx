import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App flex w-full max-w-[26.75rem] flex-col items-center md:max-w-[64rem] xl:max-w-[96rem]">
      <Header />
      <div className="relative mx-auto mt-0 mb-16 h-[140px] w-[56px] md:mb-[4.188rem] xl:mb-16">
        <hr className="absolute bottom-[96px] left-[-14px] flex h-[1px] w-[84px] rotate-90 justify-center text-[#D8D8D8]" />
        <div className="border-[#87879D/25] absolute bottom-0 flex h-14 w-14 items-center justify-center rounded-full border border-solid font-black text-[#87879D]">
          01
        </div>
      </div>
      <Main />
      <div className="relative z-10 h-[140px] w-[56px]">
        <hr className="absolute bottom-[96px] left-[-14px] flex h-[1px] w-[84px] rotate-90 justify-center text-[#D8D8D8]" />
        <div className="border-[#87879D/25] absolute bottom-0 flex h-14 w-14 items-center justify-center rounded-full border border-solid bg-white font-black text-[#87879D]">
          02
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
