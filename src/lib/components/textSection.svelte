<script>
    let {children = null, heading, tag} = $props();
</script>

<style>
    h1, h2, h3, h4, h5, h6 {
        text-align: center;
        font-family: "Oranienbaum", serif;
    }

    .text-section {
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-right: auto;
        margin-left: auto
    }
</style>

<div class="text-section">
    <svelte:element this={tag} class={tag}>{heading}</svelte:element>
    {#if children}
        {@render children()}
    {/if}
</div>