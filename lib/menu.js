import { input } from "./interfaceInput.js";
import { keranjang } from "./keranjang.js";

const daftarMenu = [
  {
    nama: "Mixue Ice Cream",
    harga: 8000,
  },
  {
    nama: "BOBA Sundae",
    harga: 16000,
  },
  {
    nama: "Strawberry Mi-Shake",
    harga: 16000,
  },
  {
    nama: "BOBA Mi-Shake",
    harga: 16000,
  },
  {
    nama: "Chocolate Cookies Smoothies",
    harga: 16000,
  },
  {
    nama: "Brown Sugar Pearl Milk Tea",
    harga: 19000,
  },
  {
    nama: "Pearl Milk Tea",
    harga: 22000,
  },
  {
    nama: "Oats Milk Tea",
    harga: 22000,
  },
  {
    nama: "Coconut Jelly Milk Tea",
    harga: 22000,
  },
  {
    nama: "Red Bean Milk Tea",
    harga: 22000,
  },
  {
    nama: "Fresh Squeezed Lemonade",
    harga: 10000,
  },
  {
    nama: "Peach Earl Grey Tea",
    harga: 16000,
  },
  {
    nama: "Original Jasmine Tea",
    harga: 10000,
  },
  {
    nama: "Original Earl Grey Tea",
    harga: 10000,
  },
];

export const formatHarga = (harga) => {
  return `Rp${Number(harga).toLocaleString("id")},-`;
};

export const cariMenu = async () => {
  let loop = true;
  while (loop) {
    process.stdout.write("\x1Bc");
    console.log(" --- Daftar Menu MIXUE --- \n");
    daftarMenu.forEach((menu, index) => {
      console.log(` ${index + 1}. ${menu.nama}, Harga: ${formatHarga(menu.harga)}`);
    });
    console.log(" \n\n\n 99. Kembali ke menu utama");
    console.log(" -------------------------\n");

    let inputMenu = await input(` Masukkan no menu yang dipilih (1-${daftarMenu.length}): `);
    inputMenu -= 1;
    if (inputMenu === 98) {
      loop = false;
      continue;
    } else if (inputMenu >= 0 && inputMenu <= daftarMenu.length - 1) {
      const inputQty = await input(" Masukkan jumlah pesanan: ");
      if (inputQty > 0) {
        let dataMenuDipilih = {
          ...daftarMenu[inputMenu],
          ...{
            qty: inputQty,
          },
          ...{
            subTotal: daftarMenu[inputMenu].harga * inputQty,
          },
        };
        let sameItem = keranjang.findIndex((item) => item.nama === dataMenuDipilih.nama);
        if (sameItem >= 0) {
          await input(`\n ✅ Pesanan ${dataMenuDipilih.nama} berhasil diperbarui dengan jumlah pesanan ${dataMenuDipilih.qty} `);
          keranjang[sameItem] = dataMenuDipilih;
          console.log(keranjang);
        } else {
          keranjang.push(dataMenuDipilih);
          await input(`\n ✅ ${dataMenuDipilih.nama} sejumlah ${dataMenuDipilih.qty} berhasil ditambahkan ke keranjang🛒 `);
          console.log(keranjang);
        }
      } else if (inputQty === 0) {
        await input("\n ⚠️ Input tidak boleh 0, silahkan ulangi memilih menu lagi ");
      } else {
        await input("\n ⚠️ Input tidak sesuai yang diharapkan, silahkan ulangi memilih menu lagi ");
      }
    } else {
      await input("\n ⚠️ Input melebihi dari batas no menu, silahkan ulangi memilih menu lagi ");
    }
  }
};
