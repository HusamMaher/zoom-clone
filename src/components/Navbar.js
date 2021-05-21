
3import React, { useState, useEffect , useContext } from 'react';
import { Button } from './button/Button';
import { LogoutButton } from './button/LogoutButton';
import { Link,useHistory } from 'react-router-dom';
import './Navbar.css';
import UserContext from "../context/userContext";

function Navbar() {

  const {userData,setUserData}=useContext(UserContext);
  const history =useHistory();
  const register =()=>history.push('/register');
  const login =()=>history.push("/login");
  const logout=()=>{
    setUserData({
      token:undefined,
      user:undefined
    });
    
    localStorage.setItem("auth-token","");
  };
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [logoutButton, setLogoutButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      setLogoutButton(false);
    } else {
      setButton(true);
      setLogoutButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Cooperative Tool
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
           
            {
              userData.user&&(
             <li className='nav-item'>
          
              <Link
                to='/room'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Room
              </Link>
              
            </li>
              )}
               {
              userData.user&&(
             <li className='nav-item'>
          
              <Link
                to='/coding'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Code Area
              </Link>
              
            </li>
              )}
            <li>
            {
              userData.user?(
                <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu,logout}
              >
                logOut
              </Link>
              ):(
                <Link
                to='/signup'
                className='nav-links-mobile'
               onClick={closeMobileMenu}
                
              >
                Sign Up
              </Link>
      
              )
            }
              
            </li>
          </ul>
          {
            userData.user?(
          logoutButton && <LogoutButton onClick={logout} buttonStyle='btn--outline'>LOGOUT</LogoutButton>
            ):(
          button && <Button buttonStyle='btn--outline'>SIGN UP</Button>
          
            )
          }
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
