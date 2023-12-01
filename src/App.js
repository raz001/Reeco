import './App.css';
import NavBar from './components/navbar/Navbar';
import OrderHeader from './components/order/OrderHeader';
import ReecoTheme from './components/utils/ReecoTheme';

function App() {
  return (
    <ReecoTheme>
      <NavBar />
      <OrderHeader />
    </ReecoTheme>
  );
}

export default App;
