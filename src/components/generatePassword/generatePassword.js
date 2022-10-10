const generatePassword = (event, state) => {

    //event.preventDefault();

    let passwordRequirements = []
    let passwordString = "";

    for (const key in state) {
        if (key === 'symbols' && state[key]) {
            passwordRequirements.push(PasswordServer.getRandomSymbol);
        }
        else if (key === 'numbers' && state[key]) {
            passwordRequirements.push(PasswordServer.getRandomNumber);
        }
        else if (key === 'capital' && state[key]) {
            passwordRequirements.push(PasswordServer.getRandomCapitalAlphabet);
        }
        else if (key === 'small' && state[key]) {
            passwordRequirements.push(PasswordServer.getRandomSmallAlphabet);
        }
    }


    if (passwordRequirements.length !== 0) {
        for (let i = 0; i < state.passwordLength; i++) {
            passwordString += passwordRequirements[Math.floor(Math.random() * passwordRequirements.length)]();
        }
    }

    return passwordString;

}

class PasswordServer {
    static getRandomSmallAlphabet() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    static getRandomCapitalAlphabet() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    static getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    static getRandomSymbol() {
        let symStr = "`~@#$%^&*()-_+={}[]\\|;:',./";
        return symStr[Math.floor(Math.random() * symStr.length)];
    }

}

export default generatePassword;