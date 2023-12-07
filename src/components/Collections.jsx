import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useMyNFTs from "../hooks/useMyNFTs";
import useMyListings from "../hooks/useMyListings";
import useCollections from "../hooks/useCollections";

export default function Collections() {
  const { id } = useParams();
  const [listings, isListingsLoading] = useMyListings()
  const [nfts, isNFTsLoading] = useMyNFTs();
  const collections = useCollections(id);
  return <div>{id}</div>;
}
