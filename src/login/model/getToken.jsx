import { getFetch } from '../../../fetch/fetch';
const getToken = async (json = {}) => {
    return getFetch(
        '/noToken',
        json
    );
};
export default getToken;