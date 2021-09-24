import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketService from '../../../states/socketAgent/SocketService';

import { makeApiRequest, generateSymbol, parseFullSymbol } from './lib/helpers.js';

const getSessionStorage = (key) => {
    return sessionStorage.getItem(key);
};

const EXCHANGE = 'BMX';

const configurationData = {
    supported_resolutions: ['1', 'D'],
    exchanges: [
        {
            value: EXCHANGE,
            name: EXCHANGE,
            desc: EXCHANGE,
        },
    ],
    symbols_types: [
        {
            name: 'crypto',
            value: 'crypto',
        },
    ],
};

export default function useDatafeed(chartData, currentSymbol) {
    return {
        onReady: (callback) => {
            setTimeout(() => callback(configurationData));
        },
        searchSymbols: async (userInput, exchange, symbolType, onResultReadyCallback) => {
            // DO something here
        },
        resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
            const symbolInfo = {
                ticker: EXCHANGE + ':BNC_BTCUSDT',
                name: currentSymbol,
                description: currentSymbol,
                type: 'crypto',
                exchange: EXCHANGE,
                timezone: 'Asia/Seoul',

                has_empty_bars: true,
                session: '24x7',
                minmov: 1,
                pricescale: 100,
                has_intraday: true,
                has_seconds: true,
                intraday_multipliers: ['1', 'D'],
                // has_no_volume: false,
                has_weekly_and_monthly: false,
                supported_resolutions: configurationData.supported_resolutions,
                volume_precision: 2,
                data_status: 'streaming',
            };

            onSymbolResolvedCallback(symbolInfo);
        },

        getBars: async (
            symbolInfo,
            resolution,
            from,
            to,
            onHistoryCallback,
            onErrorCallback,
            firstDataRequest = false,
        ) => {
            if (!chartData) {
                onHistoryCallback([], { noData: true });
                return;
            } else {
                if (!chartData.Output1) return;
                const bars = chartData.Output1.map((bar) => {
                    if (Number(bar[0]) / 1000 >= from && Number(bar[0]) / 1000 < to) {
                        return {
                            time: Number(bar[0]),
                            low: bar[3],
                            high: bar[2],
                            open: bar[1],
                            close: bar[4],
                            volume: bar[5],
                        };
                    }
                });

                console.log(`bars :  `, bars);

                onHistoryCallback(bars, { noData: true });
            }
        },
        subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
            socketService.ws.addEventListener('message', function (event) {
                let json = JSON.parse(event.data);
                if (!json.Output1) {
                    return;
                }

                let trcode = json.Header.trcode,
                    symbol = json.Output1?.szSymbol;
                let live_chart_status = getSessionStorage('chart_key');

                if (symbol) {
                    symbol = symbol.replace(/ /g, '');
                }

                if (`91_${currentSymbol}` === `${trcode}_${symbol}` && symbol) {
                    let output = json.Output1;
                    let ob = {
                        close: Number(output.szClose),
                        high: Number(output.szClose),
                        isBarClosed: true,
                        isLastBar: false,
                        low: Number(output.szClose),
                        open: Number(output.szClose),
                        time: new Date().getTime() - 200,
                    };
                    console.log(`before calling onresulttimecallback : `, ob);
                    onRealtimeCallback(ob);
                }
            });
        },
        unsubscribeBars: (subscriberUID) => {
            // Do something here
        },
    };
}
