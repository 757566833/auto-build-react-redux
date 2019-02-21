const reducer = (state, action) => {
    switch (action.type) {
        case 'Index':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'User':
            switch (action.func) {
                case 'setUsername':
                    return {
                        ...state,
                        username: action.username
                    };
                default:
                    return state;
            }
        case 'Surprise':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'IndexView':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'SurpriseView':
            switch (action.func) {
                
                default:
                    return state;
            }
        
        default:
            return state;
    }
};
export default reducer;

