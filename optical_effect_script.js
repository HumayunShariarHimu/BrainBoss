// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create the Apple Computer logo
const loader = new THREE.TextureLoader();


const texture = loader.load('https://raw.githubusercontent.com/HumayunShariarHimu/BrainBoss/refs/heads/main/BrainBoss.png');

const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
const geometry = new THREE.PlaneGeometry(2, 2.4);
const logo = new THREE.Mesh(geometry, material);

scene.add(logo);

camera.position.z = 2;

// Animation variables
let time = 0;
const bounceAmplitude = 1.0;
const bounceFrequency = 3;
const swingAmplitude = 1.5;
const swingFrequency = 2;
const tiltAngle = Math.PI / 9; // 20 degrees in radians
const tiltFrequency = 1.5;
let logoZ = -10;
let direction = 1; // 1 for towards camera, -1 for away from camera

// Flash overlay
const flashOverlay = document.getElementById('flash-overlay');
let flashTimeout;

function triggerFlash() {
  flashOverlay.style.opacity = '0.7';
  clearTimeout(flashTimeout);
  flashTimeout = setTimeout(() => {
    flashOverlay.style.opacity = '0';
  }, 100); // 0.1s flash
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  time += 0.016; // Approximately 60 FPS

  // Move the logo towards or away from the camera
  logoZ += 0.1 * direction;

  // Check if the logo hit the camera or reached the far point
  if (logoZ >= 0) {
    direction = -1; // Reverse direction
    logoZ = 0; // Ensure it doesn't go past the camera
    triggerFlash(); // Flash the screen
  } else if (logoZ <= -10) {
    direction = 1; // Reverse direction
    logoZ = -10; // Ensure it doesn't go too far
  }

  // Apply bouncing effect (vertical movement)
  const bounce = Math.sin(time * bounceFrequency) * bounceAmplitude;
  logo.position.y = bounce;

  // Apply side-to-side swing
  const swing = Math.sin(time * swingFrequency) * swingAmplitude;
  logo.position.x = swing;

  // Apply tilt (back and forward)
  const tilt = Math.sin(time * tiltFrequency) * tiltAngle;
  logo.rotation.x = tilt;

  // Set Z position
  logo.position.z = logoZ;

  // Scale the logo based on its z-position
  const scale = 1 + (10 + logoZ) / 20; // Scale from 0.5 to 1.5
  logo.scale.set(scale, scale, 1);

  // Rotate the logo slightly around Y-axis
  logo.rotation.y = Math.sin(time * 0.5) * 0.2;

  // Add a "hit" effect when the logo is close to the camera
  if (logoZ > -0.5 && direction === 1) {
    logo.material.color.setRGB(1, 0.5, 0.5); // Reddish tint
    camera.fov = 76; // Slight change in field of view for impact effect
  } else {
    logo.material.color.setRGB(1, 1, 1); // Reset color
    camera.fov = 75; // Reset field of view
  }
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Fullscreen toggle functionality
const fullscreenToggle = document.getElementById('fullscreen-toggle');

fullscreenToggle.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    fullscreenToggle.textContent = 'Exit';
  } else {
    fullscreenToggle.textContent = 'FullScreen';
  }
});
