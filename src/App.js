import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dashboard></Dashboard>
      <Questions></Questions>
    </div>
  );
}

export default App;
