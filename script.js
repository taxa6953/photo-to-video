const scanButton = document.getElementById('scanButton');
const videoElement = document.getElementById('video');

// زمانی که دکمه زده می‌شود، دوربین باز می‌شود
scanButton.addEventListener('click', function() {
    // دسترسی به دوربین
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            videoElement.srcObject = stream;
            videoElement.style.display = 'block';
            videoElement.play();
        })
        .catch(function(error) {
            console.error('Error accessing the camera: ', error);
        });
});