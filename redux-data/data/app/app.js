const username = 'username'
const usernameState = {
    'name': username,
    'type': 'string',
    'default': 'user'
}
const setUsername = {
    'method': 'setUsername',
    'parameter': username
}

const mobile = 'mobile'
const mobileState = {
    'name': mobile,
    'type': 'string',
    'default': '123456789'
}
const setMobile = {
    'method': 'setMobile',
    'parameter': mobile
}

const language_type = 'language_type';
const language_typeState = {
    'name': language_type,
    'type': 'string',
    'default': 'zh_cn'
};
const setLanguage_type = {
    'method': 'setLanguage_type',
    'parameter': language_type
};


module.exports = { usernameState, setUsername, mobileState, setMobile,language_typeState,setLanguage_type };