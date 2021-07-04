import React, { useEffect, useState } from 'react';
import '../../Styles/ugstats.scss';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => { return Number(acessos); }).reduce((a, b) => { return a + b; }),
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className="graph animeLeft">
      <div className="total graphItem">
        <p>
          Acessos:
          {' '}
          {total}
        </p>
      </div>
      <div className="graphItems">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{
            top: 20, bottom: 20, left: 80, right: 80,
          }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className="graphItem">
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
