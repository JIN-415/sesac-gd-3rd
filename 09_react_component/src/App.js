import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import Prac from './components/Prac';
function App() {
  return (
    <div className='App'>
      <ClassComponent></ClassComponent>
      <ClassComponent />
      <FunctionComponent />
      <Prac />
    </div>
  );
}

export default App;
