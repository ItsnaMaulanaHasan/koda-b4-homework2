import { input } from "./interfaceInput.js";
import { history, createInvoice } from "./history.js";
import { formatHarga } from "./menu.js";

export let keranjang = [];

const daftarKeranjang = () => {
  process.stdout.write("\x1Bc");
  console.log(" --- Daftar Keranjang --- \n");
  if (keranjang.length === 0) {
    console.log("\n ☹️ Keranjang masih kosong \n");
  } else {
    let totalAll = 0;
    keranjang.forEach((item, index) => {
      console.log(` ${index + 1}. ${item.nama}`);
      console.log(`    Harga: ${formatHarga(item.harga)}`);
      console.log(`    Jumlah: ${item.qty}`);
      console.log(`    Subtotal: ${formatHarga(item.subTotal)}`);
      totalAll += item.subTotal;
    });
    console.log(` \n\n Total Pesanan: ${formatHarga(totalAll)}`);
  }
};

const hapusPesanan = async () => {
  let loop = true;
  while (loop) {
    daftarKeranjang();
    console.log("\n 99. Kembali");
    console.log(" -------------------------\n");
    let indexkeranjang = await input(" Pilih nomor pesanan yang ingin dihapus: ");
    indexkeranjang -= 1;
    if (indexkeranjang === 98) {
      loop = false;
      continue;
    } else if (indexkeranjang >= 0 && indexkeranjang <= keranjang.length - 1) {
      const item = keranjang[indexkeranjang];
      const confirm = await input(` Yakin ingin menghapus pesanan ${item.nama} (y/n)? `, "text");
      if (confirm === "y") {
        keranjang.splice(indexkeranjang, 1);
        await input(` ✅ ${item.nama} berhasil dihapus! `);
      } else if (confirm !== "n") {
        await input("\n ⚠️ Input tidak sesuai yang diharapkan, silahkan ulangi lagi ");
      }
    } else {
      await input("\n ⚠️ Input tidak sesuai yang diharapkan, silahkan ulangi lagi ");
    }
  }
};

const checkout = async () => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    const inputCheckout = await input(" Ingin melakukan checkout semua pesanan (y/n)? ", "text");
    if (inputCheckout === "y") {
      history.push(await createInvoice(keranjang));
      keranjang = [];
      await input(" ✅ Keranjang berhasil di checkout, invoice bisa dilihat di history");
      loop = false;
      continue;
    } else if (inputCheckout === "n") {
      loop = false;
      continue;
    } else {
      await input("\n ⚠️ Input tidak sesuai yang diharapkan, silahkan ulangi lagi ");
    }
  }
};

export const lihatKeranjang = async () => {
  let loop = true;
  while (loop) {
    daftarKeranjang();
    console.log("\n -------------------------\n\n");
    if (keranjang.length === 0) {
      await input(" Kembali ");
      loop = false;
      continue;
    } else {
      console.log(" --- Menu Keranjang --- ");
      console.log(" 1. Hapus Pesanan");
      console.log(" 2. Checkout");
      console.log(" 3. Kembali");
      const inputMenu = await input(" Pilih menu keranjang: ");

      switch (inputMenu) {
        case 1:
          await hapusPesanan();
          break;
        case 2:
          await checkout();
          break;
        case 3:
          loop = false;
          break;
        default:
          await input("\n ⚠️ Input tidak sesuai yang diharapkan, silahkan ulangi memilih menu lagi ");
          break;
      }
    }
  }
};
