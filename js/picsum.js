const img = $("#picsum-image");
let currentImageUrl = ""; //Global variable to store the most recent image URL
let previousImageUrl = ""; //Global variable used to check if the same image can be used again.

//Function that gets a new image whenever called, replacing the old image.
function newImage() {
    const uniqueUrl = `https://picsum.photos/200/300?random=${Date.now()}`;
    img.css("background-image", `url(${uniqueUrl})`);
    currentImageUrl = uniqueUrl;
}

//Running the "newImage" function as soon as the page is loaded.
newImage();

//Functionality for the "new image" button.
$("#new-image").on("click", newImage);


$(".submit").on("click", (e) => {
    e.preventDefault();

    const email = $("input[name='email']").val();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        console.log(email)
        $("h2, #assigned-images").fadeIn(1500);
        $("#ie-text").removeClass("invalid-email-text")
        $(".email").removeClass("invalid-email");
        const existingList = $(`ul[data-email="${email}"]`);
        
        
        if (existingList.length > 0 && previousImageUrl !== currentImageUrl) {
            existingList.append(`<li><img src="${currentImageUrl}" alt="Assigned Image"></li>`);
            previousImageUrl = currentImageUrl;
            $("#same-image-warning").html(``);
        } else if (existingList.length === 0) {
            $("#assigned-images").append(`<h3>${email}</h3><ul data-email="${email}"><li><img src="${currentImageUrl}" alt="Assigned Image"></li></ul>`);
            previousImageUrl = currentImageUrl;
            $("#same-image-warning").html(``);
        } else {
            $("#same-image-warning").html(`<p>You cannot assign an image to the same email twice!</p>`);
        }
        
    } else {
        $("#ie-text").addClass("invalid-email-text")
        $(".email").addClass("invalid-email");
    }
});