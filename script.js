var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika tidak ada penumpang
  if (penumpang.length == 0) {
    // tambah penumpang di awal
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  }
  // telusuri seluruh kursi dari awal
  for (i = 0; i < penumpang.length; i++) {
    // jika ada kursi kosong ditengah tengah
    if (penumpang[i] == undefined) {
      // tambah penumpang di kursi tersebut
      penumpang[i] = namaPenumpang;
      // kembalikan isi array & keluar dari function
      return penumpang;
    }
    // jika sudah ada nama yang sama
    else if (penumpang[i] == namaPenumpang) {
      // tampilkan pesan kesalahan
      console.log(namaPenumpang + " sudah naik.");
      // kembalikan isi array & keluar dari function
      return penumpang;
    }
    // jika seluruh kursi terisi
    else if (i == penumpang.length - 1) {
      // tambah penumpang di akhir array
      penumpang.push(namaPenumpang);
      // kembalikan isi array & keluar dari function
      return penumpang;
    }
  }
};
var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika tidak ada penumpang
  if (penumpang == 0) {
    // tampilkan pesan bahwa angkot kosong
    console.log("Angkot Kosong \nTidak mungkin ada penumpang yang turun");
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (i = 0; i <= penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah namanya menjadi undefined
        penumpang[i] = undefined;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika tidak ada nama yang sesuai
      // penumpang[i] != namaPenumpang
      else if (i == penumpang.length - 1) {
        // tampilkan pesan kesalahan
        console.log("Maaf tidak ada penumpang yang bernama " + namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};
