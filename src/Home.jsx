import { HomeNav } from "./DOM/Navbar"
import { HeroSec } from "./DOM/Content"
import { TitleArticle } from "./DOM/Content"
import { MenuBar } from "./DOM/Content"
import { CardList } from "./DOM/Content"
import { BannerSec } from "./DOM/Content"
import { HomeFooter } from "./DOM/Footer"

function Home() {
    return (
      <>
        <HomeNav/>
       <div id="article" className="w-full flex flex-col laptop:gap-8 mobile:gap-6 mobile:pt-0 mobile:px-5  laptop:pt-7 laptop:px-28">
        <HeroSec/>
        <TitleArticle/>
        <MenuBar/>
        <CardList/>
        <BannerSec/>
        </div>
        <HomeFooter/>
      </>
    )
}

export default Home