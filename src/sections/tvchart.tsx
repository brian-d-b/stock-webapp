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
    "hide_top_toolbar": true,
    "hide_legend": true,
    "range": "60M",
    "allow_symbol_change": true,
    "save_image": false,
    "container_id": "tradingview_d5c25"
}
  );
  </script>
</div>
`;

const rawHTML3 = `
<div class="tradingview-widget-container">
  <div id="tradingview_d5c25"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/ECONOMICS-USIRYY/" rel="noopener" target="_blank"><span class="blue-text">USIRYY Chart</span></a> by TradingView</div>
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
  "hide_top_toolbar": true,
  "hide_legend": true,
  "range": "60M",
  "allow_symbol_change": true,
  "save_image": false,
  "container_id": "tradingview_d5c25"
}
  );
  </script>
</div>
`;


export default function Appy() {
  return (
    
    <Box
      p={10}
      width='full'
      bg={'gray.400'}
      border='40px'
      borderRadius='40px'
    >


    <Center><Heading paddingY='10px'>USA Interest Rates 🤔</Heading></Center>
    <Center><Text paddingY='3px'>To fight inflation, rates are currently in the process of being raised.</Text></Center>
    <Box></Box>
    <div dangerouslySetInnerHTML={{ __html: rawHTML }} ></div>
    
    <Box paddingY='20px'></Box>

    <Center><Heading paddingY='10px'>Current Inflation Rate 😬</Heading></Center>
    <Center><Text paddingY='10px'>This shows dollar's current rate of inflation based on the Consumer Price Index.</Text></Center>
    <div dangerouslySetInnerHTML={{ __html: rawHTML3 }}></div>
      
    </Box>
  );
}
