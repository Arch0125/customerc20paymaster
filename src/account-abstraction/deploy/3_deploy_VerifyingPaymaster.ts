import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'

const deployVerifyingPaymaster: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const provider = ethers.provider
    const from = await provider.getSigner().getAddress()
    const network = await provider.getNetwork()
    // only deploy on local test network.
    if (network.chainId !== 31337 && network.chainId !== 1337) {
        return
    }

    console.log('==VerifyingPaymaster from=', from)
    
    const entrypoint = await hre.deployments.get('EntryPoint')
    const simpleaccountfactory = await hre.deployments.get('SimpleAccountFactory')
    const ret = await hre.deployments.deploy(
        'VerifyingPaymaster', {
        from,
        args: [entrypoint.address, from],
        gasLimit: 6e6,
        log: true,
        deterministicDeployment: true
        })
    console.log('==VerifyingPaymaster addr=', ret.address)
}

export default deployVerifyingPaymaster