let InputElement = document.getElementById("inputEle")
let ButtonElement = document.getElementById("buttonEle")
let InnerContainerEle = document.getElementById("innerContElement")
let InnerContainerEle1 = document.getElementById("innerContElement-1")
let themeToggleEle = document.getElementById("themeToggleBtn")
let bgContainerEle = document.getElementById("bgContainer")
let headElement = document.getElementById("headEleid")
let searchLogoElement = document.getElementById("search-logo")



let paragraphDiv = document.getElementById("paraContainer1")
let paragraphDiv1 = document.getElementById("paraContainer2")
let paragraphDiv2 = document.getElementById("paraContainer3")

themeToggleEle.addEventListener("click", function(event) {
    themeToggleEle.classList.toggle("light-mode")
    bgContainerEle.classList.toggle("bg-light-mode")
    headElement.classList.toggle("head-light-mode")
    InputElement.classList.toggle("input-light-mode")
    searchLogoElement.classList.toggle("search-white-icon")
    InnerContainerEle.classList.toggle("inner-container-light-mode")
    InnerContainerEle1.classList.toggle("inner-container-light-mode")

    let innerHead = document.getElementById("innerheadid")
    if (innerHead) {
        innerHead.classList.toggle("inner-head-light")
    }

    let locationElem = document.getElementById("locationid")
    if (locationElem) {
        locationElem.classList.toggle("inner-head-light")
    }

    let IconElement = document.getElementById("Iconid")
    if (IconElement) {
        IconElement.classList.toggle("location-white-icon")
    }

    let ElementOne = document.getElementById("ele1");
    if (ElementOne) {
        ElementOne.classList.toggle("Element-light")
    }
    let ElementTwo = document.getElementById("ele2");
    if (ElementOne) {
        ElementTwo.classList.toggle("Element-light")
    }
    let ElementThree = document.getElementById("ele3");
    if (ElementThree) {
        ElementThree.classList.toggle("Element-light")
    }
    let ElementFour = document.getElementById("ele4");
    if (ElementFour) {
        ElementFour.classList.toggle("Element-light")
    }
    let ElementFive = document.getElementById("ele5");
    if (ElementFive) {
        ElementFive.classList.toggle("Element-light")
    }
    let ElementSix = document.getElementById("ele6");
    if (ElementSix) {
        ElementSix.classList.toggle("Element-light")
    }



})



function GetUserDetails(JsonData) {

    InnerContainerEle.innerHTML = "";
    paragraphDiv.innerHTML = "";
    paragraphDiv1.innerHTML = "";
    paragraphDiv2.innerHTML = "";

    let image_url = JsonData.avatar_url
    let Name = JsonData.name
    let Repos = JsonData.public_repos
    console.log(Repos)
    let followers = JsonData.followers
    let Following = JsonData.following
    let location = JsonData.location


    const isLightTheme = themeToggleEle.classList.contains("light-mode");

    let imageElement = document.createElement("img")
    imageElement.src = image_url
    imageElement.classList.add("image-style")
    InnerContainerEle.appendChild(imageElement)

    let headingElement = document.createElement("h1")
    headingElement.id = "innerheadid"
    headingElement.textContent = Name
    headingElement.classList.add("inner-head")
    if (isLightTheme) headingElement.classList.add("inner-head-light");
    InnerContainerEle.appendChild(headingElement)

    // create div
    let locationontainer = document.createElement("div")
    // Create the icon element
    const icon = document.createElement("i");
    icon.id = "Iconid"
    icon.className = "fa-solid fa-location-dot white-icon";
    if (isLightTheme) icon.classList.add("location-white-icon");



    // Create the text span
    const span = document.createElement("span");
    span.id = "locationid"
    span.textContent = location;
    span.classList.add("span-style")
    if (isLightTheme) span.classList.add("inner-head-light");
    // Append both to the container
    locationontainer.appendChild(icon);
    locationontainer.appendChild(span);
    InnerContainerEle.appendChild(locationontainer);


    let spanEle1 = document.createElement("span")
    spanEle1.id = "ele1"
    spanEle1.textContent = Repos
    spanEle1.classList.add("repo-count")
    if (isLightTheme) spanEle1.classList.add("Element-light");
    paragraphDiv.appendChild(spanEle1)

    let spanEle2 = document.createElement("span")
    spanEle2.id = "ele2"
    spanEle2.textContent = "Repositories"
    spanEle2.classList.add("repo-label")
    if (isLightTheme) spanEle2.classList.add("Element-light");
    paragraphDiv.appendChild(spanEle2)

    let spanEle3 = document.createElement("span")
    spanEle3.id = "ele3"
    spanEle3.textContent = followers
    spanEle3.classList.add("repo-count")
    if (isLightTheme) spanEle3.classList.add("Element-light");
    paragraphDiv1.appendChild(spanEle3)

    let spanEle4 = document.createElement("span")
    spanEle4.id = "ele4"
    spanEle4.textContent = "Followers"
    spanEle4.classList.add("repo-label")
    if (isLightTheme) spanEle4.classList.add("Element-light");
    paragraphDiv1.appendChild(spanEle4)

    let spanEle5 = document.createElement("span")
    spanEle5.id = "ele5"
    spanEle5.textContent = Following
    spanEle5.classList.add("repo-count")
    if (isLightTheme) spanEle5.classList.add("Element-light");
    paragraphDiv2.appendChild(spanEle5)

    let spanEle6 = document.createElement("span")
    spanEle6.id = "ele6"
    spanEle6.textContent = "Following"
    spanEle6.classList.add("repo-label")
    if (isLightTheme) spanEle6.classList.add("Element-light");
    paragraphDiv2.appendChild(spanEle6)
}


InputElement.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        let value = InputElement.value
        let options = {
            method: "GET"
        }

        let url = "https://api.github.com/users/" + value
        loader.style.display = "block"; // 🟦 Show loader

        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(JsonData) {

                GetUserDetails(JsonData)

            })
            .finally(function() {
                loader.style.display = "none"; // ⬛ Hide loader
            });
    }
})

ButtonElement.addEventListener("click", function(event) {
    let value = InputElement.value
    let options = {
        method: "GET"
    }

    let url = "https://api.github.com/users/" + value

    loader.style.display = "block"; // 🟦 Show loader

    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(JsonData) {
            console.log(JsonData)

            GetUserDetails(JsonData)

        })
        .finally(function() {
            loader.style.display = "none"; // ⬛ Hide loader
        });
})