const {
    usernameState,
    setUsername,
    mobileState,
    setMobile,
    language_typeState,
    setLanguage_type
} = require('../data/app/app')
module.exports = {
    'app': {
        'index': {
            'state': [language_typeState],
            'func': [setLanguage_type]
        },
        'components': {
            'Header': {
                'state': [usernameState, mobileState, language_typeState],
                'func': [setUsername, setMobile, setLanguage_type]
            },
            'Menus': {
                'state': [usernameState],
                'func': [setUsername]
            },
            'ArticleList': {
                'state': [mobileState],
                'func': [setMobile]
            },
            'SearchHeader': {
                'state': [],
                'func': []
            }
        },
        'views': {
            'IndexView': {
                'components': ['Header', 'Menus', 'ArticleList'],
                'state': [usernameState],
                'func': [setUsername]
            },
            'SearchView': {
                'components': ['SearchHeader', 'ArticleList'],
                'state': [],
                'func': []
            },
            'AdminView': {
                'components': ['ArticleList'],
                'state': [],
                'func': []
            }
        }
    }

}