<script>
    let { imgSrc, heroText, callToAction = null } = $props();

    const handleClick = () => {
        alert("Clicked " + callToAction);
    }
</script>

<style>
    .hero-image-wrapper {
        width: 100%;
        min-height: 400px;
        background-position: center center;
        background-size: cover;
    }

    .hero-image {
        height: 400px;
        background-color: rgba(1, 1, 1, .7);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .hero-image b {
        font-family: "Raleway", sans-serif;
        font-size: 2em;
    }

    .hero-image button {
        margin-top: 1em;
    }

</style>

<div class="hero-image-wrapper" style="background-image: url({imgSrc});">
    <div class="hero-image">
        <b>{heroText}</b>
        {#if callToAction}
            <button type="button" class="btn variant-filled-primary" on:click={handleClick}>{callToAction}</button>
        {/if}
    </div>
</div>