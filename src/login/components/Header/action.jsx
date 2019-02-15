
const action = {
    setUsername: (username) => {
        return { type: 'Header', func: 'setUsername', username: username };
    },
    setMobile: (mobile) => {
        return { type: 'Header', func: 'setMobile', mobile: mobile };
    },

};
export default action;