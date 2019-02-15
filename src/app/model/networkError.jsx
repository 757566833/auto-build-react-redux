import { getFetch } from '../../../fetch/fetch';
const getUsername = async () => {
    return getFetch(
        '/networkError',
        ''
    );
};
export default getUsername;