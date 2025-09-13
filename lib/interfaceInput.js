import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

export const input = async (quest, type = "number") => {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  let inputUser;
  if (type === "number") {
    inputUser = parseInt(await rl.question(quest));
  } else if (type === "text") {
    inputUser = (await rl.question(quest)).toLowerCase();
  } else {
    inputUser = await rl.question(quest);
  }
  rl.close();
  return inputUser;
};
