import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import form from './components/form';
import Gform from './components/form';
import  "./components/edit.css"
const name="keerthana"
const department="cse"
function App() {
  return (
    <><div className="App">
      <Homepage state={name} get={department} />

      <Gform></Gform>
    </div>
  </>
  )
}

export default App;
