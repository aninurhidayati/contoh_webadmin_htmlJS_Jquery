console.log("Hello JS");
//dom acccess -> getElementById, dom property -> innerHTML
document.getElementById("judul").innerHTML = "Form Login"; 
//dom acccess -> getElementById, dom property -> style
document.getElementById("judul").style.color = "red";
//dom acccess -> getElementById, dom property -> value
// document.getElementById("username").value = "lp3i";
//ini contoh membuat fungsi di javascript, nama fungsi tidak boleh ada spasi
function ceklogin(){
    const adminuser = "admin";
    const adminpass = "123";
    let txt_user = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    //validasi
    if(txt_user == ""){
        alert("username wajib diisi!!");
    }
    else if(password == ''){
        alert('password wajib diisi!!');
    }
    else{
        //baru cek user sama pass benar atau tidak
        if(txt_user != adminuser && password != adminpass)
            alert("Username atau Password salah!!");
        else
            window.location = "home.html";
    }
    //cara kedua
    //document.write("usernamenya = "+txt_user+ ", password = "+password);
    //alert("Cek Login Guys!!"+" usernamenya = "+txt_user+ ", password = "+password);
    //clear inputan form
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

}
document.getElementById("gambar").src = "assets/image/gambar1.jpg";

