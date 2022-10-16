import "./index.css";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import{Switch ,Route} from "react-router-dom";
import Error from "./Component/Error";
import ViewData from "./Component/ViewData";
const App =() => {
    return(
        <div>
            <div className="nav">
            <Navbar/>
            </div>
            <Switch>
            <Route exact path="/" component={ViewData}/>
                <Route exact  path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/services" component={Services}/>
                <Route path="/contact" component={Contact}/>
                <Route  component={Error}/>
 
        
            </Switch>
           
        </div>
    );
};
export default App;