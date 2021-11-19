import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddService from './Pages/AddService/AddService'
import AuthProvider from './Contexts/AuthProvider';
import Home from "./Pages/Home/Home/Home";
import Login from './Pages/Login/Login/Login';
import Navigation from "./Pages/Shared/Navigation/Navigation";
import ManagesAllOrder from "./Pages/ManagesAllOrder/ManagesAllOrder";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Services from "./Pages/Home/Services/Services/Services";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ProductBuy from "./Pages/Home/Services/ProductBuy/ProductBuy";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/services">
              <Services />
            </PrivateRoute>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/addservices'>
              <AddService></AddService>
            </Route>
            <Route path='/managesallorder'>
              <ManagesAllOrder></ManagesAllOrder>
            </Route>
            <Route path='/myorders'>
              <MyOrders></MyOrders>
            </Route>
            <Route  path='/home'>
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;