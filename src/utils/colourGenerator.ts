type RGB = [ number, number, number ];
type HSL = [ number, number, number ];

function generateColorPalette(originalHex: string): string[] {
	// Convert hex to HSL
	function hexToHSL(hex: string): HSL {
		const r = parseInt(hex.slice(1, 3), 16) / 255;
		const g = parseInt(hex.slice(3, 5), 16) / 255;
		const b = parseInt(hex.slice(5, 7), 16) / 255;

		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		let h: number, s: number, l = (max + min) / 2;

		if (max === min) {
			h = s = 0; // achromatic
		} else {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
				default:
					h = 0;
			}
			h /= 6;
		}

		return [ Math.round(h * 360), Math.round(s * 100), Math.round(l * 100) ];
	}

	// Convert HSL to hex
	function hslToHex(h: number, s: number, l: number): string {
		s /= 100;
		l /= 100;
		const c = (1 - Math.abs(2 * l - 1)) * s;
		const x = c * (1 - Math.abs((h / 60) % 2 - 1));
		const m = l - c / 2;
		let r = 0, g = 0, b = 0;

		if (0 <= h && h < 60) {
			[ r, g, b ] = [ c, x, 0 ];
		} else if (60 <= h && h < 120) {
			[ r, g, b ] = [ x, c, 0 ];
		} else if (120 <= h && h < 180) {
			[ r, g, b ] = [ 0, c, x ];
		} else if (180 <= h && h < 240) {
			[ r, g, b ] = [ 0, x, c ];
		} else if (240 <= h && h < 300) {
			[ r, g, b ] = [ x, 0, c ];
		} else if (300 <= h && h < 360) {
			[ r, g, b ] = [ c, 0, x ];
		}

		const toHex = (value: number): string =>
			Math.round((value + m) * 255).toString(16).padStart(2, '0');

		return `#${ toHex(r) }${ toHex(g) }${ toHex(b) }`;
	}

	// Ensure values are within valid ranges
	function clamp(value: number, min: number, max: number): number {
		return Math.min(Math.max(value, min), max);
	}

	const [ h, s, l ] = hexToHSL(originalHex);
	const palette: string[] = new Array(10);

	// Generate lighter shades (indices 0-4)
	for (let i = 4; i >= 0; i--) {
		const newS = clamp(s - (4 - i) * 20, 0, 100);
		const newL = clamp(l + (4 - i) * 5, 0, 100);
		palette[i] = hslToHex(h, newS, newL);
	}

	// Add original color (index 5)
	palette[5] = originalHex;

	// Generate darker shades (indices 6-9)
	for (let i = 1; i <= 4; i++) {
		const newS = clamp(s + i * 5, 0, 100);
		const newL = clamp(l - i * 20, 0, 100);
		palette[5 + i] = hslToHex(h, newS, newL);
	}

	return palette;
}


// generateColorPalette('#4DABF7');

console.log(generateColorPalette('#FFD8B8'));