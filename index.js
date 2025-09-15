import { menuUtama, inputNama } from "./lib/menuUtama.js";

const main = async () => {
  await inputNama();
  await menuUtama();
};

main();
