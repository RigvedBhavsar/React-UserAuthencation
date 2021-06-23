import React , {useState , useEffect , useContext} from 'react'
// import {UserContext} from '../App';
// import {Link} from 'react-router-dom';
import M from 'materialize-css';
const Home=() =>{

    //const {state , dispatch} =useContext(UserContext);
    const [data , setData]= useState('');
    useEffect(()=>{
        fetch('/check',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.error){
                M.toast({html: result.error , classes:"#c62828 red darken-3"})
            }else{
                M.toast({html : result.Message , classes:"#43a047 green darken-1"})
            }
        })
    },[])

    return (
        <div className="home">
            Home
        </div>
    )
}

export default Home
