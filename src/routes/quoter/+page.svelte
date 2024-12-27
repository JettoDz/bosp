<script>
    // You can add any necessary script here
    import { quoteString } from "./brains";

    function trigger() {
        let textContainer1 = document.getElementById("textContainer1");
        let textContainer2 = document.getElementById("textContainer2");
        let checkbox1 = document.getElementById("checkbox1");
        let checkbox2 = document.getElementById("checkbox2");

        let text1 = textContainer1.value;
        let text2 = quoteString(text1, checkbox1.checked, checkbox2.checked);
        textContainer2.value = text2;
    }

    function copyToClipboard() {
        let textContainer2 = document.getElementById("textContainer2");
        navigator.clipboard.writeText(textContainer2.value);
    }

    function triggerClick() {
        const button = this;
        const currentText = document.createElement('span');
        const newText = document.createElement('span');

        currentText.className = 'current-text';
        currentText.innerText = 'Copy to clipboard';
        newText.className = 'new-text';
        newText.innerText = 'Copied!'; 

        button.innerHTML = '';
        button.appendChild(newText);

        // Change background color
        button.style.backgroundColor = 'var(--accent-1)'; 
        button.style.color = 'var(--fg-main)';

        // Add the clicked class to trigger the animation
        button.classList.add('clicked');
        
        copyToClipboard();
        // After 1 second, swap back to the original text and background color
        setTimeout(function() {
            newText.innerText = 'Copy to Clipboard';

            // Swap the classes to reverse the animation
            button.classList.remove('clicked');

            // Change colors back to original
            button.style.backgroundColor = ''; 
            button.style.color = '';
        }, 1000); // 1 second delay
    }
</script>
<div class="page">
    <h1>Quoter</h1>
    <h3>Quickly turn new-line based lists into quoted (or not), comma-separated strings.</h3>

    <div class="work-card" style="height: inherit;">
        <div id="checkboxes">
            <input type="checkbox" id="checkbox1" name="checkbox1">
            <label for="checkbox1">Remove quotes</label><br>
            <input type="checkbox" id="checkbox2" name="checkbox2">
            <label for="checkbox2">Use double quotes</label><br>
        </div>

        <div id="textContainers">
            <textarea id="textContainer1" placeholder="Paste your list here!" on:change={trigger}/>
            <div style="width: 10px" />
            <textarea id="textContainer2" readonly />
            <button id="c2c" on:click={triggerClick}>Copy to Clipboard</button>
        </div>
    </div>
</div>

<style>

    #checkboxes {
        display: inline-flex;
        padding: 0.5rem 0 0 0;
    }

    #textContainers {
        width: 100%; 
        display: inline-flex;
        height: 95%;
        align-items: center;
        & textarea {
            width: 45%;
            height: 90%;
        }
        & div {
            width: 10%;
            height: 90%;
        }
    }

    #c2c{
        height: 54px;
        width: 140px;
        position: relative;
        overflow: hidden;
        transition: background-color 0.5s ease; /* Add background-color transition */

        &.span {
            position: absolute;
            width: 100%;
            text-align: center;
            transition: transform 0.5s ease;
        }
        & .new-text {
            transform: translateY(100%);
        }   
        &.clicked {
            & .current-text {
                transform: translateY(-100%);
            }
            & .new-text {
                transform: translateY(0);
            }
        }
    }
</style>