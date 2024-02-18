let btn = document.getElementById("btn");
let body = document.activeElement;
let cards = document.querySelectorAll(".card");
let img = document.querySelectorAll(".card img")
btn.onclick = () =>
{
if(!body.classList.contains("dark"))
{
    body.classList.add("dark");
    for(let i=0; i<cards.length ; i++)
    {
        cards[i].classList.add("dark");
        img[i].src="photo2.jpg";
    }
}
else
{
    body.classList.remove("dark");
    for(let i=0; i<cards.length ; i++)
    {
        cards[i].classList.add("dark");
        img[i].src="photo1.jpg";
    }
}
}
