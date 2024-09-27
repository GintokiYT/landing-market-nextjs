import type { Icon } from "@/types";

export default function Burger({ width = 24, height= 24 }: Icon) {
  return (
    <svg width={ width } height={ height } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20.25" y1="17.75" x2="3.75" y2="17.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20.25" y1="11.75" x2="3.75" y2="11.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="20.25" y1="5.75" x2="3.75" y2="5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}