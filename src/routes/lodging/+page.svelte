<script>
    import Header from "$lib/components/header.svelte";
    import Hero from '$lib/components/hero.svelte';
    import TextSection from "$lib/components/textSection.svelte";
    import LeftImageRightText from "$lib/components/leftImageRightText.svelte";
    import RightImageLeftText from "$lib/components/rightImageLeftText.svelte";
    import Footer from "$lib/components/footer.svelte";

    import beachHut from '$lib/assets/beach-hut.jpg';
    import resort from '$lib/assets/resort.jpg';
    import hostel from '$lib/assets/pexels-cottonbro-5137986.jpg';
    import bedAndBreakfast from '$lib/assets/bed-and-breakfast.jpg';
    import mountainHotel from '$lib/assets/mountain-hotel.jpg';
    import motel from '$lib/assets/motel.jpg';
    import beachHotel from '$lib/assets/beach-hotel.jpg';
</script>

<style>
    p {
        margin-top: 1em;
    }

    .img {
        margin-top: 1em;
        width: 300px;
        height: 300px;
        object-fit: cover;
    }
</style>


<Header active="Lodging"/>
<Hero imgSrc={beachHut} heroText="Home is where the luggage is."/>
<TextSection tag={"h2"} heading={"Our Values in Hospitality"}>
    <p>We believe in giving our guests the best we have to offer! Whether you are staying in the sand by the beach, or in a mountainous villa, we want your stay on Taniti Island to be a good one. With that in mind, we have a variety of accommodations to meet every traveler's needs and budget.</p>
    <p>To ensure your safety and the safety of all our honored guests, the Tanitian government regularly inspects all of our island's accommodations to ensure they are up to our strict health and safety regulations.</p>
</TextSection>
<LeftImageRightText image={resort} alt="Man and woman kissing under veil." heading="Resort Living" tag="h2">
    <p>Taniti Spa and Oasis is the best our island has to offer. With breathtaking views of the ocean, personal butlers, and Michelin star-worthy chefs, your stay at the Oasis is bound to be relaxing. From simple rooms to seaside villas, the resort offers a wide array of floorplans that make you want to stay forever.</p>
    <p>The Taniti Spa and Oasis is a wonderful, world-renowned, four-star resort in our backyard. Our concierge will work to get you anything you need for your stay that extends past the regular accommodations that we offer and will help advise you on filling out your itinerary on the island.</p>
</LeftImageRightText>
<TextSection tag={"h2"} heading={"Other Local Treasures"}>
    <section class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
            <img class="img h-auto max-w-full rounded-lg" src={bedAndBreakfast} alt="" />
            <small>Taniti City Bed And Breakfast</small>
        </div>
        <div>
            <img class="img h-auto max-w-full rounded-lg" src={mountainHotel} alt="" />
            <small>Elm Mountain Lodge</small>
        </div>
        <div>
            <img class="img h-auto max-w-full rounded-lg" src={motel} alt="" />
            <small>Palm Motel</small>
        </div>
        <div>
            <img class="img h-auto max-w-full rounded-lg" src={beachHotel} alt="" />
            <small>Sunshine Coast Hotel</small>
        </div>
    </section>
</TextSection>
<RightImageLeftText image={hostel} alt="Bunk beds inside of a hostle." heading="Vacation on a budget" tag="h2">
    <p>Everyone should be able to enjoy some time in a place as beautiful as Taniti! To make that happen, we are excited to offer hostels to all of our guests for an affordable living arrangement while you are on the island. As with all our other lodging, hostels are regularly inspected by the Tanitian government for compliance and safety, so you can rest assured knowing you're safe in our hands!</p>
</RightImageLeftText>
<Footer />