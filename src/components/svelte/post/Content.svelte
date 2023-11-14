<script lang="ts">
    import type { PostResource } from '../../../types'
    export let post: PostResource;
</script>


<main>
    {#if post.type === "Vídeo"}      
        <video controls
            src={post.content}
        >
            <track kind="captions" />
        </video>
    {/if}
    {#if post.type === "Foto"}
        <img src={post.content} alt={post.title}/>
    {/if}
    {#if post.type === "Post"}
        <p>
            {post.content}
        </p>
    {/if}
</main>
