document.addEventListener("DOMContentLoaded", () => {
    const emojis = ["🧠", "🎉", "💡", "🍀", "🌟", "🔥", "🎯", "⚡"];
    const gameTiles = document.querySelectorAll(".box");
    const resetBtn = document.getElementById("reset-btn");
    const newBtn = document.getElementById("new-btn");
    const msgContainer = document.getElementById("msg-container");
    const msgElement = document.getElementById("msg");
    const emojiPairs = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    gameTiles.forEach((tile, index) => {
        tile.dataset.emoji = emojiPairs[index]; 
        tile.addEventListener("click", () => revealTile(tile));
    });

    let firstTile = null;
    let matches = 0;
    function revealTile(tile) {
        if (tile.textContent || tile === firstTile) return; 
        tile.textContent = tile.dataset.emoji; 

        if (!firstTile) {
            firstTile = tile; 
        } else {
            
            if (firstTile.dataset.emoji === tile.dataset.emoji) {
                matches++;
                firstTile = null; 
                if (matches === emojis.length) showMessage("You Win! 🎉");
            } else {
                setTimeout(() => {
                    firstTile.textContent = "";
                    tile.textContent = "";
                    firstTile = null;
                }, 800);
            }
        }
    }
    function showMessage(message) {
        msgElement.textContent = message;
        msgContainer.classList.remove("hide");
    }
    resetBtn.addEventListener("click", () => location.reload());
    newBtn.addEventListener("click", () => location.reload());
});
