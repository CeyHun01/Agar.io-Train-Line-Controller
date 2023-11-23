# Agar.io Train Line Controller
---

## What is This Extension?

This extension is a specialized tool designed for Agar.io and Gota.io, popular online multiplayer games. It automates your controller experience by providing a controlled line-splitting feature. With this extension, you can quickly split your cell into lines.

[Tutorial Video](https://www.youtube.com/watch?v=qevn6WdLfmg) (Old)

## Supported Games

- Agar.io
- Gota.io

This extension is actually designed for Agar.io and Gota.io. It can also work with other Agar hosting services, although there is no official support. If you wish to use this extension on a different Agar hosting, you can add a line like this to match the URL:
```javascript
// @match     https://example.com/*
```

## How to Use

Using this extension is straightforward. Here are the steps:

- **Accessing Setup Menu:**
After installing the extension for the first time, you'll see a notification indicating that the extension is active. You can proceed to the menu setup by clicking the OK button in this notification. Additionally, if you wish to open the control panel with a key, you can assign one for that purpose.

- **Key Settings:**
Once the menu is open, navigate to the "Setup" tab to customize your key settings. Here, you'll see a 3x3 grid of button configurations. Each button's position represents a specific direction. For example, the top-left button represents the top-left direction, and the bottom-right button represents the bottom-right direction. You can customize these buttons to improve your in-game control.

- **Line Mode:**
  The extension offers two different modes:

   **Auto :** Split your cell automatically by pressing the key you've set.

   **Manual :** If you prefer to split your cell manually, follow these steps:
     - Freeze your cell.
     - Press the directional key you've configured in the Setup tab.
     - Split.

<u>Do not move your mouse</u>

## Requirements

To use the Agar.io Train Line Controller, you will need the following:

1. [Tampermonkey](https://www.tampermonkey.net) - You can download it from [here](https://www.tampermonkey.net).
2. Greasyfork (script link) - The script can be found [here](https://greasyfork.org/scripts/370099-agar-io-train-line-controller).
3. Jquery lib (optional)

## What's New

- **1.7.2 - 22.09.2023:**
  * Fixed Line Mode "Auto" (missing function)
  + Added Delete key for Hotkeys (now you can clear an input by pressing the Delete key in Setup Page)
  * Renamed KeyMap
  * Minor Fixes

- **1.7.1 - 16.11.2023**:
  + New control panel opening sequence (No need for the backquote key anymore)
  * Menu design changes
  + New Backward Split Calculation and fixes
  * Macro optimizations
  * More reduction key delays

- **1.7.0 - 16.09.2023**:
  * Line mod first startup empty fixed
  + New 4 Corner Diagonal Line Calculating
  + Hotkey Keycode input support
  + Setup Reset Button Added
  + Theme Reset Button Added
  + License Small Edit
  + Jquery lib updated
  * Button Delay is reduced
  * Optimizations
  - Some Game Support Removed
  - Icon removed

- **1.6.1 - 12.08.2019**:
  * Diagonal Lines Fixed
  * Line Mod First Select Fixed

- **1.6 - 30.07.2019**:
  * Big Update! : Changed Support Games
  + Added Control Menu and more..
  + Adjustable keypad added
  + Added Tutorial Info
  + Added Theme Color Menu
  + Added Line Mod Select
  + Added New Split Keys: W+Split, Diagonal 16x (For Gota.io)
  + Added License
  + Added Jquery require
  + Bugs Fixed

- **1.5 - 2019-01-27**:
  + F2 button developed [you will see more comfortable] (Just Gota.io)
  + Optimization

- **1.4 - 2018-12-02**:
  - Removed Jquery requirement
  - Bug Fixed
  - Added Backward Double Splits [Press "1" Key And "3" Key]
  - Added Support for More Games

- **1.3 - 2018-08-06**:
  - Fixed bugs
  - Added auto off ESC menu (Just Gota.io)
  - Added Diagonal Lines (Impossible!!) [Press Insert, Press PageUp keys]

- **1.2 - 2018-07-16**:
  + Added F2 Press Diagonal Line Split (Just Gota.io)

- **Beta 1.1 - 2018-07-12**:
  * Some fixes

- **Beta 1.0 - 2018-07-06**:
  * Initial Release
