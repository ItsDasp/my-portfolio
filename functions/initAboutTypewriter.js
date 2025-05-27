import { typeWriter } from "./typeWriter.js";

export function initAboutTypewriter() {
  const aboutP1 = document.getElementById("about-p1");
        const aboutP2 = document.getElementById("about-p2");

const text1 =
  "I'm Diego, a self-taught developer. I was born in Santiago, Chile 🇨🇱 on August 24, 2006. I've always been curious about coding and tech — probably because as a kid I was once told that messing with the computer’s command prompt was dangerous, lol. My real journey started in 2018, motivated by the idea of creating a Discord bot. That first project was called 'Sakamoto'. It wasn't a huge or super complicated bot, but it’s where it all began — where I started experimenting, learning, and figuring things out. Around 2019, I created 'Senko', another Discord bot, with more experience under my belt, and that’s the only project I’ve kept active for the longest time.";

const text2 =
  "Until mid-2020, all my knowledge was pure JavaScript, but I didn’t want to get stuck there. So I started exploring more: learning TypeScript, some HTML, and CSS — basically completing the web dev toolkit, lol. I’ve always seen myself more as a back-end dev, so I picked up languages like LUA and Python. More recently, I learned React and I’m pretty comfortable with it. I’ve also started diving into Java and I’m still learning, plus I’ve been getting my hands on C++ and C#.";

        const aboutSection = document.querySelector("#about");
        
        let hasTyped = false;

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasTyped) {
                hasTyped = true;
                aboutP1.style.opacity = "1";
                typeWriter(aboutP1, text1, 30).then(() => {
                    aboutP2.style.opacity = "1";
                    return typeWriter(aboutP2, text2, 30);
                });
                }
            });
            },
            { threshold: 0.5 }
        );

        observer.observe(aboutSection);
}
