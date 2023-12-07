import { useEffect, useState } from "react";
import client from "../sanityClient";
export default function useCollections(contractAddress) {
  const [collections, setCollections] = useState({});
  async function fetchCollections() {
    const query = `*[_type == "marketItems" && contractAddress == "${contractAddress}" ] {
          "imageUrl": profileImage.asset->url,
          "bannerImageUrl": bannerImage.asset->url,
          volumeTraded,
          createdBy,
          contractAddress,
          "creator": createdBy->userName,
          title, floorPrice,
          "allOwners": owners[]->,
          description
        }`;
    const data = await client.fetch(query);
    setCollections(data);
  }

  useEffect(() => {
    fetchCollections();
  }, [contractAddress]);

  return collections;
}
