import styled from './FooterLayout.module.scss';
import Link from 'next/link';
// components
import LogoGeor from '@/shared/LogoGeor/LogoGeor';
import Facebook from '@/shared/Icons/Facebook';
import Instagram from '@/shared/Icons/Instagram';
import Twitter from '@/shared/Icons/Twitter';
import LinkedIn from '@/shared/Icons/LinkedIn';
import Tiktok from '@/shared/Icons/Tiktok';
import Youtube from '@/shared/Icons/Youtube';
import World from '@/shared/Icons/World';

export default function FooterLayout() {
  return (
    <footer className={`${styled.footer}`} data-theme="light">
      <div className={`${styled.containerFooter}`}>
        <div className="flex items-center gap-6">
          <Link href="/" aria-label="inicio">
            <LogoGeor></LogoGeor>
          </Link>
          <div className={`${styled.socialNetworks}`}>
            <a href="https://www.facebook.com/georaplicacion" target="_blank" aria-label="facebook">
              <Facebook width={18} height={18} />
            </a>
            <a href="https://www.instagram.com/georaplicacion" target="_blank" aria-label="instagram">
              <Instagram width={18} height={18} />
            </a>
            <a href="https://x.com/Georaplicacion" target="_blank" aria-label="twitter">
              <Twitter width={18} height={18} />
            </a>
            <a href="https://www.linkedin.com/company/georaplicacion/" target="_blank" aria-label="linkedin">
              <LinkedIn width={18} height={18} />
            </a>
            <a href="https://www.tiktok.com/@georaplicacion" target="_blank" aria-label="tiktok">
              <Tiktok width={18} height={18} />
            </a>
            <a href="https://www.youtube.com/@georaplicacion" target="_blank" aria-label="youtube">
              <Youtube width={18} height={18} />
            </a>
          </div>
        </div>
        <div className={styled.navigation}>
          <Link className="g-tx--content-1-a" href="/sobre-nosotros" aria-label="sobre-nosotros">Acerca de Geor</Link>
          <Link className="g-tx--content-1-a" href="/precios" aria-label="precios">Precios</Link>
          <a className="g-tx--content-1-a" href="/" aria-label="soporte">Soporte</a>
        </div>
        <div className={styled.details}>
          <div className="flex gap-[2px] text-[--p-gray-scale-500]">
            <World width={18} height={18} />
            <p className="g-tx--content-1-a text-current">Español</p>
          </div>
          <p className="g-tx--content-1-a text-[--p-gray-scale-500]">© 2022 Geor. Todos los derechos reservados</p>
          <div className="flex gap-4">
            <Link className="g-tx--content-1-a" href="/politicas-de-privacidad">Políticas de privacidad</Link>
            <Link className="g-tx--content-1-a" href="/terminos-y-condiciones">Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}