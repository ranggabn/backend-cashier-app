"use strict";

var connection = require("./koneksi");

exports.index = function (req, res) {
  res.json({
    status: "00",
    message: "Aplikasi Berjalan",
  });
};

exports.getKategori = function (req, res) {
  connection.query(`SELECT * from kategori`, function (error, rows, field) {
    if (error) {
      console.log(error);
    } else {
      res.json({
        status: "00",
        message: "Success",
        data: rows,
      });
    }
  });
};

exports.getJasa = function (req, res) {
  connection.query(`SELECT * from jasa`, function (error, rows, field) {
    if (error) {
      console.log(error);
    } else {
      res.json({
        status: "00",
        message: "Success",
        data: rows,
      });
    }
  });
};

exports.getBarang = function (req, res) {
  var id_kategori = req.query.id_kategori;

  connection.query(
    `SELECT * from barang WHERE id_kategori LIKE ?`,
    ["%" + id_kategori + "%"],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getBarangById = function (req, res) {
  var id_barang = req.query.id_barang;

  connection.query(
    `SELECT * from barang WHERE id_barang = ?`,
    [id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows[0],
        });
      }
    }
  );
};

exports.getAllBarang = function (req, res) {
  connection.query(
    `SELECT b.*, k.nama as nama_kategori from barang as b LEFT JOIN kategori as k ON b.id_kategori = k.id_kategori`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getPenjualan = function (req, res) {
  connection.query(
    `SELECT * from penjualan as mp ORDER BY mp.id_penjualan DESC`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getPembelian = function (req, res) {
  connection.query(
    `SELECT * from pembelian ORDER BY insert_date DESC`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getDetailPenjualan = function (req, res) {
  var nomor_struk = req.query.nomor_struk;

  connection.query(
    `SELECT * 
    from detail_penjualan as dp
    LEFT JOIN barang as b on dp.id_barang = b.id_barang
    where dp.nomor_struk = ?`,
    [nomor_struk],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getDetailPembelian = function (req, res) {
  var nomor_struk = req.query.nomor_struk;

  connection.query(
    `SELECT * 
    from detail_pembelian as dp
    INNER JOIN barang as b ON dp.id_barang = b.id_barang
    where nomor_struk = ?`,
    [nomor_struk],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getKeranjang = function (req, res) {
  connection.query(
    `SELECT * from keranjang as k
    LEFT JOIN barang as b ON k.id_barang = b.id_barang`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getKeranjangBeli = function (req, res) {
  connection.query(
    `SELECT * from keranjang_pembelian as k
    LEFT JOIN barang as b ON k.id_barang = b.id_barang`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getKeranjangJasa = function (req, res) {
  connection.query(
    `SELECT * from keranjang_jasa as k
    LEFT JOIN jasa as j ON k.id_jasa = j.id_jasa`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getDetailKeranjang = function (req, res) {
  var id_barang = req.query.id_barang;

  connection.query(
    `SELECT * from keranjang as k
    LEFT JOIN barang as b ON k.id_barang = b.id_barang
    WHERE b.id_barang = ?`,
    [id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getDetailKeranjangBeli = function (req, res) {
  var id_barang = req.query.id_barang;

  connection.query(
    `SELECT * from keranjang_pembelian as k
    LEFT JOIN barang as b ON k.id_barang = b.id_barang
    WHERE id_barang = ?`,
    [id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getDetailKeranjangJasa = function (req, res) {
  var id_jasa = req.query.id_jasa;

  connection.query(
    `SELECT * from keranjang_jasa as k
    LEFT JOIN jasa as j ON k.id_jasa = j.id_jasa
    WHERE k.id_jasa = ?`,
    [id_jasa],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getDetailJasa = function (req, res) {
  connection.query(
    `SELECT dj.*, j.nama_jasa, j.harga_jasa, p.insert_date, j.nama_mesin, j.waktu 
    from detail_jasa as dj 
    LEFT JOIN jasa as j ON dj.id_jasa = j.id_jasa
    LEFT JOIN penjualan as p ON dj.nomor_struk = p.nomor_struk
    ORDER BY dj.nomor_struk DESC`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.postBarang = function (req, res) {
  var nama = req.body.nama;
  var harga = req.body.harga;
  var harga_supplier = req.body.harga_supplier;
  var satuan = req.body.satuan;
  var image = req.body.image;
  var stok = req.body.stok;
  var id_kategori = req.body.id_kategori;

  connection.query(
    `INSERT INTO barang (nama, harga, harga_supplier, satuan, image, stok, id_kategori) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [nama, harga, harga_supplier, satuan, image, stok, id_kategori],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.postJasa = function (req, res) {
  var nama_jasa = req.body.nama_jasa;
  var harga = req.body.harga;

  connection.query(
    `INSERT INTO jasa (nama_jasa, harga) VALUES (?, ?)`,
    [nama_jasa, harga],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.postPenjualan = function (req, res) {
  var nomor_struk = req.body.nomor_struk;
  var nama_pelanggan = req.body.nama_pelanggan;
  var nomor_telefon = req.body.nomor_telefon;
  var total_harga = req.body.total_harga;

  connection.query(
    `INSERT INTO penjualan (nomor_struk, nama_pelanggan, nomor_telefon, total_harga) VALUES (?, ?, ?, ?)`,
    [nomor_struk, nama_pelanggan, nomor_telefon, total_harga],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.postPembelian = function (req, res) {
  var nomor_struk = req.body.nomor_struk;
  var total_harga = req.body.total_harga;
  var nama_supplier = req.body.nama_supplier;

  connection.query(
    `INSERT INTO pembelian (nomor_struk, total_harga, nama_supplier) VALUES (?, ?, ?)`,
    [nomor_struk, total_harga, nama_supplier],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.postDetailPenjualan = function (req, res) {
  var values = [
    {
      nomor_struk: req.body.nomor_struk,
      id_barang: req.body.id_barang,
      jumlah_barang: req.body.jumlah_barang,
    },
  ];

  connection.query(
    `INSERT INTO detail_penjualan (nomor_struk, id_barang, jumlah_barang) VALUES ?`,
    [
      values.map((values) => [
        values.nomor_struk,
        values.id_barang,
        values.jumlah_barang,
      ]),
    ],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.postDetailPembelian = function (req, res) {
  var nomor_struk = req.body.nomor_struk;
  var id_barang = req.body.id_barang;
  var jumlah_barang = req.body.jumlah_barang;

  connection.query(
    `INSERT INTO detail_pembelian (nomor_struk, id_barang, jumlah_barang) VALUES (?, ?, ?)`,
    [nomor_struk, id_barang, jumlah_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.postDetailJasa = function (req, res) {
  var nomor_struk = req.body.nomor_struk;
  var id_jasa = req.body.id_jasa;
  var jumlah = req.body.jumlah;

  connection.query(
    `INSERT INTO detail_jasa (nomor_struk, id_jasa, jumlah) VALUES (?, ?, ?)`,
    [nomor_struk, id_jasa, jumlah],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.postKeranjang = function (req, res) {
  var id_barang = req.body.id_barang;

  connection.query(
    `INSERT INTO keranjang (id_barang, jumlah_barang) VALUES (?, ?)`,
    [id_barang, 1],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.postKeranjangBeli = function (req, res) {
  var id_barang = req.body.id_barang;

  connection.query(
    `INSERT INTO keranjang_pembelian (id_barang, jumlah_barang) VALUES (?, ?)`,
    [id_barang, 1],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.postKeranjangJasa = function (req, res) {
  var id_jasa = req.body.id_jasa;

  connection.query(
    `INSERT INTO keranjang_jasa (id_jasa, jumlah) VALUES (?, ?)`,
    [id_jasa, 1],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.putKeranjang = function (req, res) {
  var id_barang = req.body.id_barang;

  connection.query(
    `UPDATE keranjang set jumlah_barang = (jumlah_barang + 1) WHERE id_barang = ?`,
    [id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.putKeranjangBeli = function (req, res) {
  var id_barang = req.body.id_barang;

  connection.query(
    `UPDATE keranjang_pembelian set jumlah_barang = (jumlah_barang + 1) WHERE id_barang = ?`,
    [id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.putBarang = function (req, res) {
  var id_barang = req.body.id_barang;
  var jumlah_barang = req.body.jumlah_barang;

  connection.query(
    `UPDATE barang as b set stok = (stok - ?) WHERE b.id_barang = ?`,
    [jumlah_barang, id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.putBarangMany = function (req, res) {
  var values = [
    {
      id_barang: req.body.id_barang,
      jumlah_barang: req.body.jumlah_barang,
    },
  ];

  connection.query(
    `UPDATE barang as b set stok = (stok - ?) WHERE b.id_barang = ?`,
    [
      values.map((values) => [values.jumlah_barang]),
      values.map((values) => [values.id_barang]),
    ],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.returnBarang = function (req, res) {
  var values = [
    {
      id_barang: req.body.id_barang,
      jumlah_barang: req.body.jumlah_barang,
    },
  ];

  connection.query(
    `UPDATE barang as b set stok = (stok + ?) WHERE b.id_barang = ?`,
    [
      values.map((values) => [values.jumlah_barang]),
      values.map((values) => [values.id_barang]),
    ],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.putKeranjangJasa = function (req, res) {
  var id_jasa = req.body.id_jasa;

  connection.query(
    `UPDATE keranjang_jasa set jumlah = (jumlah + 1) WHERE id_jasa = ?`,
    [id_jasa],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.putDetailKeranjang = function (req, res) {
  var id_barang = parseInt(req.body.id_barang);
  var jumlah_barang = parseInt(req.body.jumlah_barang);

  connection.query(
    `UPDATE keranjang set jumlah_barang = ? WHERE keranjang.id_barang = ?`,
    [jumlah_barang, id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.putDetailKeranjangBeli = function (req, res) {
  var id_barang = parseInt(req.body.id_barang);
  var jumlah_barang = parseInt(req.body.jumlah_barang);

  connection.query(
    `UPDATE keranjang_pembelian as kp set jumlah_barang = ? WHERE kp.id_barang = ?`,
    [jumlah_barang, id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.putDetailKeranjangJasa = function (req, res) {
  var id_jasa = parseInt(req.body.id_jasa);
  var jumlah = parseInt(req.body.jumlah);

  connection.query(
    `UPDATE keranjang_jasa as kj set jumlah = ? WHERE kj.id_jasa = ?`,
    [jumlah, id_jasa],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.deleteAllKeranjang = function (req, res) {
  connection.query(`TRUNCATE keranjang;`, function (error, rows, field) {
    if (error) {
      console.log(error);
    } else {
      connection.query(
        `TRUNCATE keranjang_jasa;`,
        function (error, rows, field) {
          res.json({
            status: "00",
            message: "Success truncate data",
          });
        }
      );
    }
  });
};

exports.deleteAllKeranjangBeli = function (req, res) {
  connection.query(
    `TRUNCATE keranjang_pembelian;`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success truncate data",
        });
      }
    }
  );
};

exports.deleteKeranjangJasa = function (req, res) {
  var id_jasa = req.query.id_jasa;

  connection.query(
    `DELETE FROM keranjang_jasa WHERE id_jasa = ?;`,
    [id_jasa],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success truncate data",
        });
      }
    }
  );
};

exports.getTotalHarga = function (req, res) {
  connection.query(
    `SELECT (SUM(k.jumlah_barang * b.harga)) as total_harga FROM keranjang as k
    LEFT JOIN barang as b ON k.id_barang = b.id_barang`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getTotalHargaBeli = function (req, res) {
  connection.query(
    `SELECT (SUM(k.jumlah_barang * b.harga_supplier)) as total_harga FROM keranjang_pembelian as k
    LEFT JOIN barang as b ON k.id_barang = b.id_barang`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getTotalHargaJasa = function (req, res) {
  connection.query(
    `SELECT (SUM(k.jumlah * j.harga_jasa)) as total_harga FROM keranjang_jasa as k
    LEFT JOIN jasa as j ON k.id_jasa = j.id_jasa`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getPelanggan = function (req, res) {
  connection.query(
    `SELECT nama_pelanggan, nomor_telefon, MAX(nomor_struk) from penjualan WHERE nama_pelanggan is not null AND nama_pelanggan != '' GROUP BY nama_pelanggan, nomor_telefon;`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.getKeranjangByNomor = function (req, res) {
  var nomor_telefon = req.query.nomor_telefon;

  connection.query(
    `SELECT * from penjualan as mp 
    LEFT JOIN detail_penjualan as dp ON mp.nomor_struk = dp.nomor_struk
    LEFT JOIN barang as b ON dp.id_barang = b.id_barang
    WHERE nama_pelanggan is not null AND nama_pelanggan != '' AND nomor_telefon = ?
    GROUP BY b.id_barang
    ORDER BY mp.id_penjualan DESC;`,
    [nomor_telefon],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success",
          data: rows,
        });
      }
    }
  );
};

exports.postKeranjangMany = function (req, res) {
  var values = [
    {
      id_barang: req.body.id_barang,
      jumlah_barang: req.body.jumlah_barang,
    },
  ];

  connection.query(
    `INSERT INTO keranjang (id_barang, jumlah_barang) VALUES ?`,
    [values.map((values) => [values.id_barang, values.jumlah_barang])],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success insert data",
        });
      }
    }
  );
};

exports.deleteKeranjang = function (req, res) {
  var id_barang = req.query.id_barang;

  connection.query(
    `DELETE from keranjang WHERE id_barang = ?;`,
    [id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success delete data",
        });
      }
    }
  );
};

exports.deleteKeranjangBeli = function (req, res) {
  var id_barang = req.query.id_barang;

  connection.query(
    `DELETE from keranjang_pembelian WHERE id_barang = ?;`,
    [id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success delete data",
        });
      }
    }
  );
};

exports.deleteBarang = function (req, res) {
  var id_barang = req.query.id_barang;

  connection.query(
    `DELETE from barang WHERE barang.id_barang = ?;`,
    [id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success delete data",
        });
      }
    }
  );
};

exports.putDataBarang = function (req, res) {
  var nama = req.body.nama;
  var harga = req.body.harga;
  var harga_supplier = req.body.harga_supplier;
  var satuan = req.body.satuan;
  var image = req.body.image;
  var stok = req.body.stok;
  var id_kategori = req.body.id_kategori;
  var id_barang = req.body.id_barang;

  connection.query(
    `UPDATE barang SET nama=?, harga=?, harga_supplier=?, satuan=?, image=?, stok=?, id_kategori=? WHERE barang.id_barang=?`,
    [nama, harga, harga_supplier, satuan, image, stok, id_kategori, id_barang],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success update data",
        });
      }
    }
  );
};

exports.getLaporanKeuangan = function (req, res) {
  connection.query(
    `SELECT DATE_FORMAT(mp.insert_date, '%Y-%m-%d') as insert_date,
    COALESCE(SUM(dp.jumlah_barang * b.harga), 0) as penjualan,
    COALESCE(SUM(dj.jumlah * j.harga_jasa), 0) as jasa_giling,
    COALESCE(SUM(dp.jumlah_barang * b.harga_supplier), 0) as pengeluaran,
    SUM(COALESCE((dj.jumlah * j.harga_jasa), 0) + COALESCE((dp.jumlah_barang * b.harga), 0) - COALESCE((dp.jumlah_barang * b.harga_supplier), 0)) as keuntungan
    FROM penjualan as mp
    LEFT JOIN detail_penjualan as dp ON mp.nomor_struk = dp.nomor_struk
    LEFT JOIN detail_jasa as dj ON mp.nomor_struk = dj.nomor_struk
    LEFT JOIN barang as b ON dp.id_barang = b.id_barang
    LEFT JOIN jasa as j ON dj.id_jasa = j.id_jasa
    GROUP BY DATE_FORMAT(mp.insert_date, '%Y-%m-%d')`,
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        res.json({
          status: "00",
          message: "Success get data.",
          data: rows,
        });
      }
    }
  );
};
