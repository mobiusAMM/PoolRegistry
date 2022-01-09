import { DeployFunction } from "hardhat-deploy/types";

const deployAddressProvider: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
}) {
  // await hre.run('compile');
  const { deployer } = await getNamedAccounts();
  const { deploy, get } = deployments;
  const addressProviderDeployment = await get("AddressProvider");
  const gaugeControllerAddress = "0x7530E03056D3a8eD0323e61091ea2f17a1aC5C25";
  const addressProviderAddress = addressProviderDeployment.address;

  await deploy("Registry", {
    from: deployer,
    args: [addressProviderAddress, gaugeControllerAddress],
    log: true,
  });
};

export default deployAddressProvider;
deployAddressProvider.id = "deploy_registry";
deployAddressProvider.tags = ["Registry"];
