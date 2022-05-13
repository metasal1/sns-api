import { Connection, clusterApiUrl } from "@solana/web3.js";
import {
  getTwitterRegistry,
} from "@bonfida/spl-name-service";

let connection = new Connection(clusterApiUrl("mainnet-beta"));
module.exports = async (req, res) => {
  const handle = req.query.handle;
  console.log(handle);
  try {
    const data = await getTwitterRegistry(connection, handle);
    console.log("pubkey", data);
    let owner = data.owner;
    res.status(200).json({ handle: handle, owner });
  } catch (error) {
    console.log("error", error);
    res.status(404).json({ error: error });
  }
};
