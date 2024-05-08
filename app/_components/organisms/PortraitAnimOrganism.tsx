import PortraitAnimAtom from '../atoms/PortraitAnimAtom';
import ButtonAtom from '../atoms/ButtonAtom';
import { useState } from 'react';
import TypewriterAtom from '../atoms/TypewriterAtom';
export interface Props {
}

export default function PortraitAnimOrganism (props: Props) {
  const [isSpeaking, setIsSpeaking] = useState(false)

  function handleSpeak(isSpeaking: boolean) {
    setIsSpeaking(isSpeaking)
  }
  return (
    <div>
      <div className="flex flex-col-reverse justify-center items-center md:flex-row text-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <PortraitAnimAtom speaking={isSpeaking}></PortraitAnimAtom>
        </div>
        <div className="max-w-md w-full md:w-1/2">
          <div className="chat-end md:chat-start flex flex-col justify-center items-center gap-4 mx-auto">
            <div className="chat-bubble bg-neutral-100 text-neutral-800 text-3xl w-[350px] mx-auto"><TypewriterAtom speakingHandler={handleSpeak} text={`Hi, Edward here, welcome to my website, what can I do for you today?`}></TypewriterAtom></div>
            {!isSpeaking && <div className="flex flex-col gap-2 w-full mx-auto">
              <ButtonAtom twClass="flex-grow" onClick={() => { }} type="outline">Tell me about Projects you have worked on.</ButtonAtom>
              <ButtonAtom onClick={() => { }} type="outline">Tell me about your Work Experience.</ButtonAtom>
              <ButtonAtom onClick={() => { }} type="outline">Where can I contact you?</ButtonAtom>
            </div>}
          </div>
        </div>
      </div>
      
    </div>
  );
}
