// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  padding: 50px;
  margin: 50px;
  height: 250px;
  width: 400px;
  border-radius: 8px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  text-decoration: underline;
  text-decoration-color: #ffd773;
`

export const CardNum = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 30px;
`

export const Para = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
`

export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputCardContainer = styled.div`
  box-shadow: 0px 4px 16px #bfbfbf;
  margin-left: 100px;
  padding: 80px;
`

export const SubHeading = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
  font-size: 25px;
`

export const InputDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  margin: 20px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  box-shadow: 0px 4px 16px 0px #d3d9e0;
  border-style: solid;
  border-color: #c3cad9;
  height: 40px;
  width: 250px;
  border-radius: 5px;
`
