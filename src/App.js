import React , {useEffect,createContext , useReducer, useContext} from 'react';
import { Route, BrowserRouter , Switch , useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { reducer ,initialState } from './reducers/userReducer';
import './App.css';

export const UserContext = createContext();

const Routing = ()=>{

    const history = useHistory();
    const {state , dispatch} =useContext(UserContext);

    useEffect(()=>{
        const user =JSON.parse(localStorage.getItem("user"))
    
        if(user){
            dispatch({type :"USER", payload:user})
            history.push('/')
        }else{
            history.push('/login')
        }
    },[])

    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/signin">
                <Signin/>
            </Route>

            <Route path="/signup">
                <Signup/>
            </Route>

        </Switch>

    )
}




function App() {

    const [state , dispatch] = useReducer(reducer , initialState);

    return (
        <UserContext.Provider value={{state,dispatch}}>
            <BrowserRouter>
                <Navbar/>
                <Routing/>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
