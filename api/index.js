import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
import { getHashedName, getNameAccountKey, NameRegistryState } from "@bonfida/spl-name-service";
const SOL_TLD_AUTHORITY = new PublicKey("58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx");
let connection = new Connection(clusterApiUrl("mainnet-beta"));
module.exports = async(req, res)  => {
    const query = req.query
    if (!query.n ) {
      return res.status(400).json({ data: 'Name not provided - please provide a name in the path' })
    }  
  }