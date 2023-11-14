<script lang="ts">
  import InfocatalogoApi from '../../services/api';

  let name: string;
  let email: string;
  let password: string;

  function handleClick(e: MouseEvent) {
    InfocatalogoApi.get('');
  }
</script>

<main>
  <div class="w-full max-w-xs">
    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight text-center">Infocatalogo</h2>
    <form class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <h1 class="text-xl font-bold sm:truncate sm:text-1xl text-center">Criar conta</h1>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Nome
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nome" bind:value={name}>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          E-Mail
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-Mail" bind:value={email}>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Senha
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" bind:value={password}>
      </div>
      <div class="flex items-center justify-between">
        <button class="" 
          type="button"
          on:click={handleClick}
          >
          Enviar
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Já possuo cadastro
        </a>
      </div>
    </form>
  </div>
</main>