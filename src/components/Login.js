import React, {Component} from 'react';
import { GoogleLogin } from 'react-google-login-component';

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
         <GoogleLogin socialId="70122812272-6l0ll01ajl3tqkv6bs1u1tr7l8vu51nb.apps.googleusercontent.com"
                      className="google-login"
                      scope="profile"
                      fetchBasicProfile={false}
                      responseHandler={this.responseGoogle}
                      buttonText="Login With Google"/>
       </div>
     );
   }
  
 }
  