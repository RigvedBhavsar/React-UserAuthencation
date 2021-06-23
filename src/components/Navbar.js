import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {

    const {state , dispatch }  = useContext(UserContext); 
    const history = useHistory();

    const renderList=()=>{
        if(state){
            return[
                <li><Link to="/">Home</Link></li>,
                <li><button className="waves-effect waves-teal btn-flat" 
                onClick={()=>{
                    localStorage.clear()
                    dispatch({type :"CLEAR"})
                    history.push('/signin')
                }}>Logout</button></li>

            ]
        }else{
            return[
                <li><Link to="/signin">Login</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }
    }

    return(
        <nav>
            <div className="nav-wrapper white">
                <Link to={state? "/":"/login"} className="brand-logo left">Auth</Link>
                <ul id="nav-mobile" className="right">
                    {renderList()}
                </ul>
            </div>
        </nav>  
    )
}

export default Navbar
