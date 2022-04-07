import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: '2009',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: '2010',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: '2011',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: '2012',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: '2013',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: '2014',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
// ];

export default class Chartone extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/customized-legend-event-l19fo';
  constructor(props){
    super(props)
    this.state = {
      opacity: {
        uv: 1,
        pv: 1,
      },
    };
}
  

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  render() {
    const { opacity } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={this.props.blocks.data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom:0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="block_count" ticks={[50,100,150,200,250,300,350,400,450,500]}/>
            <Tooltip />
            <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
            <Line type="monotone" dataKey="block_count" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
            {/* <Line type="monotone" dataKey="block_count" strokeOpacity={opacity.uv} stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}