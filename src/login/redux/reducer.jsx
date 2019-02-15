const reducer = (state, action) => {
    switch (action.type) {
        case 'Index':
            switch (action.func) {
                case 'setLanguage_type':
                    return {
                        ...state,
                        language_type: action.language_type
                    };
                default:
                    return state;
            }
        case 'Header':
            switch (action.func) {
                case 'setUsername':
                    return {
                        ...state,
                        username: action.username
                    };
                case 'setMobile':
                    return {
                        ...state,
                        mobile: action.mobile
                    };
                default:
                    return state;
            }
        case 'Content':
            switch (action.func) {
                case 'setUsername':
                    return {
                        ...state,
                        username: action.username
                    };
                default:
                    return state;
            }
        case 'Footer':
            switch (action.func) {
                case 'setMobile':
                    return {
                        ...state,
                        mobile: action.mobile
                    };
                default:
                    return state;
            }
        case 'IndexView':
            switch (action.func) {
                case 'setUsername':
                    return {
                        ...state,
                        username: action.username
                    };
                default:
                    return state;
            }
        
        default:
            return state;
    }
};
export default reducer;

