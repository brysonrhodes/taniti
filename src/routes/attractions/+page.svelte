<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Hero from "$lib/components/hero.svelte";
    import Footer from "$lib/components/footer.svelte";
    import { base } from "$app/paths";

    import crowd from '$lib/assets/crowd.jpg';
    import rainforest from '$lib/assets/pexels-davidriano-975771.jpg';
    import beach from '$lib/assets/pexels-fabianwiktor-994605.jpg';
    import volcano from '$lib/assets/volcano.jpg';
    import snorkeling from '$lib/assets/snorkleing.jpg';
    import helicopter from '$lib/assets/helicopter.jpg';
    import pub from '$lib/assets/pub.jpg';

    const handleClick = (str: string) => {
        alert("You are scheduling a " + str + " attraction");
    }
</script>

<style>
    .wrapper {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3em;
        margin-bottom: 3em;
    }
</style>


<Header active="Attractions"/>
<Hero imgSrc={crowd} heroText="Life happens outside of the hotel room."/>
<div class="wrapper">
    <div class="w-full text-token grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a class="card bg-inital card-hover overflow-hidden" href="{base}/attractions" on:click={handleClick("rainforest tour")}>
            <header>
                <img src={rainforest} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>A day in Nature</h6>
                <h3 class="h3" data-toc-ignore>Tour of Taniti's Rainforest</h3>
                <article>
                    <p>
                        Go on an adventure with a wonderful tour around our Lush rainforests. You'll see exotic animals,
                        waterfalls, old growth trees, parrots, and plenty more on these tours. We offer tours for hikers, and Jeep tours
                        for those who prefer to see life from an off-road vehicle.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>M-F (Contact Us to Schedule)</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/attractions" on:click={handleClick("beach day")}>
            <header>
                <img src={beach} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>Sandy Serenity</h6>
                <h3 class="h3" data-toc-ignore>Yellow Leaf Beach</h3>
                <article>
                    <p>
                        Spend a wonderful day in the sun at our most popular beach, Yellow Leaf Beach in Yellow Leaf Bay!
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Everyday</h6>
                    <small>Sunrise to Sunset</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/attractions" on:click={handleClick("volcano hike")}>
            <header>
                <img src={volcano} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>A Hot Date</h6>
                <h3 class="h3" data-toc-ignore>Hike to Taniti's Volcano</h3>
                <article>
                    <p>
                        Are you ready for a hot date? Literally, hot? Take some time to hike up to our active volcano and see the red hot magma flows as they continously work to expand the island that we call home. Be careful not to step somewhere that might melt your shoe!
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Everyday</h6>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/attractions" on:click={handleClick("snorkeling")}>
            <header>
                <img src={snorkeling} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>Underwater Worlds</h6>
                <h3 class="h3" data-toc-ignore>Snorkeling in Yellow Leaf Bay</h3>
                <article>
                    <p>
                        See what lives underneath the waves and experience the life that Taniti has cultivated for thousands of years. It isn't often that we get to appreciate how diverse our ocean ecosystems are, and a day underwater is just the time to do that.
                    </p>
                    <br/>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Everyday</h6>
                    <small>Sunrise to Sunset</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/attractions" on:click={handleClick("helicopter tour")}>
            <header>
                <img src={helicopter} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>View from the Air</h6>
                <h3 class="h3" data-toc-ignore>Tour of Taniti Forest</h3>
                <article>
                    <p>
                        View the island from the sky like the birds of our ancestors! You may think you've seen the island before, but getting some altitude will bring you a new appreciation for the Island.
                    </p>
                    <br/>
                    <br/>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>As Needed</h6>

                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/attractions" on:click={handleClick("pub night")}>
            <header>
                <img src={pub} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>A Local Drink</h6>
                <h3 class="h3" data-toc-ignore>Pubs in Merriton Landing</h3>
                <article>
                    <p>
                        Visit the night seen in our up-and-coming district of Merriton Landing. This rapidly developing area has many pubs for you to enjoy your evening and a microbrewery for those who some original Tanitian beer.
                    </p>
                    <br/>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>Various</small>
                </div>
            </footer>
        </a>
    </div>
</div>
<Footer />