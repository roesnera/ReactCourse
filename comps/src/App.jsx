// import './App.css';
import './index.css';
import ButtonPage from './pages/ButtonPage';
import Accordion from './components/Accordion';

function App() {
  const accordionItems = [
    {
      id: '12kjh',
      label: "first accordion item",
      content: "first accordion item content goes here. first accordion item content goes here. first accordion item content goes here. "
    },
    {
      id: '12k231',
      label: "second accordion item",
      content: "second accordion item content goes here. second accordion item content goes here. second accordion item content goes here."
    },
    {
      id: '12ikju',
      label: "third accordion item",
      content: "third accordion item content goes here. third accordion item content goes here. third accordion item content goes here."
    },
  ]

  return (<>
    <ButtonPage />
    <Accordion accordionItems={accordionItems}/>
  </>
  )
}

export default App
