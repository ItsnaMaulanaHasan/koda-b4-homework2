import { input } from "./interfaceInput.js";
import { keranjang } from "./keranjang.js";
import { history } from "./history.js";
import { namaUser } from "../index.js";

export const keluar = async (exit) => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    if (keranjang.length !== 0) {
      const confirmExit = await input(`\n Masih ada item di keranjang, apakah ${namaUser} ingin membatalkannya (y/n)? `, "text");
      if (confirmExit === "y") {
        exit = false;
        loop = false;
        process.stdout.write("\x1Bc");
        console.log(`\n Terima Kasih ${namaUser}☺️\n`);
        continue;
      } else if (confirmExit === "n") {
        loop = false;
        continue;
      } else {
        await input(" ⚠️ Input tidak sesuai yang diharapkan, harap ulangi lagi ");
        continue;
      }
    } else if (history.length !== 0) {
      const confirmInput = await input(`\n ${namaUser} yakin ingin keluar (y/n)? `, "text");
      if (confirmInput === "y") {
        exit = false;
        loop = false;
        process.stdout.write("\x1Bc");
        console.log(`\n Selamat Menikmati ${namaUser}☺️\n`);
        continue;
      } else if (confirmInput === "n") {
        loop = false;
        continue;
      } else {
        await input(" ⚠️ Input tidak sesuai yang diharapkan, harap ulangi lagi ");
        continue;
      }
    } else {
      const inputConfirm = await input(`\n Yakin mau keluar, ga mesen dulu nih ${namaUser} (y/n)? `, "text");
      if (inputConfirm === "y") {
        exit = false;
        loop = false;
        process.stdout.write("\x1Bc");
        console.log(`\n Terima Kasih ${namaUser}☺️\n`);
        continue;
      } else if (inputConfirm === "n") {
        loop = false;
        continue;
      } else {
        await input(" ⚠️ Input tidak sesuai yang diharapkan, harap ulangi lagi ");
        continue;
      }
    }
  }
  return exit;
};
