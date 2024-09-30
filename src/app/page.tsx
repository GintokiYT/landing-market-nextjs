import type { Metadata } from "next";
import Image from 'next/image';
import { API } from "@/config/apis";
import { GetProductList } from "@/types/proxies";
// components
import ProductCard from "@/components/ProductCard/ProductCard";
import Button from "@/shared/Button/Button";
import ArrowP from '@/shared/Icons/ArrowP';
import GNavbar from "@/shared/GNavbar/GNavbar";

export const metadata: Metadata = {
  title: 'Geor: Chat, Ventas e Impuestos',
  description: 'pagina home'
}

const getProductsList = async () => {
  const response = await fetch(API.products_list, { cache: 'no-cache' });
  if(!response.ok) return [];
  const productsList: GetProductList = await response.json();
  return productsList.data;
}

export default async function Home() {

  const productsList = await getProductsList();

  return (
    <div className="pb-8"> 
      <div className="hidden desktop:block w-full px-24 h-10 sticky top-[--header-layout-height] z-10 bg-[--p-background-primary]">
        <div className="w-full max-w-[--max-width] m-auto flex justify-center gap-2">
          { productsList.map( item => {
            return (
              <a 
                key={item.category}
                href={`#${item.category.toLowerCase().replace(/\s+/g, '-')}`} 
                aria-label={item.category}
              >
                <GNavbar 
                  text={item.category}
                />
              </a>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full px-[--padding-container-x] mt-6 tablet:mt-4 desktop:mt-16">
        <div className="flex flex-col gap-3 w-full max-w-[342px] desktop:max-w-[--max-width] m-auto">
          <h1 className="g-tx--h1-c text-center text-[40px]">Planifica, colabora y mide.</h1>
          <span className="g-tx--content-b text-center">Con la ayuda de la IA.</span>
        </div>
        <div className="w-full flex flex-col gap-3 tablet:max-w-[342px] desktop:max-w-[--max-width] m-auto desktop:hidden">
          <Button appearance="primary">
            Comenzar Gratis
          </Button>
          <Button appearance="secondary-outline">
            Iniciar sesión
            <ArrowP width={18} height={18} />
          </Button>
        </div>
      </div>
      <div className="w-full max-w-[--max-width] h-[409px] tablet:h-[415px] desktop:h-[686px] overflow-hidden tablet:px-[--padding-container-x] my-6 tablet:my-8 tablet:mx-auto">
        <div className="w-full h-full relative ml-6 tablet:ml-0">
          <Image 
            className="object-cover object-left"
            src="/assets/background.png"
            alt="image"
            priority
            fill
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full max-w-[--max-width] m-auto">
        { productsList.map( item => {
          return (
            <div 
              className="flex flex-col gap-3 px-[--padding-container-x] scroll-mt-[calc(var(--header-layout-height)+40px)]" 
              key={item.category}
              id={`${item.category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <h2 className="g-tx--content-c">{item.category}</h2>
              <div className="grid gap-3 tablet:grid-cols-2 desktop:grid-cols-3">
                { item.items.map( product => (
                  <ProductCard 
                    key={product.id}
                    name={product.name}
                    summary={product.summary}
                    logo={product.logo}
                    creator={product.creator}
                  />
                )) }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
