import type { Metadata } from "next";
import { API } from "@/config/apis";
import { GetProductList } from "@/types/proxies";
// Componets
import ProductCard from "@/components/ProductCard/ProductCard";

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
    <div>
      <h1>Home page</h1>
      <div className="flex flex-col gap-8">
        { productsList.map( item => {
          return (
            <div className="px-6 desktop:px-24 flex flex-col gap-3" key={item.category}>
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
