import '../style/index.css'
import { HeadForm } from "../Component/CompContent"
import { LoginForm } from "../Component/CompContent"
import { RegisterForm } from "../Component/CompContent"
import { HeroBtn } from "../Component/CompButton"
import { BannerInput } from "../Component/CompButton"
import { CardContainer } from "../Component/CompContent"
import card1 from "../assets/card-1.jpeg"
import card2 from "../assets/card-2.jpeg"
import card4 from "../assets/card-4.jpeg"
import card5 from "../assets/card-5.jpeg"
import card6 from "../assets/card-6.jpeg"
import card9 from "../assets/card-9.jpeg"
import avatar1 from "../assets/av1.png"
import avatar2 from "../assets/av2.png"
import avatar3 from "../assets/av3.png"
import avatar4 from "../assets/av4.png"
import avatar5 from "../assets/av5.png"
import avatar6 from "../assets/av6.png"
import avatar7 from "../assets/av7.png"
import avatar8 from "../assets/av8.png"
import avatar9 from "../assets/av9.png"

export function ContentLogin () {
    return (
        <div className="py-9 px-9 bg-white border rounded flex flex-col justify-center items-center gap-9 w-full">
            <HeadForm title="Masuk ke Akun" desc="Yuk, lanjutin belajarmu di videobelajar." />
            <LoginForm/>
        </div>
    )
}

export function ContentRegistrasi () {
    return (
    <div className="py-9 px-9 bg-white border rounded flex flex-col justify-center items-center gap-9 w-full">
        <HeadForm title="Pendaftaran Akun" desc="Yuk, daftarkan akunmu sekarang juga!" />
        <RegisterForm/>
    </div>
    )
}

// Home's Components From this
// Header
// Hero section
export function HeroSec () {
    return (
        <section className="mobile:px-5 pb-16 pt-20 overflow-hidden laptop:px-20 desktop:px-36 relative max-w-7xl maxh-96 h-full w-full rounded-xl flex flex-col gap-6 justify-center items-center ">
            <div className="w-full h-full bg-no-repeat bg-fixed bg-cover bg-center bg-hero-bg brightness-50 rounded-xl absolute ">
            </div>
          <div className="max-w-4xl text-white flex flex-col justify-center items-center gap-y-3 z-10">
              <h1 className="text-white mobile:text-2xl laptop:text-5xl text-center">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h1>
              <p className="mobile:text-sm text-center">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
                 Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
          </div>
        <HeroBtn/>
        </section>
    )
}

// Article
// Title
export function TitleArticle () {
    return (
        <div className="flex flex-col items-start">
            <h3 className="text-dark-primary laptop:text-3xl mobile:text-2xl font-semibold">Koleksi Video Pembelajaran Unggulan</h3>
            <p className="text-dark-secondary laptop:text-base mobile:text-sm font-medium">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami! </p>
        </div>
    )
}

// Menu Bar Header Card list
export function MenuBar () {
    return (
        <div className="scrollbar w-full overflow-auto whitespace-nowrap scroll" >
            <ul className=" laptop:text-base mobile:text-sm font-medium  flex gap-1.5">
                <li className="hover:cursor-pointer py-3 pr-9 text-red-600 hover:text-red-400">Semua Kelas</li>
                <li className="hover:cursor-pointer py-3 pr-9 hover:text-gray-400">Pemasaran</li>
                <li className="hover:cursor-pointer py-3 pr-9 hover:text-gray-400">Desain</li>
                <li className="hover:cursor-pointer py-3 pr-9 hover:text-gray-400">Pengembangan Diri</li>
                <li className="hover:cursor-pointer py-3 pr-9 hover:text-gray-400">Bisnis</li>
            </ul>
        </div>
    )
}
      
// Content Card List
export function CardList () {

 const imgList = [
    {
        image : card1,
        avatar : avatar1
    },
    {
        image : card2,
        avatar : avatar2
    },
    {
        image : card9,
        avatar : avatar3
    },
    {
        image : card4,
        avatar : avatar4
    },
    {
        image : card5,
        avatar : avatar5
    },
    {
        image : card6,
        avatar : avatar6
    },
    {
        image : card2,
        avatar : avatar7
    },
    {
        image : card1,
        avatar : avatar8
    },
    {
        image : card9,
        avatar : avatar9
    },
]


    return (
        <div className='w-full h-full flex flex-wrap justify-between items-center gap-6 mb-16'>

        {imgList.map((item) =>
            <CardContainer key={item.id} img={item.image} avatar={item.avatar}/>
        )}

        </div>
    )
}

// Banner CTA
export function BannerSec () {
    return (
        <section className="mobile:px-5 pb-16 pt-20 overflow-hidden laptop:px-20 desktop:px-36 relative max-w-7xl h-96 w-full rounded flex flex-col gap-10 justify-center items-center ">
            <div className="w-full h-full bg-no-repeat bg-fixed bg-cover bg-center bg-banner-bg brightness-50 rounded    absolute ">
            </div>
          <div className="max-w-lg max-h-56 text-white text-center flex flex-col justify-center items-center gap-y-1 z-10">
              <p className='mobile:text-base tablet:text-lg font-medium'>NEWSLETTER</p>
              <h3 className="text-white font-semibold mobile:text-2xl laptop:text-3xl">Mau Belajar Lebih Banyak?</h3>
              <p className="tablet:text-base mobile:text-sm">Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
          </div>
              <BannerInput/>
        </section>
    )
}

