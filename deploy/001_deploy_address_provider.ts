import { DeployFunction } from "hardhat-deploy/types";

const deployAddressProvider: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
}) {
  // await hre.run('compile');
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const addressProvider = await deploy("AddressProvider", {
    from: deployer,
    args: [deployer],
    log: true,
  });
};

export default deployAddressProvider;
deployAddressProvider.id = "deploy_provider";
deployAddressProvider.tags = ["Provider"];
