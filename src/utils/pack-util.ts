export const assertAssetPackageBreak = (
  assetList: string[],
  breakType: "zip" | "tar" | string
) => {
  if (!assetList || assetList.length <= 0) {
    throw new Error(`[assertAssetPackageBreak] Missing asset list to assert!`);
  }

  const newAssetList: string[] = [];

  assetList.forEach((asset, index) => {
    newAssetList.push(asset);

    // if (index < assetList.length - 1) {
    //   if (breakType === "zip") {
    //     newAssetList.push("-i");
    //   }
    // }
  });

  return newAssetList;
};
