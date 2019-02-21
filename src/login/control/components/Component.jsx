import { ComponentRef } from '../../components/Component/Component_cmpt';
import getToken from '../../model/getToken';
export default class Control {
    // static async demo() {
    static async demo() {
        //     const result = await model();
        //     if (typeof result !== 'number') {
        //           let data = eval(`(${result})`);
        //           if (data.code == 0) {
        //                ComponentRef.setfunc(data.data);
        //            } else {
        //                ComponentRef.interfaceError(data.msg);
        //            }
        //        } else {
        //            ComponentRef.networkError(result);
        //        }
        // }
        const result = await getToken();
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                ComponentRef.setfunc(data.data);
            } else {
                ComponentRef.interfaceError(data.msg);
            }
        } else {
            ComponentRef.networkError(result);
        }
    }
}