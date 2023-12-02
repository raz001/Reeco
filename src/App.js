import './App.css';
import NavBar from './components/navbar/Navbar';
import OrderContainer from './components/order/OrderContainer';
import OrderHeader from './components/order/OrderHeader';
import OrderInfo from './components/order/OrderInfo';
import ReecoTheme from './components/utils/ReecoTheme';

function App() {
  return (
    <ReecoTheme>
      <NavBar />
      <OrderHeader />
      <OrderInfo />
      <OrderContainer />
    </ReecoTheme>
  );
}

export default App;
