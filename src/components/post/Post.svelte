<script lang="ts">
  import { fly } from 'svelte/transition';
  import type { PostResource } from '../../types'
  import Content from './Content.svelte';
  import { flip } from 'svelte/animate';


	export let [height, width]: number[] = [900, 600];
  export let post: PostResource;
	
	let liked = false;
	$: list = liked ? ['liked'] : ['unliked'];

</script>

<main class="debug flex flex-col w-4/12">
  <div class="debug">
    <p>
      {post.author}
    </p>
  </div>

  <div class="debug flex items-center justify-center">
    <Content post={post}/>
  </div>

  <div class="debug">
    <p>
      {post.title}
    </p>
  </div>

  <div class="w-8 h-8">
    {#each list as item (item)}
      <button on:click={()=>{liked = !liked}} animate:flip={{ duration: 500 }} transition:fly={{ y: 8, duration: 400 }}><img src={item}.png alt={item}/></button>
    {/each}
  </div>
</main>