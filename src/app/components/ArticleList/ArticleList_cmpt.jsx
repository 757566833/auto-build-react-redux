import React from 'react';
import { withRouter } from 'react-router-dom';
import Control from '../../control/components/ArticleList';
import { Pagination } from 'antd';
import moment from 'moment';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
}

function disabledRangeTime(_, type) {
    if (type === 'start') {
        return {
            disabledHours: () => range(0, 60).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }
    return {
        disabledHours: () => range(0, 60).splice(20, 4),
        disabledMinutes: () => range(0, 31),
        disabledSeconds: () => [55, 56],
    };
}
export let ArticleListRef;
class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        ArticleListRef = this;
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    setMobile = (mobile) => {
        this.props.setMobile(mobile);
    }
    interfaceError = (msg) => {
        alert(`接口错误，错误信息${msg}`);
    }
    networkError = (code) => {
        alert(`网络错误${code}`);
    }
    render() {
        return (
            <div style={{ backgroundColor: 'green' }}>
                <div>ArticleList</div>
                {/* 在配置中这里没有username属性，所以页面会是空的 */}
                <div>username:{this.props.username}</div>
                <div>mobile:{this.props.mobile}</div>
                <div><button onClick={() => this.props.setMobile('987654321')}>设置mobile为987654321</button></div>
                <div><button onClick={() => Control.getMobile('987654321')}>获取接口时网络错误</button></div>
                <Pagination defaultCurrent={1} total={50} showSizeChanger />
                <RangePicker
                    disabledDate={disabledDate}
                    disabledTime={disabledRangeTime}
                    showTime={{
                        hideDisabledOptions: true,
                        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                    }}
                    format="YYYY-MM-DD HH:mm:ss"
                />
            </div>
        );
    }
}
export default withRouter(ArticleList);
