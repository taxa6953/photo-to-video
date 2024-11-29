const scanButton = document.getElementById('scanButton');
const videoElement = document.getElementById('video');
const imageElement = document.getElementById('image');

// وقتی دکمه اسکن زده می‌شود
scanButton.addEventListener('click', function() {
    // دسترسی به دوربین
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            videoElement.srcObject = stream;
            videoElement.style.display = 'block'; // نمایش ویدیو
            videoElement.play();
            imageElement.style.display = 'none'; // مخفی کردن تصویر

            // پس از مدت زمان خاصی و یا شناسایی عکس، ویدیو شروع به پخش خواهد کرد
            // برای مثال پس از 5 ثانیه، ویدیو را متوقف کنید و فایل ویدیویی از پوشه 'assets/videos' را پخش کنید
            setTimeout(function() {
                videoElement.src = 'assets/videos/SKY-1.mp4'; // ویدیوی خود را از پوشه videos بارگذاری کنید
                videoElement.play();
            }, 5000); // 5 ثانیه پس از باز شدن دوربین
        })
        .catch(function(error) {
            console.error('Error accessing the camera: ', error);
        });
});