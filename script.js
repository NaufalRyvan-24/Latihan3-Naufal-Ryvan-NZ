document.addEventListener('DOMContentLoaded', function() {
  const btnTema = document.querySelector('#btnToggleTema');
  const bodyHalaman = document.querySelector('body');
  const kunciTema = 'preferensi-tema';

  if (localStorage.getItem(kunciTema) === 'terang') {
    bodyHalaman.classList.add('light-mode');
  }

  function perbaruiLabelTema() {
    btnTema.textContent = bodyHalaman.classList.contains('light-mode')
      ? '🌙 Mode Gelap'
      : '☀️ Mode Terang';
  }

  if (btnTema) {
    perbaruiLabelTema();
    btnTema.addEventListener('click', function() {
      bodyHalaman.classList.toggle('light-mode');
      localStorage.setItem(
        kunciTema,
        bodyHalaman.classList.contains('light-mode') ? 'terang' : 'gelap'
      );
      perbaruiLabelTema();
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
if (teksSapaan) {
  const jamSekarang = new Date().getHours();

  if (jamSekarang < 12) {
    teksSapaan.textContent = "🌅 Selamat Pagi, Selamat Datang di Profil Saya!";
  } else if (jamSekarang < 18) {
    teksSapaan.textContent = "☀️ Selamat Siang, Selamat Datang di Profil Saya!";
  } else {
    teksSapaan.textContent = "🌙 Selamat Malam, Selamat Datang di Profil Saya!";
  }
}