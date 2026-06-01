'use strict'

const NUM_RELAYS = 8
const NUM_INPUTS = 8

function updateVariableDefinitions(self) {
	const defs = [
		// Connection
		{ variableId: 'connected', name: 'WebSocket connected (true/false)' },

		// Device identity
		{ variableId: 'device_name', name: 'Device name' },
		{ variableId: 'device_id', name: 'Device ID (unique hardware ID)' },
		{ variableId: 'ip', name: 'Device IP address' },
		{ variableId: 'mac', name: 'Device MAC address' },
		{ variableId: 'firmware_version', name: 'Firmware version' },

		// Uptime
		{ variableId: 'uptime', name: 'Uptime (seconds)' },
		{ variableId: 'uptime_formatted', name: 'Uptime formatted (e.g. 2h 34m)' },

		// Relay summary
		{ variableId: 'relays_on', name: 'Number of relays currently ON' },

		// LED
		{ variableId: 'led_enabled',    name: 'LED enabled (true/false)' },
		{ variableId: 'led_color',      name: 'LED color (hex #RRGGBB)' },
		{ variableId: 'led_brightness', name: 'LED brightness (0-255)' },
		{ variableId: 'led_effect',     name: 'LED effect (0=Solid 1=Blink 2=Breathing 3=Rainbow 4=Chase 5=Locate)' },

		// Counts
		{ variableId: 'node_count', name: 'Number of nodes' },
		{ variableId: 'preset_count', name: 'Number of presets' },
	]

	for (let i = 1; i <= NUM_RELAYS; i++) {
		defs.push({ variableId: `relay_${i}_state`, name: `Relay ${i} state (true/false)` })
		defs.push({ variableId: `relay_${i}_label`, name: `Relay ${i} label` })
	}

	for (let i = 1; i <= NUM_INPUTS; i++) {
		defs.push({ variableId: `input_${i}_state`, name: `Input ${i} state (true/false)` })
		defs.push({ variableId: `input_${i}_label`, name: `Input ${i} label` })
	}

	self.setVariableDefinitions(defs)

	const initial = {
		connected: 'false',
		device_name: '',
		device_id: '',
		ip: '',
		mac: '',
		firmware_version: '',
		uptime: '0',
		uptime_formatted: '0m',
		relays_on: '0',
		led_enabled: 'false',
		led_color: '#000000',
		led_brightness: '128',
		led_effect: '0',
		node_count: '0',
		preset_count: '0',
	}
	for (let i = 1; i <= NUM_RELAYS; i++) {
		initial[`relay_${i}_state`] = 'false'
		initial[`relay_${i}_label`] = `Relay ${i}`
	}
	for (let i = 1; i <= NUM_INPUTS; i++) {
		initial[`input_${i}_state`] = 'false'
		initial[`input_${i}_label`] = `Input ${i}`
	}
	self.setVariableValues(initial)
}

module.exports = { updateVariableDefinitions }
