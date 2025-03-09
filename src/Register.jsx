import { LoginNav } from "./DOM/Navbar"
import { ContentRegistrasi } from "./DOM/Content"

function Register() {
  

  return (
    <>
      <LoginNav/>
      <div className="tablet:py-16 mobile:py-0 tablet:px-28 mobile:px-8 max-w-3xl w-full" >
      <ContentRegistrasi/>
      </div>
      <div>

      </div>
    </>  
  )
}

export default Register