const slideImage = document.getElementById("slideImage");
const slideText = document.getElementById("slideText");

const stages = [
  {
    title: "🚀 Launch",
    image: "https://www.orlandosentinel.com/wp-content/uploads/2025/04/TOS-L-ULA-Amazon-Launch-17.jpg?w=1800&resize=1800,1800",
    desc: "The rocket launches from Earth into the atmosphere . This phase involves the ignition of powerful rocket engines that lift the spacecraft from the launch pad. It must generate enough thrust to break free from Earth's gravitational pull. During this time, the mission control team closely monitors all vital systems to ensure stability and trajectory. It's one of the most high-risk and high-energy stages of the mission."
  },
  {
    title: "🛰️ Orbiting Earth",
    image: "https://media.istockphoto.com/id/526786037/photo/spacecraft-orbiting-earth.jpg?s=612x612&w=0&k=20&c=ATEmh5wsCbdVSW65bJ3dY3QNnMEcFunxSYyNd8jPgXo=",
    desc: "The spacecraft orbits the Earth while systems are checked.As spacecraft reach the edge of our atmosphere, they enter a stable orbit around Earth. From this vantage point, satellites and space stations circle the planet, enabling global communication, weather tracking, and scientific discovery — offering a breathtaking view of the blue marble we call home."
  },
  {
    title: "🌕 Approaching the Moon",
    image: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F7619f4e0-69be-4cb4-bc53-4783adcad89a.jpg?crop=1500%2C1000%2C0%2C0",
    desc: "The crew begins their lunar journey, closing in on the Moon.As the spacecraft nears the Moon, anticipation builds. The gray, cratered surface grows clearer through the windows — a symbol of curiosity and courage. This critical phase demands precision as astronauts prepare to enter lunar orbit and begin their descent."
  },
  {
    title: "🛬 Moon Landing",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVyUKQU6eG2v1jLZp-vRtn7ZfqJ_k0yLY124mTG9bfTkZIDMGjX9oXujow1tL_NbMhtg&usqp=CAU",
    desc: "The module safely lands on the Moon’s surface.Touching down on the Moon's dusty surface marks one of humanity’s greatest achievements. With precise navigation and courage, astronauts descend onto alien terrain — leaving footprints that echo through history and inspiring generations to look beyond the stars."
  },
  {
    title: "🌍 Return to Earth",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6An1T1aOSCUQ1VYJj_SEq9hzOtG3uQbrug&s",
    desc: "The crew returns home, marking the mission a success.After completing their mission, the spacecraft begins its journey home. Re-entering Earth's atmosphere in a blaze of heat and speed, astronauts prepare for splashdown. It’s a triumphant return — carrying not just data, but stories of survival, discovery, and the spirit of exploration"
  }
];

let currentIndex = 0;
function showSlide(index) {
  const stage = stages[index];

  slideText.innerHTML = `
    <h3 class="text-xl font-bold text-purple-300 mb-2">${stage.title}</h3>
    <p class="text-sm text-gray-300">${stage.desc}</p>
  `;

  slideImage.innerHTML = `
    <img src="${stage.image}" alt="${stage.title}"
         class="w-60 h-60 object-cover rounded-full border-4 border-white shadow-xl transition-all duration-500 animate-fade-in" />
  `;
}


function prevSlide() {
  currentIndex = (currentIndex - 1 + stages.length) % stages.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % stages.length;
  showSlide(currentIndex);
}

// Load the first slide initially
showSlide(currentIndex);
