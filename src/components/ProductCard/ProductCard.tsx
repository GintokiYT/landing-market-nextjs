import styled from './ProductCard.module.scss';
import Image from 'next/image';

interface ProductCardProps {
  name: string
  summary: string
  logo: string
  creator: string
}

export default function ProductCard({ name, summary, logo, creator }: ProductCardProps) {
  return (
    <div className={`${styled.productCard}`}>
      <div className={`${styled.productCardHeader}`}>
        <Image 
          width={32}
          height={32}
          src={logo}
          alt={name}
        />
      </div>
      <div className={`${styled.productCardBody}`}>
        <p className='g-tx--content-1-b'>{ name }</p>
        <p className='g-tx--content-2-a'>{ summary }</p>
        <p className='g-tx--content-3-a'>Por { creator }</p>
      </div>
    </div>
  )
}