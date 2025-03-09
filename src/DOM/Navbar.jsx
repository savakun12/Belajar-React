import {LogoNav} from '../Component/CompNav.jsx'
import avatar from '../assets/Avatar.png'
import MenuBar from '../assets/align-justify.svg'


export function LoginNav() {
  return (
    <>
    <nav className="drop-shadow-md tablet:drop-shadow-none w-full bg-white pt-3 pr-32 pb-3 laptop:pl-32 pl-7 min-h-20 border-b border-vborder flex items-center place-content-between">
      <div className="flex items-center">
           <LogoNav/>
      </div>
    </nav>
    </>
  )
}

export function HomeNav() {
  return (
    <>
    <nav className="drop-shadow-md tablet:drop-shadow-none w-full bg-white mobile:py-4 mobile:px-6 laptop:pt-3 laptop:pr-32 laptop:pb-3 laptop:pl-32 min-h-20 border-b border-vborder flex items-center place-content-between gap-9">
      <div className="text-dark-secondary w-full flex items-center place-content-between">
        <LogoNav/>
        <p className='hidden laptop:block'>Kategori</p>
      </div>
      <img src={avatar} className='hidden laptop:block'/>
      <img src={MenuBar} className='block laptop:hidden'/>
    </nav>
    </>
  )
}


