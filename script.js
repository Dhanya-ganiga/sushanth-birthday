function showMessage() {
    document.getElementById("bgMusic").play();

    document.getElementById("message").innerHTML = `
    
    <h2>❤️ Our Story ❤️</h2>
    
    <p>
    It all started on Instagram.
    
    At first, we were just strangers having random conversations.
    
    Slowly, those random chats became daily conversations.
    
    And those conversations became feelings.
    </p>
    
    <br>
    
    <p>
    One day Sushanth said:
    
    "I don't want to waste my time.
    
    I want to be with you forever.
    
    Will you be with me?"
    </p>
    
    <br>
    
    <p>
    My answer was simple.
    
    The day I feel it in my heart,
    I will share my phone number.
    
    And on ❤️ 18 October 2024 ❤️
    
    I shared my number.
    
    That day our journey officially began.
    </p>
    
    `;
    }
    setInterval(createHeart, 1200);

function createHeart(){

    let heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * window.innerWidth + "px";

    heart.style.bottom = "0px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}
function blowCandle(){

    document.getElementById("cake").innerHTML = "🎂";

    document.getElementById("birthdayWish").innerHTML = `

    <h2>🎉 Happy Birthday Sesappa 🎉</h2>

    <p>
    May all your dreams come true.
    </p>

    <p>
    Love You Always,<br>
    Dhanya ❤️
    </p>

    `;
}