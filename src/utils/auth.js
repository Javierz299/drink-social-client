import auth0 from 'auth0-js';

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dev-u9j3svni.auth0.com',
        clientID: 'whwkSL7cwzB4fskmSWSwwo43aVIFupY4',
        redirectUri: "http://localhost:3000/callback",
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    login = () => {
        this.auth0.authorize();
    };

    handleAuth = () => {
        this.auth0.parseHash((err,authResult) => {
            if(authResult){
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('id_token', authResult.idToken);

                let expiresAt = JSON.stringify(authResult.expiresIn * 2000 + new Date().getTime());
                localStorage.setItem('expiresAt',expiresAt);
            } else {
                console.log("handleAuth Err",err);
            }
        })
    };

    logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expiresAt');
    };


};

export default Auth;