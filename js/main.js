const TARGET_ID = 'contents';

document.getElementById('bt-maximizeCanvas').addEventListener('click', (event) => {
	if (!document.fullscreenElement) {
		document.getElementById(TARGET_ID).requestFullscreen();
	}
});

document.getElementById('bt-restoreCanvas').addEventListener('click', (event) => {
	if (document.fullscreenElement && document.fullscreenElement.id === TARGET_ID) {
		document.exitFullscreen();
	}
});
