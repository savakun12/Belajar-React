import { MasukBtn } from "./CompButton"
import { MasukBtn2 } from "./CompButton"
import { DaftarBtn } from "./CompButton"
import { DaftarBtn2 } from "./CompButton"
import { MasukGoogle } from "./CompButton"
import eyeOffLogo from "../assets/eye-off.svg"
import idLogo from "../assets/id.png"
import rating from "../assets/Rating.png"



export function HeadForm ({title, desc}) {
    return (
        <div className="flex flex-col gap-2.5 items-center" >
            <h3 className="text-dark-primary text-3xl font-Poppins">{title}</h3>
            <p className="text-base text-center">{desc}</p>
        </div>
    )
}

export function LoginForm () {
    return (
        <div className="flex flex-col gap-16 items-center max-w-7xl w-full " >
            <div id="loginForm" className="flex flex-col gap-6 justify-center w-full items-center">
                <form className="flex flex-col w-full h-full ">
                    <label className="text-dark-primary py-1.5 flex flex-col" >
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">E-mail</span>
                        <input type="text" className="border rounded-md py-2" />
                    </label>
                        
                    <label className="text-dark-primary py-1.5 w-full relative flex flex-col">
                        <span>Password</span>
                        <input type="password" className=" border rounded-md py-2 pr-11" />
                        <img src={eyeOffLogo} className="w-5 absolute top-10 end-4 hover:cursor-pointer" />
                    </label>
                        
                    <p className="text-right  hover:cursor-pointer hover:text-gray-500" >Lupa Password?</p>
                </form>

                <div id="Button" className="flex flex-col gap-4 w-full h-24 text-white font-bold text-base">
                    <MasukBtn/>
                    <DaftarBtn/>
                </div>
            </div>
            <div id="Line" className="relative w-full flex flex-col justify-center">
                <hr />
                <span className="text-center flex justify-center w-full absolute">
                     <p className="px-1.5 bg-white">atau</p>
                </span>
            </div>
            <MasukGoogle/>
        </div>
    )
}

export function RegisterForm () {
    return (
        <div className="flex flex-col gap-16 items-center max-w-7xl w-full " >
            <div id="registerForm" className="flex flex-col gap-6 justify-center w-full items-center">
                <form className="flex flex-col w-full h-full ">
                    <label className="text-dark-primary py-1.5 flex flex-col" >
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">Nama Lengkap</span>
                        <input type="text" className="border rounded-md py-2" />
                    </label>

                    <label className="text-dark-primary py-1.5 flex flex-col" >
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">E-mail</span>
                        <input type="text" className="border rounded-md py-2" />
                    </label>

                    <label className="text-dark-primary py-1.5 flex flex-col" >
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">No.HP</span>
                        <div className="flex gap-4 w-full ">
                            <div className="  rounded-md flex">
                                <div className="w-10 rounded-l-md border border-e-0 border-gray-600 bg-gray-200 flex items-center justify-center">
                                    <img src={idLogo}/>
                                </div>
                              
                                <select className="rounded-r-md focus:border-none">
                                    <option  value="Indonesia">+62</option>
                                    <option value="Jepang">+81</option>
                                </select>
                            </div>
                        <input type="number" className="w-full border rounded-md py-2" />
                        </div>
                    </label>
                        
                    <label className="text-dark-primary py-1.5 w-full relative flex flex-col">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">Kata Sandi</span>
                        <input type="password" className=" border rounded-md py-2 pr-11" />   
                        <img src={eyeOffLogo} className="w-5 absolute top-10 end-4 hover:cursor-pointer" />
                    </label>
                        
                    <label className="text-dark-primary py-1.5 w-full relative flex flex-col ">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500">Konfirmasi Kata Sandi</span>
                        <input type="password" className=" border rounded-md py-2 pr-11" />   
                        <img src={eyeOffLogo} className="w-5 absolute top-10 end-4 hover:cursor-pointer" />
                    </label>
                        
                    <p className="text-right  hover:cursor-pointer hover:text-gray-500" >Lupa Kata Sandi?</p>
                </form>

                <div id="Button" className="flex flex-col gap-4 w-full h-24 text-white font-bold text-base">
                    <DaftarBtn2/>
                    <MasukBtn2/>
                </div>
            </div>
            <div id="Line" className="relative w-full flex flex-col justify-center">
                <hr />
                <span className="text-center flex justify-center w-full absolute">
                     <p className="px-1.5 bg-white">atau</p>
                </span>
            </div>
            <MasukGoogle/>
        </div>
    )
}

export function CardContainer ({img, avatar}) {
    return (
        <div className=" laptop:max-w-sm laptop:h-[426px] bg-white border rounded-lg mobile:p-4 laptop:p-5 flex flex-col items-center mobile:gap-2 laptop:gap-4">
            <div id="desc" className="max-w-[344px] flex laptop:flex-col mobile:flex-row mobile:items-start laptop:items-center gap-4">
                <div className="laptop:w-[344px]  mobile:h-24 laptop:h-48">
                    <img src={img} className="object-cover laptop:w-96 mobile:h-full laptop:h-48 rounded-lg" />
                </div>
               <div>
                <div id="title" className="flex flex-col gap-1 max-w-[344px] max-h-24  " >
                    <h6 className="text-dark-primary laptop:text-lg mobile:text-base font-semibold">Big 4 Auditor Financial Analyst</h6>
                    <p className="text-base font-medium pr-2 text-dark-secondary mobile:hidden laptop:block overflow-hidden truncate">
                        Mulai transformasi dengan instruktur <br/> profesional, harga yang terjangkau, dan kurikulum terbaik</p>
                </div>

                <div id="user" className="w-full flex gap-2.5 laptop:mt-3">
                    <img src={avatar} className="mobile:max-w-9 laptop:max-w-10 rounded-xl object-contain"/>
                    <div className="flex flex-col justify-start items-start">
                        <p className="mobile:text-sm laptop:text-base font-semibold text-dark-primary">Jenna Ortega</p>
                        <p className="mobile:text-sm laptop:text-sm font-medium text-dark-secondary">Senior Accountant <span className="mobile:hidden laptop:inline-block">di <b>Gojek</b></span> </p>
                    </div>
                </div>
                </div>  
            </div>

            <div id="rate" className="w-full flex place-content-between">
                <div id="stars" className="flex gap-2 justify-center items-center">
                    <img src={rating} />
                    <p className="text-sm text-dark-secondary font-medium underline decoration-solid underline-offset-auto">3.5 (86)</p>
                </div>
                <h4 className="text-2xl text-green-500 font-semibold">Rp 300K</h4>
            </div>

        </div>
    )
}
