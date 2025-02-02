// gallery.js
const JustValerie = [ 
    { url: "static/image/gallary/1.jpg", desc: "", id:"gambar 1"},
    // tambahkan foto lainnya
];

const dumpyPhoto = [
    { url: "static/image/gallary/101.jpg", desc: "", id:"gambar 50" },
    // tambahkan foto lainnya
];

const photobooth = [
    { url: "static/image/gallary/106.jpg", desc: "", id: "gambar 106" },
    // tambahkan foto lainnya
];

const JustTwoOfUs = [
    { url: "static/image/gallary/40.jpg", desc: "", id:"gambar 40" },
    // tambahkan foto lainnya
];

// Langsung mapping array ke halaman tanpa pembagian
const photoPages = {
    1: JustValerie,      // Page 1 menampilkan semua foto Just Valerie
    2: dumpyPhoto,       // Page 2 menampilkan semua foto Dumpy
    3: photobooth,       // Page 3 menampilkan semua foto Photobooth
    4: JustTwoOfUs       // Page 4 menampilkan semua foto Just Two of Us
};

let currentPage = 1;
let currentPhotoIndex = 0;

function loadImages(page) {
    const photoGrid = document.getElementById("photo-grid");
    const loading = document.getElementById("loading");
    
    loading.classList.remove("hidden");
    photoGrid.innerHTML = "";

    // Update active button
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page == page);
    });

    // Get all photos for current page
    const currentPhotos = photoPages[page] || [];

    // Load all photos from the current array
    currentPhotos.forEach((photo, index) => {
        const photoDiv = document.createElement("div");
        photoDiv.className = "photo w-full aspect-square overflow-hidden bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl";

        photoDiv.innerHTML = `
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                data-src="${photo.url}"
                data-index="${index}"
                alt="${photo.desc}"
                class="lazy-image w-full h-full object-cover rounded-lg transform transition-all duration-500 hover:scale-110">
            <div class="desc absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent text-white text-center opacity-0 transition-opacity duration-300">${photo.desc}</div>
        `;

        photoGrid.appendChild(photoDiv);
    });

    setupLazyLoading();
    loading.classList.add("hidden");
}

// Fungsi lainnya tetap sama
function setupLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

function setupImageOverlay() {
    const overlay = document.querySelector(".overlayimg");
    const overlayImg = overlay.querySelector(".overlay-img");
    const closeBtn = overlay.querySelector(".close-btn");
    const prevBtn = overlay.querySelector(".prev-btn");
    const nextBtn = overlay.querySelector(".next-btn");
    const caption = overlay.querySelector(".caption");

    function showImage(index) {
        const currentPhotos = photoPages[currentPage];
        currentPhotoIndex = index;
        const photo = currentPhotos[index];
        
        overlayImg.src = photo.url;
        caption.innerHTML = `
            <div class="mb-4">
                <h3 class="font-bold text-lg mb-2">Photo ${index + 1}</h3>
                <p class="text-gray-600">${photo.desc || 'No description available'}</p>
            </div>
        `;
        
        // Update navigation buttons visibility
        prevBtn.style.visibility = index > 0 ? 'visible' : 'hidden';
        nextBtn.style.visibility = index < currentPhotos.length - 1 ? 'visible' : 'hidden';
    }

    function closeOverlay() {
        overlay.classList.add("hidden");
        overlay.classList.remove("flex");
    }

    // Event Listeners
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('lazy-image')) {
            const index = parseInt(e.target.dataset.index);
            showImage(index);
            overlay.classList.remove("hidden");
            overlay.classList.add("flex");
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPhotoIndex > 0) {
            showImage(currentPhotoIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        const currentPhotos = photoPages[currentPage];
        if (currentPhotoIndex < currentPhotos.length - 1) {
            showImage(currentPhotoIndex + 1);
        }
    });

    closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'ArrowRight') nextBtn.click();
            if (e.key === 'Escape') closeOverlay();
        }
    });
}