import { useContract, useDirectListings } from "@thirdweb-dev/react";

export default function useMyListings() {
  const {contract} = useContract("0x5596e9D5382d5FB35754948795f9666bf60F8345");
  const { data: listings, isLoading: isListingsLoading } =
    useDirectListings(contract);
  return [listings, isListingsLoading];
}
