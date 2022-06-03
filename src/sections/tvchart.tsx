import { Divider, Box, Center, Container, Flex, VStack, Heading, Text, Input, Button } from "@chakra-ui/react"

// Usefuls AdvancedChart,
// Forex Cross Rates Widget,
// Cryptocurrency Market Widget
const rawHTML = `
<div class="tradingview-widget-container">
  <div id="tradingview_dcdc5"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/ECONOMICS-USINTR/" rel="noopener" target="_blank"><span class="blue-text">USINTR Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "autosize": true,
  "symbol": "ECONOMICS:USINTR",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "range": "60M",
  "allow_symbol_change": true,
  "container_id": "tradingview_dcdc5"
}
  );
  </script>
</div>
`;

const rawHTML2 = `
<div class="tradingview-widget-container">
  <div id="tradingview_7fbd5"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/INDEX-DXY/" rel="noopener" target="_blank"><span class="blue-text">DXY Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "autosize": true,
  "symbol": "INDEX:DXY",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "range": "60M",
  "allow_symbol_change": true,
  "container_id": "tradingview_7fbd5"
}
  );
  </script>
</div>
`;

const rawHTML3 = `
<div class="tradingview-widget-container">
  <div id="tradingview_7fbd5"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/ECONOMICS-USIRYY/" rel="noopener" target="_blank"><span class="blue-text">DXY Chart</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
  <script type="text/javascript">
  new TradingView.widget(
  {
  "autosize": true,
  "symbol": "ECONOMICS:USIRYY",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "range": "60M",
  "allow_symbol_change": true,
  "container_id": "tradingview_7fbd5"
}
  );
  </script>
</div>
`;


export default function Appy() {
  return (
    <VStack
      p={10}
      spacing={5}
      alignItems="center"
      bg={'gray.400'}
    >

    <Center><Heading>USA Interest Rates 🤔</Heading></Center>
    <Center><Text>To fight inflation, rates are currently in the process of being raised.</Text></Center>
    <Center><div dangerouslySetInnerHTML={{ __html: rawHTML }}></div></Center>
    <Divider></Divider>

    <Center><Heading>Current Inflation Rate 😬</Heading></Center>
    <Center><Text>This shows dollar's current rate of inflation</Text></Center>
    <Center><div dangerouslySetInnerHTML={{ __html: rawHTML3 }}></div></Center>

    
    </VStack>
  );
}
