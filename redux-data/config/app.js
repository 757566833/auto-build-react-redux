const {
    usernameState,
    setUsername

} = require('../data/app/app')
module.exports = {
    'app': {
        'index': {
            'state': [],
            'func': []
        },
        'components': {
            'Index': {
                'state': [usernameState],
                'func': []
            },
            'User': {
                'state': [usernameState],
                'func': [setUsername]
            },
            'Surprise': {
                'state': [usernameState],
                'func': []
            }
        },
        'views': {
            'IndexView': {
                'components': ['Index', 'User'],
                'state': [],
                'func': []
            },
            'SurpriseView': {
                'components': ['Surprise'],
                'state': [],
                'func': []
            }
        }
    }
}