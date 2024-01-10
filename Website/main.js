// Function to check if an element is in the viewport
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Function to run on scroll event
function runOnScroll() {
	document.querySelectorAll(".content").forEach((item) => {
		if (isInViewport(item)) {
			item.classList.add("visible");
		}
	});
}
document.addEventListener("DOMContentLoaded", (event) => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("pop");
				}
			});
		},
		{
			threshold: 0.5, // Trigger when 50% of the image is visible
		}
	);

	document.querySelectorAll(".container img").forEach((img) => {
		observer.observe(img);
	});
});

// Listen for scroll events
window.addEventListener("scroll", runOnScroll);
