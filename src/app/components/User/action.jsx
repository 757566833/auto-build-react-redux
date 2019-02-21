
const action = {
    setUsername: (username) => {
        return { type: 'User', func: 'setUsername', username: username };
    },

};
export default action;