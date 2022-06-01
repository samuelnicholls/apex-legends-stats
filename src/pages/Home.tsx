import { useState, ChangeEvent } from 'react'
import InputWithSelect from '../components/InputWithSelect'
import Map from '../components/Map'

const Home = () => {
  const [category, setCategory] = useState('')
  const [username, setUsername] = useState('')

  const selectOptions = [
    {
      id: '0',
      value: 'psn',
      label: 'PSN'
    },
    {
      id: '1',
      value: 'pc',
      label: 'PC'
    },
    {
      id: '2',
      value: 'xbox',
      label: 'XBOX'
    }
  ]

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const submitForm = () => {
    console.log('username', username)
    console.log('category', category)
  }

  return (
    <>
      <h2>Map Rotation</h2>
      <Map />
      <InputWithSelect
        type='text'
        inputPlaceholder='Username'
        value={category}
        selectPlacholder='Platform'
        selectOptions={selectOptions}
        onChangeInput={handleSearchChange}
        onChangeSelect={handleCategoryChange}
        onClickButton={submitForm}
      />
    </>
  )
}

export default Home
