<script>
    import Header from "$lib/components/header.svelte";
    import Hero from "$lib/components/hero.svelte";
    import Footer from "$lib/components/footer.svelte";
    import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";

    import envelope from '$lib/assets/envelope.jpg';

    const handleSubmit = () => {
        alert("Thank you for reaching out!");
    }
</script>

<style>
    .wrapper {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3em;
        margin-bottom: 3em;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    h2 {
        margin-bottom: .5em;
    }

    hr {
        display: none;
    }

    @media only screen and (max-width: 1100px) {
        .wrapper {
            flex-direction: column-reverse;
            gap: 3em;
        }

        hr {
            display: block;
        }

        .divider-vertical {
            display: none;
        }
    }
</style>


<Header active="Contact"/>
<Hero imgSrc={envelope} heroText="We'd love to hear from you." />
<div class="wrapper">
    <div class="column">
        <h2 class="h2">Frequently Asked Questions:</h2>
        <Accordion class="accordion">
            <AccordionItem open>
                <svelte:fragment slot="summary"><b>What is the standard outlet on Taniti?</b></svelte:fragment>
                <svelte:fragment slot="content">Power outlets are 120 volts (the same as in the United States).</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="summary"><b>Can I buy alcohol all day?</b></svelte:fragment>
                <svelte:fragment slot="content">Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="summary"><b>How old do I have to be to drink alcohol?</b></svelte:fragment>
                <svelte:fragment slot="content">The drinking age on Taniti is 18 and the drinking age is not strictly enforced.</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="summary"><b>Will locals understand me?</b></svelte:fragment>
                <svelte:fragment slot="content">Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="summary"><b>What happens if I get hurt while I'm on Taniti?</b></svelte:fragment>
                <svelte:fragment slot="content">There is one hospital and several clinics. The hospital has many multilingual employees.</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="summary"><b>Is Taniti safe?</b></svelte:fragment>
                <svelte:fragment slot="content">Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="summary"><b>Are services always open?</b></svelte:fragment>
                <svelte:fragment slot="content">Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="summary"><b>What currency does Taniti use?</b></svelte:fragment>
                <svelte:fragment slot="content">Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.</svelte:fragment>
            </AccordionItem>
        </Accordion>
    </div>
    <hr/>
    <span class="divider-vertical h-200" />
    <div class="column">
        <h2 class="h2">Get In Touch</h2>
        <form>
            <label class="label">
                <span>First Name:</span>
                <input class="input" type="text" placeholder="Jane" />
            </label>
            <label class="label">
                <span>Last Name:</span>
                <input class="input" type="text" placeholder="Doe" />
            </label>
            <label class="label">
                <span>Email:</span>
                <input class="input" type="email" placeholder="email@gmail.com" />
            </label>
            <label class="label">
                <span>Question or Comment:</span>
                <textarea class="textarea" rows="4" placeholder="Please let us know your inquiry or thoughts."/>
            </label>
            <button type="button" class="btn variant-filled-primary" on:click={handleSubmit}>Submit</button>
        </form>
    </div>
</div>
<Footer />