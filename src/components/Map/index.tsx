import * as Styles from './styles'

interface MapProps {
  text?: string
}

export default function Map({ text }: MapProps) {
  return (
    <Styles.Container>
      {text}
      <img
        alt='sds'
        src='https://apexlegendsstatus.com/assets/maps/Arena_Encore.png'
      ></img>
    </Styles.Container>
  )
}
