let currentMessageIndex = 0;
audioHasPlay = false
hasPlayesAudio = false


function showMessage2(seconds) {
    const pesan2 = [
       "Hallo sayangku ini adalah isi pesan lainnya",
        
        "gimana kabarnya?? semoga dalam keadaan baik,damai dan sehat walafiat saat membuka ini yahhh...\
        kamu pasti kaget tiba tiba ada ginian yah??\
        jadi ini adalah website yang aku buat dari awal awal kita pacaran,\
        aku mikirin konsep,desain dan fitur apa aja yang mau aku tambahin.\
        maaf kalau aku harus berbohong/ngarang cerita soal ini, karena aku mau jadiin ini suprise(well sekarang enggak)",

        "pertama-tama mari anggungkan dulu Tuhan atas semuanya ini, atas semua yang telah terjadi;\
        Cinta tuh kayak datang tiba tiba dalam hidupku, dan tak pernah sedikitpun terlintas di kepalaku,\
        kalau Tuhan mempertemukan aku dengan seseorang gadis baik hati, penuh pengertian, tulus dan tentunya yang berhasil nembus hati aku.\
        Tuhan telah menunjukan secara nyata padaku, arti sesungguhnya hati\
        bernari-nari melihat kekasih, apalagi orangnya itu kamu. aku juga sadar kalau Tuhan menunjukan padaku kasih yang nyata melalui kamu.",

        "siapa sangka, Tuhan mengirimkan seorang <a href='https://id.wikipedia.org/wiki/Afrodit'> Aphrodite(kamu bisa klik)<a> kepadaku,\
        dan semua itu seakan masih terasa berlebihan di mataku. cantikmu itu tak wajar karena setiap harinya cantikmu akan selalu bisa buat aku terperanga dan tak dapat melepaskan pandanganku darimu;\
        bahkan bulan saja tidak bisa buat aku terperanga meski hanya sesaat.\
        parasmu itu spesial buat aku, exclusive hanya untuk aku, karna tanpa benda benda yang kamu lekat/pakai di wajah pun, kamu tetap bisa menandingi alam semesta ini.\
        kamu selalu berhasil buat aku ketawa, kamu juga ngajarin aku banyak hal tentang dunia baru, ngajarin aku cara mencintai diri sendiri, dan terutama jadikan aku orang yang suka memuji Tuhan begitu melihat kamu.\
        ",

        "Mi Amor, kita telah berlayar melewati banyak hal. banyak hal di lautan lepas ini yang sudah kita lepas dan ambil. banyak hal yang kita\
        syukuri, yang kita sesali, dan yang kita Amini. 3 bulan ini terasa begitu singkat ketika kita sudah berada di penghujung tahun, padahal\
        3 bulan itu bukan waktu yang sebentar bagi kita berdua untuk menerima, memaafkan dan melepaskan apa yang baik dan buruk, apa yang nyaman dan tidak\
        bagi diri kita masing masing.",

        "seperti yang sayang tau, kita banyak trial dan error dalam hal komunikasi, berulang kali terjadi kesalahpahaman, tapi\
        percayalah bahwa kita bisa mengarunginya bersama selagi kita mau mencoba. tidak peduli seberapa banyak kita gagal dalam memahami/menyelesaikan masalahnya,\
        tapi lihat dan ingat pada seberapa banyak kita berhasil menyelesaikannya sebelumnya. \
        tidak peduli sekeras apapun masalahnya, aku percaya kita bisa laluin ini bareng bareng sampai aku masang cincin di jari manis kamu.",

        "melalui message box ini juga, aku mau tegasin lagi ke kamu, rasaku padamu tidak akan pernah berubah. selama nafasku masih berdesah, dan jantungku masih berdetak,\
        kamu akan selalu menjadi satu satunya cinta pertama dan terakhirku yang akan hidup bersamaku sampai matahari tak lagi bersinar bagi kita berdua,\
        sampai perahu ini lapuk dan tenggelam, dan sampai kita tak dapat melihat lagi dunia fana ini; melalui ini aku juga tegasin kalau kamu selalu cukup buat aku.\
        kedepannya akan ada banyak hal yang akan kita lalui sayang. tentunya aku mau kita kerjasama dalam hal apapun saat menghadapinya.\
        kedapannya juga kita akan membangun cinta yang lebih lagi, apapun kondisinya kita harus tetap lindungi bareng bareng, bahkan jika roboh, kita bangun ulang kembali sama sama.",

        "sekali lagi, thanks to all you did to me. hidupku jadi penuh akan warna baru, yaitu the color of you. dan warnamu itu unik, hanya satu hingga tak ada yang dapat\
        menggantikannya. aku kedepannya akan terus menerus memberikan yang terbaik dalam hal apapun, termasuk mencintai dan menyayangimu seperti yang Tuhan lakukan pada umat manusia.\
        karna sesungguhnya, aku akan menjadikan Yakub sebagai teladan dalam mengejar dan mempertahankan cintanya pada Rachel selama 14 tahun.",

        "<a href='https://docs.google.com/document/d/1oMF_7TqhrtLEpJriRXQktK157d1QRiBoJHDVusO_96c/edit?tab=t.0'>this is poem for you babe (click me!)<a>",

        "siap siap buat something sayaangg!",

        "3",
        "2",
        "1",

        "ini adalah pesan terakhirku untuk mu, mainkan musik untukmu🎶",

        "klik tombol dibawah untuk membaca pesan 💕",


        
    ];
    // for music

    // Get the message to show based on the current index\
    hasPlayesAudio = false

    let messageToShow = pesan2[currentMessageIndex];
    document.getElementById("content-2").innerHTML = messageToShow;
	const audioPlayer = document.getElementById("audio-player");
    audioPlayer.currentTime = seconds;
    // Check if we have reached the last message
    if (currentMessageIndex === pesan2.length - 2) { // Second-to-last message triggers audio
        
        audioPlayer.play();
        audioHasPlay = true
    }else{ 
		audioPlayer.pause();
		audioPlayer.currentTime = 0
        audioHasPlay = false
        hasPlayesAudio = false
	}

    // Increment the index for the next message, looping back to 0 if at the end
    currentMessageIndex = (currentMessageIndex + 1) % pesan2.length;

    // Return the message to be displayed (if needed elsewhere)
    return messageToShow;
}