import { getFetch } from '../../../fetch/fetch';
const getMsg = async (json = {}) => {
    return getFetch(
        '/getMsg',
        json
    );
};
export default getMsg;