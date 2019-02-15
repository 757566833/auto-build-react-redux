import { getFetch } from '../../../fetch/fetch';
const getUsername = async () => {
    return getFetch(
        '/hello',
        ''
    );
};
export default getUsername;