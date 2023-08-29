import { ethers } from "ethers";
import { SimpleAccountAPI } from "./src/bundler/packages/sdk/src";
import { HttpRpcClient } from "./src/bundler/packages/sdk/src";

const MOCK_VALID_UNTIL = 0;
const MOCK_VALID_AFTER = 0;
const validatorAddress = "0xf66B65360f7A16fe45400f67Ce99EB18C5f14232";

const encodePaymasterData = () => {
  return ethers.utils.defaultAbiCoder.encode(
    ["uint48", "uint48"],
    [MOCK_VALID_UNTIL, MOCK_VALID_AFTER]
  );
};

async function main() {
  const mnemonic = "test ".repeat(11) + "junk";
  const pvtkey = ethers.Wallet.fromMnemonic(mnemonic).privateKey;
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:8545"
  );
  const wallet = new ethers.Wallet(pvtkey, provider);

  const walletAPI = new SimpleAccountAPI({
    provider,
    entryPointAddress: "0x7aD823A5cA21768a3D3041118Bc6e981B0e4D5ee",
    owner: wallet,
    factoryAddress: "0x3647fABd9F0a8CF5CCd9246Cd559BB2E40a8c43F",
  });

  

  
  const depositABI = [
      {
          inputs: [
              {
                  internalType: "contract IEntryPoint",
          name: "_entryPoint",
          type: "address",
        },
        {
          internalType: "address",
          name: "_verifyingSigner",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "uint32",
          name: "unstakeDelaySec",
          type: "uint32",
        },
      ],
      name: "addStake",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "entryPoint",
      outputs: [
        {
          internalType: "contract IEntryPoint",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getDeposit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "initCode",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
            {
              internalType: "uint256",
              name: "callGasLimit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "verificationGasLimit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "preVerificationGas",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxFeePerGas",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxPriorityFeePerGas",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "paymasterAndData",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "signature",
              type: "bytes",
            },
          ],
          internalType: "struct UserOperation",
          name: "userOp",
          type: "tuple",
        },
        {
          internalType: "uint48",
          name: "validUntil",
          type: "uint48",
        },
        {
          internalType: "uint48",
          name: "validAfter",
          type: "uint48",
        },
      ],
      name: "getHash",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "paymasterAndData",
          type: "bytes",
        },
      ],
      name: "parsePaymasterAndData",
      outputs: [
        {
          internalType: "uint48",
          name: "validUntil",
          type: "uint48",
        },
        {
          internalType: "uint48",
          name: "validAfter",
          type: "uint48",
        },
        {
          internalType: "bytes",
          name: "signature",
          type: "bytes",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "enum IPaymaster.PostOpMode",
          name: "mode",
          type: "uint8",
        },
        {
          internalType: "bytes",
          name: "context",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "actualGasCost",
          type: "uint256",
        },
      ],
      name: "postOp",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "unlockStake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "initCode",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "callData",
              type: "bytes",
            },
            {
              internalType: "uint256",
              name: "callGasLimit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "verificationGasLimit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "preVerificationGas",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxFeePerGas",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "maxPriorityFeePerGas",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "paymasterAndData",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "signature",
              type: "bytes",
            },
          ],
          internalType: "struct UserOperation",
          name: "userOp",
          type: "tuple",
        },
        {
          internalType: "bytes32",
          name: "userOpHash",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "maxCost",
          type: "uint256",
        },
      ],
      name: "validatePaymasterUserOp",
      outputs: [
        {
          internalType: "bytes",
          name: "context",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "validationData",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "verifyingSigner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "withdrawAddress",
          type: "address",
        },
      ],
      name: "withdrawStake",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "withdrawAddress",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "withdrawTo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const deposit = new ethers.Contract(validatorAddress, depositABI, wallet);

  console.log("Paymaster Balance before userOp: ", ethers.utils.formatEther((await deposit.getDeposit()).toString()));

  let op = await walletAPI.createUnsignedUserOp({
    target: "0x9B3147D677d5dCC45B939e061C656df361207ea1",
    data: "0x",
    value: 0,
  });

  let op1 = await walletAPI.createSignedUserOp({
    target: "0x9B3147D677d5dCC45B939e061C656df361207ea1",
    data: "0x",
    value: 0,
  });


  const client = new HttpRpcClient(
    "http://localhost:3000/rpc",
    "0x7aD823A5cA21768a3D3041118Bc6e981B0e4D5ee",
    31337
  );

  op.preVerificationGas = 1000000;
  op.paymasterAndData = ethers.utils.hexConcat([
    validatorAddress,
    encodePaymasterData(),
    "0x" + "00".repeat(65),
  ]);

  let signedOp = await walletAPI.signUserOp(op);

  const hash = await deposit.getHash(
    signedOp,
    ethers.BigNumber.from(MOCK_VALID_UNTIL),
    ethers.BigNumber.from(MOCK_VALID_AFTER)
  );

  const sig1 = await wallet.signMessage(ethers.utils.arrayify(hash));

  signedOp.paymasterAndData = ethers.utils.hexConcat([
    validatorAddress,
    encodePaymasterData(),
    sig1,
  ]);

  const finalUserOp = await walletAPI.signUserOp(signedOp);
  const res = await client.sendUserOpToBundler(finalUserOp);

  console.log("Transaction submitted");
  console.log(res);

  console.log("Paymaster Balance after userOp: ", ethers.utils.formatEther((await deposit.getDeposit()).toString()));
}

main();
