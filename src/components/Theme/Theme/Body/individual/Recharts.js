import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 2009,
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 2010,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 2011,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 2012,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 2013,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 2014,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 2015,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Recharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';
  constructor(props){
    super(props)
    this.state = {
      opacity: {
        uv: 1,
        pv: 1,
      },
    };
}

  render() {
    console.log(this.props);
    return (
      <div  style={{ width: '100%' }}>
      <ResponsiveContainer  width="100%" height={300}>
        <AreaChart
          width={500}
          height={400}
          data={this.props.blocks.data}
          margin={{
            top: 0,
            right:30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="rank_blocks" />
          <YAxis dataKey="rank_blocks" ticks={[10,20,30,40,50,60,70,80,90,100]}/>
          <Tooltip />
          <Area type="monotone" dataKey="rank_blocks" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
