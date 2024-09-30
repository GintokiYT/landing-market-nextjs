"use client"

import styled from "./HeaderModal.module.scss";
import { useEffect, useState } from "react"
import Burger from "@/shared/Icons/Burger"
import CloseCenter from "@/shared/Icons/CloseCenter";
import { GetProductList, GetProductListData } from "@/types/proxies";
import { API } from "@/config/apis";

export default function HeaderModal() {

  const [ showModal, setShowModal ] = useState<boolean>(false);
  const [ categories, setCategories ] = useState<GetProductListData[]>([]);

  const toggleModal = (value: boolean) => {
    setShowModal(value);
  }

  const hiddenScroll = (value: boolean) => {
    const bodyElement: HTMLBodyElement | null = document.querySelector('body');
    if(bodyElement) {
      if(value) bodyElement.classList.add('overflow-hidden');
      else bodyElement.classList.remove('overflow-hidden');
    }
  }

  const getCategories = async () => {
    const response = await fetch(`${API.products_list}`);
    if(!response.ok) return ;
    const data: GetProductList = await response.json();
    setCategories(data.data);
  }

  useEffect(() => {
    hiddenScroll(showModal);
  }, [showModal]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="flex desktop:hidden relative">
        { showModal ? (
            <div onClick={() => toggleModal(false)}>
              <CloseCenter /> 
            </div>
          ): (
            <div onClick={() => toggleModal(true)}>
              <Burger />
            </div> 
          )
        }
      </div>
      <div 
        className={styled.containerHeader} 
        data-show-modal={showModal}
      >
        { categories.map(({ category }) => (
          <div key={category}>
            <p>{category}</p>
          </div>
        )) }
      </div>
    </>
  )
}