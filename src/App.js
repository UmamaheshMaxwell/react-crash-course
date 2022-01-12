import { Arrow } from './1.components/1.function/Arrow';
import Greet from './1.components/1.function/Greet';
import { Named } from './1.components/1.function/Named';
import Welcome from './1.components/2.class/Welcome';
import Hello from './2.jsx/Hello';


function App() {
  return (
    <div className="container">
      <h2>Welcome to my react APP</h2>
      <Greet />
      <Named />
      <Arrow />
      <Welcome />
      <Hello />
    </div>

  );
}

export default App;
