'use strict'

const { combineRgb } = require('@companion-module/base')

const NUM_RELAYS = 8
const NUM_INPUTS = 8

function relayChoices() {
	return Array.from({ length: NUM_RELAYS }, (_, i) => ({ id: i + 1, label: `Relay ${i + 1}` }))
}

function inputChoices() {
	return Array.from({ length: NUM_INPUTS }, (_, i) => ({ id: i + 1, label: `Input ${i + 1}` }))
}

function updateFeedbacks(self) {
	self.setFeedbackDefinitions({
		connected: {
			name: 'Device Connected',
			description: 'Active when the WebSocket connection is authenticated',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 120, 35),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => self.authenticated,
		},


		led_enabled: {
			name: 'LED Enabled',
			description: 'Active when the status LED is turned on',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 120, 35),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => !!self.ledEnabled,
		},

		// -----------------------------------------------------------------------
		// Relay on/off state
		// -----------------------------------------------------------------------
		relay_state: {
			name: 'Relay State',
			description: 'Change button style when a relay is on or off',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 120, 35),    // #007823 brand green
				color: combineRgb(255, 255, 255),
			},
			options: [
				{
					id: 'relay_id',
					type: 'dropdown',
					label: 'Relay',
					default: 1,
					choices: relayChoices(),
				},
				{
					id: 'expected_state',
					type: 'dropdown',
					label: 'State triggers feedback when relay is',
					default: 'on',
					choices: [
						{ id: 'on', label: 'On' },
						{ id: 'off', label: 'Off' },
					],
				},
			],
			callback: (feedback) => {
				const idx = Number(feedback.options.relay_id) - 1
				const isOn = self.relayState[idx] ?? false
				const wantOn = feedback.options.expected_state === 'on'
				return wantOn ? isOn : !isOn
			},
		},

		// -----------------------------------------------------------------------
		// Digital input active/inactive state
		// -----------------------------------------------------------------------
		input_state: {
			name: 'Input State',
			description: 'Change button style when a digital input is active (high) or inactive (low)',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(13, 84, 43),    // #0D542B trigger green
				color: combineRgb(255, 255, 255),
			},
			options: [
				{
					id: 'input_id',
					type: 'dropdown',
					label: 'Input',
					default: 1,
					choices: inputChoices(),
				},
				{
					id: 'expected_state',
					type: 'dropdown',
					label: 'State triggers feedback when input is',
					default: 'active',
					choices: [
						{ id: 'active', label: 'Active (high)' },
						{ id: 'inactive', label: 'Inactive (low)' },
					],
				},
			],
			callback: (feedback) => {
				const idx = Number(feedback.options.input_id) - 1
				const isActive = self.inputState[idx] ?? false
				const wantActive = feedback.options.expected_state === 'active'
				return wantActive ? isActive : !isActive
			},
		},
	})
}

module.exports = { updateFeedbacks }
