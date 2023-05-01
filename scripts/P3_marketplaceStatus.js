// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// eslint-disable-next-line
const hre = require("hardhat");

async function main() {
  const marketplace = await hre.ethers.getContractAt(
    "MarketplaceTracker",
    "0xdD1545bd495feFDD808A3D3e6a0CC7aFC8fc8100"
  );
  const rentSCs = await marketplace.listAllRelevantInfo();
  console.log("Marketplace rentSCs:", rentSCs);
  console.log("---");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
