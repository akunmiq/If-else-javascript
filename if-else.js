var nama = ""; //masukkan nama 
var peran = ""; //masukkan peran

if (nama === ""  && peran === "") {
	console.log("Nama & peran harus di isi!!")
}

else if(nama && peran === "") {
	console.log("Halo " +nama+ " , pilih peranmu untuk memulai game!")
}

else if(nama && peran === "ksatria") {
	console.log("Selamat datang di Dunia Proxitya, " +nama)
	console.log("Halo Ksatria " +nama+ " , kamu dapat menyerang dengan senjatamu!")
}

else if(nama && peran === "tabib") {
	console.log("Selamat datang di Dunia Proxitya, " +nama)
	console.log("Halo Tabib " +nama+ " , kamu dapat membantu temanmu yang tereluka")
}

else if(nama && peran === "penyihir") {
	console.log("Selamat datang di Dunia Proxytia, " +nama)
	console.log("Halo penyihir " +nama+ " , ciptakan keajaiban yang membantu kemenanganmu!")
}
