<script>
    import { calculate } from "./brains";
    let value = "";
    let rounds = 12;
</script>

<div class="page">
    <h1>Bcrypt</h1>

    <div>
        <div>
            <div>
                <label for="source">Cadena a encriptar:</label>
                <input bind:value type="text" name="source" />
            </div>
            <div>
                <label for="rounds">Ciclos:</label>
                <input bind:value={rounds} type="number" name="rounds" />
            </div>
        </div>
        <div class="work-card">
            <h3>Output:</h3>
            {#await calculate(value, rounds)}
                <p>Hasheando...</p>
            {:then result}
                <div>
                    <div>
                        <p>Salt:</p>
                        <p class="codeblock">{result.substring(0, 7)}</p>
                    </div>
                    <div>
                        <p>Hash:</p>
                        <p class="codeblock">{result.substring(7)}</p>
                    </div>
                </div>
            {:catch error}
                <p>Error: {error}</p>
            {/await}
        </div>
    </div>
</div>
