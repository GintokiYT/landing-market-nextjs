import styled from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode
  appearance?: 'primary' | 'text-black'
  size?: 'lg' | 'md' | 'sm' | 'xs'
} 

export default function Button({ children, appearance = 'primary', size = 'md' }: ButtonProps) {

  const getFontsize = () => {
    return size === 'lg' || size === 'md' ? 'g-tx--content-1-a' : 'g-tx--content-2-a';
  }

  return (
    <button className={`${styled.button} ${styled[appearance]} ${styled[size]} ${getFontsize()}`}>
      { children }
    </button>
  )
}