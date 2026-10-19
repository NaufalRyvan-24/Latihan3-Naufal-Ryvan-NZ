document.addEventListener('DOMContentLoaded', function() {
  
  const btnTema = document.querySelector('#btnToggleTema');
  const bodyHalaman = document.querySelector('body');

  if (btnTema) {
    btnTema.addEventListener('click', function() {
      bodyHalaman.classList.toggle('light-mode');
      
      if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
      } else {
        btnTema.textContent = '☀️ Mode Terang';
      }
    });
  }

  const btnBukaModal = document.querySelector('#btnKontak');
  const elemenModal = document.querySelector('#modalKontak');
  const btnTutupModal = document.querySelector('#btnTutupModal');

  if (btnBukaModal && elemenModal && btnTutupModal) {
    btnBukaModal.addEventListener('click', function(event) {
      event.preventDefault();
      elemenModal.classList.add('show');
    });

    btnTutupModal.addEventListener('click', function() {
      elemenModal.classList.remove('show');
    });
  }
});

const teksSapaan = document.querySelector('#sapaan');
const jamSekarang = new Date().getHours();

if (jamSekarang < 12) {
  teksSapaan.textContent = "🌅 Selamat Pagi, Selamat Datang di Profil Saya!";
} else if (jamSekarang < 18) {
  teksSapaan.textContent = "☀️ Selamat Siang, Selamat Datang di Profil Saya!";
} else {
  teksSapaan.textContent = "🌙 Selamat Malam, Selamat Datang di Profil Saya!";
}