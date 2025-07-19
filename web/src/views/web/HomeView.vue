<template>
  <div>
    <section
      id="hero"
      class="h-screen bg-black bg-cover bg-center flex flex-col justify-center items-center text-white relative"
    >
      <img
        src="@/assets/images/bg-home.png"
        alt="Gramvida"
        class="absolute bg-cover opacity-30 w-full h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      />

      <div class="relative z-10 text-center px-4 max-w-3xl">
        <p class="text-xs pt-10 md:text-base uppercase tracking-widest text-gray-200">
          Fábrica e Loja de Colchões
        </p>
        <h1 class="text-4xl md:text-8xl font-extrabold uppercase">Gram - vida</h1>
        <p class="text-sm md:text-base uppercase tracking-widest text-gray-200">
          Espumas • Colchões • Imaginação
        </p>

        <p class="text-xl my-10 md:text-xl max-w-2xl mx-auto text-gray-300">
          Nosso principal objetivo é oferecer produtos exclusivos, com soluções práticas para o
          dia-a-dia, aliando design, tecnologia e preço justo.
        </p>

        <div class="mt-20 flex justify-center gap-4 flex-wrap">
          <button
            class="font-bold uppercase border-2 border-yellow-600 text-yellow-100 bg-transparent px-6 py-2 rounded-xl transition hover:bg-yellow-600 hover:text-white"
            @click.prevent="goToSection('linhas')"
          >
            Conheça Nossos Produtos
          </button>
        </div>
      </div>
    </section>

    <section
      id="sobre"
      class="bg-white text-gray-800 py-40 px-6 flex flex-col gap-28 max-w-7xl mx-auto"
    >
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <img
          src="@/assets/images/sobre.png"
          alt="Fábrica Gramvida"
          class="w-full md:w-1/2 max-w-md rounded-2xl shadow-lg object-cover"
          style="min-height: 320px"
        />

        <div class="max-w-xl text-center md:text-left flex flex-col justify-center">
          <h2 class="text-4xl md:text-5xl font-normal mb-8 leading-tight">
            Um pouco sobre <span class="font-extrabold italic">nossa história.</span>
          </h2>

          <p class="mb-8 md:text-xl leading-relaxed text-gray-700">
            Localizada na charmosa cidade turística de Gramado, no Rio Grande do Sul, a
            <strong>GRAM-VIDA</strong>
            está transformando a experiência do sono, proporcionando noites de descanso
            incomparáveis.
          </p>

          <p class="mb-8 md:text-xl leading-relaxed text-gray-700">
            Especialista na fabricação de colchões, seu portfólio oferece uma ampla gama de produtos
            focados na saúde, bem-estar e qualidade do sono de seus clientes.
          </p>

          <button
            class="font-bold uppercase border-2 border-red-600 text-red-600 bg-transparent px-6 py-2 rounded-xl transition hover:bg-red-600 hover:text-white w-max"
            @click="goToSobre"
          >
            Conheça mais
          </button>
        </div>
      </div>
    </section>

    <section
      id="gramado"
      class="relative bg-fixed bg-center pl-60 py-20 flex items-center justify-start"
      :style="{
        backgroundImage: `url(${gramadoImg})`,
        backgroundSize: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
        backgroundColor: 'black',
      }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative z-10 text-white max-w-[640px]">
        <h2 class="text-6xl font-normal mb-6">
          Um pedaço da Europa em pleno <strong>Brasil!</strong>
        </h2>
        <p class="mb-4 md:text-xl">
          O charme das ruas floridas, os detalhes da arquitetura bávara nos telhados com franjas, os
          deliciosos chocolates, cafés coloniais e fondues, sem contar com as paisagens naturais que
          encantam por sua magnitude e beleza.
        </p>
        <p class="mb-4 md:text-xl font-bold">
          Todos os lugares inspiram e são um convite para experiências inesquecíveis, seja em
          família, com as crianças ou em clima de romance.
        </p>
        <p class="mb-4 md:text-xl">
          Além disso, a cidade parece ter sido especialmente preparada para acolher a todos,
          moradores ou visitantes, todos são sempre muito bem-vindos.
        </p>
        <p class="mb-4 md:text-xl">
          Hospitaleira, impecavelmente limpa e vestida em trajes sempre prontos para bem receber.
          Além de todas as belezas naturais, Gramado se tornou um palco a céu aberto para receber
          eventos nacionais e internacionais.
        </p>
        <p class="text-xl md:text-2xl font-semibold">Venha para Gramado e surpreenda-se!</p>
      </div>
    </section>

    <section id="linhas" class="bg-gray-50 py-20 px-6 max-w-7xl mx-auto">
      <h2 class="text-4xl font-normal mb-6 text-center text-gray-900">
        Noites sem igual, com os produtos <span class="font-extrabold">GRAM-VIDA.</span>
      </h2>
      <p class="max-w-3xl mx-auto text-center text-2xl text-gray-700 italic">
        Tecnologia, conforto, suporte e ergonomia.
      </p>

      <div class="flex flex-wrap justify-center gap-6 pt-20 pb-10">
        <button
          v-for="(linha, idx) in linhas"
          :key="linha"
          :class="[
            'px-12 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-300 ease-in-out shadow-md',
            selectedLinha === idx
              ? 'bg-yellow-600 text-white shadow-yellow-400/50'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-yellow-100 hover:text-yellow-600',
          ]"
          @click="selectedLinha = idx"
        >
          {{ linha }}
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <div :key="linhas[selectedLinha]" class="max-w-5xl mx-auto">
          <h3 class="text-2xl font-bold mt-6 mb-10 text-center text-gray-800">
            Produtos da linha <span class="text-yellow-600">{{ linhas[selectedLinha] }}</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div
              v-for="produto in produtosPorLinha[linhas[selectedLinha]]"
              :key="produto.id"
              class="bg-white rounded-lg shadow-md mb-10 px-4 py-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
              style="min-height: 380px"
            >
              <img :src="produto.imagem" alt="" class="mb-6 h-36 w-full" />

              <h4 class="font-normal text-2xl mb-3">
                <span class="text-gray-600 text-sm pr-1">Colchão</span>
                <span class="font-bold">{{ produto.nome }}</span>
              </h4>
              <p
                class="py-4 mt-2 text-gray-600 text-sm italic text-center leading-relaxed flex-grow"
              >
                {{ produto.descricao }}
              </p>

              <p
                class="px-6 py-1 my-4 text-gray-600 text-sm border-2 border-gray-400 bg-transparent rounded-xl transition hover:bg-gray-400 hover:text-white cursor-pointer"
              >
                Saiba mais
              </p>
            </div>
          </div>
        </div>
      </transition>
    </section>

    <section
      id="racine"
      class="relative bg-black bg-cover bg-center py-20 flex flex-col justify-center items-center text-white"
    >
      <img
        src="@/assets/images/bg-racine.png"
        alt="Fundo Racine"
        class="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none"
      />

      <div class="absolute inset-0 bg-black bg-opacity-40"></div>

      <div class="relative z-10 text-white max-w-4xl text-center flex flex-col items-center px-4">
        <img src="@/assets/images/racine.png" alt="Racine" class="mb-6 max-w-xs w-full" />

        <h2 class="text-4xl font-normal mb-10">
          Uma trajetória de<br />
          <strong>grandes conquistas!</strong>
        </h2>

        <p class="text-xl leading-relaxed text-gray-200">
          Presente no mercado da região e administrada por empreendedores do grupo com grande
          experiência de mercado, a
          <strong
            >GRAM-VIDA nasce a partir da tecnologia de alto padrão já utilizada nos móveis
            produzidos pela Racine X</strong
          >, uma marca tradicional e conceituada, que atua no setor moveleiro de Gramado, há mais de
          três décadas.
        </p>

        <p class="text-xl leading-relaxed mt-6 text-gray-200">
          Aqui você encontra produtos de alto padrão, além de um acabamento impecável, para trazer
          saúde, decorar e ambientar seus diferentes espaços.
        </p>
      </div>
    </section>

    <section id="blog" class="bg-white py-20 px-6 max-w-7xl mx-auto text-gray-800">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold mb-4">
          Fique por dentro do nosso <span class="text-yellow-600">Blog</span>
        </h2>
        <p class="text-lg text-gray-600">
          Dicas, novidades e conteúdos para você conhecer mais sobre saúde e bem-estar.
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
        >
          <img :src="post.imagem" :alt="post.titulo" class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col justify-between flex-grow">
            <h3 class="text-xl font-semibold mb-3 text-gray-900">
              {{ post.titulo }}
            </h3>
            <p class="text-gray-600">
              {{ post.resumo }}
            </p>
            <a
              :href="post.link"
              class="inline-block mt-4 text-yellow-600 font-bold hover:underline"
              @click.prevent="alert('Em breve!')"
            >
              Ler mais →
            </a>
          </div>
        </article>
      </div>

      <div class="text-center mt-12">
        <a
          href="/blog"
          class="inline-block px-8 py-3 bg-transparent text-yellow-600 font-semibold rounded-full shadow border border-yellow-600 hover:bg-yellow-700 hover:text-white transition"
        >
          Acessar o Blog
        </a>
      </div>
    </section>

    <section
      id="beneficios"
      class="px-6 w-full mx-auto text-gray-800 pb-60"
      style="background-color: #efefee"
    >
      <div class="flex justify-center mb-12">
        <img
          src="@/assets/images/molas.png"
          alt="Benefícios Molas Ensacadas"
          class="w-auto max-w-md"
          style="margin: 0"
        />
      </div>

      <div class="grid grid-cols-12 gap-10 max-w-6xl mx-auto text-center md:text-left">
        <div class="col-span-12 md:col-span-3 flex flex-col max-w-sm mx-auto">
          <h3 class="text-5xl font-extrabold italic mb-4">Molas<br />Ensacadas</h3>

          <p class="text-md leading-relaxed">
            Passamos um terço das nossas vidas em colchões, por isso é fundamental escolher aquele
            que vai te proporcionar bem-estar e conforto por mais tempo.
          </p>
          <p class="text-md leading-relaxed font-bold mt-4">
            O sistema de molas ensacadas é produzido uma a uma, ensacadas individualmente.
          </p>
        </div>

        <div class="col-span-12 md:col-span-3 max-w-sm mx-auto pt-4">
          <p class="text-lg leading-relaxed italic">
            Por este motivo oferecem suporte e resistência para pessoas de biotipos diferentes,
            porque a pressão sofrida por uma mola não irá interferir nas demais, ou seja, se uma
            pessoa se mexer de um lado da cama, o sono da outra pessoa não será atrapalhado, porque
            ela não sentirá.
          </p>
        </div>

        <div
          class="col-span-12 md:col-span-6 max-w-lg mx-auto px-5 bg-white rounded-2xl shadow-lg p-10"
        >
          <p class="text-2xl leading-tight mb-10">
            Quais os benefícios das <br /><span class="text-4xl font-bold italic">
              molas ensacadas?
            </span>
          </p>

          <p class="text-md leading-relaxed font-bold">
            As molas Pocket são conhecidas pelo extremo conforto e qualidade de sono que oferecem.
            São produzidas em formato de barril e são ensacadas individualmente.
          </p>
          <p class="text-md leading-relaxed mt-4">
            Dessa forma, não existe o ruído comum de um colchão de molas, pois não haverá o atrito
            entre metais.
          </p>
          <p class="text-md leading-relaxed mt-4">
            O sistema ainda oferece suporte e resistência para pessoas de biotipos diferentes.
          </p>
        </div>
      </div>
    </section>

    <section id="contato" class="relative bg-white text-gray-800">
      <div
        class="absolute inset-x-0 -top-32 z-10 max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div class="flex flex-col space-y-4">
          <h3 class="text-2xl max-w-lg max-w-auto font-bold">
            Está pronto para uma noite de sono revigorante e dias mais produtivos?
          </h3>
          <p class="text-lg max-w-lg max-w-auto font-normal italic mb-4">
            Adquira nossos produtos e veja a diferença que eles podem fazer na sua vida.
          </p>

          <h2 class="text-xl max-w-lg max-w-auto font-bold uppercase pt-5">
            Venha nos visitar em nosso show-room
          </h2>
          <p class="text-md">
            <i class="fa fa-map-marker"></i> R. Ledoino Machado. São, 51 - sala B <br />
            Mato Queimado,Gramado - RS <br />
            CEP: 95670-000 <br />
            <i class="fa fa-whatsapp"></i> (54) 99926-2989 <br />
            <i class="fa fa-envelope"></i> comercial@gramvida.com.br
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">Entre em contato</h3>
          <form class="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              class="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="E-mail"
              class="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Mensagem"
              rows="5"
              class="w-full px-4 py-2 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              class="bg-yellow-600 text-white w-full px-6 py-2 rounded hover:bg-yellow-700 transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
      <div class="h-[500px]"></div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import gramadoImg from '@/assets/images/gramado.png'

const imagens = import.meta.glob('@/assets/images/linhas/*.png', { eager: true, import: 'default' })

const imagensPorLinha = {
  Star: [
    imagens['/src/assets/images/linhas/col-gramado-star.png'],
    imagens['/src/assets/images/linhas/col-hortensia.png'],
    imagens['/src/assets/images/linhas/col-lago-negro.png'],
  ],
  'Gran Reserva': [
    imagens['/src/assets/images/linhas/col-neve.png'],
    imagens['/src/assets/images/linhas/col-kikito.png'],
  ],
  Premium: [
    imagens['/src/assets/images/linhas/col-gramado.png'],
    imagens['/src/assets/images/linhas/col-lago.png'],
    imagens['/src/assets/images/linhas/col-hort.png'],
    imagens['/src/assets/images/linhas/col-belvedere.png'],
    imagens['/src/assets/images/linhas/col-azaleia.png'],
    imagens['/src/assets/images/linhas/col-serra.png'],
  ],
  'Pró-Saúde': [
    imagens['/src/assets/images/linhas/col-lumini.png'],
    imagens['/src/assets/images/linhas/col-lum-confort.png'],
    imagens['/src/assets/images/linhas/col-lum-art.png'],
  ],
  Hotel: [
    imagens['/src/assets/images/linhas/col-araucaria.png'],
    imagens['/src/assets/images/linhas/col-platano.png'],
    imagens['/src/assets/images/linhas/col-pla-life.png'],
  ],
  Life: [imagens['/src/assets/images/linhas/col-lirio.png']],
}

const linhas = Object.keys(imagensPorLinha)

const selectedLinha = ref(0)

function criarProdutos(linha, nomes) {
  return nomes.map((nome, idx) => ({
    id: Date.now() + idx,
    nome,
    descricao: `Descrição do produto ${nome}`,
    imagem: imagensPorLinha[linha][idx] || imagensPorLinha[linha][0],
  }))
}

const produtosPorLinha = {
  Star: criarProdutos('Star', ['Gramado Star', 'Hortênsia Plus', 'Lago Negro Plus']),
  'Gran Reserva': criarProdutos('Gran Reserva', ['Neve', 'Kikito']),
  Premium: criarProdutos('Premium', [
    'Gramado',
    'Lago Negro',
    'Hortênsia',
    'Belvedere',
    'Azaléia',
    'Serra',
  ]),
  'Pró-Saúde': criarProdutos('Pró-Saúde', ['Lumini', 'Lumini Confort', 'Lumini Articulado']),
  Hotel: criarProdutos('Hotel', ['Araucária', 'Plátano', 'Plátano Life']),
  Life: criarProdutos('Life', ['Lírio']),
}

const posts = [
  {
    id: 1,
    titulo: 'Como escolher o colchão ideal para você',
    resumo:
      'Saiba quais fatores levar em conta na hora de escolher o colchão que combina com sua necessidade.',
    imagem: '/src/assets/images/blog/blog-02.webp',
    link: '#',
  },
  {
    id: 2,
    titulo: 'Os benefícios de uma boa noite de sono',
    resumo: 'Entenda como o sono influencia diretamente na sua saúde e bem-estar.',
    imagem: '/src/assets/images/blog/blog-01.jpg',
    link: '#',
  },
  {
    id: 3,
    titulo: 'Cuidados para manter seu colchão sempre novo',
    resumo: 'Dicas práticas para prolongar a vida útil e a higiene do seu colchão.',
    imagem: '/src/assets/images/blog/blog-03.jpg',
    link: '#',
  },
]

function goToSection(id) {
  const section = document.querySelector(`#${id}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
