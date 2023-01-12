import * as cut from "./pack-util";

describe("pack-util tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return proper asset breaker for zip", () => {
    const result = cut.assertAssetPackageBreak(
      ["build/\\*", "package.json", "package-lock.json", "etc/\\*"],
      "zip"
    );

    expect(result).toEqual([
      "build/\\*",
      "-i",
      "package.json",
      "-i",
      "package-lock.json",
      "-i",
      "etc/\\*",
    ]);
  });

  it("should return proper asset breaker for tar", () => {
    const result = cut.assertAssetPackageBreak(
      ["build/\\*", "package.json", "package-lock.json", "etc/\\*"],
      "tar"
    );

    expect(result).toEqual([
      "build/\\*",
      "package.json",
      "package-lock.json",
      "etc/\\*",
    ]);
  });
});
