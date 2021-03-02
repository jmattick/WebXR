$ = (queryString) => document.querySelector(queryString);

const xr = navigator.xr;
if ("xr" in window.navigator) {
  /* WebXR can be used! */
} else {
  /* WebXR isn't available */
}

const shiftHue = (hue) => (hue + 1) % 360;

let hue = 0;


// const animate = () => {
// 	const spheres = document.querySelectorAll("a-sphere");
	
// 	for (i=0; i<spheres.length; i++) {
// 		let sphere = spheres[i];
// 		hue = shiftHue(hue);
// 		const color = `hsl(${hue}, 100%, 50%)`;
// 		sphere.setAttribute('color', color);
		
// 		let pos = sphere.getAttribute('position');
// 		pos.x += 0.1;
		
// 		sphere.setAttribute('position', pos);

		
// 	}
// 	requestAnimationFrame(animate());
	


// }

// requestAnimationFrame(animate());






