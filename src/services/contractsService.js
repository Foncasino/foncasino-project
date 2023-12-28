import { ethers } from "ethers";
import CasinoAbi from "../backend/contractsData/Casino.json";
import CasinoAddress from "../backend/contractsData/Casino-address.json";

// old - "address": "0x66691c42ff0d5dd87125fd594927Dd31C208c77d"
// new - tblx 0x514F94ce1fF6AE27C664136A87444513A0034388
// new - PLQ 0xDB0180d817bCa5e7e7DF35462e461e5f65601822
// new - HMND 0x38b5F53b881206B20B7062C3d3964ECE2dAd6725
// new - FON 0xA7c1c888Fcd00C7Cd3D8EC430cA2a96CE3aaCAf6

let casino = null;

const loadContracts = async (signer) => {
  casino = new ethers.Contract(CasinoAddress.address, CasinoAbi.abi, signer);
};

const tokenBalance = async (acc) => {
  const balance = await casino.tokenBalance(acc);
  return parseInt(balance._hex);
};

const buyTokens = async (tokenNum, price) => {
  await (
    await casino.compraTokens(tokenNum, {
      value: ethers.utils.parseEther(price.toString()),
    })
  ).wait();
};

const withdrawTokens = async (tokenNum) => {
  await (await casino.devolverTokens(tokenNum)).wait();
};

const playRoulette = async (start, end, tokensBet) => {
  const game = await (
    await casino.jugarRuleta(
      start.toString(),
      end.toString(),
      tokensBet.toString(),
      {
        gasLimit: 100000, // Set the gas limit here
      }
    )
  ).wait();
  let result;
  try {
    result = {
      numberWon: parseInt(game.events[1].args[0]._hex),
      result: game.events[1].args[1],
      tokensEarned: parseInt(game.events[1].args[2]._hex),
    };
  } catch (error) {
    result = {
      numberWon: parseInt(game.events[2].args[0]._hex),
      result: game.events[2].args[1],
      tokensEarned: parseInt(game.events[2].args[2]._hex),
    };
  }
  return result;
};

const tokenPrice = async () => {
  const price = await casino.precioTokens(1);
  return ethers.utils.formatEther(price._hex);
};

const historial = async (account) => {
  const historial = await casino.tuHistorial(account);
  let historialParsed = [];
  historial.map((game) =>
    historialParsed.push([game[2], parseInt(game[0]), parseInt(game[1])])
  );
  return historialParsed;
};

export default {
  loadContracts,
  tokenBalance,
  buyTokens,
  tokenPrice,
  historial,
  playRoulette,
  withdrawTokens,
};
