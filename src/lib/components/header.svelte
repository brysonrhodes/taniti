<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import bars from '../assets/bars.svg';
    import { base } from '$app/paths';

    let {active} = $props();
    let navigationDrawer = $state(false);

    const handleMenuClick = () => {
        navigationDrawer = !navigationDrawer;
    }

    const isActive = (str: string) => {
        if(str === active) return "active";
        return "";
    }
</script>

<style>
    .oranienbaum {
        font-family: "Oranienbaum", serif;
    }

    .active {
        text-decoration: underline;
    }

    @media only screen and (min-width: 1200px) {
        .desktop {
            display: inline-block;
        }

        nav {
            font-family: "Raleway", sans-serif;
        }

        nav ul {
            display: flex;
            gap: 1em;
        }
    }

    @media only screen and (max-width: 1200px) {
        .desktop {
            display: none;
        }

        .bars {
            width: 30px;
        }

        .dropdown-menu {
            display: block;
            width: 100%;
            background: rgba(var(--color-surface-100) / 1);
            padding-bottom: 1em;
        }

        .dropdown-menu ul {
            display: flex;
            gap: 1em;
            flex-direction: column;
            align-items: center;
        }
    }
</style>

<AppBar gridColumns="grid-cols-3" slotTrail="place-content-end" slotLead="place-content-start" class="sticky top-0">
    <svelte:fragment slot="lead"><h1 class="h1 oranienbaum">Taniti Island</h1></svelte:fragment>
    <svelte:fragment slot="trail">
        <nav class="desktop">
            <ul>
                <a href="{base}/" class={isActive("Home")}><li>Home</li></a>
                <a href="{base}/transportation" class={isActive("Transportation")}><li>Transportation</li></a>
                <a href="{base}/lodging" class={isActive("Lodging")}><li>Lodging</li></a>
                <a href="{base}/attractions" class={isActive("Attractions")}><li>Attractions</li></a>
                <a href="{base}/dining" class={isActive("Dining")}><li>Dining</li></a>
                <a href="{base}/contact-us" class={isActive("Contact")}><li>Contact</li></a>
            </ul>
        </nav>
        <button class="bars" onclick={handleMenuClick} aria-label="Navigation Toggle" aria-roledescription="Navigation Toggle"><img src={bars} alt=""/></button>
    </svelte:fragment>
</AppBar>
{#if navigationDrawer}
<div class="dropdown-menu">
    <nav>
        <ul>
            <a href="{base}/about"><li>About</li></a>
            <a href="{base}/transportation"><li>Transportation</li></a>
            <a href="{base}/accomodations"><li>Accomodations</li></a>
            <a href="{base}/attractions"><li>Attractions</li></a>
            <a href="{base}/dining"><li>Dining</li></a>
            <a href="{base}/contact-us"><li>Contact Us</li></a>
        </ul>
    </nav>
</div>
{/if}

