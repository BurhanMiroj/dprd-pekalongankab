class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="w-full bg-blue-950">
        <div class="max-w-screen-2xl mx-auto h-auto pt-4 lg:pt-16">
            <div class="max-w-screen-custom mx-auto flex flex-wrap justify-between items-start text-white">
                <!-- START : Single Item -->
                <div class="w-full md:w-1/2 lg:w-1/4 mt-10 lg:mt-0 px-5">
                    <img class="w-1/2" src="/src/img/content/logo.png" alt="Logo DPRD Kabupaten Pekalongan">
                    <div class="lg:pr-16 pt-6 text-sm md:text-custom">
                        <a href="#">Jl. Alun-alun Utara No. 2 Kajen, Jawa Tengah Kode Pos 51161 Indonesia.</a>
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 mt-10 lg:mt-0 px-5">
                    <h5 class="font-bold text-gray-400 text-lg border-b md:border-b-0 border-gray-200 pb-2 md:pb-0">Tautan</h5>
                    <ul class="link-wrapper mt-5 lg:mt-14 text-sm md:text-custom">
                        <li class="py-1 hover:underline"><a href="#">Kabupaten Pekalongan</a></li>
                        <li class="py-1 hover:underline"><a href="#">Provinsi Jawa Tengah</a></li>
                        <li class="py-1 hover:underline"><a href="#">Kementrian Kominfo</a></li>
                        <li class="py-1 hover:underline"><a href="#">Kementrian Hukum & HAM</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 mt-10 md:mt-16 lg:mt-0 px-5">
                    <h5 class="font-bold text-gray-400 text-lg border-b md:border-b-0 border-gray-200 pb-2 md:pb-0">Support</h5>
                    <ul class="link-wrapper mt-5 lg:mt-14 text-sm md:text-custom">
                        <li class="py-1 hover:underline"><a href="#">Contact Us</a></li>
                        <li class="py-1 hover:underline"><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 mt-10 md:mt-16 lg:mt-0 px-5">
                    <h5 class="font-bold text-gray-400 text-lg border-b md:border-b-0 border-gray-200 pb-2 md:pb-0">Menu</h5>
                    <ul class="link-wrapper mt-5 lg:mt-14 text-sm md:text-custom">
                        <li class="py-1 hover:underline"><a href="#">Berita</a></li>
                        <li class="py-1 hover:underline"><a href="#">Fraksi</a></li>
                    </ul>
                </div>
                <!-- END : Single Item -->
            </div>
            <div class="max-w-screen-custom mx-auto pt-10 md:pt-16 pb-12 px-5">
                <h5 class="md:hidden font-bold text-gray-400 text-lg border-b md:border-b-0 border-gray-200 pb-2 md:pb-0">Social media</h5>
                <ul class="social-media w-1/3 md:w-1/4 md:mx-auto flex justify-between text-white pt-5 pb-10">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                </ul>
                <p class="px-5 text-center text-xs text-white">Copyright &copy; 2021 DPRD Kab. Pekalongan</p>
            </div>
        </div>
    </footer>
    `;
  }
}

customElements.define("custom-footer", Footer);
