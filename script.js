const githubButton = document.getElementById("github")
const liButton = document.getElementById("linkedin")
const calcProj = document.getElementById("calc")
const weblink = document.getElementById("weblink")
const calcDemo = document.getElementById("calcPr")


githubButton.addEventListener("click", function()
{
    window.location.href = "https://github.com/mdt516";
})

liButton.addEventListener("click", function()
{
    window.location.href = "https://www.linkedin.com/in/matt-tindall-7698972ba/";
})

calcProj.addEventListener("click", function()
{
    window.location.href = "https://github.com/mdt516/calculator";
})

weblink.addEventListener("click", function()
{
    window.location.href = "https://github.com/mdt516/mdt516.github.io";
})

calcDemo.addEventListener("click", function()
{
    window.location.href = "https://mdt516.github.io/calculator"
})