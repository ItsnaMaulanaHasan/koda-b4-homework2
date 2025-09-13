import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

export const input = async (quest) => {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  let inputUser = parseInt(await rl.question(quest));
  rl.close();
  return inputUser;
};
