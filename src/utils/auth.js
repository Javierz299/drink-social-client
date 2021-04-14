import auth0 from 'auth0-js';
import history from '../utils/history';

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-u9j3svni.auth0.com',
        clientID: 'whwkSL7cwzB4fskmSWSwwo43aVIFupY4',
        redirectUri: "http://localhost:3000/callback",
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    userProfile = null;

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
                    this.userProfile = profile;
                }
            })
        }
    };

    handleAuth = () => {
        this.auth0.parseHash((err,authResult) => {
            if(authResult){
                //console.log("AUTHRESULT", authResult)
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('id_token', authResult.idToken);

                let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
                localStorage.setItem('expiresAt',expiresAt);

                this.getProfile();
                //loading after logging in correctly
                setTimeout(() => {
                    history.replace('/authcheck')
                }, 900);
            } else {
                console.log("handleAuth Err",err);
            }
        })
    };

    logout = () => {
        //console.log('LOG OUT: AUTH')
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expiresAt');

    //     this.idToken = null
    //     this.profile = null
    //     this.expiresAt = null
    //     this.auth0.logout({
    //     returnTo: 'https://drink-social-zapien120.vercel.app/',
    //     clientID: 'whwkSL7cwzB4fskmSWSwwo43aVIFupY4',
    // })
        //http://localhost:3000'https://beerme-social.vercel.app'
    };

    isAuthenticated = () => {
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
        return new Date().getTime() < expiresAt;
    };

    // '/callback route => accesstoken after logging in
     handleAuthentication = (props) => {
        if(props.location.hash){
            this.handleAuth();
        }
    };


};

export default Auth;