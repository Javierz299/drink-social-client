import auth0 from 'auth0-js';
import history from '../utils/history';
import { useDispatch } from 'react-redux'

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-u9j3svni.auth0.com',
        clientID: 'whwkSL7cwzB4fskmSWSwwo43aVIFupY4',
        redirectUri: "http://localhost:3000/callback",
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    userProfile = {};

    login = () => {
        this.auth0.authorize();
    };

    getAccessToken = () => {
        if(localStorage.getItem('access_token')){
            const accessToken = localStorage.getItem('access_token');
            return accessToken;
        }

        return null;
    };

    getProfile = () => {
        let accessToken = this.getAccessToken();
        if(accessToken){
            this.auth0.client.userInfo(accessToken, (err, profile) => {
                if(profile) {
                    console.log("PROFILE")
                    this.userProfile = { profile }
                }
            })
        }
    }

    handleAuth = () => {
        this.auth0.parseHash((err,authResult) => {
            if(authResult){
                console.log("AUTHRESULT", authResult)
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('id_token', authResult.idToken);

                let expiresAt = JSON.stringify(authResult.expiresIn * 2000 + new Date().getTime());
                localStorage.setItem('expiresAt',expiresAt);

                this.getProfile();

                setTimeout(() => {
                    history.replace('/authcheck')
                }, 2000);
            } else {
                console.log("handleAuth Err",err);
            }
        })
    };

    logout = () => {
        console.log('LOG OUT: AUTH')
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expiresAt');
        
    };

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
        return new Date().getTime() < expiresAt;
    };

    // '/callback route => accesstoken after logging in
     handleAuthentication = (props) => {
        console.log('props from public routes',props);
        if(props.location.hash){
            this.handleAuth();
        }
    };


};

export default Auth;