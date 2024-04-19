import UseMemo from './components/UseMemo';
import UseCallback1 from './components/UseCallback1';
import UseCallback2 from './components/UseCallback2';
import CustomHook from './components/CustomHook';

function App() {
  return (
    <div className='App'>
      <UseMemo />
      <UseCallback1 />
      <UseCallback2 />

      <CustomHook />
    </div>
  );
}

export default App;
