
const action = {
    setUsername: (username) => {
        return { type: 'Header', func: 'setUsername', username: username };
    },
    setMobile: (mobile) => {
        return { type: 'Header', func: 'setMobile', mobile: mobile };
    },
    setLanguage_type: (language_type) => {
        return { type: 'Header', func: 'setLanguage_type', language_type: language_type };
    },

};
export default action;