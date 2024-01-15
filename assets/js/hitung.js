//ref -> https://releases.jquery.com/

//1) ketika kode barang diinput, maka otomatis akan menampilkan nama barang dan harga
$("#kode").on("change", function () {
    //mendapatkan value dari form kode barang dan disimpan ke variabel txtkode
    //memberikan value ke variabel txtkode dari form kode barang
    let txtkode = $("#kode").val();
    //mendeklarasikan variabel untuk menampung nama dan harga
    let nama_brg, harga_brg;
    //logikal untuk menampilkan nama barang dan harga berdasarkan kode
    if(txtkode == "BG01") {
        nama_brg = "laptop";
        harga_brg = 3000000;
    }
    //menampilkan(memberikan) value dari variabel nama_brg, harga_brg ke dalama form nama dan harga
    $("#nama").val(nama_brg);
    $("#harga").val(harga_brg);

 });
 //ketika jumlah beli selesai diinput, maka tombol hitung aktif 
 $("#jumlah").on("change", function(){
    //untuk merubah atau menambahkan attribut pada elemen html
    $("#btnhitung").attr("disabled", false);

 });
//ketika tombol hitung di klik,maka modal muncul/tampil
$("#btnhitung").on("click", function(){
    $("#ModalHasil").modal("show");
    let total = $("#harga").val() * $("#jumlah").val(); //rumus total
    //menampilkan value dari variabel total ke form total
    $("#total").val(total);
});
$("#bayar").on("keyup", function() {
    let bayar = $("#bayar").val();
    let total = $("#total").val();
    $("#kembalian").val(bayar-total);
});

$("#save").on("click", function() {
    let bayar = $("#bayar").val();
    let total = $("#total").val();
    console.log("tes");
    if(total > bayar){
        alert("DILARANG HUTANG");
        $("#bayar").focus();

    }
    else{
        alert("TERIMA KASIH");
        $("#bayar").val("");
        $("#kembalian").val("");
        $("#total").val("");
        $("#kode").val("");
        $("#nama").val("");
        $("#harga").val("");
        $("#jumlah").val("");
        $("#ModalHasil").modal("hide");
    }
    
});

