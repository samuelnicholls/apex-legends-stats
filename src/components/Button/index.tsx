import * as Styles from './styles'

interface ButtonProps {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ text, onClick }: ButtonProps) {
  return <Styles.Button onClick={onClick}>{text}</Styles.Button>
}
