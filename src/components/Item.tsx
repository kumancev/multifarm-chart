import { useParams } from "react-router-dom";
import { getAssetDetails } from "../helpers/api";
import { Chart } from "./Chart";
import { Title } from "./Title";
import { ToggleDate } from "./ToggleDate";
import axios from "axios";
import { useEffect, useState } from "react";


const baseURL = "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/ETH_Convex_steth";

export function Item(): JSX.Element {
  const { assetId } = useParams();
  const { data, error } = getAssetDetails(assetId);
  const [farm, setFarm] = useState();
  const [asset, setAsset] = useState();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data;

      setFarm(data.farm);
      setAsset(data.asset);
    })
  }, [])


  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const props = [...data.tvlStakedHistory].reverse();

  return (
    <>
      <Title farm={farm!} asset={asset!} />
      <div className=" bg-gradient-to-r from-[#303659] to-[#292E4D] my-4 ml-2 pr-5 pb-6 rounded-lg">
        <div className="flex justify-between">
          <h2 className="ml-5 mb-5 pt-8 text-lg font-medium">Asset TVL</h2>
          <ToggleDate />
        </div>
        <Chart data={props} />
      </div>
    </>
  );
};

