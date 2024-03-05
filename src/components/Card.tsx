import { FC, useState } from "react"

export enum CardVariant {
   outlined = 'outlined',
   primary = 'primary'
}

interface CardProps {
   width?: string,
   height?: string,
   children: string | number | React.ReactElement,
   variant: CardVariant,
   onClick: (num: number) => void,
}

const Card: FC<CardProps> = ({ width, variant, height, onClick, children }) => {
   const [state, setState] = useState(1)
   return (
      < div style={{
         width,
         height,
         background: variant === CardVariant.primary ? 'lightgray' : '',
         border: variant === CardVariant.outlined ? '2px solid red' : 'none'
      }
      }
         onClick={() => onClick(state)}
      >
         {children}
      </ div>
   )
}

export default Card
