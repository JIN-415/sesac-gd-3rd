import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
function App() {
  return (
    <div className='App'>
      <ClassComponent></ClassComponent>
      <ClassComponent />
      <FunctionComponent />
    </div>
  );
}

export default App;
