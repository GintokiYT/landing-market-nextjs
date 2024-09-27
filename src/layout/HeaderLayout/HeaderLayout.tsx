import styled from './HeaderLayout.module.scss';
import Link from 'next/link';
import LogoGeor from '@/shared/LogoGeor/LogoGeor';
import Button from '@/shared/Button/Button';
import Burger from '@/shared/Icons/Burger';
import ArrowP from '@/shared/Icons/ArrowP';

export default function HeaderLayout() {
  return (
    <header className={`${styled['header-layout']}`}>
      <div className='w-full max-w-[--max-width] h-full px-4 m-auto flex items-center justify-between'>
        <div className='flex gap-8'>
          <Link className='flex items-center text-[--p-text-primary]' href="/">
            <LogoGeor type='complete' />
          </Link>
          <div className='flex'>
            <Link href="/plataforma">
              <Button appearance='text-black'>Plataforma</Button>
            </Link>
            <Link href="/precios">
              <Button appearance='text-black'>Precios</Button>
            </Link>
          </div>
        </div>
        <div className='flex gap-1'>
          <Button appearance='text-black'>
            Iniciar sesión
            <ArrowP width={18} height={18}/>
          </Button>
          <Button appearance='primary'>Comenzar gratis</Button>
          {/* <Burger /> */}
        </div>
      </div>
    </header>
  )
}