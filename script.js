// function untuk pengelolaan bus baru
function Bus(sopir, penumpang, tujuan, tarif) {
  this.sopir = sopir;
  this.penumpang = penumpang;
  this.tujuan = tujuan;
  this.tarif = tarif;

  // Fitur Tambah Penumpang
  this.tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika tidak ada penumpang
    if (this.penumpang.length == 0) {
      // tambah penumpang di kursi pertama
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    }
    // telusuri seluruh kursi dari awal
    for (i = 0; i < this.penumpang.length; i++) {
      // jika ada kursi kosong ditengah tengah
      if (this.penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        this.penumpang[i] = this.namaPenumpang;
        return this.penumpang;
      }
      // jika sudah ada nama yang sama
      else if (this.penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahan
        console.log(namaPenumpang + " sudah naik.");
        return this.penumpang;
      }
      // jika seluruh kursi depan sudah terisi
      else if (i == this.penumpang.length - 1) {
        // tambah penumpang di kursi terakhir
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
      }
      // Pembatasan jumlah penumpang setiap bus 40 orang
      else if (this.penumpang.length >= 40) {
        console.log("Maaf " + namaPenumpang + " bus sudah tidak ada lagi kursi kosong");
        return this.penumpang;
      }
    }
  };
}
var bus1 = new Bus(["Anang", "Bambang"], [], ["Pati", "Semarang"], 0);
var bus2 = new Bus(["Kakang", "Mandra"], [], ["Semarang", "Surabaya"], 0);
var bus3 = new Bus(["Jefri", "Maman"], [], ["Jakarta", "Malang"], 0);
var bus4 = new Bus(["Putu", "Deden"], [], ["Jepara", "Rembang"], 0);

// var hapusPenumpang = function (namaPenumpang, penumpang) {
//   // jika tidak ada penumpang
//   if (penumpang == 0) {
//     // tampilkan pesan bahwa angkot kosong
//     console.log("Angkot Kosong \nTidak mungkin ada penumpang yang turun");
//     return penumpang;
//   } else {
//     // telusuri seluruh kursi dari awal
//     for (i = 0; i <= penumpang.length; i++) {
//       // jika nama penumpang sesuai
//       if (penumpang[i] == namaPenumpang) {
//         // hapus penumpang dengan mengubah namanya menjadi undefined
//         penumpang[i] = undefined;
//         return penumpang;
//       }
//       // jika tidak ada nama yang sesuai
//       // penumpang[i] != namaPenumpang
//       else if (i == penumpang.length - 1) {
//         // tampilkan pesan kesalahan
//         console.log("Maaf tidak ada penumpang yang bernama " + namaPenumpang);
//         return penumpang;
//       }
//     }
//   }
// };
