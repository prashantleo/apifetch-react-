import React from 'react'
import Navigation from '../components/Navigation'
function Header () {

return (
    <header className='border-b  p-3 flex justify-between items-center'>
        <span className="font-bold">   Appname</span>
     
        <Navigation></Navigation>
    </header>
)
}
export default Header