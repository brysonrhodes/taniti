<script>
    let {children, image, alt, tag, heading} = $props();
</script>

<style>
    h1, h2, h3, h4, h5, h6 {
        font-family: "Raleway", sans-serif;
    }

    .wrapper {
        background: rgba(var(--color-surface-100) / 1);
    }

    .two-columns {
        width: 80%;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        flex-wrap: wrap;
        margin-top: 3em;
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        gap: 1.5em;
        align-items: top;
        justify-content: center;
    }

    .two-columns img {
        width: 400px;
        border-radius: 20px;
    }

    .two-columns .text-section {
        max-width: 517px;
    }
</style>

<div class="wrapper">
    <div class="two-columns">
        <img src={image} alt={alt} />
        <div class="text-section">
            <svelte:element this={tag} class={tag}>{heading}</svelte:element>
            {#if children}
                {@render children()}
            {/if}
        </div>
    </div>
</div>