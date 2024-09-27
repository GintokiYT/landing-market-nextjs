import type { Metadata } from "next";

import { API } from "@/config/apis";
import { GetProductList } from "@/types";

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
      { productsList.map( item => {
        return (
          <div key={item.category}>
            <p>{item.category}</p>
          </div>
        )
      }) }
    </div>
  );
}
