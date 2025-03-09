import googleLogo from "../assets/google.png"


export function MasukBtn () {
    return (
        <>
        <button className="bg-primary-main hover:bg-primary-100 hover:text-green-400 rounded-lg w-full h-11">
            Masuk
        </button>
        </>
    )
}

export function DaftarBtn () {
    return (
        <>
        <button className="bg-primary-100 hover:bg-primary-main hover:text-white text-green-400 rounded-lg w-full h-11">
            Daftar
        </button>
        </>
    )
}

export function MasukBtn2 () {
    return (
        <>
        <button className="hover:bg-primary-main bg-primary-100 text-green-400 hover:text-white rounded-lg w-full h-11">
            Masuk
        </button>
        </>
    )
}

export function DaftarBtn2 () {
    return (
        <>
        <button className="hover:bg-primary-100 bg-primary-main text-white hover:text-green-400 rounded-lg w-full h-11">
            Daftar
        </button>
        </>
    )
}

export function MasukGoogle () {
    return (
        <>
        <button className="bg-white hover:bg-gray-100 text-GS700 font-bold flex justify-center items-center gap-2 border rounded-lg w-full h-11">
           <img src={googleLogo} alt="" /> Masuk dengan Google
        </button>
        </>
    )
}

export function HeroBtn () {
    return (
        <>
        <button className="tablet:font-bold mobile:text-sm mobile:font-normal hover:bg-transparent hover:ring-offset-green-400 hover:ring-transparent hover:ring-4 hover:ring-offset-4 bg-primary-main z-10 text-white hover:text-green-400 rounded-lg py-2.5 mobile:px-3 tablet:px-7">
            Temukan Video Course untuk Dipelajari!
        </button>
        </>
    )
}

export function BannerInput () {
    return (
        <div className="mobile:bg-transparent tablet:bg-white max-w-[525px] w-full tablet:py-2 tablet:pr-2 tablet:pl-8 flex mobile:flex-col tablet:flex-row justify-between items-center gap-3 rounded-md z-10 ">
            <input type="email" className="w-full rounded-md mobile:max-h-10 mobile:text-center tablet:text-start tablet:max-h-8 mobile:text-sm tablet:text-base font-normal border-none" placeholder="Masukkan Emailmu" />
            <button type="submit" className="bg-orange-400 hover:bg-orange-300 text-white tablet:text-base mobile:text-sm font-bold rounded-lg tablet:max-w-32 w-full max-h-10 mobile:h-9 tablet:h-10  ">Subscribe</button>
        </div>
    )
}