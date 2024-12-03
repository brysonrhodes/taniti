<script lang="ts">
    import youtube from "../assets/YouTube_full-color_icon_(2017).svg.png";
    import x from '../assets/x-icon.webp';
    import facebook from '../assets/facebook.png';

    const handleClick = (str: string) => {
        window.open(str, '_blank')?.focus();
    }

    const handleSubmit = () => {
        alert("Thank you for joining the newsletter!");
    }
</script>

<style>
    .oranienbaum {
        font-family: "Oranienbaum", serif;
    }

    footer {
        margin-top: 3em;
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        background: rgba(var(--color-surface-100) / 1);
        text-align: center;
    }

    .wrapper {
        width: 98%;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }

    hr {
        margin-bottom: .5em;
    }

    .center {
        text-align: center;
    }

    .chips {
        display: flex;
        align-items: center;
        gap: .5em;
    }

    .chip img {
        width: 15px;
    }

    button {
        margin-top: 1em;
    }

    small {
        margin-top: 2em;
    }

    @media only screen and (max-width: 1200px) {
        .wrapper {
            flex-direction: column;
            gap: 3em;
            align-items: center;
            text-align: center;
            margin-bottom: 3em;
        }

        form {
            margin-top: 1.5em;
        }
    }
</style>

<footer>
    <div class="wrapper">
        <div class="column">
            <p class="oranienbaum">Quick Links</p>
            <hr>
            <ul>
                <a href="/" class="anchor"><li>Home</li></a>
                <a href="/transportation" class="anchor"><li>Transportation</li></a>
                <a href="/lodging" class="anchor"><li>Lodging</li></a>
                <a href="/attractions" class="anchor"><li>Attractions</li></a>
                <a href="/dining" class="anchor"><li>Dining</li></a>
                <a href="/contact-us" class="anchor"><li>Contact</li></a>
            </ul>
        </div>
        <div class="column center">
            <p class="oranienbaum">Our Socials</p>
            <hr>
            <div class="chips">
                <button class="chip variant-soft hover:variant-filled" on:click={handleClick("https://www.youtube.com")}>
                    <span><img src={youtube} alt="" /></span>
                    <span>Youtube</span>
                </button>
                <button class="chip variant-soft hover:variant-filled" on:click={handleClick("https://www.facebook.com")}>
                    <span><img src={facebook} alt="" /></span>
                    <span>Facebook</span>
                </button>
                <button class="chip variant-soft hover:variant-filled" on:click={handleClick("https://www.twitter.com")}>
                    <span><img src={x} alt="" /></span>
                    <span>Twitter (X)</span>
                </button>
            </div>
        </div>
        <div class="column">
            <p class="oranienbaum">Island News</p>
            <hr>
            <p>Stay up to date about important travel information:</p>
            <form>
                <label class="label">
                    <span>Email:</span>
                    <input class="input" type="email" placeholder="email@gmail.com" />
                </label>
                <button type="button" class="btn variant-filled-primary" on:click={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
    <small class="center">Copyright © 2024 Taniti Island</small>
</footer>