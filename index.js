import { input } from "./lib/interfaceInput.js";
import { cariMenu } from "./lib/menu.js";
import { lihatKeranjang } from "./lib/keranjang.js";
import { showHistory } from "./lib/history.js";
import { keluar } from "./lib/keluar.js";

export let namaUser = "";

const inputNama = async () => {
  process.stdout.write("\x1Bc");
  console.log("\n Selamat Datang di Aplikasi Pemesanan Mixue🤗\n");
  namaUser = await input(" Masukkan nama anda: ", "nama");
};

const menuUtama = async () => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    console.log(`\nHalo ${namaUser} silahkan pilih menu\n`);
    console.log("1. Cari Menu");
    console.log("2. Lihat Keranjang");
    console.log("3. Lihat History");
    console.log("4. Keluar\n");

    const inputMenu = await input("Masukkan nomor menu: ");

    switch (inputMenu) {
      case 1:
        await cariMenu();
        break;
      case 2:
        await lihatKeranjang();
        break;
      case 3:
        await showHistory();
        break;
      case 4:
        loop = await keluar(loop);
        break;
      default:
        await input("\n *Input tidak sesuai yang diharapkan*");
        break;
    }
  }
};

const main = async () => {
  await inputNama();
  await menuUtama();
};

main();
