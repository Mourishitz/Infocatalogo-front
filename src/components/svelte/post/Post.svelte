<script lang="ts">
  import { fly } from 'svelte/transition';
  import type { PostResource } from '../../../types'
  import Content from './Content.svelte';
  import { flip } from 'svelte/animate';
  import InfocatalogoAPI from '../../../services/api'

  export let post: PostResource;
	

	let liked: boolean;
  let likes: number = post.likes;

  post.liked ? liked = true : liked = false; 

  $: list = liked ? ['liked'] : ['unliked'];

  function handleLike(){

    switch (liked) {
      case true:
        InfocatalogoAPI.dislikePost(post.id); 
        likes = likes - 1;
        break;
      
      case false:
        InfocatalogoAPI.likePost(post.id)
        likes = likes + 1;
        break;
    }

    liked = !liked;
  }

</script>

<main class="flex flex-col bg-white rounded-xl">
  <div class="font-bold flex items-center gap-4 p-2 border-b-4 border-b-purple">
    <img width="48" height="48" src="https://img.icons8.com/fluency/48/user-male-circle--v1.png" alt="user-male-circle--v1"/>
    <p>
      {post.author.name}
    </p>
  </div>

  <div class="flex items-center justify-center h-80 bg-gray">
    <Content post={post}/>
  </div>

  <div class="flex justify-between border-t-4 border-t-purple p-2 pb-0">
    <div class="p-2">
      <p>
        {post.title}
      </p>
    </div>
  
    <div class="p-2 flex items-center gap-2">
      <p>{likes}</p>
      <span>
        {#each list as item (item)}
          <button 
            on:click={()=>{handleLike()}} 
            animate:flip={{ duration: 500 }} 
            transition:fly={{ y: 8, duration: 400 }}>
    
              <img class="h-8" src={item}.png alt={item}/>
    
            </button>
        {/each}
      </span>
    </div>
  </div>
</main>