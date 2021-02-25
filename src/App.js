import logo from './logo.svg';
import './App.css';
import FruitContainer from './components/FruitContainer'

function App() {
  const fruits = ['banana 🍌', 'watermelon ', 'cherry :cherries:', 'guava', 'apple :apple:', 'kiwi :kiwifruit:', 'strawberry :strawberry:', 'mango :mango:', 'pineapple :pineapple:', 'avocado :avocado:'];
  return (
    <div className="App">
      <h1>Fruit Filter</h1>
      <p><FruitContainer fruits={fruits}/></p>
    </div>
  );
}

export default App;
