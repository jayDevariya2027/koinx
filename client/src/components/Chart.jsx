import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": "400",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    return () => {
      // Cleanup script on unmount
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <style jsx>{`
        .tradingview-widget-container {
          position: relative;
          width: 100%;
          max-width: 100%;
          height: 400px;
        }

        @media (max-width: 768px) {
          .tradingview-widget-container {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .tradingview-widget-container {
            height: 200px;
          }
        }

        .tradingview-widget-container__widget {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

export default memo(TradingViewWidget);
