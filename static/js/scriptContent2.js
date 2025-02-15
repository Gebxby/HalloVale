let currentValentineMessageIndex = 0;
audioHasPlay = false
hasPlayesAudio = false


function showValentineMessage(seconds) {
    const pesan = [
       "Hallo Bidadari Cantik yang lahirnya hanya untuk aku \ ", 
        "HAPPY VALENTINE YAH!!!\ ",
        "Tau ga, hari valentine itu dulu buat aku selalu menangis, karena hari itu nyakitin banget buat aku yang ga punya siapa siapa untuk dirayakan, merayakan dan bersuka cita selain keluarga.\ " ,
        "Tapi setelah hadirnya kamu, dan semua yang sudah kita lalui bersama, aku merasa Valentine kali ini bener bener sesuai dengan maknanya dalam hidupku. Hari ini, akan ku deklarasikan lagi, dan akan ku kumandangkan lagi kepada setiap insan insan di atas dunia, bahwa akan selamanya dan akan selalu, dirimu adalah kesayangan dan kecintaanku.\ ",  
        "Aku harap, senja tidak akan pernah terbenam, angin tak berhenti, dan mataku tak bisa berhenti untuk melihat.\ "  ,
        "Tidak akan ada yang lebih menyenangkan di dunia ini, selain menyayangimu, mencintaimu, berjalan berdua bersamamu, tertawa menghabiskan waktu denganmu, mengerti dirimu, memahami apa maumu, melihatmu marah dan kesal karena kelakuanku, melihatmu tersenyum manis, dan semua hal yang kamu lakukan, gerak gerik, gestur, dan masih banyak lagi!\ "  ,
        "akan selalu kepada dirimu, berjuta juta bintang dilangit malam, beribu ribu awan indah di siang hari, satu mentari yang berinar terang, lembah lembah yang menyejukkan, pesisir yang berlimpah, nyanyian kicauwan burung dilangit, bahkan galaxy andromeda sekalipun, kau tetaplah pemenang atas semua keindahan ini. kamu adalah bentuk dari kasih Allah yang bergitu indah, diberikan kepadaku untuk bersama. \ ",
        "ku ingin kau jadi milikku, temani diriku yang ceroboh, ngeyelan dan keras kepala ini, karna hanya denganmu, aku dapat luluh layaknya es batu di musim panas. hanya denganmu dapat ku rasakan perasaan cinta yang berarti, dapat merasakan bersama indahnnya melewati setiap kesulitan,kesedihan,haru,senang dan bahagia dalam setiap momen yang kita hadapi dan berbagi bersama. \ ",
        "aku tak minta banyak hal, cukup bersama aku disini, berbagi setiap momen didalam hidup, bersama mengarungi ruang ruanng hampa yang masih perlu diisi oleh cinta kita berdua. terimakasih buat hari indah ini, terimakasih buat setiap momen berharga yang kita lewati sampai valentina ini, \ ",
        "Aku harap, kedepannya kita benar benar selalu bersama, selalu berjuang bersama, mencintai dan mengasihi sepenuh hati. Lewat Valentine ini, aku mau kamu tau kalau kasih sayangku tulus dan akan selamanya demikian.\ ",
        "I lovee youuu like this song!!!\ "  ,


        "klik tombol dibawah untuk membaca pesan 💕",


        
    ];
    // for music

    // Get the message to show based on the current index\
    hasPlayesAudio = false

    let messageToShow2 = pesan[currentValentineMessageIndex];
    document.getElementById("Indexcontent2").innerHTML = messageToShow2;
	const audioPlayer = document.getElementById("audio-player2");
    audioPlayer.currentTime = seconds;
    // Check if we have reached the last message
    if (currentValentineMessageIndex === pesan.length - 2) { // Second-to-last message triggers audio
        
        audioPlayer.play();
        audioHasPlay = true
    }else{ 
		audioPlayer.pause();
		audioPlayer.currentTime = 0
        audioHasPlay = false
        hasPlayesAudio = false
	}

    // Increment the index for the next message, looping back to 0 if at the end
    currentValentineMessageIndex = (currentValentineMessageIndex + 1) % pesan.length;

    // Return the message to be displayed (if needed elsewhere)
    return messageToShow2;
}
