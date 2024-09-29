import styled from './GNavbar.module.scss';

interface GNavbarProps {
  text: string
  size?: 'sm'
  selected?: boolean
}

export default function GNavbar({ text, size = 'sm', selected = false }: GNavbarProps) {

  const getSelected = () => {
    return selected ? styled.selected : '';
  }

  return (
    <div className={`${styled.GNavbar} ${styled[size]} ${getSelected()}`}>
      <p className="g-tx--content-1-a">{ text }</p>
    </div>
  )
}