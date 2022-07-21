import Image from "next/image";
import Copy from "../src/img/copy-outline.svg";
import arrowDown from "../src/img/arrow-down.svg";
import Brightness from "../src/img/brightness.svg";
import sLetter from "../src/img/letter-s.svg";
import Add from "../src/img/plus.svg";
import Information from "../src/img/information.svg";
import Cloud from "../src/img/cloud-uploading.svg";
import Connect from "../src/img/sim-card.svg";
import Polygon from "../src/img/infinity.svg";
import Ethereum from "../src/img/ethereum.svg";
import Binance from "../src/img/binance.svg";
import More from "../src/img/menu.svg";
import Selected from "../src/img/correct.svg";

export default function Home() {
  return (
    <main className="container max-w-screen-xl text-sm">
      <div className="colOne"></div>
      <div className="two colTwo text-2xl justify-start items-center italic font-extrabold">
        <a href="#">SENDY</a>
      </div>
      <div className="three justify-between items-center font-medium pl-2.5 pr-0.5">
        <span>🐱 0×594...2540</span>
        <div className="threeRight flex justify-around items-center w-1/3">
          <span className="logo cursor-pointer">
            <Image src={Copy} alt="Copy Logo" />
          </span>
          <span className="threeText text-slate-200">|</span>
          <span className="logo cursor-pointer">
            <Image src={arrowDown} alt="Arrow Down" />
          </span>
        </div>
      </div>
      <div className="four justify-center items-center">
        <div className="theme flex justify-center items-center border border-black cursor-pointer">
          <span className="w-3 h-3 mb-1.5">
            <Image src={Brightness} alt="Theme" />
          </span>
        </div>
      </div>
      <div className="five colOne"></div>
      <div className="six colTwo justify-between items-center py-0 px-14">
        <span className="sixLeft text-2xl font-bold mb-5"> Pay at once </span>
        <span className="sixRight font-medium"> Fees breakdown</span>
      </div>
      <div
        className="seven
      flex-col items-center font-medium"
      >
        <div
          className="sevenLeft flex justify-between items-center 
        w-full"
        >
          <span>Choosen network</span>
          <span className="value">Ethereum</span>
        </div>
        <div className="sevenRight flex justify-between items-center w-full">
          <span>Transaction speed</span>
          <span className="value">120 Gwei</span>
        </div>
      </div>
      <div className="eight"></div>
      <div className="nine colOne"></div>
      <div className="ten colTwo flex-col justify-between">
        <div className="tenUp flex-col">
          <div className="px-14 pt-3">
            <span className="text-2xl font-bold">0.00</span>
            <span className="font-normal text-slate-200 pl-2">0.00 ETH</span>
          </div>
          <span className="font-thin total pl-14 pt-1">Total amount</span>
          <span className="add">
            <Image src={Add} alt="Plus" width={28} height={28} />
          </span>
          <div className="table sm:text-xs">
            <div className="tenTableLeft rounded-l-md">
              <div className="selection flex justify-between pl-0">
                <span>
                  <Image src={sLetter} alt="Token" />
                </span>
                Select token
              </div>
              <span className="logo cursor-pointer">
                <Image src={arrowDown} alt="Arrow Down" />
              </span>
            </div>
            <div className="tenTableRight rounded-r-md">
              <div className="information p-0">
                Deflationary
                <span className="logo ml-2">
                  <Image src={Information} alt="Information" />
                </span>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <div className="slider bg-slate-200"></div>
              </label>
            </div>
            <div className="tenFirstColumn">
              <div className="tenOneRowSize tenOneCol rounded-tl-md">
                Address
              </div>
              <div className="tenTwoCol tenOneRowSize">Amount</div>
              <div className="tenThreeCol tenOneRowSize">Email(Optional)</div>
              <div className="tenOneCol ashColor">0×203...dfa7</div>
              <div className="tenTwoCol ashColor">7,500</div>
              <div className="tenThreeCol ashColor">example@email.com</div>
              <div className="tenOneCol">0×203...dfa7</div>
              <div className="tenTwoCol">7,500</div>
              <div className="tenThreeCol">example@email.com</div>
              <div className="tenOneCol ashColor">0×203...dfa7</div>
              <div className="tenTwoCol ashColor">7,500</div>
              <div className="tenThreeCol ashColor">example@email.com</div>
              <div className="tenOneCol rounded-bl-md">0×203...dfa7</div>
              <div className="tenTwoCol">7,500</div>
              <div className="tenThreeCol">example@email.com</div>
            </div>
            <div className="tenSecondColumn">
              <div className="tenOneRowSize">Name(Optional)</div>
              <div className="tenOneRowSize rounded-tr-md">Notes(Optional)</div>
              <div className="tenThree ashColor">Pollen TG</div>
              <div className="tenFour ashColor">March 2022 bill</div>
              <div className="tenFive">Pollen TG</div>
              <div className="tenSix">March 2022 bill</div>
              <div className="tenSeven ashColor">Pollen TG</div>
              <div className="tenEight ashColor">March 2022 bill</div>
              <div className="tenNine">Pollen TG</div>
              <div className="tenTen rounded-br-md">March 2022 bill</div>
            </div>
          </div>
        </div>
        <div className="tenDown flex h-14 items-center ashColor">
          <div>
            <span className="tenDownSpan">
              <Image src={Connect} alt="Connect" width={16} height={16} />
            </span>
            Connect Google
          </div>
          <span className="text-slate-200 pl-2.5">|</span>
          <div>
            <span className="tenDownSpan">
              <Image src={Cloud} alt="Upload" width={16} height={16} />
            </span>
            Upload CSV
          </div>
        </div>
      </div>
      <div className="eleven flex-col">
        <div className="firstEleven flex justify-start items-end h-14 pl-2.5 border-b border-slate-100">
          <span className="elevenFirstSpan border-b border-black font-medium cursor-pointer">
            Network
          </span>
          <span
            className="elevenFirstSpan
          font-normal cursor-pointer"
          >
            Gas fee
          </span>
        </div>
        <div className="secondEleven flex flex-col py-0 px-3.5">
          <h4 className="text-xl pt-3 pb-2 px-0 font-medium">Choose network</h4>
          <p>
            Ensure the network you choose to deposit matches the withdrawal
            network, or assets may be lost.
          </p>
          <div className="elevenLeft flex justify-between items-center h-12 mt-3 cursor-pointer hover:bg-slate-100">
            <section className="flex items-center">
              <span className="elevenSpan border border-black rounded-xl pl-0.5 paddingEleven">
                <Image src={Ethereum} alt="Ethereum" width={14} height={13} />
              </span>
              Ethereum
            </section>
            <span className="elevenSpan">
              <Image src={Selected} alt="Selected" />
            </span>
          </div>
          <div className="elevenRight flex items-center h-12 cursor-pointer hover:bg-slate-100">
            <span className="elevenSpan">
              <Image src={Polygon} alt="Polygon" />
            </span>
            Polygon
          </div>
        </div>
        <div className="thirdEleven flex items-center h-12 pl-3.5 border-y border-slate-100 cursor-pointer hover:bg-slate-100">
          <span className="elevenSpan">
            <Image src={Binance} alt="Binance" />
          </span>
          Binance Chain
        </div>
        <div className="fourthEleven flex items-center pl-3.5 h-12 cursor-pointer hover:bg-slate-100">
          <span className="elevenSpan">
            <Image src={More} alt="More" />
          </span>
          More Networks
        </div>
      </div>
      <div className="twlve"></div>
      <div className="thirteen colOne"></div>
      <div
        className="fourteen 
      colTwo justify-between items-center"
      >
        <button
          type="button"
          className="btn bg-black text-white hover:outline-slate-300 hover:bg-stone-700"
        >
          Clear
        </button>
        <button
          type="button"
          className="btn hover:outline-slate-300 
          hover:bg-slate-100"
        >
          Next
        </button>
      </div>
      <div className="fifteen">
        <div className="border-slate-100 ashColor w-full h-11 ml-2 mt-1"></div>
      </div>
      <div className="sixteen">
        <div className="border-slate-100 ashColor w-1/12 h-11 mt-1"></div>
      </div>
    </main>
  );
}
