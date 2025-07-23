import HomePage from './pages/HomePage'
import CreateEmployeePage from './pages/CreateEmployeePage';
import {Routes,Route} from 'react-router-dom'

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/addemployee" element={<CreateEmployeePage/>}></Route>
    </Routes>
  </div>;
}

export default App;
