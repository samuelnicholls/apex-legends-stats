import { ChangeEvent, MouseEvent } from 'react'
import * as Styles from './styles'
import Button from '../Button/index'

interface SeletOptionsArray {
  id: string
  value: string
  label: string
}

interface InputWithSelectProps {
  inputPlaceholder?: string
  type: 'text'
  value: string
  selectPlacholder: string
  selectOptions: SeletOptionsArray[]
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void
  onClickButton: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function InputWithSelect({
  inputPlaceholder,
  type,
  value,
  selectPlacholder,
  selectOptions,
  onChangeInput,
  onChangeSelect,
  onClickButton
}: InputWithSelectProps) {
  return (
    <Styles.Container>
      <Styles.Row>
        <Styles.Input
          type={type}
          placeholder={inputPlaceholder}
          onChange={onChangeInput}
        />
        <Styles.Select value={value} onChange={onChangeSelect}>
          <option value='' disabled hidden>
            {selectPlacholder}
          </option>
          {selectOptions.map((option, index) => (
            <option key={index} id={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </Styles.Select>
      </Styles.Row>
      <Button text='Search' onClick={onClickButton} />
    </Styles.Container>
  )
}
