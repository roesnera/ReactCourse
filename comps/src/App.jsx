// import './App.css';
import './index.css';
import Button from './components/Button';
import { GoBell } from 'react-icons/go';

function App() {

  return (
    <div>
      <div>
        <Button primary><GoBell/>Click here</Button>
      </div>
      <div>
        <Button secondary>Click here</Button>
      </div>
      <div>
        <Button success outline>Click here</Button>
      </div>
      <div>
        <Button warning rounded>Click here</Button>
      </div>
      <div>
        <Button danger>Click here</Button>
      </div>
    </div>
  )
}

export default App
