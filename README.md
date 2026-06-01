# companion-module-cuevacontrol-relo-io8

Companion module for the **Cueva Control RELO IO8** 8-relay / 8-input Ethernet I/O module. Gives Companion full real-time control of relays, nodes, and presets.

The **RELO IO8** is a professional Ethernet I/O module built for automation and control. It features 8 relay outputs, 8 digital inputs, a built-in node-based automation engine, and full cloud connectivity via Cueva Horizon. Powered over PoE+ or USB-C, rack and wall mountable.

Supports TCP, UDP, HTTP, OSC, and Art-Net alongside the Companion integration.

For product documentation visit **[cuevacontrol.com](https://cuevacontrol.com)**.

---

## Requirements

- Node.js 22
- Bitfocus Companion v4 or later

---

## Building

```bash
npm install
npm run build
```

The packaged module is written to `releases/`.

---

## Connection Setup

Open the module configuration in Companion and fill in:

| Field | Description |
|---|---|
| **Host** | IP address of the RELO IO8 on your network |
| **Auth Token** | Integration token found in the device settings under **Settings → Integrations** |

The module connects automatically and reconnects if the connection drops.

---

## Actions

| Action | Description |
|---|---|
| **Set Relay** | Turn a relay on, off, toggle it, or pulse it for a configurable duration (ms) |
| **Execute Node** | Trigger a node by ID. The node list is populated automatically after connecting. |
| **Apply Preset** | Apply a saved preset from the device. The preset list is populated automatically after connecting. |
| **Refresh Device State** | Re-fetch all nodes, presets, relay states, and input states from the device. Useful after making changes in the device UI. |
| **Set Relay Label** | Update the label of a relay on the device |
| **Set LED Color** | Set the status LED color |
| **Set LED Brightness** | Set the status LED brightness (0-255) |
| **Set LED Effect** | Set the status LED effect (Solid, Blink, Breathing, Rainbow, Chase) |
| **Set LED On/Off** | Turn the status LED on, off, or toggle it |

---

## Variables

### Connection and device info

| Variable | Description |
|---|---|
| `$(instance:connected)` | `true` when connected to the device |
| `$(instance:device_name)` | Device name |
| `$(instance:device_id)` | Unique hardware ID |
| `$(instance:ip)` | Device IP address |
| `$(instance:mac)` | Device MAC address |
| `$(instance:firmware_version)` | Firmware version |
| `$(instance:uptime)` | Uptime in seconds |
| `$(instance:uptime_formatted)` | Uptime formatted (e.g. `2h 34m`) |

### Relay summary

| Variable | Description |
|---|---|
| `$(instance:relays_on)` | Number of relays currently ON |
| `$(instance:relay_N_state)` | State of relay N (`true` / `false`), N = 1-8 |
| `$(instance:relay_N_label)` | Label of relay N, N = 1-8 |

### Inputs

| Variable | Description |
|---|---|
| `$(instance:input_N_state)` | State of input N (`true` / `false`), N = 1-8 |
| `$(instance:input_N_label)` | Label of input N, N = 1-8 |

### Counts

| Variable | Description |
|---|---|
| `$(instance:node_count)` | Number of nodes on the device |
| `$(instance:preset_count)` | Number of presets on the device |

---

## License

MIT
