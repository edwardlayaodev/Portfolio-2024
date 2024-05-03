"use client"
import React, { useEffect, useState } from 'react'

type Props = {
  text: string
}

export default function TypewriterAtom({ text }: Props) {
  const [typewriter, setTypewriter] = useState("")
  const [typeFinished, setTypeFinished] = useState(false)

  useEffect(() => {
    let index = 0
    let str = ""
    const typeInterval = setInterval(() => {
      str = str + text[index]
      //set typewriter every loop
      setTypewriter(str)
      index++;
      //check if eol
      if (index === text.length) {
        setTypeFinished(true)
        clearInterval((typeInterval))
      }
    }, 50);
    //clear interval when unmounted
    return () => clearInterval(typeInterval)
  }, [text])


  return (
    <span className='text-pretty'>
      {typewriter}
      {!typeFinished && <span>|</span>}
    </span>
  )
}
