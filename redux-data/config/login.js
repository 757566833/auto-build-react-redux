const {
    usernameState,
    setUsername,
    mobileState,
    setMobile,
    language_typeState,
    setLanguage_type
} = require('../data/login/login')
module.exports = {
    'login': {
        'index': {
            'state': [language_typeState],
            'func': [setLanguage_type]
        },
        'components': {
            'Header': {
                'state': [usernameState, mobileState],
                'func': [setUsername, setMobile]
            },
            'Content': {
                'state': [usernameState],
                'func': [setUsername]
            },
            'Footer': {
                'state': [mobileState],
                'func': [setMobile]
            }
        },
        'views': {
            'IndexView': {
                'components': ['Header', 'Content', 'Footer'],
                'state': [usernameState],
                'func': [setUsername]
            }
        }
    }

}