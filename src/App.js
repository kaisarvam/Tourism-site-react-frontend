
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AllContext from './Contexts/AllContext';
import './App.css';
import Services from './Components/ServiceModule/Services/Services';
import ServiceCreate from './Components/ServiceModule/ServiceCreate/ServiceCreate';
import ServiceUpdate from './Components/ServiceModule/ServiceUpdate/ServiceUpdate';
import AllOrder from './Components/AllOrder/AllOrder';
import MyOrders from './Components/MyOrders/MyOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Faq from './Components/Faq/Faq';
import SignUp from './Components/SignUp/SignUp';
import LocationGallery from './Components/LocationGallery/LocationGallery';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AllContext>
      <BrowserRouter>
      <Header></Header>
      <Switch>

      <Route exact path="/">
          <Home></Home>
          </Route>

        <Route path="/home">
          <Home></Home>
          </Route>


        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>

        <PrivateRoute path="/allOrders">
          <AllOrder></AllOrder>
        </PrivateRoute>
        
      <Route path="/myOrders">
        <MyOrders></MyOrders>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
          </Route>
          <Route path="/locationGallery">
            <LocationGallery></LocationGallery>
            </Route>


        <PrivateRoute path="/service/create">
          <ServiceCreate></ServiceCreate>
        </PrivateRoute>

        <PrivateRoute path="/service/update/:id">
          <ServiceUpdate></ServiceUpdate>
        </PrivateRoute>
        <PrivateRoute path ="/orderItem/:id">
          <PlaceOrder></PlaceOrder>
          </PrivateRoute>

        <Route path="/faq">
          <Faq></Faq>
          </Route>

        <Route path="/about">
          <AboutUs></AboutUs>
        </Route>
        <Route path="*">
          <NotFound></NotFound>

        </Route>

      </Switch>

      <Footer></Footer>
      </BrowserRouter>
      </AllContext>
    </div>
  );
}

export default App;
