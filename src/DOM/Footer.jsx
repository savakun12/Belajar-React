import {LogoNav} from '../Component/CompNav.jsx'
import InIcon from '../assets/in.png'
import FbIcon from '../assets/f.png'
import IgIcon from '../assets/inst.png'
import TtIcon from '../assets/x.png'


export function HomeFooter() {
  return (
    <div className="w-full bg-white p-5 laptop:py-14 laptop:px-28 min-h-[427px] border-t border-vborder flex flex-col justify-between gap-5">
      <div className="w-full flex flex-col tablet:flex-row tablet:justify-between gap-5">
        <div className='flex flex-col gap-4'>
            <div className='max-w-52'><LogoNav/></div>
            <div className='max-w-[352px]'>
                <p className='text-lg font-bold text-dark-primary'>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
                <p className='text-base font-normal text-dark-primary'>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                <p　className='text-base font-normal text-dark-primary'>+62-877-7123-1234</p>
            </div>
        </div>

        <div className='flex mobile:gap-5 laptop:gap-12 flex-col tablet:flex-row'>
        <div className='flex mobile:justify-between tablet:justify-start mobile:items-center tablet:items-start tablet:flex-col gap-4'>
        <p className='text-base font-bold text-dark-primary'>Kategori</p>
                <p className='text-xl font-bold tablet:hidden mr-2'>&gt;</p>
                <span className='text-base font-medium text-dark-secondary tablet:flex flex-col gap-3 hidden'>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Digital & Teknologi</p>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Pemasaran</p>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Manajemen Bisnis</p>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Pengembangan Diri</p>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Desain</p>
                </span>
            </div>
            <div className='flex mobile:justify-between tablet:justify-start mobile:items-center tablet:items-start tablet:flex-col gap-4'>
                <p className='text-base font-bold text-dark-primary'>Perusahaan</p>
                <p className='text-xl font-bold tablet:hidden mr-2'>&gt;</p>
                <span className='text-base font-medium text-dark-secondary tablet:flex flex-col gap-3 hidden'>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Tentang Kami</p>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>FAQ</p>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Kebijakan Privasi</p>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Ketentuan Layanan</p>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Bantuan</p>
                </span>
            </div>
            <div className='flex mobile:justify-between tablet:justify-start mobile:items-center tablet:items-start tablet:flex-col gap-4'>
                <p className='text-base font-bold text-dark-primary'>Komunitas</p>
                <p className='text-xl font-bold tablet:hidden mr-2'>&gt;</p>
                <span className='text-base font-medium text-dark-secondary tablet:flex flex-col gap-3 hidden'>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Tips Sukses</p>
                    <p className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'>Blog</p>
                </span>
            </div>
        </div>
      </div>

    <hr/>

      <div className='flex flex-col tablet:flex-row justify-between gap-3'>
        <p className='text-base font-medium text-dark-secondary order-2 tablet:order-1'>@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className='max-w-48 max-h-9 flex gap-4 order-1 tablet:order-2'>
            <img src={InIcon} className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'/>
            <img src={FbIcon} className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'/>
            <img src={IgIcon} className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'/>
            <img src={TtIcon} className='hover:cursor-pointer hover:brightness-200 hover:contrast-0'/>
        </div>
      </div>

    </div>
  )
}