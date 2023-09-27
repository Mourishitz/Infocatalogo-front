<script lang="ts">
  import type { PostResource } from '../types'

	export let [height, width]: number[] = [100, 600];
  export let post: PostResource;

</script>

<main class="debug flex flex-col" style="height: {height}px; width: {width}px">
    
    <!-- Header -->
    <div class="debug">
      <p>
        {post.author}
      </p>
    </div>


    <div class="debug">
      <p>
        {post.title}
      </p>
    </div>

    <div>
      <p>
        {post.type}
      </p>
    </div>
</main>