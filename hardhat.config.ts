import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hh-acc-abs-toolkit";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat:{

    },
    localhost: {
      url: "http://127.0.0.1:8545",
    }
  }
};

export default config;
