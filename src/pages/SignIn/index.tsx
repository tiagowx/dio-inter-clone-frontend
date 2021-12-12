import {
  Wrapper,
  Background,
  InputContainer,
  ButtonContainer
} from "./styles";

import Card from "../../components/Card";

import background from '../../assets/images/background-login.jpg'

const SignIn = () => {
  return (
      <Wrapper>
        <Background image={background}/>
          <Card width="403px">
            Test
          </Card>
      </Wrapper>
  )
}

export default SignIn;