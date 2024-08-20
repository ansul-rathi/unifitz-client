import React,{useEffect, useRef,useContext, useState} from "react";
import "../styles/header.css";
import logo from "../assets/img/Health___Fitness.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthContext } from "./AuthContextProvider";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/programs",
    display: "Programs",
  },
  {
    path: "/membership",
    display: "Membership",
  },
  {
    path: "/track",
    display: "Track your fitness",
  },
];


const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const {filter,setFilter}=useContext(AuthContext);

  const isUserLoggedIn=()=>{
  // console.log("Rohan2",isAuthenticated);
    if(isAuthenticated){
      console.log("user is Authenticated verifying user");
      verifyUser();
    }else{
      console.log("No user is logged in");
    }
  }

  const verifyUser=()=>{
    // console.log(user.name)
    fetch(`https://healthandfitness.onrender.com/data`).then((res)=>{
      return res.json();
    }).then((data)=>{
      // console.log(user);
      let filteredData=data.filter((el)=>el.user==user.name);
      // console.log(filteredData);
      setFilter(filteredData);
      if(filteredData.length<1){
        let obj={
          "id": Math.floor(Math.random() * 100),
          "user": user.name,
          "userdata": []
        }
        fetch(`https://healthandfitness.onrender.com/data`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(obj) 
        })
        setFilter([obj]);
      }
    })
  }

    const headerRef =useRef(null);
    const headerFunc=()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add("w-full sticky top-0 left-0 z-50 bg-white");
      }  else{
        headerRef.current.classList.remove("w-full sticky top-0 left-0 z-50 bg-white");
      }
    }
    useEffect(()=>{
        window.addEventListener("scroll",headerFunc);

        return()=>window.removeEventListener("scroll",headerFunc);
    },[])


    useEffect(()=>{
      isUserLoggedIn();
    },[setFilter,isAuthenticated])

    const handleLogOut=()=>{
      logout({ returnTo: window.location.origin })
    }

    const handleLogIn=()=>{
      loginWithRedirect();
    }

  return (
    <header className="w-full h-20 leading-10" ref={headerRef}>
      <div className="container">
        <div className="display-flex items-center justify-between">
          <div className="display-flex items-center gap-2">
            <div className="w-10 h-10 p-2.5 rounded leading-10 display-flex items-center justify-center">
              <img src={logo} alt="" />
            </div>
            <h2>Health & Fitness</h2>
          </div>
          <div className="navigation">
            <ul className="display-flex items-center gap-x-10">
              {nav__links.map((item) => (
                // <li className="font-semibold text-sm">
                //   <a href={item.path}>{item.display}</a>
                // </li>
                <NavLink className="font-semibold text-sm" key={item.path} to={item.path}>{item.display}</NavLink>
              ))}
            </ul>
          </div>
          <div className="display-flex items-center gap-x-6">
          {isAuthenticated && (
              <p className="font-semibold text-sm"> {user.name} </p>
          )}
            {isAuthenticated?<button className="border-none px-10 py-5 rounded text-sm font-medium cursor-pointer text-white bg-blue-500" onClick={handleLogOut}>Log Out</button>:
            <button className="border-none px-10 py-5 rounded text-sm font-medium cursor-pointer text-white bg-blue-500" onClick={handleLogIn}>Log In</button>}
            <span className="text-sm cursor-pointer display-hidden">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
