<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Hero from "$lib/components/hero.svelte";
    import Footer from "$lib/components/footer.svelte";
    import { base } from "$app/paths";

    import banquet from '$lib/assets/banquet.jpg';
    import burger from '$lib/assets/pexels-valeriya-1639557.jpg';
    import ramen from '$lib/assets/ramen.jpg';
    import salmonToast from '$lib/assets/salmon-toast.jpg';
    import comfort from '$lib/assets/local-comfort.jpg';
    import friedChicken from '$lib/assets/fried-chicken.jpg';
    import springRolls from '$lib/assets/spring-rolls.jpg';
    import fishTaco from '$lib/assets/fish-taco.jpg';
    import seafood from '$lib/assets/seafood.jpg';
    import shrimp from '$lib/assets/shrimp.jpg';
    import bbq from '$lib/assets/bbq.jpg';

    export const prerender = true;
    
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


<Header active="Dining"/>
<Hero imgSrc={banquet} heroText="Food heals the soul."/>
<div class="wrapper">
    <div class="w-full text-token grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("Burger Bay House")}>
            <header>
                <img src={burger} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>American</h6>
                <h3 class="h3" data-toc-ignore>Burger Bay House</h3>
                <article>
                    <p>
                        The best Burger on the Island.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>10am - 12am</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("Red Fort")}>
            <header>
                <img src={ramen} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>Pan-Asian</h6>
                <h3 class="h3" data-toc-ignore>Red Fort</h3>
                <article>
                    <p>
                        Asian at it's finest.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>M-F 6am - 6pm</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("The Corner Shop")}>
            <header>
                <img src={salmonToast} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>Local Cuisine</h6>
                <h3 class="h3" data-toc-ignore>The Corner Shop</h3>
                <article>
                    <p>
                        Breakfast Melodies.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Everyday</h6>
                    <small>5am - 12pm</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("Tantiti's Secret Corner")}>
            <header>
                <img src={comfort} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>Local Cuisine</h6>
                <h3 class="h3" data-toc-ignore>Tantiti's Secret Corner</h3>
                <article>
                    <p>
                        Local comfort food.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>M-W 3pm - 11pm</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("Kentuky Dive Bar")}>
            <header>
                <img src={friedChicken} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>American</h6>
                <h3 class="h3" data-toc-ignore>Kentuky Dive Bar</h3>
                <article>
                    <p>
                        Everything Fried Food.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>12am - 12pm</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("Panda Rising")}>
            <header>
                <img src={springRolls} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>Pan-Asian</h6>
                <h3 class="h3" data-toc-ignore>Panda Rising</h3>
                <article>
                    <p>
                        Fresh Asian classics.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>6am - 11pm</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("Taniti Dinner")}>
            <header>
                <img src={fishTaco} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>Local Cuisine</h6>
                <h3 class="h3" data-toc-ignore>Taniti Dinner</h3>
                <article>
                    <p>
                        A friendly local fish stop.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>6am - 3pm</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("Pedro's Pantry")}>
            <header>
                <img src={seafood} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>Local Cuisine</h6>
                <h3 class="h3" data-toc-ignore>Pedro's Pantry</h3>
                <article>
                    <p>
                        Fresh Caught Fish in Yellow Leaf Bay
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>1pm - 11pm</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("Mama Mary's Fish and Rice")}>
            <header>
                <img src={shrimp} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>Local Cuisine</h6>
                <h3 class="h3" data-toc-ignore>Mama Mary's Fish and Rice</h3>
                <article>
                    <p>
                        Lovely local quisine.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>11am - 1am</small>
                </div>
            </footer>
        </a>

        <a class="card bg-inital card-hover overflow-hidden" href="{base}/dining" on:click={handleClick("Papa's BBQ")}>
            <header>
                <img src={bbq} alt="" class="bg-black/50 w-full object-cover aspect-[21/9]" />
            </header>
            <div class="p-4 space-y-4">
                <h6 class="h6" data-toc-ignore>American</h6>
                <h3 class="h3" data-toc-ignore>Papa's BBQ</h3>
                <article>
                    <p>
                        American Sytle BBQ.
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
            <footer class="p-4 flex justify-start items-center space-x-4">
                <div class="flex-auto flex justify-between items-center">
                    <h6 class="font-bold" data-toc-ignore>Hours</h6>
                    <small>11am - 9pm</small>
                </div>
            </footer>
        </a>
    </div>
</div>
<Footer />