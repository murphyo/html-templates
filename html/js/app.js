// App function
const app = function() {

};

// Run app function
app();

// Resize behavior
function reportWindowSize() {
  const height = window.innerHeight;
	const width = window.innerWidth;
	// console.log(`${width} x ${height}`);
}

window.onresize = reportWindowSize;