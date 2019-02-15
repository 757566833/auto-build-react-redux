import { ArticleListRef } from '../../components/ArticleList/ArticleList_cmpt';
import networkErrorModel from '../../model/networkError';
export default class Control {
    static async getMobile() {
        const result = await networkErrorModel();
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                ArticleListRef.setUsername(data.data);
            } else {
                ArticleListRef.interfaceError(data.msg);
            }
        } else {
            ArticleListRef.networkError(result);

        }
    }
}