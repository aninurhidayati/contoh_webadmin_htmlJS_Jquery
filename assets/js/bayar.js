//ketika halaman diakses, tampilan bukti bayar di hide, 
//form kode otomatis terisi dari fungsi kodepembayaran
document.getElementById("formpembayaran").onload = function(){
    //proses yang dikerjakan ketika halaman di akses
    document.getElementById("buktibayar").style.display = "none";
    //memberikan isi dari kode pembayaran() ke form id kode
    document.getElementById("kode").value = kodepembayaran(); 

}
function kodepembayaran(){
    let kode = "PAY";
    let today = new Date();
    let bulan = today.getMonth()+1;
    let tahun = today.getFullYear();
    let nourut = "01";
    return kode+bulan+tahun+nourut;
}
//event onchange, äkan ada perubahan ketika kursor berpindah
//document.getElementById("nama").onchange = function(){

//event onkeyup, äkan ada perubahan ketika kursor berpindah
document.getElementById("nama").onkeyup = function(){
    //memberikan isi dari form id name ke variabel txt_nama
    let txt_nama = document.getElementById("nama").value; 
    //memberikan isi dari variabel txt_name ke form id nama
    document.getElementById("nama").value = txt_nama.toUpperCase();
}

document.getElementById("jenisbayar").onchange = function(){
    //memberikan isi dari combobox id jenisbayar ke variabel jenis
    let jenis = document.getElementById("jenisbayar").value;
    let nominal = 0;
    let jml = 0;
    if(jenis == "SMT"){
        nominal = 500000;
    }
    else if(jenis == "UAS"){
        nominal = 300000;
        jml = 1;
    }
    else if(jenis == "UTS"){
        nominal = 200000;
        jml = 1;
    }
    else{
        nominal = 150000;
    }
    //memberikan isi dari variabel nominal ke form id nominal
    document.getElementById("nominal").value = nominal;
    document.getElementById("jml").value = jml;
}

document.getElementById("Keterangan").onkeyup = function() {
    let txtket = document.getElementById("Keterangan").value;
    let jml_karakter = txtket.length;
    if (Number(jml_karakter) >= 30) {
      document.getElementById("note").style.display = "none";
      document.getElementById("btndaftar").disabled = false;
    } else {
      document.getElementById("note").style.display = "inline";
      document.getElementById("btndaftar").disabled = true;
    }
};

document.getElementById("btndaftar").addEventListener("click", function(){
    //proses dari event listener, ketika tombol di klik
    //deklarasi variabel untuk menampung input dari form
    let kode = document.getElementById("kode").value;
    let nama = document.getElementById("nama").value;
    let jurusan = document.getElementById("jurusan").value;
    let jenis = document.getElementById("jenisbayar").value;
    let nominal = document.getElementById("nominal").value;
    let jumlah = document.getElementById("jml").value;
    let ket = document.getElementById("jml").value;
    //cara mendapatkan value dari radio button
    let gender;
    if(document.getElementById("jk1").checked){
        gender = document.getElementById("jk1").value;
    }
    else if(document.getElementById("jk2").checked){
        gender = document.getElementById("jk2").value;
    }
    //validasi untuk pengecekkan apakah form sudah diinput semua
    if(kode == ""){
        alert("Kode belum diisi!!");
    }
    else if(nama == ""){
        alert("Nama belum diisi!!");
    }
    else if(jurusan == ""){
        alert("Jurusan belum dipilih!!");
    }
    else if(jenis == ""){
        alert("Jenis belum dipilih!!");
    }
    else if(jumlah == "" || jumlah < 1){
        alert("Jumlah belum diinput!!");
    }
    else if(ket == ""){
        alert("Keterangan belum diisi!!");
    }
    else if(gender == ""){
        alert("Jenis Kelamin belum dipilih!!");
    }
    else{
        //maka, jika semua form sudah diinput bukti bayar ditampilkan
        document.getElementById("buktibayar").style.display = "block";
        let total = nominal * jumlah;
        document.getElementById("kodebayar").innerHTML = kode;
    }



});
