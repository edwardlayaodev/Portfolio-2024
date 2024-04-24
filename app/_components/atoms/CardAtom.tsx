import { CardObj } from '@/app/_types/Card'
import { ImgObj } from '@/app/_types/Img'
import React from 'react'

type Props = {
  img?: ImgObj
  twClassBody?: string
  card: CardObj
}


export default function CardAtom({ img, twClassBody, card }: Props) {
  return (
    <div className={`card shadow-xl bg-base-100 ${twClassBody}`}>
      <figure>{img && <img src={img.url} alt={img.alt} />}</figure>
      <div className="card-body text-left">
        {card.title && <h2 className="card-title">{card.title}</h2>}
        {card.desc && <p>{card.desc}</p>}
        <div className="card-actions flex justify-end">
          <div className="flex w-1/2 gap-2">
            {card.actions && card.actions.map((action) => {
              return (
                action
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
