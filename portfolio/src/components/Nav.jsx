import { Link } from "react-router-dom"


function Nav({children}) {
    return(

    <nav className='nav'>


       <h3> 
        <Link to='/' > 
                NETFOLIO
        </Link>
       </h3> 

       <div className="nav-link" >
         {children}
       </div>


    </nav>
  
  )
} 

export default Nav