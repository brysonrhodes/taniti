<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Hero from "$lib/components/hero.svelte";
    import TextSection from "$lib/components/textSection.svelte";
    import Footer from "$lib/components/footer.svelte";

    import airplane from '$lib/assets/pexels-pixabay-104826.jpg';
    import frontier from '$lib/assets/Frontier_airlines_logo14.png';
    import delta from '$lib/assets/delta-logo.png';
    import americanAirlines from '$lib/assets/american.png';
    import emirates from '$lib/assets/emirates.webp';
    import bus from '$lib/assets/rental-bus.jpg';
    import bikeRental from '$lib/assets/pexels-llucams-2002051.jpg';
    import taxi from '$lib/assets/taxi.jpg';
    import scooter from '$lib/assets/pexels-magda-ehlers-pexels-2547627.jpg';
    import hertz from '$lib/assets/Hertz_Car_Rental_logo.svg.png';
    import enterprise from '$lib/assets/Enterprise_Rent-A-Car_Logo.svg.png';
    import avis from '$lib/assets/Avis-Logo.png';
    import getaround from '$lib/assets/getaround_-europe.png';
    import { get } from "svelte/store";

    const handleClick = (url: string) => {
        window.open(url, "_blank")?.focus();
    }
</script>

<style>
    p {
        margin-top: 1em;
    }

    h3 {
        margin-top: 1em;
        margin-bottom: 1em;
        font-family: "Raleway", sans-serif;
    }

    .img {
        width: 300px;
        height: 300px;
        object-fit: cover;
    }

    .air-travel .logo-cloud {
        margin-top: 3em;
    }

    .logo-item img {
        width: 200px;
    }

    hr {
        margin-top: 3em;
    }

    .btn {
        max-width: 200px;
    }

    .top-1-margin {
        margin-top: 1em;
    }

    .center {
        margin-right: auto;
        margin-left: auto;
    }
</style>


<Header active="Transportation"/>
<Hero imgSrc={airplane} heroText="It begins with the Journey." callToAction="Book Now"/>
<TextSection tag={"h2"} heading={"Air Travel"}>
    <div class="air-travel">
        <p>Most of our visitors prefer to travel by air through our local airport. While we are working diligently to accept larger flights, our runway currently limits the size of the plane you can use to visit us. Regardless, feel free to book with one of our wonderful travel partners who maintain flights between the island and popular destinations the world over!</p>
        <div class="logo-cloud grid-cols-1 lg:!grid-cols-4 gap-2">
            <a class="logo-item" href="https://www.flyfrontier.com/" target="_blank">
                <span><img src={frontier} alt="Frontier"/></span>
            </a>
            <a class="logo-item" href="https://www.delta.com" target="_blank">
                <span><img src={delta} alt="Delta"/></span>
            </a>
            <a class="logo-item" href="https://www.aa.com" target="_blank">
                <span><img src={americanAirlines} alt="American Airlines"/></span>
            </a>
            <a class="logo-item" href="https://www.emirates.com/us/english/" target="_blank">
                <span><img src={emirates} alt="Emirates"/></span>
            </a>
        </div>
    </div>
</TextSection>
<hr>
<TextSection tag={"h2"} heading="Sea Travel">
    <p>For those who prefer living life in the slow lane, you can visit Taniti on a cruise ship that comes once a week. We would love to offer more services in the future and will update the page accordingly as they are available. For now, please checkout travel with our favorite cruise provider!</p>
    <button type="button" class="btn top-1-margin center variant-filled-primary" on:click={handleClick("https://www.carnival.com")}>Book Now</button>
</TextSection>
<hr>
<TextSection tag={"h2"} heading="Local travel">
    <p>Taniti is proud to offer a public transportation services throughout the city that opperate between 5 a.m. and 11 p.m. local time. While we do strive to provide the most convienient travel accomodations to all of our guests, we cannot offer public services throughout the rest of the island.</p>
    <h3 class="h3">Check out these local providers for other travel needs!</h3>
    <section class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
            <img class="img h-auto max-w-full rounded-lg" src={bus} alt="" />
            <small>Taniti Bus Rentals</small>
        </div>
        <div>
            <img class="img h-auto max-w-full rounded-lg" src={bikeRental} alt="" />
            <small>Bike Rentals</small>
        </div>
        <div>
            <img class="img h-auto max-w-full rounded-lg" src={taxi} alt="" />
            <small>Taxi Services</small>
        </div>
        <div>
            <img class="img h-auto max-w-full rounded-lg" src={scooter} alt="" />
            <small>Scooter Rentals</small>
        </div>
    </section>
    <h3 class="h3">Rental Car Providers:</h3>
    <div class="logo-cloud grid-cols-1 lg:!grid-cols-4 gap-2">
        <a class="logo-item" href="https://www.hertz.com" target="_blank">
            <span><img src={hertz} alt="Hertz"/></span>
        </a>
        <a class="logo-item" href="https://www.enterprise.com" target="_blank">
            <span><img src={enterprise} alt="Enterprise"/></span>
        </a>
        <a class="logo-item" href="https://avis.com" target="_blank">
            <span><img src={avis} alt="Avis"/></span>
        </a>
        <a class="logo-item" href="https://getaround.com/" target="_blank">
            <span><img src={getaround} alt="Get Around"/></span>
        </a>
    </div>
</TextSection>
<Footer />