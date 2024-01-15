function hitung() {
  let nilai1 = document.getElementById("nilai1").value;
  let nilai2 = document.getElementById("nilai2").value;
  let action = document.getElementById("action").value;
  let hasil = 0;
  if (validasi(nilai1, nilai2, action) == 1) {
    if (action == "+") {
      hasil = Number(nilai1) + Number(nilai2);
    } else if (action == "-") {
      hasil = nilai1 - nilai2;
    } else if (action == "-") {
      hasil = nilai1 - nilai2;
    } else if (action == "/") {
      hasil = nilai1 / nilai2;
    } else if (action == "*") {
      hasil = nilai1 * nilai2;
    }
    document.getElementById("hasilkalkulator").style.display = "inline";
    document.getElementById("hasilkalkulator").innerHTML = "Hasil Perhitungan: "+nilai1+" "+action+" "+nilai2+" = "+hasil;
    clearform();
  }
}

function validasi(nilai1, nilai2, action) {
  if (nilai1 === "" || nilai1 === null) {
    alert("Nilai-1 harus diisi terlebih dahulu!!");
    return 0;
  } else if (nilai2 === "" || nilai2 === null) {
    alert("Nilai-2 harus diisi terlebih dahulu!!");
    return 0;
  } else if (action === "" || action === null) {
    alert("Silahkan action dipilih terlebih dahulu!!");
    return 0;
  } else {
    return 1;
  }
}

function clearform() {
  document.getElementById("nilai1").value = "";
  document.getElementById("nilai2").value = "";
  document.getElementById("action").value = "";
}

//cara lain menulis event handler (memberikan perintah aksi pada suatu element html: button, form)
document.getElementById("btnreset").onclick = function () {
  document.getElementById("hasilkalkulator").style.display = "none";
  clearform();
};

document.getElementById("nilai2").onchange = function () {
  let nilai1 = document.getElementById("nilai1").value;
  if (nilai1 === "" || nilai1 === null) {
    alert("Nilai-1 harus diisi terlebih dahulu!!");
  }
};
