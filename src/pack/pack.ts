import { getInput } from "@actions/core";
import { exec } from "@actions/exec";
import { assertAssetPackageBreak } from "./../utils/pack-util";

const packager = getInput("packager", {
  required: true,
});
const assets = getInput("assets", {
  required: true,
});

export const pack = async () => {
  if (!assets) {
    throw new Error(`[pack] No assets found to package!`);
  }

  const assetList = assets.split(",");

  if (!packager) {
    throw new Error(`[pack] No packager selected!`);
  }

  const args = assertAssetPackageBreak(assetList, packager);

  await exec(packager, args);
};
