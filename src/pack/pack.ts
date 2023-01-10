import { getInput } from "@actions/core";
import { exec } from "@actions/exec";

const packager = getInput("packager", {
  required: true,
});
const assets = getInput("assets", {
  required: true,
});

export const pack = async () => {
  if (packager === "zip") {
    await exec("zip", []);
  } else if (packager === "tar") {
    await exec("tar", []);
  } else {
    throw new Error(`[pack] No packager selected!`);
  }
};
