
let instance = null;

export default class Store {

    constructor() {
        if(!instance){
            instance = this;
        }
        this.token = '';
        this.login = '';
        return instance;
    }

     setToken = (newToken) => {
        this.token = newToken;
    }

    getToken = () => {
        return this.token;
    }

    setLogin = (newLogin) => {
        this.login = newLogin;
    }

    getLogin = () => {
        return this.login;
    }

}