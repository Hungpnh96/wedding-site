document.addEventListener("DOMContentLoaded", function () {
	// Cấu hình biến ngày, tháng, năm, giờ và phút
	const year = 2025;
	const month = 0; // Tháng 0 là tháng 1 (January)
	const day = 9;
	const hour = 11; // 11 giờ
	const minute = 0; // 0 phút
	const second = 0; // 0 giây

	// Thiết lập ngày giờ mục tiêu
	const targetDate = new Date(year, month, day, hour, minute, second).getTime();

	// Hàm cập nhật bộ đếm ngược
	function updateCountdown() {
		const now = new Date().getTime();
		const timeRemaining = targetDate - now;

		const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

		document.getElementById("countdown").innerHTML = 
			`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
	}

	// Cập nhật bộ đếm ngược mỗi giây
	setInterval(updateCountdown, 1000);

	// Hàm tạo lịch
	function generateCalendar() {
		const daysInJanuary = 31; // Số ngày trong tháng 1
		const firstDay = new Date(year, month, 1).getDay(); // Ngày bắt đầu của tuần (0-6)

		const calendarDates = document.getElementById("calendar-dates");
		calendarDates.innerHTML = ""; // Xóa nội dung trước đó

		// Thêm các ô trống cho các ngày trước ngày 1
		for (let i = 0; i < firstDay; i++) {
			calendarDates.innerHTML += `<div></div>`;
		}

		// Thêm các ngày trong tháng 1
		for (let i = 1; i <= daysInJanuary; i++) {
			if (i === day) {
				// Nổi bật ngày đã chỉ định
				calendarDates.innerHTML += `<div class="selected">${i}</div>`;
			} else {
				calendarDates.innerHTML += `<div>${i}</div>`;
			}
		}
	}

	// Tạo lịch cho tháng 1 năm 2025
	generateCalendar();
});

document.addEventListener('DOMContentLoaded', function () {
	const audio = document.getElementById('backgroundAudio');
	const audioIcon = document.getElementById('audioIcon');
	let isPlaying = false;

	// Function để chuyển đổi trạng thái âm thanh
	document.getElementById('audioToggle').addEventListener('click', function () {
		if (isPlaying) {
			audio.pause();
			audioIcon.classList.remove('fa-volume-up');
			audioIcon.classList.add('fa-volume-mute');
		} else {
			audio.play();
			audioIcon.classList.remove('fa-volume-mute');
			audioIcon.classList.add('fa-volume-up');
		}
		isPlaying = !isPlaying;
	});

	// Bắt sự kiện scroll
	let hasPlayed = false; // Biến để kiểm soát chỉ phát nhạc một lần khi cuộn
	window.addEventListener('scroll', function () {
		if (!hasPlayed) {
			audio.play();
			hasPlayed = true;
			audioIcon.classList.remove('fa-volume-mute');
			audioIcon.classList.add('fa-volume-up');
			isPlaying = true;
		}
	});

	// Cập nhật icon dựa trên trạng thái của audio
	audio.addEventListener('play', function () {
		isPlaying = true;
		audioIcon.classList.remove('fa-volume-mute');
		audioIcon.classList.add('fa-volume-up');
	});

	audio.addEventListener('pause', function () {
		isPlaying = false;
		audioIcon.classList.remove('fa-volume-up');
		audioIcon.classList.add('fa-volume-mute');
	});
});