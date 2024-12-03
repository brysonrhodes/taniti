<script>
    import Header from "$lib/components/header.svelte";
    import Hero from "$lib/components/hero.svelte";
    import TextSection from "$lib/components/textSection.svelte";
    import LeftImageRightText from "$lib/components/leftImageRightText.svelte";
    import RightImageLeftText from "$lib/components/rightImageLeftText.svelte";
    import Footer from "$lib/components/footer.svelte";

    import resortImage from '../lib/assets/resort-hero-image.jpg';
    import weddingImage from '../lib/assets/pexels-emma-bauso-1183828-2253870.jpg';
    import remoteWorkerImage from '../lib/assets/pexels-cottonbro-5054213.jpg';
</script>

<style>
    p {
        margin-top: 1.5em;
    }
</style>


<Header active="Home"/>
<Hero imgSrc={resortImage} heroText={"You're Dream Awaits"} callToAction={"Book Now"}/>
<TextSection tag={"h1"} heading={"Our Island. Our Home."}>
    <p>Taniti, our home, is a tropical island in the Pacific. We love to invite visitors into our little piece of paradise and can't wait for you to see the breathtaking views it provides us. For a country, we are small with only 500 square miles to our name, but our land is rich. From lush rainforests and a mountainous backbone to our picture-perfect beaches and our active volcano, Taniti has something for everyone to enjoy. With only 20,000 Indigenous people living on the island, we have more than enough room to accommodate you for whatever your occasion may be.</p>
    <p>While we love tourists, you'll find a bustling local economy in fishing and agriculture to feed you throughout your stay, so you never have to worry about the quality or freshness of the wonderful food you'll find in our restaurants. Take some time to unwind and experience life in the slow lane. A tour guide from Taniti City can show you all the wonderful local hangouts across the island and help you communicate with our citizens who live further inland and may not speak your mother tongue.</p>
</TextSection>
<LeftImageRightText image={weddingImage} alt="Man and woman kissing under veil." heading="The perfect wedding destination." tag="h2">
    <p>Taniti, is the perfect place to host your destination or have your honeymoon. With the wide array of natural attractions on the island and local entertainment in Taniti City, your soon-to-be spouse and your guests will want for nothing. We recommend tying the knot at one of our many beachside hotels, or even having a more adventurous ceremony at our local volcano. </p>
</LeftImageRightText>
<RightImageLeftText image={remoteWorkerImage} alt="A woman typing on a computer in front of a window." heading="The perfect place for remote" tag="h2">
    <p>Taniti, is proud to extend longer travel visas for workers looking to taste the exotic life. Whether you own your own company, work the corporate grind, or produce content for a growing media empire, we look forward to hosting you at one of our premium business offerings. Visas can sound complicated and scary, but our work-tourism office will help you with everything you need to get started.</p>
</RightImageLeftText>
<Footer />
