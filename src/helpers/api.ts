import axios from "axios";
import useSWR from "swr";
import { ISwrDataDetails } from "../types";

const instance = axios.create({
  baseURL: "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas",
});

export const getAssetDetails = (assetId?: string): ISwrDataDetails => {
  const axiosFetcher = (url: string) =>
    instance.get(url).then((res) => {
      console.log(res.data);
  
      return res.data
    });

  return useSWR(`/get_asset_details/ETH_Convex_steth`, axiosFetcher);
};

export default instance;
