import React, {Component} from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/img/eye-for-ebony-341531.jpg';
import { GoogleLogin } from 'react-google-login-component';


const BackgroundImage = styled.div`
height: 70vh;
width: 100vw;
background: url(${backgroundImage});
background-size: cover;
background-repeat: no-repeat;


@media screen and (max-width: 600px) {
  height: 30vh;
}
`;

const HeaderContainer = styled.div`
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: black;


@media screen and (max-width: 600px) {
  height: 40vh;
}
`;

const Title = styled.h1`
font-weight: 400;
font-size: 5em;

@media screen and (max-width: 600px) {
  font-size: 2em;
}
`;

export default class Login extends Component{
  
   constructor (props, context) {
     super(props, context);
   }
  
   responseGoogle (googleUser) {

     var { user } = this.props;
     console.log(user);

     var id_token = googleUser.getAuthResponse().id_token;
     console.log({accessToken: id_token});
     this.state = {user: id_token, resources: this.state.resources};
     //anything else you want to do(save to localStorage)...
   }
  
   render () {
     return (
       <div>
        <BackgroundImage>
          <HeaderContainer>
          <Title>Your Account</Title>
          </HeaderContainer>
        </BackgroundImage>
        <div>
          <GoogleLogin socialId="70122812272-6l0ll01ajl3tqkv6bs1u1tr7l8vu51nb.apps.googleusercontent.com"
                        className="google-login"
                        scope="profile"
                        fetchBasicProfile={false}
                        responseHandler={this.responseGoogle}
                        buttonText="Login With Google"/>
        </div>
       </div>
     );
   }
  
 }
  