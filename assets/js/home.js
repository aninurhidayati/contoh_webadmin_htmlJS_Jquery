//contoh fungsi dengan return
function welcome(){
    return "Selamat Datang di Aplikasi WebBase";
}
//cara implementasi ke element HTML
document.getElementById("title").innerText = welcome();

//contoh fungsi dengan parameter dengan nilai default
function created(tanggal, programmer){
    return "Tanggal: "+tanggal+", Programmer: "+programmer;
}
let tgl = new Date();
//getMonth() 0 - 11
let tgl_sekarang = tgl.getDate()+ "-" +(tgl.getMonth()+1)+ "-" + tgl.getFullYear();
document.getElementById("subtitle").innerHTML = created(tgl_sekarang, "Ani Nur");

//buat array menus
let menus = ["menu-01", "menu-02"];
//jenis-jenis fungsi pada array
//1) fungsi push() : untuk Menambahkan satu atau lebih elemen ke akhir array.
menus.push("menu-03"); 

//2) fungsi pop() : untuk Menghapus elemen terakhir dari array
menus.pop();

//3)fungsi unshift() : untuk Menambahkan satu atau lebih elemen ke awal array
menus.unshift("menu-00");

//4)fungsi shift() : untuk menghapus elemen pertama dari array
menus.shift("menu-00");

//5)fungsi splice() : untuk Menghapus,menambah,atau mengganti elemen diposisi tertentu dalam array.
menus.splice(0, 0, "menu-a1");
menus.splice(2, 1, "menu-a2");

//6)fungsi slice() : untuk Membuat salinan bagian tertentu dari array tanpa memodifikasi array asli.
let new_menu = menus.slice(1,3);
console.log(new_menu); //hasil: ['menu-01', 'menu-a2']

//7)fungsi concat() : untuk Menggabungkan dua atau lebih array untuk membuat array baru
let submenu = ["sub01", "sub02"];
let join = menus.concat(submenu);
console.log(join);
//8)fungsi forEach() : untuk Mengeksekusi setiap elemen dalam array.
let speksifikasi = ["HTML/CSS", "PHP", "Javascript", "DB MySQL"];
// Mendapatkan referensi ke elemen <ul> dalam HTML
let ulspek = document.getElementById("listspek");
// Menggunakan forEach untuk menambahkan elemen <li> ke dalam <ul>
speksifikasi.forEach(function(spl){
     // Membuat elemen <li>
    let lispek = document.createElement("li");
    // Menetapkan teks elemen <li> dengan nilai dari array
    lispek.textContent = spl; 
     // Menambahkan elemen <li> ke dalam <ul>
    ulspek.appendChild(lispek);
});
//contoh tipe data object
let dataperusahaan = {alamat: "jl.Merdeka No.13 SBY", telp: "0813901830", email: "ase@gmail.com"};
//cara menampilkan outputnya
document.getElementById("addr").innerHTML = dataperusahaan.alamat;
document.getElementById("telp").innerHTML = dataperusahaan.telp;
document.getElementById("email").innerHTML = dataperusahaan.email;

function cekdatang(jamdatang, sakit){
    // let jamdatang = 8;
    let notif = "";    
    switch (true){
        case (jamdatang < 9):  //Kondisi if dengan operator
            //pernyataan atau statement if
            notif = "Anda keren dan bisa mengikuti kelas";
            break; 
        case (jamdatang <= 10):
            notif =  "Anda terlambat dan bisa mengikuti kelas";
            break;
        case (jamdatang > 10):
            notif = "Anda tidak masuk (Alpa)";
            //nested switch case atau seperti nested if
            switch(sakit){
                case 1:
                    notif = notif + " Sakit, semoga lekas sembuh";
                    break;
                case 2:
                    notif = notif + ", MAKA ANDA BOLOS";
                    break;
                default:
                    notif = notif ;
            }  
            break;             
        default:
            notif = "jangan diulang!!";
            break;     
    }    
    return notif;
}
console.log(cekdatang(8, 0));

//LOOPING
let no = 0;
//kondisinya < 8 atau untuk pengecekkan nilai no < 8
while(no < 8){
    // console.log(no);
    no++; //increament plus 1 no = no+1
}

let nom = 1;
do{
    // console.log(nom);
    nom++; //nom = nom + 1
}while(nom < 6)

let a = 5;
while(a > 0){
    //console.log(a);
    a--; //increament plus 1 no = no+1
}
for(let x = 1; x <= 10; x++){
    //menampilkan bilangan Ganjil
    if(x % 2 != 0){
        //console.log(x);
    }
}
for(let z = 1; z <= 10; z++){
    //menampilkan bilangan genap
    if(z % 2 == 0){
        //2,4,6,8,10 
        //nested if      
       if(z == 8 || z == 4){
         console.log("nomor ok "+z);
       }
       else{
        console.log("genap-"+z);
       }
    }
    else{
        console.log("ganjil-"+z);
    }
}
