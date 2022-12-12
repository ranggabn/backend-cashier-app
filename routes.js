"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);

  app.route("/getBarang").get(jsonku.getBarang);
  app.route("/getAllBarang").get(jsonku.getAllBarang);
  app.route("/getKategori").get(jsonku.getKategori);
  app.route("/getJasa").get(jsonku.getJasa);
  app.route("/getPenjualan").get(jsonku.getPenjualan);
  app.route("/getPembelian").get(jsonku.getPembelian);
  app.route("/getDetailJasa").get(jsonku.getDetailJasa);
  app.route("/getDetailPenjualan").get(jsonku.getDetailPenjualan);
  app.route("/getDetailPembelian").get(jsonku.getDetailPembelian);
  app.route("/getKeranjang").get(jsonku.getKeranjang);
  app.route("/getKeranjangBeli").get(jsonku.getKeranjangBeli);
  app.route("/getKeranjangJasa").get(jsonku.getKeranjangJasa);
  app.route("/getDetailKeranjang").get(jsonku.getDetailKeranjang);
  app.route("/getDetailKeranjangBeli").get(jsonku.getDetailKeranjangBeli);
  app.route("/getDetailKeranjangJasa").get(jsonku.getDetailKeranjangJasa);
  app.route("/getTotalHarga").get(jsonku.getTotalHarga);
  app.route("/getTotalHargaBeli").get(jsonku.getTotalHargaBeli);
  app.route("/getTotalHargaJasa").get(jsonku.getTotalHargaJasa);
  app.route("/getPelanggan").get(jsonku.getPelanggan);
  app.route("/getKeranjangByNomor").get(jsonku.getKeranjangByNomor);
  app.route("/getBarangById").get(jsonku.getBarangById);
  app.route("/getLaporanKeuangan").get(jsonku.getLaporanKeuangan);

  app.route("/postBarang").post(jsonku.postBarang);
  app.route("/postJasa").post(jsonku.postJasa);
  app.route("/postPenjualan").post(jsonku.postPenjualan);
  app.route("/postPembelian").post(jsonku.postPembelian);
  app.route("/postDetailPenjualan").post(jsonku.postDetailPenjualan);
  app.route("/postDetailPembelian").post(jsonku.postDetailPembelian);
  app.route("/postDetailJasa").post(jsonku.postDetailJasa);
  app.route("/postKeranjang").post(jsonku.postKeranjang);
  app.route("/postKeranjangJasa").post(jsonku.postKeranjangJasa);
  app.route("/postKeranjangMany").post(jsonku.postKeranjangMany);
  app.route("/postKeranjangBeli").post(jsonku.postKeranjangBeli);

  app.route("/putKeranjang").put(jsonku.putKeranjang);
  app.route("/putKeranjangBeli").put(jsonku.putKeranjangBeli);
  app.route("/putBarang").put(jsonku.putBarang);
  app.route("/putBarangMany").put(jsonku.putBarangMany);
  app.route("/returnBarang").put(jsonku.returnBarang);
  app.route("/putKeranjangJasa").put(jsonku.putKeranjangJasa);
  app.route("/putDetailKeranjang").put(jsonku.putDetailKeranjang);
  app.route("/putDetailKeranjangBeli").put(jsonku.putDetailKeranjangBeli);
  app.route("/putDetailKeranjangJasa").put(jsonku.putDetailKeranjangJasa);
  app.route("/putDataBarang").put(jsonku.putDataBarang);

  app.route("/deleteAllKeranjang").delete(jsonku.deleteAllKeranjang);
  app.route("/deleteAllKeranjangBeli").delete(jsonku.deleteAllKeranjangBeli);
  app.route("/deleteKeranjangJasa").delete(jsonku.deleteKeranjangJasa);
  app.route("/deleteKeranjang").delete(jsonku.deleteKeranjang);
  app.route("/deleteKeranjangBeli").delete(jsonku.deleteKeranjangBeli);
  app.route("/deleteBarang").delete(jsonku.deleteBarang);
};
