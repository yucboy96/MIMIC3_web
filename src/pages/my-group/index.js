import { PureComponent } from 'react';
import { Radio, Button } from 'antd';
import pageWrapper from '../../components/page-wrapper';
import PageContainer from '../../components/page-container';
import store from './store';
import PolyFitForcast from './component/regression';
import ReactECharts from 'echarts-for-react';
import './index.less';

@pageWrapper({ store })
class MyGroup extends PureComponent {

  getOption = arr => {
    if (!arr.length) return {};
    const STEP = 1000 * 3600 * 24;
    const base = new Date(arr[0].CHARTTIME).getTime() / STEP;
    // arr = arr.filter(it => it.CHARTTIME.indexOf('2143') === 0);
    const formatted = arr.map(it => ({ x: new Date(it.CHARTTIME).getTime() / STEP - base, y: parseInt(it.VALUENUM) }));
    const res = new PolyFitForcast().get(formatted);
    console.log(res);
    return {
      xAxis: {
        type: 'category',
        data: res.map(it => it.x),
      },
      yAxis: [{
        type: 'value',
      }, {
        type: 'value',
      }],

      series: [
        {
          data: res.map(it => it.y),
          type: 'line',
          smooth: true,
        },
        {
          data: formatted.map(it => it.y),
          type: 'scatter',
        },
      ],
    };
  }

  render() {
    const { labEvents } = this.props;
    console.log(labEvents);
    const keys = Object.keys(labEvents);
    return <PageContainer>
      <div className="my-group-content">
        <div className="group-header">
        </div>
        <div>
          <ReactECharts
            option={this.getOption(labEvents[keys[26]] || [])}
            notMerge={true}
            lazyUpdate={true}
          />
        </div>
      </div>
    </PageContainer>;
  }
}

export default MyGroup;
