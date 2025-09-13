import moment from "moment";
import { input } from "./interfaceInput.js";

export const history = [];
let order = 1;

export const createInvoice = async (itemKeranjang) => {
  console.log(itemKeranjang);
  const date = moment(new Date());
  const dateCheckout = date.format("DD-MM-YYYY");
  const noInv = `INV-${date.format("DDMMYYYY")}-${Math.random().toString().substring(2, 7)}`;
  const total = itemKeranjang.reduce((a, b) => a + b.subTotal, 0);
  const nameBuyer = await input(" Masukkan nama anda: ", "text");
  const noOrder = ` MIXUE-${String(order).padStart(4, 0)}`;
  const results = {
    noInv,
    noOrder,
    nameBuyer,
    dateCheckout,
    checkout: itemKeranjang,
    total,
  };
  order++;
  return results;
};
