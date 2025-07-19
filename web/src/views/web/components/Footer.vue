<template>
  <footer>
    <div class="bg-gray-800 text-gray-300 py-8">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="text-center">
          <img src="@/assets/images/logo-footer.png" class="h-40" />
        </div>

        <div>
          <h4 class="text-lg font-bold uppercase mb-4 text-white">Linhas</h4>
          <ul class="space-y-2 text-sm px-2">
            <li>
              <a href="#hero" class="hover:text-yellow-500"
                ><i class="fa fa-angle-right mr-1"></i> Star</a
              >
            </li>
            <li>
              <a href="#blog" class="hover:text-yellow-500"
                ><i class="fa fa-angle-right mr-1"></i> Gran Reserva</a
              >
            </li>
            <li>
              <a href="#sobre" class="hover:text-yellow-500"
                ><i class="fa fa-angle-right mr-1"></i> Premium</a
              >
            </li>
            <li>
              <a href="#contato" class="hover:text-yellow-500"
                ><i class="fa fa-angle-right mr-1"></i> Pró Saúde</a
              >
            </li>
            <li>
              <a href="#linhas" class="hover:text-yellow-500"
                ><i class="fa fa-angle-right mr-1"></i> Hotel</a
              >
            </li>
            <li>
              <a href="#beneficios" class="hover:text-yellow-500"
                ><i class="fa fa-angle-right mr-1"></i> Life</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-bold uppercase mb-4 text-white">Siga-nos</h4>
          <ul class="flex gap-4 text-2xl">
            <li>
              <a href="#" class="hover:text-yellow-500"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-500"><i class="fa fa-instagram"></i></a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-500"><i class="fa fa-whatsapp"></i></a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-500"><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-500"><i class="fa fa-whatsapp"></i></a>
            </li>
          </ul>
        </div>

        <div class="text-right">
          <img src="@/assets/images/maps-entrega.png" />
        </div>
      </div>
    </div>

    <div class="bg-black text-gray-400 py-6">
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left"
      >
        <div>
          <span class="text-sm">
            © {{ currentYear }} - <strong>GRAM-VIDA</strong> - Todos os direitos reservados.<br />
            <span class="uppercase text-xs">Espumas • Colchões • Imaginação</span>
          </span>
        </div>
        <div class="text-xs uppercase tracking-wider">Desenvolvido por <strong>Atreu</strong></div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>
