
import { LoginNav } from "./DOM/Navbar"
import { ContentLogin } from "./DOM/Content"

function Login() {
  

  return (
    <>
    <LoginNav/>
      <div className="tablet:py-16 mobile:py-0 tablet:px-28 mobile:px-8 max-w-3xl w-full" >
      <ContentLogin/>
      </div>
      <div>

      </div>
    </>
  )
}

export default Login
