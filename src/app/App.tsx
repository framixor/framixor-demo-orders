import { HomePage } from "../pages/HomePage";
import { OrderPage } from "../pages/OrderPage";

function App() {
  const path = window.location.pathname;

  if (path === "/order") {
    return <OrderPage />;
  }

  return <HomePage />;
}

export default App;