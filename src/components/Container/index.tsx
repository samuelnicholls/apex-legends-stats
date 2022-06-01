import * as Styles from './styles'

export interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <Styles.Container>{children}</Styles.Container>
}
