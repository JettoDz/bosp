<script>
    import "../app.css";
</script>

<div>
    <div class="header">
        <div class="title"><a href="/">bosp</a></div>
        <nav>
            <div class="navitem">
                <a href="/bcrypt">Bcrypt</a>
            </div>
            <div class="navitem">
                <a href="/about">About</a>
            </div>
        </nav>
    </div>
    <main>
        <slot />
    </main>
</div>
