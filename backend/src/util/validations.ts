export const errorMessage = (message:string) : any => {
    return {
        "Error" : message
    };
}

export const successMessage = (message:string) : any => {
    return {
        "Message": message
    };
}

export const emailValidator = (email:string):boolean => {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return regex.test(email);
}

export const passwordValidator = (password:string):boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(password);
}

export const hasAnyDigit = (s:string):boolean => {
    const regex = /(?=.*\d)/;
    return regex.test(s);
}

export const hasAnySpecialSymbol = (s:string):boolean => {
    const regex = /(?=.*[@$!%*?&])/;
    return regex.test(s);
}

export const hasAnyLowerCase = (s:string):boolean => {
    const regex = /(?=.*[a-z])/;
    return regex.test(s);
}

export const hasAnyUpperCase = (s:string):boolean => {
    const regex = /(?=.*[A-Z])/;
    return regex.test(s);
}

export const roleValidator = (role:string):boolean => {
    const roles:string[] = ["USER", "ADMIN", "FACILITY"]
    return roles.includes(role);
}

export const blockAndUnblockActionValidator = (action:String):boolean => {
    const actions:string[] = ["unblock", "block"] 
    return actions.includes(action.toLowerCase());
}