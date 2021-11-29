var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika tidak ada penumpang
  if (penumpang.length == 0) {
    // tambah penumpang di kursi pertama
    penumpang.push(namaPenumpang);
    return penumpang;
  }
  // telusuri seluruh kursi dari awal
  for (i = 0; i < penumpang.length; i++) {
    // jika ada kursi kosong ditengah tengah
    if (penumpang[i] == undefined) {
      // tambah penumpang di kursi tersebut
      penumpang[i] = namaPenumpang;
      return penumpang;
    }
    // jika sudah ada nama yang sama
    else if (penumpang[i] == namaPenumpang) {
      // tampilkan pesan kesalahan
      console.log(namaPenumpang + " sudah naik.");
      return penumpang;
    }
    // jika seluruh kursi depan sudah terisi
    else if (i == penumpang.length - 1) {
      // tambah penumpang di kursi terakhir
      penumpang.push(namaPenumpang);
      return penumpang;
    }
  }
};
var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika tidak ada penumpang
  if (penumpang == 0) {
    // tampilkan pesan bahwa angkot kosong
    console.log("Angkot Kosong \nTidak mungkin ada penumpang yang turun");
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (i = 0; i <= penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah namanya menjadi undefined
        penumpang[i] = undefined;
        return penumpang;
      }
      // jika tidak ada nama yang sesuai
      // penumpang[i] != namaPenumpang
      else if (i == penumpang.length - 1) {
        // tampilkan pesan kesalahan
        console.log("Maaf tidak ada penumpang yang bernama " + namaPenumpang);
        return penumpang;
      }
    }
  }
};
