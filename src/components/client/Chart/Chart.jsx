import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { widget } from './lib/charting_library';
import useDatafeed from './useDatafeed';
import styled from 'styled-components';
import useSymbolList from '../../../hooks/useSymbolList';
import socketService from '../../../states/socketAgent/SocketService';

const UP_COLOR = '#ed1c23';
const DOWN_COLOR = '#3f48cc';

function Chart(props) {
    let _tvWidget = null;
    const ws = useSelector((state) => state.agentState.ws);
    const chartData = useSelector((state) => state.chartState.chartData_t9731.data);
    const { symbols, currentSymbol } = useSymbolList();
    // const [symbol_name, setSymbolName] = useState(currentSymbol);
    const [interval, setInterval] = useState('1D');
    const datafeed = useDatafeed(chartData, currentSymbol);
    const dispatch = useDispatch();

    useEffect(() => {
        const widgetOptions = {
            symbol: props.symbol,
            datafeed: datafeed,
            interval: interval,
            container_id: props.containerId,
            library_path: props.libraryPath,

            locale: 'ko',
            disabled_features: ['use_localstorage_for_settings'],
            enabled_features: ['study_templates'],
            charts_storage_url: props.chartsStorageUrl,
            charts_storage_api_version: props.chartsStorageApiVersion,
            client_id: props.clientId,
            user_id: props.userId,
            fullscreen: props.fullscreen,
            autosize: props.autosize,
            studies_overrides: props.studiesOverrides,
            timezone: 'Asia/Seoul',

            overrides: {
                'mainSeriesProperties.candleStyle.upColor': UP_COLOR,
                'mainSeriesProperties.candleStyle.downColor': DOWN_COLOR,
                'mainSeriesProperties.candleStyle.borderUpColor': UP_COLOR,
                'mainSeriesProperties.candleStyle.borderDownColor': DOWN_COLOR,
                'mainSeriesProperties.candleStyle.wickUpColor': UP_COLOR,
                'mainSeriesProperties.candleStyle.wickDownColor': DOWN_COLOR,
            },
            studies_overrides: {
                'volume.volume.color.0': DOWN_COLOR,
                'volume.volume.color.1': UP_COLOR,
            },
        };

        const tvWidget = new widget(widgetOptions);
        _tvWidget = tvWidget;

        tvWidget.onChartReady(() => {
            tvWidget.headerReady().then((data) => {
                //do something here
            });

            tvWidget
                .activeChart()
                .onIntervalChanged()
                .subscribe(null, (interval, timeframeObj) => {
                    let info = {
                        Header: {
                            function: 'D',
                            termtype: 'HTS',
                            trcode: 't9731',
                        },
                        Input1: {
                            szCurNo: currentSymbol,
                            cTermDiv: '3',
                            szCritDate: '99999999',
                            szCritTime: '999999999',
                            nMinTerm: '1',
                            nReqCnt: '2000',
                        },
                    };
                    if (interval === '1D') {
                        setInterval('D');
                    } else {
                        setInterval('1');
                        info.Input1.cTermDiv = '2';
                    }
                    socketService.sendToAgent(ws, info);
                });
        });

        return () => {
            if (_tvWidget !== null) {
                _tvWidget.remove();
                _tvWidget = null;
            }
        };
    }, [datafeed]);

    // var register_live_chart = (symbol) => {
    //   let info = {
    //     Header: {
    //       function: "A",
    //       termtype: "HTS",
    //       trcode: "91",
    //     },
    //     Input1: {
    //       Key1: symbol,
    //     },
    //   };
    //   let ob = {};
    //   let agent_result = sendToAgent(ws, info, "Key1");
    //   ob[agent_result] = [];
    //   // agent에 실시간 등록 요청한 결과 key name을 global state에 dispatch
    //   // dispatch(INSERT_LIVE_STATE(ob));
    //   setSessionStorage("chart_key", agent_result);
    //   dispatch(SET_CHART_KEY(agent_result));
    // };

    let symbol = [
        'BCE2009Q03BU',
        'BMX_BTCUSDT',
        'BSP_BTCUSDT',
        'CNB_BTCUSDT',
        'BFX_BTCUSDT',
        'BNC_BTCUSDT',
        'BTX_BTCUSDT',
    ];
    return (
        <>
            {/* {symbol.map((v, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              // setSymbolName(v);
              register_live_chart(v);
            }}
          >
            {v} 차트 데이터 가져오기
          </button>
        );
      })} */}

            <ChartCont id={props.containerId} className={'chart_container'} style={{ height: '100%' }} />
        </>
    );
}

Chart.defaultProps = {
    symbol: 'BCE2009Q03BU',
    interval: 'D',
    containerId: 'chart_container',
    libraryPath: '/charting_library/',
      chartsStorageUrl: "https://saveload.tradingview.com",
    chartsStorageApiVersion: '1.1',
    clientId: 'tradingview.com',
    userId: 'public_user_id',
    fullscreen: false,
    autosize: true,
    studiesOverrides: {},
};

export default Chart;

const ChartCont = styled.div`
    iframe {
        border-radius: 6px;
    }
`;
