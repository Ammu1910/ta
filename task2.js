// Get references to HTML elements
const nameInput = document.getElementById("nameInput");
const imageInput = document.getElementById("imageInput");
const addImageButton = document.getElementById("addImageButton");
const profileContainer = document.getElementById("profileContainer");
const customFileLabel = document.querySelector(".label-image")

// Function to add an image and name as a card
function addProfile() {
    const userName = nameInput.value.trim();
    if (userName !== "" && imageInput.files.length > 0) {
        // addImageButton.disabled=false;
        const file = imageInput.files[0];
        // const imageUrl= URL.createObjectURL(file);
        // imageInput.style.backgroundImage=`url('${imageUrl})`;

        const profileCard = document.createElement("div");
        profileCard.className = "profile-card";
        
        const profileImage = document.createElement("img");
        profileImage.src = URL.createObjectURL(file);

        
        const profileName = document.createElement("div");
        profileName.textContent = userName;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", () => {
            profileCard.remove();
        });

        profileCard.appendChild(profileImage);
        profileCard.appendChild(profileName);
        profileCard.appendChild(deleteButton);

        profileContainer.appendChild(profileCard);

        // Clear input fields
        nameInput.value = "";
        resetImageInput();
        // imageInput.value = 'url("image upload.jpg")';
    }
}
function displaySelectedImage(input) {
    const customFileLabel = document.querySelector('.label-image');
    if (input.files.length > 0) {
        const file = input.files[0];
        const imageUrl = URL.createObjectURL(file);
        customFileLabel.style.backgroundImage = `url('${imageUrl}')`;
        customFileLabel.style.backgroundSize = 'cover';
    }
}
function resetImageInput() {
    customFileLabel.style.backgroundImage = 'url("image upload.jpg")';
    customFileLabel.style.backgroundSize = '200px';
    imageInput.value = '';
    customFileLabel.textContent = 'Select an Image';
}

// Add event listener to the "Add" button
addImageButton.addEventListener("click", addProfile);
