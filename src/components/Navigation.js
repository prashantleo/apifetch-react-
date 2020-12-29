import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from '../components/Navigationmenu'


function Navigation () {
    const [showMenu,setShowMenu]=useState(false)
    //div className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow
   // menumask iv className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
   const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
})

   
   const transitions = useTransition(showMenu, null, {
   from: { position: 'absolute', opacity: 0 },
   enter: { opacity: 1 },
   leave: { opacity: 0 },
   })
   
return (
    <nav>
    <span className="text-xl">
        <FontAwesomeIcon 
            icon={faBars}
            onClick={()=>setShowMenu(!showMenu)}
        
        />
        
    </span>
    {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }

    {transitions.map(({ item, key, props }) =>item &&
     <animated.div key=
     {key} style
     ={props}  className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">
           
<NavigationMenu
closeMenu={()=>setShowMenu(false)}
/>
    </animated.div>
)}
    
    </nav>
)
}

export default Navigation