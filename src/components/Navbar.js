//Navbar.js
import React, {useEffect} from 'react';
import './navbar.scss';
//import Logo from './logo.svg';
const Navbar=() => {
    const [scrolled,setScrolled]=React.useState(false);

    const handleScroll=() => {
        console.log("handling");
  
      const offset=window.scrollY;
      console.log(offset);
  
      if(offset > 200 ){
  
        setScrolled(true);
  
      }
  
      else{
  
        setScrolled(false);
  
      }
  
    }
  
    useEffect(() => {
        console.log("scrolling!!!!")
        window.addEventListener('scroll',handleScroll)
  
    })
  
    let navbarClasses=['navbar'];
  
    if(scrolled){
  
      navbarClasses.push('scrolled');
  
    }

  return (
    <header className={navbarClasses.join(' ')}>

        <div className="logo">
            {/* your logo */}
        </div>
        <nav className="navigation">
            {/* your navigation */}
        </nav>

    </header>
  )
};
export default Navbar;