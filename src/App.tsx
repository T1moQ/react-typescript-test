
import Card, { CardVariant } from "./components/Card"
import './App.css'
import EventExamples from "./components/EventExamples"
import { BrowserRouter } from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <div className="root">
        <h1>
          TypeScript Test
        </h1>
        <EventExamples />
        <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width="200px" height="200px">
          <button>Button</button>
        </Card>
      </div>
    </BrowserRouter>
  )
}

export default App
