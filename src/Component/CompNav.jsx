import logo from '../assets/Logo.png'

function LogoNav () {
    return (
    <div className="flex items-center">
        <div className='flex max-h-14 hover:cursor-pointer'>
            <img src={logo} alt="Logo.png" className='max-h-8'/>
        </div>
    </div>
        
    )
}

export {LogoNav}