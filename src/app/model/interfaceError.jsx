import { getFetch } from '../../../fetch/fetch';
const interfaceError = async () => {
    return getFetch(
        '/interfaceError',
        ''
    );
};
export default interfaceError;