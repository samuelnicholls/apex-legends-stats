import * as Styles from './styles'

export interface Contact {
  id: string
  firstName: string
  lastName: string
  jobTitle: string
  company: string
  phoneNumber: string
}

export interface ContactProps {
  contact: Contact
}

export default function Contact({ contact }: ContactProps) {
  return (
    <Styles.Contact>
      <Styles.ContactAvatar
        src='https://via.placeholder.com/100'
        width={100}
        height={100}
      />
      <Styles.ContactColumn>
        <Styles.ContactText isBold={true}>
          {contact.firstName} {contact.lastName}
        </Styles.ContactText>
      </Styles.ContactColumn>
      <Styles.ContactDivider />
      <Styles.ContactText>
        {contact.jobTitle}, {contact.company}
      </Styles.ContactText>
      <Styles.ContactDivider />
      <Styles.ContactText isBold={true}>
        {contact.phoneNumber}
      </Styles.ContactText>
    </Styles.Contact>
  )
}
