import moment from "moment";
import { input } from "./interfaceInput.js";
import { namaUser } from "../index.js";
import { formatHarga } from "./menu.js";

export const history = [];
let order = 1;

export const createInvoice = async (itemKeranjang) => {
  const date = moment(new Date());
  const dateCheckout = date.format("DD-MM-YYYY");
  const noInv = `INV-${date.format("DDMMYYYY")}-${Math.random().toString().substring(2, 7)}`;
  const total = itemKeranjang.reduce((a, b) => a + b.subTotal, 0);
  const noOrder = ` MIXUE-${String(order).padStart(4, 0)}`;
  const results = {
    noInv,
    noOrder,
    nameBuyer: namaUser,
    dateCheckout,
    checkout: itemKeranjang,
    total,
  };
  order++;
  return results;
};

export const showHistory = async () => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    console.log(" --- Daftar History Belanja --- \n");
    if (history.length === 0) {
      console.log("\n ☹️ History belanja masih kosong \n");
    } else {
      history.forEach((item) => {
        console.log("----- INVOICE BELANJA -----");
        console.log(` NO. INVOICE: ${item.noInv}`);
        console.log(` NO. ORDER: ${item.noOrder}`);
        console.log(` NAMA PEMBELI: ${item.nameBuyer}`);
        console.log(` TANGGAL: ${item.dateCheckout} `);
        item.checkout.forEach((menu, index) => {
          console.log(` ${index + 1}. ${menu.nama}`);
          console.log(`    Harga: ${formatHarga(menu.harga)}`);
          console.log(`    Jumlah: ${menu.qty}`);
          console.log(`    Subtotal: ${formatHarga(menu.subTotal)}`);
        });
        console.log(` \n\nTotal: ${formatHarga(item.total)}\n`);
        console.log("------ TERIMA KASIH☺️  ------\n\n");
      });
    }
    await input("\n\nKembali ke menu utama");
    loop = false;
    continue;
  }
};
