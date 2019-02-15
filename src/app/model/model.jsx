import { getFetch } from '../../../fetch/fetch';
const model = async (json = {}) => {
    return getFetch(
        '/model',
        json
    );
};
export default model;