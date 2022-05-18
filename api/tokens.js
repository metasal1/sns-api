import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req: any, res: { statusCode: number; setHeader: (arg0: string, arg1: string) => void; end: (arg0: string) => void; write: (arg0: any) => void }) => {

  new TokenListProvider().resolve().then((tokens) => {
    const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();

    const tokensRev = tokenList.reverse();
    var total = tokenList.length;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body>')
    res.write(`<i>There are currently ${total} tokens on the Solana chain</i><br/>`)
    tokensRev.forEach(el => res.write(`<img width=25 height=25 src='${el.logoURI}'/> ${el.symbol} | ${el.name} | ${el.address}</br> `))
    res.end('</body></html>');
  
  });
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
