import { HeaderRef } from '../../components/Header/Header_cmpt';
import getUsernameModel from '../../model/getUsername';
export default class Control {
    static async getUsername() {
        const result = await getUsernameModel();
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                HeaderRef.setUsername(data.data);
            } else {
                HeaderRef.interfaceError(data.msg);
            }
        } else {
            HeaderRef.networkError(result);

        }
    }
}