import Image from "next/image";
import TextInputAtom from "./_components/atoms/TextInputAtom";
import TypewriterAtom from "./_components/atoms/TypewriterAtom";
import PortraitAnimAtom from "./_components/atoms/PortraitAnimAtom";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-100 text-base-content">
      <div className="hero-content flex flex-col-reverse  justify-center items-center md:flex-row text-center">
        <div className="w-1/2 border border-red-500 flex justify-center">
          <PortraitAnimAtom></PortraitAnimAtom>
        </div>
        <div className="max-w-md w-1/2 border border-red-500">
          <div className="chat chat-start">
            <div className="chat-bubble bg-info text-info-content text-3xl w-[350px]"><TypewriterAtom text={`Hey there!, I'm Edward, your front-end developer from Dasma, Cavite!`}></TypewriterAtom></div>
          </div>
        </div>
      </div>
    </div>


  );
}
