const scanButton = document.getElementById('scanButton');
const videoElement = document.getElementById('video');

// وقتی دکمه اسکن زده می‌شود
scanButton.addEventListener('click', function () {
    // مشخص کردن اینکه دوربین پشتی استفاده شود
    const constraints = {
        video: {
            facingMode: { exact: "environment" } // انتخاب دوربین پشتی
        }
    };

    // دسترسی به دوربین
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            videoElement.srcObject = stream;
            videoElement.style.display = 'block'; // نمایش ویدیو
            videoElement.play();

            // پس از 5 ثانیه، ویدیوی موردنظر از پوشه پخش شود
            setTimeout(function () {
                videoElement.src = 'assets/videos/SKY-1.mp4'; // مسیر فایل ویدیویی
                videoElement.play();
            }, 5000); // 5 ثانیه پس از باز شدن دوربین
        })
        .catch(function (error) {
            console.error('Error accessing the camera: ', error);
            alert('Unable to access the back camera. Please check permissions.');
        });
});