// Global variables
let currentVideoId = '';
let player = null;

// Extract video ID from YouTube URL
function extractVideoId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
}

// Get video thumbnail URL
function getThumbnailUrl(videoId, quality = 'maxresdefault') {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

// Create clean YouTube embed URL with minimal branding
function createCleanEmbedUrl(videoId) {
    const params = new URLSearchParams({
        'autoplay': '1',
        'mute': '1',
        'controls': '0',
        'rel': '0',
        'modestbranding': '1',
        'iv_load_policy': '3',
        'cc_load_policy': '0',
        'disablekb': '1',
        'playsinline': '1'
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

// Load video thumbnail and setup click handler
function setupVideo(videoId) {
    console.log('Setting up video with ID:', videoId);

    const thumbnailImg = document.getElementById('thumbnailImg');
    const playOverlay = document.getElementById('playOverlay');
    const videoContainer = document.querySelector('.video-container');

    if (!thumbnailImg || !playOverlay || !videoContainer) {
        console.error('Required elements not found');
        return;
    }

    // Set thumbnail
    const thumbnailUrl = getThumbnailUrl(videoId);
    console.log('Loading thumbnail:', thumbnailUrl);
    thumbnailImg.src = thumbnailUrl;
    thumbnailImg.alt = 'Video thumbnail';

    // Handle thumbnail load error
    thumbnailImg.onerror = function () {
        console.log('Thumbnail failed to load, trying alternative');
        this.src = getThumbnailUrl(videoId, 'hqdefault');
    };

    // Setup click handler for play button
    playOverlay.onclick = function () {
        console.log('Play button clicked');
        playVideo(videoId);
    };

    // Reset container state
    videoContainer.classList.remove('playing');
    document.getElementById('youtube-player').style.display = 'none';
    document.getElementById('videoThumbnail').style.display = 'block';
    playOverlay.style.display = 'flex';

    currentVideoId = videoId;
    console.log('Video setup complete');
}

// Play the video by loading the iframe
function playVideo(videoId) {
    console.log('Playing video:', videoId);

    const iframe = document.getElementById('youtube-player');
    const videoContainer = document.querySelector('.video-container');

    if (!iframe || !videoContainer) {
        console.error('Required elements not found for video playback');
        return;
    }

    // Create clean embed URL
    const embedUrl = createCleanEmbedUrl(videoId);
    console.log('Embed URL:', embedUrl);

    // Set iframe source and show it
    iframe.src = embedUrl;

    // Add playing class to container (this hides overlay and thumbnail)
    videoContainer.classList.add('playing');

    // Show iframe
    iframe.style.display = 'block';

    console.log('Video should now be playing');

    // Add additional event listeners for iframe
    iframe.onload = function () {
        console.log('Iframe loaded successfully');
        // Try to hide any remaining YouTube branding using postMessage
        try {
            // This attempts to communicate with the YouTube player
            const playerWindow = iframe.contentWindow;
            if (playerWindow) {
                // Send commands to minimize branding
                playerWindow.postMessage('{"event":"command","func":"setOption","args":["captions", "reload", true]}', '*');
            }
        } catch (e) {
            // Cross-origin restrictions may prevent this
            console.log('Could not access iframe content due to CORS restrictions');
        }
    };

    iframe.onerror = function () {
        console.error('Failed to load video iframe');
    };
}

// Load video from URL input
function loadVideo() {
    const urlInput = document.getElementById('videoUrl');
    const url = urlInput.value.trim();

    if (!url) {
        alert('Please enter a YouTube URL');
        return;
    }

    const videoId = extractVideoId(url);

    if (!videoId) {
        alert('Invalid YouTube URL. Please enter a valid YouTube video URL.');
        return;
    }

    setupVideo(videoId);
    urlInput.value = ''; // Clear input
}

// Load demo video
function loadDemoVideo() {
    // Using a popular, safe demo video (replace with any video ID you prefer)
    const demoVideoId = 'jNQXAC9IVRw'; // A popular tech video that should work
    setupVideo(demoVideoId);
}

// Handle Enter key in input field
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing player...');

    const urlInput = document.getElementById('videoUrl');

    if (urlInput) {
        urlInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                loadVideo();
            }
        });
    }

    // Add some additional CSS via JavaScript to further hide YouTube branding
    const additionalStyles = `
        <style>
            /* Additional styles to hide YouTube branding */
            .video-container iframe {
                position: relative;
                z-index: 1;
            }
            
            /* Try to hide YouTube logo overlay */
            .video-container::after {
                content: '';
                position: absolute;
                top: 10px;
                right: 10px;
                width: 80px;
                height: 20px;
                background: transparent;
                z-index: 2;
                pointer-events: none;
            }
            
            /* Additional overlay to hide bottom controls area */
            .video-container::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 40px;
                background: transparent;
                z-index: 2;
                pointer-events: none;
            }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', additionalStyles);

    // Load a demo video on page load
    console.log('Loading demo video...');
    loadDemoVideo();
});

// Function to stop/reset video
function stopVideo() {
    const iframe = document.getElementById('youtube-player');
    const videoContainer = document.querySelector('.video-container');

    iframe.src = '';
    videoContainer.classList.remove('playing');
}

// Function to restart current video
function restartVideo() {
    if (currentVideoId) {
        setupVideo(currentVideoId);
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Escape key to stop video
    if (e.key === 'Escape') {
        stopVideo();
    }
    // Space bar to restart video (when not in input field)
    if (e.key === ' ' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        restartVideo();
    }
});

// Additional function to create an even cleaner embed (experimental)
function createUltraCleanEmbed(videoId) {
    // This creates the most minimal possible embed
    const params = new URLSearchParams({
        'autoplay': '1',
        'mute': '1',
        'controls': '0',
        'showinfo': '0',
        'rel': '0',
        'modestbranding': '1',
        'iv_load_policy': '3',
        'cc_load_policy': '0',
        'fs': '0',
        'disablekb': '1',
        'playsinline': '1',
        'autohide': '1',
        'wmode': 'transparent',
        'theme': 'light',
        'color': 'white'
    });

    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

// Console helper functions for debugging
window.videoPlayer = {
    loadVideo,
    loadDemoVideo,
    stopVideo,
    restartVideo,
    getCurrentVideoId: () => currentVideoId,
    setupVideo,
    extractVideoId
};
