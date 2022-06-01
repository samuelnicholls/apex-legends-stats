import styled from 'styled-components'

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: white;
`

export const ContactAvatar = styled.img`
  max-height: 100px;
  margin-bottom: 20px;
  border-radius: 50%;
`

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactText = styled.p<{ isBold?: boolean }>`
  margin: 5px;
  line-height: 1.4;
  font-size: 18px;
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
`

export const ContactDivider = styled.div`
  width: 100%;
  margin: 5px 0;
  border-bottom: 1px solid #1f1d36;
`
