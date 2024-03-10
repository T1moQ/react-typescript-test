import { FC } from 'react'
import EventExamples from '../EventExamples'
import Card, { CardVariant } from '../Card'

const DefaultPage: FC = () => {
   return (
      <div>
         <h1>
            TypeScript Test
         </h1>
         <EventExamples />
         <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width="200px" height="200px">
            <button>Button</button>
         </Card>
      </div>
   )
}

export default DefaultPage
