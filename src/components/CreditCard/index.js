// Write your code here
import {useState} from 'react'
import {
  Container,
  CardContainer,
  Heading,
  ImageContainer,
  CardNum,
  Para,
  Name,
  InputContainer,
  InputCardContainer,
  SubHeading,
  InputDetails,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeCardNumber = event => setNumber(event.target.value)

  const onChangeName = event => setName(event.target.value)

  return (
    <Container>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <ImageContainer data-testid="creditCard">
          <CardNum>{number}</CardNum>
          <Para>CARDHOLDER NAME</Para>
          <Name>{name.toUpperCase()}</Name>
        </ImageContainer>
      </CardContainer>
      <InputContainer>
        <InputCardContainer>
          <SubHeading>Payment Method</SubHeading>
          <InputDetails>
            <Input
              type="text"
              value={number}
              onChange={onChangeCardNumber}
              placeholder="Card Number"
            />
            <Input
              type="text"
              value={name}
              onChange={onChangeName}
              placeholder="Cardholder Name"
            />
          </InputDetails>
        </InputCardContainer>
      </InputContainer>
    </Container>
  )
}

export default CreditCard
