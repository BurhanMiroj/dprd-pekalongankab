import "../utilities/nav.js";
class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="w-full bg-blue-950">
            <div class="max-w-screen-2xl mx-auto">
            <div class="max-w-screen-custom mx-auto flex justify-between items-center flex-row-reverse lg:flex-row px-5 py-3 lg:py-4">
                <!-- Logo -->
                <div class="w-52 flex justify-end items-center">
                <div id="search-button" class="cursor-pointer lg:hidden"><img class="mx-6" src="../images/content/search.svg" alt="Mobile search button"></div>
                <img class="hidden lg:block w-full" src="../images/content/logo.png" alt="Logo DPRD Kabupaten Pekalongan">
                <img class="block lg:hidden w-auto" src="../images/content/mobile-logo.png" alt="Logo DPRD Kabupaten Pekalongan">
                </div>
                <!-- START : Nav List -->
                <div class="mobile-navbar absolute top-0 left-0 z-20 lg:relative w-3/4 md:w-2/5 lg:w-auto h-full bg-white lg:bg-transparent">
                <ul class="nav-list flex flex-col lg:flex-row text-custom lg:uppercase lg:font-medium text-black lg:text-white">
                    <li class="flex justify-between items-center py-3.5 lg:hidden border-b">
                    <h3 class="text-lg font-semibold text-black">DPRD Pekalongan</h3>
                    <div class="nav-close-btn transition-all duration-200 hover:bg-gray-100 cursor-pointer p-3 rounded-md">
                        <img src="../images/content/close.svg" alt="Close btn">
                    </div>
                    </li>
                    <li><a href="#"><img src="../images/content/icon/home.svg" alt="">Home</a></li>
                    <li><a href="#"><img src="../images/content/icon/profile.svg" alt="">Profil<i class="fas fa-chevron-down"></i></a></li>
                    <li><a href="#"><img src="../images/content/icon/fraksi.svg" alt="">Fraksi<i class="fas fa-chevron-down"></i></a></li>
                    <li><a href="#"><img src="../images/content/icon/alat-kelengkapan.svg" alt="">Alat Kelengkapan<i class="fas fa-chevron-down"></i></a></li>
                    <li><a href="#"><img src="../images/content/icon/produk-hukum.svg" alt="">Produk Hukum<i class="fas fa-chevron-down"></i></a></li>
                    <li><a href="#"><img src="../images/content/icon/galeri.svg" alt="">Galeri</a></li>
                    <li><a href="#"><img src="../images/content/icon/kontak.svg" alt="">Kontak</a></li>
                    <li id="search-button" class="cursor-pointer hidden lg:block w-auto"><i class="fas fa-search"></i></li>
                </ul>
                </div>
                <!-- Show only when the navbar classlist contains nav-active -->
                <div class="close-layer absolute top-0 left-0 z-10 w-full h-screen bg-black opacity-50 cursor-pointer"></div>
                <!-- END : Nav List -->
                <div id="nav-btn" class="block lg:hidden cursor-pointer">
                <img class="w-auto" src="../images/content/nav-button.svg" alt="">
                </div>
            </div>
            </div>
        </nav>
        `;
    }
}
customElements.define("custom-navbar", Navbar)