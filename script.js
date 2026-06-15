const githubButton = document.getElementById("github")
const liButton = document.getElementById("linkedin")
const devlog = document.getElementById("devlog-button")

// projects
const calcProj = document.getElementById("calc")
const weblink = document.getElementById("weblink")
const calcDemo = document.getElementById("calcPr")
const synthButton = document.getElementById("synthButton")
const tapbackButton = document.getElementById("tapback")


githubButton.addEventListener("click", function()
{
    window.location.href = "https://github.com/mdt516";
})

liButton.addEventListener("click", function()
{
    window.location.href = "https://www.linkedin.com/in/matt-tindall-7698972ba/";
})

devlog.addEventListener("click", function()
{
    window.location.href = "devlog/book/home.html"
})


// projects
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

synthButton.addEventListener("click", function()
{
    window.location.href = "https://github.com/mdt516/voxGenesis"
})

tapbackButton.addEventListener("click", function()
{
    window.location.href = "https://github.com/mdt516/tapback"
})