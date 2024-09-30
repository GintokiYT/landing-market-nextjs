import styled from './HeaderLayout.module.scss';
import Link from 'next/link';
import LogoGeor from '@/shared/LogoGeor/LogoGeor';
import Button from '@/shared/Button/Button';
import ArrowP from '@/shared/Icons/ArrowP';

import HeaderModal from './HeaderModal/HeaderModal';

export default function HeaderLayout() {
  return (
    <header className={`${styled['header-layout']}`}>
      <div className='w-full max-w-[--max-width] h-full px-4 tablet:px-6 m-auto flex items-center justify-between'>
        <div className='flex gap-8'>
          <Link className='flex items-center text-[--p-text-primary]' href="/" aria-label="inicio">
            <LogoGeor type='complete' />
          </Link>
          <div className='hidden desktop:flex'>
            <Link href="/plataforma">
              <Button appearance='text-black'>Plataforma</Button>
            </Link>
            <Link href="/precios">
              <Button appearance='text-black'>Precios</Button>
            </Link>
          </div>
        </div>
        <div className='hidden desktop:flex gap-1'>
          <Button appearance='text-black'>
            Iniciar sesión
            <ArrowP width={18} height={18}/>
          </Button>
          <Button appearance='primary'>Comenzar gratis</Button>
        </div>
        <HeaderModal />
      </div>
    </header>
  )
}