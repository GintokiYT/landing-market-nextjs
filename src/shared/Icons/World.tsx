import type { Icon } from "@/types";

export default function World({ width = 24, height = 24 }: Icon) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.375C17.1777 21.375 21.375 17.1777 21.375 12C21.375 6.82233 17.1777 2.625 12 2.625C6.82233 2.625 2.625 6.82233 2.625 12C2.625 17.1777 6.82233 21.375 12 21.375Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path d="M3.875 7.625H20.125" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path d="M3.875 16.375H20.125" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path d="M12 2.625C12 2.625 7.625 5.75 7.625 12C7.625 18.25 12 21.375 12 21.375" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
      <path d="M12 2.625C12 2.625 16.375 5.75 16.375 12C16.375 18.25 12 21.375 12 21.375" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
    </svg>
  )
}