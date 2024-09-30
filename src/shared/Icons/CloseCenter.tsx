import type { Icon } from "@/types"

export default function CloseCenter({ width = 24, height = 24 }: Icon) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 19L5 5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
      <path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
    </svg>
  )
}