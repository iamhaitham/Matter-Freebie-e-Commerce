export const loginReducerInitialState = {
    isLoading: false,
    email: '',
    isEmailValid: true,
    isUserAuthenticated: null,
    errorMessage: ''
};

export const loginReducerTypes = {
    Login_Loading: 'login_loading',
    Login_SetEmail: 'login_setEmail',
    Login_ValidateEmail: 'login_validateEmail',
    Login_IsUserAuthenticated: 'login_isUserAuthenticated',
    Login_SetErrorMessage: 'login_setErrorMessage'
}

export function loginReducer(state, action) {
    switch (action.type) {
        case loginReducerTypes.Login_Loading:
            return {
                ...state, 
                isLoading: action.isLoading
            };
        case loginReducerTypes.Login_SetEmail:
            return {
                ...state,
                email: action.email
            };
        case loginReducerTypes.Login_ValidateEmail:
            return {
                ...state,
                // eslint-disable-next-line no-useless-escape
                isEmailValid: !!action.isEmailValid.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
            };
        case loginReducerTypes.Login_IsUserAuthenticated:
            return {
                ...state,
                isUserAuthenticated: action.isUserAuthenticated
            };
        case loginReducerTypes.Login_SetErrorMessage:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default:
            throw Error('Unknown action.');
    }
}
