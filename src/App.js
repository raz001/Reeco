import './App.css';
import NavBar from './components/navbar/Navbar';
import OrderHeader from './components/order/OrderHeader';
import OrderInfo from './components/order/OrderInfo';
import ReecoTheme from './components/utils/ReecoTheme';

function App() {
  return (
    <ReecoTheme>
      <NavBar />
      <OrderHeader />
      <OrderInfo />
    </ReecoTheme>
  );
}

export default App;
