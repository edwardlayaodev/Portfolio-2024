"use client"
import { K2D } from 'next/font/google'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

type Props = {
  speaking: boolean
}

export default function PortraitAnimAtom({ speaking }: Props) {
  const [isMouthOpen, setIsMouthOpen] = useState(false)
  function angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg
  }

  useEffect(() => {
    function rotatePupil(e: MouseEvent) {
      const mouseX = e.clientX
      const mouseY = e.clientY
      const anchor = document.getElementById('anchor')
      const rect = anchor?.getBoundingClientRect()
      let anchorX, anchorY
      let angleDeg: number
      if (rect) {
        anchorX = rect?.left + rect?.width / 2
        anchorY = rect?.top + rect?.height / 2
        angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
        const eyes: NodeListOf<HTMLElement> = document.querySelectorAll(".eye")
        eyes.forEach((eye) => {
          eye.style.transform = `rotate(${90 + angleDeg}deg)`
        })

      }
    }
    document.addEventListener("mousemove", rotatePupil)

    return () => {
      document.removeEventListener("mousemove", rotatePupil)
    }
  }, [])

  useEffect(() => {
    if (speaking) {
      const speakInterval = setInterval(() => {
        setIsMouthOpen((prev) => !prev)
      }, 80);

      return () => clearInterval(speakInterval)
    } else {
      setIsMouthOpen(false)
    }
  }, [speaking])


  //on mount create cursor listener
  return (
    <div id='anchor' className='w-[300px] h-[300px] relative'>
      <Image className='mx-auto' src={"/bg.png"} alt='bg' width={300} height={300} />
      <Image className='absolute top-[6%] left-[15%] z-20 anim-hover' src={"/head.png"} alt='bg' width={200} height={200} />
      <Image className='anim-breath absolute bottom-[10%] left-[32%] z-10' src={"/neck.png"} alt='bg' width={100} height={100} />
      <Image className='eye absolute top-[37%] left-[40%] z-40' src={"/eye.png"} alt='bg' width={25} height={25} />
      <Image className='eye absolute top-[36%] right-[28%] z-40' src={"/eye.png"} alt='bg' width={25} height={25} />
      {!isMouthOpen && <Image className='absolute bottom-[30%] right-[32%] z-40' src={"/mouth-closed.png"} alt='bg' width={75} height={75} />}
      {isMouthOpen && <Image className='absolute bottom-[30%] right-[32%] z-40' src={"/mouth-open.png"} alt='bg' width={75} height={75} />}
      <Image className='anim-breath absolute bottom-[-1%] left-[16%]' src={"/body.png"} alt='bg' width={200} height={200} />
    </div >
  )

}
