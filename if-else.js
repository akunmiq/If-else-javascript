var nama = ""; 
var peran = "";

if (nama === "") {
	console.log("Nama harus di isi!");
} 

else if (nama) {
	console.log("Selamat datang di Dunia Proxitya");
}

if (peran === "") {
	console.log("Pilih peranmu untuk memulai game!");
}

else if(nama && peran === "ksatria") {
	console.log("Selamat datang di Dunia Proxitya," +nama);
	console.log("Halo Ksatria" +nama+ ",kamu dapat menyerang dengan senjatamu!");
}

else if(nama && peran === "tabib") {
	console.log("Selamat datang di Dunia Proxitya," +nama);
	console.log("Halo Tabib" +nama+ ",kamu dapat membantu temanmu yang terluka");
}

else if(nama && peran === "penyihir") {
	console.log("Selamat datang di Dunia Proxytia," +nama);
	console.log("Halo penyihir" +nama+ ",ciptakan keajaiban yang bisa membantu kemenanganmu!");
}