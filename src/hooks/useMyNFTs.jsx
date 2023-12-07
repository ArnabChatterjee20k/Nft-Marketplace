import { Sepolia } from "@thirdweb-dev/chains";
import { useContract, useNFTs } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

import { useEffect, useState } from "react";
export default function useMyNFTs() {
  const { contract } = useContract(
    "0xfB226Cbd704Ae0B3E84a27aE407bf9Eda8396281"
  );
  const { data: nfts, isLoading: isNFTsLoading } = useNFTs(contract);
  return [nfts, isNFTsLoading];
}
