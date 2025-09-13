import { input } from "./lib/interfaceInput.js";
import { cariMenu } from "./lib/menu.js";

const menuUtama = async () => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    console.log("\nSelamat Datang di Aplikasi Pemesanan Mixue\n");
    console.log("1. Cari Menu");
    console.log("2. Lihat Keranjang");
    console.log("3. Lihat History");
    console.log("4. EXIT\n");

    const inputMenu = await input("Masukkan Input: ");

    switch (inputMenu) {
      case 1:
        await cariMenu();
        break;
      case 2:
        console.log("keranjang");
        break;
      case 3:
        console.log("history");
        break;
      case 4:
        console.log("keluar");
        loop = false;
        break;
      default:
        await input("\n *Input tidak sesuai yang diharapkan*");
        break;
    }
  }
};

menuUtama();
