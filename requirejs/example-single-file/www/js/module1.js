define(['module2', 'module3'], function(m2, m3) {
	console.log('[module1.js] Loaded, including dependencies "' + m2 + '" and "' + m3 + '"');

	return "module1.js";
});