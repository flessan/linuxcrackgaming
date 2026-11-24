# LinuxCrackGaming

A curated, community-maintained index of Linux game rewrites, native ports, open-source games, launchers, runtimes and compatibility tools.

Browse the [web catalogue](https://linuxcrackgaming.pages.dev) for searchable cards, install details and saved projects. This README is the human-readable catalogue source used to build the website data and public JSON API.

## Featured projects

| Project | For | Why it stands out | Linux formats | Source |
| --- | --- | --- | --- | --- |
| **Cinnabar** | Minecraft: Bedrock Edition | A silky-fast Rust rewrite of Bedrock with Java-style touches & WASM mods. | .AppImage, Native | [Source](https://github.com/cinnabar-mc/cinnabar) |
| **Sober** | Roblox Player | Play Roblox smoothly on Linux via Flatpak-no Wine, no dual-booting. | .Flatpak | [Source](https://github.com/vinegarhq/sober) |

## Project catalogue

The table below is the source of truth for the catalogue index. Add one row for a new project in a pull request. The build checks the table, validates links and package formats, then generates the website data and `/api/projects.json`.

<!-- lcg:catalog:start -->
| Project | Game / software | Category | Overview | Linux formats | Install | Requirements / Steam Deck | Technology / license | Links |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Cinnabar** | Minecraft: Bedrock Edition | Engine rewrite | A silky-fast Rust rewrite of Bedrock with Java-style touches & WASM mods. | .AppImage, Native | See expanded install options below. | Requires your own Microsoft account owning Minecraft; downloads public vanilla assets after EULA.<br>**Steam Deck:** Yes | Rust & Go · Source-Available | [GitHub](https://github.com/cinnabar-mc/cinnabar) · [Preview](https://avatars.githubusercontent.com/u/344119591?s=200&v=4) |
| **Sober** | Roblox Player | Runtime / launcher | Play Roblox smoothly on Linux via Flatpak-no Wine, no dual-booting. | .Flatpak | See expanded install options below. | Free Roblox account; Sober fetches the official Roblox package on first launch.<br>**Steam Deck:** Yes | C++ / Flatpak Runtime · Freeware / VinegarHQ | [GitHub](https://github.com/vinegarhq/sober) · [Website](https://sober.vinegarhq.org/) · [Preview](https://sober.vinegarhq.org/img/icon/sober.svg) |
| Soberix | Roblox (Sober Companion) | Runtime / launcher | The friendly open-source Bloxstrap-style manager built for Sober. | .AppImage, Native | See expanded install options below. | Requires the Sober Flatpak (org.vinegarhq.Sober) installed first.<br>**Steam Deck:** Yes | Python & GTK4 · MIT | [GitHub](https://github.com/JADRT22/soberix) · [Preview](https://github.com/JADRT22.png?size=512) |
| Prism Launcher | Minecraft: Java Edition | Runtime / launcher | Tidy, open-source multi-instance launcher with built-in shader & mod browsers. | .Flatpak, .AppImage, Native | See expanded install options below. | Requires a Microsoft account that owns Minecraft: Java Edition.<br>**Steam Deck:** Yes | C++ & Qt6 · GPL-3.0 | [GitHub](https://github.com/PrismLauncher/PrismLauncher) · [Website](https://prismlauncher.org/) · [Preview](https://github.com/PrismLauncher.png?size=512) |
| UnleashedRecomp | Sonic Unleashed (Xbox 360) | Static recompilation | Static recompilation that brings Sonic Unleashed natively to Linux at 120+ FPS. | .Flatpak, .AppImage, Native | See expanded install options below. | Bring your own legally dumped Xbox 360 copy of Sonic Unleashed (+ optional DLC).<br>**Steam Deck:** Yes | C++ / Vulkan · GPL-3.0 | [GitHub](https://github.com/hedge-dev/UnleashedRecomp) · [Preview](https://github.com/hedge-dev.png?size=512) |
| Zelda 64: Recompiled | The Legend of Zelda: Majora's Mask | Static recompilation | Plug-and-play N64 static recompilation with RT64, gyro aim & instant loads. | .Flatpak, Native | See expanded install options below. | Requires your own legally dumped US 1.0 ROM of Majora's Mask.<br>**Steam Deck:** Yes | C / C++ · GPL-3.0 | [GitHub](https://github.com/Zelda64Recomp/Zelda64Recomp) · [Preview](https://github.com/Zelda64Recomp.png?size=512) |
| Ship of Harkinian | The Legend of Zelda: Ocarina of Time | Static recompilation | Decompiled native Linux port packed with randomizers, HD textures & QoL treats. | .AppImage, .Flatpak | See expanded install options below. | Requires your own supported Ocarina of Time ROM to generate local assets.<br>**Steam Deck:** Yes | C & C++ · Open Source | [GitHub](https://github.com/HarbourMasters/Shipwright) · [Website](https://www.shipofharkinian.com/) · [Preview](https://github.com/HarbourMasters.png?size=512) |
| OpenMW | The Elder Scrolls III: Morrowind | Engine rewrite | A clean-room open-source 3D RPG engine bringing Morrowind natively to Linux. | .Flatpak, Native | See expanded install options below. | Requires your own copy of Morrowind (GOG, Steam, or original discs).<br>**Steam Deck:** Yes | C++ & Lua · GPL-3.0 | [GitHub](https://github.com/OpenMW/openmw) · [Website](https://openmw.org/) · [Preview](https://github.com/OpenMW.png?size=512) |
| OpenRCT2 | RollerCoaster Tycoon 2 | Engine rewrite | Beloved open-source theme park engine with online co-op & crisp high-DPI UI. | .AppImage, .Flatpak, Native | See expanded install options below. | Needs assets from RollerCoaster Tycoon 2 (and optionally RCT1) from GOG or Steam.<br>**Steam Deck:** Yes | C++ · GPL-3.0 | [GitHub](https://github.com/OpenRCT2/OpenRCT2) · [Website](https://openrct2.io/) · [Preview](https://github.com/OpenRCT2.png?size=512) |
| DevilutionX | Diablo & Hellfire (1996) | Engine rewrite | Faithful C++ source port of Diablo 1 with widescreen, gamepad & stash upgrades. | .AppImage, .Flatpak | See expanded install options below. | Copy DIABDAT.MPQ from your legally owned GOG or CD copy of Diablo.<br>**Steam Deck:** Yes | C++ · Sustainable Use / Open Source | [GitHub](https://github.com/diasurgical/DevilutionX) · [Preview](https://github.com/diasurgical.png?size=512) |
| Faugus Launcher | Any Windows / Non-Steam Game | Runtime / launcher | A breezy, lightweight GTK launcher for umu-launcher & Proton-GE. | .Flatpak, Native | See expanded install options below. | Works with your own DRM-free installers, Battle.net, EA App, or standalone games.<br>**Steam Deck:** Yes | Python & GTK · MIT | [GitHub](https://github.com/Faugus/faugus-launcher) · [Preview](https://github.com/Faugus.png?size=512) |
| WhiteRecomp | FINAL FANTASY XIII | Static recompilation | Experimental static recompilation turning your Steam FF13 into a native Linux AppImage. | .AppImage, Native | See expanded install options below. | Requires your own legally purchased Steam copy of FINAL FANTASY XIII.<br>**Steam Deck:** Yes | C++ / Vulkan / SDL2 · Open Source | [GitHub](https://github.com/ps4star/WhiteRecomp) · [Preview](https://github.com/ps4star.png?size=512) |
| Heroic Games Launcher | GOG, Epic Games & Amazon Games | Runtime / launcher | A unified launcher for your GOG, Epic and Amazon game libraries. | .Flatpak, .AppImage | See expanded install options below. | Requires accounts and game entitlements from the stores you use. Game compatibility and anti-cheat support vary by title.<br>**Steam Deck:** Yes | TypeScript / Electron · GPL-3.0 | [GitHub](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher) · [Website](https://heroicgameslauncher.com/) · [Preview](https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/assets/26871415/70c9e0f2-3fa8-4e56-9bb0-0e5f8713c968) |
| Lutris | Games from many eras and platforms | Runtime / launcher | A game library and installer hub for native games, emulators and Wine. | .Flatpak, Native | See expanded install options below. | Game installers may require original game files, store accounts, emulators or separately installed Wine components.<br>**Steam Deck:** Yes | Python / GTK · GPL-3.0 | [GitHub](https://github.com/lutris/lutris) · [Website](https://lutris.net/) · [Preview](https://github.com/lutris.png?size=512) |
| Bottles | Windows games and applications | Runtime / launcher | Manage isolated Wine environments with a clear desktop workflow. | .Flatpak | See expanded install options below. | You still need legitimate game installers, required accounts and compatible graphics drivers. Not every Windows game works.<br>**Steam Deck:** Not listed | Python / GTK · GPL-3.0 | [GitHub](https://github.com/bottlesdevs/Bottles) · [Website](https://usebottles.com/) · [Preview](https://raw.githubusercontent.com/bottlesdevs/Bottles/main/docs/screenshot-dark.png) |
| ProtonUp-Qt | Steam, Lutris, Heroic & Bottles | Compatibility tool | Install and manage community Proton and Wine compatibility tools. | .Flatpak, .AppImage | See expanded install options below. | Requires a supported launcher such as Steam, Lutris, Heroic or Bottles. It manages compatibility tools; it does not provide game licenses.<br>**Steam Deck:** Yes | Python / Qt 6 · GPL-3.0 | [GitHub](https://github.com/DavidoTek/ProtonUp-Qt) · [Website](https://davidotek.github.io/protonup-qt/) · [Preview](https://raw.githubusercontent.com/DavidoTek/ProtonUp-Qt/main/.github/images/pupgui2-screenshot2.png) |
| OpenTTD | Transport Tycoon Deluxe-inspired transport simulation | Open-source game | Build a transport empire with trains, roads, ships and aircraft. | .Flatpak, Native | See expanded install options below. | The game can use free replacement graphics and sound sets. Original Transport Tycoon Deluxe data is optional for players who want the classic assets.<br>**Steam Deck:** Not listed | C++ · GPL-2.0 | [GitHub](https://github.com/OpenTTD/OpenTTD) · [Website](https://www.openttd.org/) · [Preview](https://github.com/OpenTTD.png?size=512) |
| Luanti | Voxel sandbox worlds and community games | Open-source game | A lightweight, moddable voxel platform for building, exploring and multiplayer. | .Flatpak | See expanded install options below. | No commercial game copy is required. Luanti is a platform; individual game packages and mods may have their own licenses and requirements.<br>**Steam Deck:** Not listed | C++ / Lua · LGPL-2.1 | [GitHub](https://github.com/luanti-org/luanti) · [Website](https://www.luanti.org/) · [Preview](https://github.com/luanti-org.png?size=512) |
| Battle for Wesnoth | Turn-based high-fantasy strategy | Open-source game | Lead armies through a rich fantasy world of campaigns and tactical battles. | .Flatpak | See expanded install options below. | The game and its core campaigns are free and open source; no commercial game files are required.<br>**Steam Deck:** Not listed | C++ / Lua / WML · GPL-2.0 | [GitHub](https://github.com/wesnoth/wesnoth) · [Website](https://www.wesnoth.org/) · [Preview](https://github.com/wesnoth.png?size=512) |
| Endless Sky | Space exploration, trading and combat | Open-source game | Start with a small ship, then make your own path across a vast galaxy. | .Flatpak | See expanded install options below. | The base game is free and open source; no commercial game data is required.<br>**Steam Deck:** Not listed | C++ · GPL-3.0 | [GitHub](https://github.com/endless-sky/endless-sky) · [Website](https://endless-sky.github.io/) · [Preview](https://github.com/endless-sky.png?size=512) |
| OpenRA | Command & Conquer, Red Alert and Dune 2000 | Engine rewrite | A modern open-source RTS engine for classic Westwood-style strategy games. | .Flatpak, .AppImage, Native | See expanded install options below. | OpenRA is free and includes three mods. Some mods can automatically download original game assets; others may require files from your own original game media. Check each mod's requirements.<br>**Steam Deck:** Not listed | C# · GPL-3.0 | [GitHub](https://github.com/OpenRA/OpenRA) · [Website](https://www.openra.net/) · [Preview](https://github.com/OpenRA.png?size=512) |
| VCMI | Heroes of Might and Magic III | Engine rewrite | An open-source engine that brings Heroes III to modern desktop systems. | .Flatpak, .AppImage | See expanded install options below. | Requires your own Heroes of Might and Magic III game data files. VCMI does not distribute the original assets.<br>**Steam Deck:** Not listed | C++ · GPL-2.0 | [GitHub](https://github.com/vcmi/vcmi) · [Website](https://vcmi.eu/) · [Preview](https://github.com/vcmi.png?size=512) |
| ScummVM | Classic point-and-click adventures and RPGs | Runtime / launcher | Play hundreds of classic adventures on modern Linux systems. | .Flatpak, Native | See expanded install options below. | Most supported games require their original data files. ScummVM replaces the game executable; it does not provide commercial game assets.<br>**Steam Deck:** Not listed | C++ · GPL-3.0 | [GitHub](https://github.com/scummvm/scummvm) · [Website](https://www.scummvm.org/) · [Preview](https://github.com/scummvm.png?size=512) |
| MangoHud | Vulkan and OpenGL games | Compatibility tool | Overlay FPS, frame timing, temperatures and CPU/GPU statistics while gaming. | .Flatpak, Native | See expanded install options below. | Requires a supported Vulkan or OpenGL application and compatible graphics stack. Some 32-bit games need the matching 32-bit package.<br>**Steam Deck:** Yes | C / C++ · MIT | [GitHub](https://github.com/flightlessmango/MangoHud) · [Preview](https://github.com/flightlessmango.png?size=512) |
| GameMode | Linux system performance on demand | Compatibility tool | Let games request temporary system optimizations while they run. | Native | See expanded install options below. | Requires Linux with the system services and packages supported by your distribution. The optimizations available depend on hardware and configuration.<br>**Steam Deck:** Not listed | C · BSD-3-Clause | [GitHub](https://github.com/FeralInteractive/gamemode) · [Preview](https://github.com/FeralInteractive.png?size=512) |
| LACT | AMD, Intel and NVIDIA GPU control | Compatibility tool | Monitor GPU health, tune power limits and manage fan curves on Linux. | .Flatpak, Native | See expanded install options below. | Hardware controls vary by GPU vendor, model and driver. Full configuration requires LACT's system daemon and appropriate privileges; Flatpak-only monitoring can work without the daemon.<br>**Steam Deck:** Not listed | Rust · MIT | [GitHub](https://github.com/ilya-zlobintsev/LACT) · [Preview](https://github.com/ilya-zlobintsev.png?size=512) |
<!-- lcg:catalog:end -->

### Add a project with a pull request

Copy this template row and replace every value. Use one of the category names shown in the table, list only verified Linux formats, and link the official upstream GitHub repository.

```md
| Example Game | Example game or software | Open-source game | One clear sentence explaining the project. | Native, .Flatpak | See expanded details below. | No original files required; Steam Deck: Not checked. | C++ · GPL-3.0 | [GitHub](https://github.com/owner/repository) |
```

Categories: **Engine rewrite**, **Runtime / launcher**, **Static recompilation**, **Compatibility tool**, **Open-source game**.

For a complete in-app detail drawer, add an optional expanded detail block under the details section. A table-only entry is still accepted and appears in the catalogue with safe defaults. Keep install instructions, game-data requirements and compatibility claims grounded in upstream documentation.

### Add a project through an issue

Use the [project submission form](https://github.com/flessan/linuxcrackgaming/issues/new?template=add-project.yml). After a maintainer reviews the submission, applying the `catalogue:approved` label creates a pull request with the README row and project details. Actions validates that pull request; it never merges the submission automatically.

## Expanded project details

Each entry below is collapsible so the project index above stays quick to scan. These details are also read by the catalogue generator. Use Markdown tables, lists and install sections rather than JSON.

<!-- lcg:details:start -->
<!-- lcg:project:start id="cinnabar" -->
<a id="cinnabar"></a>
<details>
<summary><strong>Cinnabar</strong> — Minecraft: Bedrock Edition</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `cinnabar` |
| Tagline | A silky-fast Rust rewrite of Bedrock with Java-style touches & WASM mods. |
| Description | Minecraft: Bedrock Edition rebuilt from the ground up in Rust (Bevy + wgpu) paired with a Go networking core. Connects to real servers, Realms, and friend worlds while feeling snappy on desktop Linux and Raspberry Pi. |
| How it works | Instead of wrapping an Android APK or emulating Windows, Cinnabar renders everything natively via Rust + wgpu while its Go core speaks RakNet & NetherNet directly to Bedrock servers. |
| Category key | `rewrites` |
| Category label | Engine Rewrite |
| Tone | `peach` |
| Technology | Rust & Go |
| License | Source-Available |
| Primary package | `.AppImage` |
| Featured | Yes |
| Steam Deck friendly | Yes |
| Requirements | Requires your own Microsoft account owning Minecraft; downloads public vanilla assets after EULA. |
| Vibe note | Tastes like warm cinnamon toast and 240 FPS chunk streaming. |
| Preview image | https://avatars.githubusercontent.com/u/344119591?s=200&v=4 |
| Preview alt | Cinnabar project logo |
| Preview fit | `contain` |

**Highlights**

- Java-style first-person hand sway, nametags & shader-friendly wgpu renderer
- Live resource pack hot-swapping without leaving your world
- Personal WebAssembly (WASM) mod preview + multi-account launcher
- Ships portable Linux x86_64 builds, AUR package & ARM64 Raspberry Pi support

**Install options**

#### Recipe: .AppImage (Portable)

**Format:** `.AppImage`

```sh
# Grab the latest Linux AppImage from GitHub Releases
chmod +x Cinnabar-*.AppImage
./Cinnabar-*.AppImage
```

**Note:** Great for any distro-no system-wide tinkering required.

#### Recipe: Build from Source

**Format:** `Native`

```sh
git clone https://github.com/cinnabar-mc/cinnabar.git
cd cinnabar
make play PROFILE=release
```

**Note:** Needs Rust, Go, and libwayland-dev / libudev-dev on Debian/Ubuntu.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="sober" -->
<a id="sober"></a>
<details>
<summary><strong>Sober</strong> — Roblox Player</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `sober` |
| Tagline | Play Roblox smoothly on Linux via Flatpak-no Wine, no dual-booting. |
| Description | Maintained by VinegarHQ, Sober is a clever dedicated Linux runtime that runs Roblox’s Android client directly on your desktop with Vulkan/OpenGL ES, sidestepping Wine limitations with near-native frame rates. |
| How it works | Sober creates a featherweight Linux runtime layer tailored specifically for the Android x86_64 Roblox binary, packaged neatly inside a sandboxed Flatpak. |
| Category key | `runtimes` |
| Category label | Runtime & Wrapper |
| Tone | `matcha` |
| Technology | C++ / Flatpak Runtime |
| License | Freeware / VinegarHQ |
| Primary package | `.Flatpak` |
| Featured | Yes |
| Steam Deck friendly | Yes |
| Requirements | Free Roblox account; Sober fetches the official Roblox package on first launch. |
| Vibe note | Smooth as iced matcha oat latte-just click play and hop into obbies. |
| Official website | https://sober.vinegarhq.org/ |
| Preview image | https://sober.vinegarhq.org/img/icon/sober.svg |
| Preview alt | Sober project logo |
| Preview fit | `contain` |

**Highlights**

- One-command Flathub install with automatic background updates
- Zero Wine translation overhead-silky smooth Vulkan rendering
- Supports custom FastFlags JSON tweaks and asset overlay folders
- Pairs with Vinegar (vinegarhq/vinegar) if you also need Roblox Studio

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub org.vinegarhq.Sober
flatpak run org.vinegarhq.Sober
```

**Note:** Requires Linux kernel 5.11+ and a CPU with SSE4.1/4.2.

#### Recipe: Direct Flatpakref

**Format:** `.Flatpak`

```sh
flatpak install --user https://sober.vinegarhq.org/sober.flatpakref
```

**Note:** Handy if you prefer installing directly from sober.vinegarhq.org.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="soberix" -->
<a id="soberix"></a>
<details>
<summary><strong>Soberix</strong> — Roblox (Sober Companion)</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `soberix` |
| Tagline | The friendly open-source Bloxstrap-style manager built for Sober. |
| Description | Want quality presets, FastFlags sliders, texture mods, and profile backups for Sober without hand-editing JSON files? Soberix wraps Sober’s config and asset_overlay folders in a cozy GTK4 interface. |
| How it works | Soberix talks cleanly to ~/.var/app/org.vinegarhq.Sober/ to manage FastFlags, overlay mods, and backups while keeping Sober untouched. |
| Category key | `runtimes` |
| Category label | Runtime & Wrapper |
| Tone | `chamomile` |
| Technology | Python & GTK4 |
| License | MIT |
| Primary package | `.AppImage` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Requires the Sober Flatpak (org.vinegarhq.Sober) installed first. |
| Vibe note | Extra caramel drizzle on top of your Sober setup. |
| Preview image | https://github.com/JADRT22.png?size=512 |
| Preview alt | Soberix project logo |
| Preview fit | `contain` |

**Highlights**

- Visual FastFlags editor with safe presets & one-click reset
- Drag-and-drop mod & texture management via asset_overlay
- Activity history and automatic local configuration backups
- MIT open source, shipped as a neat CI-built Linux AppImage

**Install options**

#### Recipe: .AppImage

**Format:** `.AppImage`

```sh
# Download Soberix-*.AppImage from GitHub Releases
chmod +x Soberix-*.AppImage
./Soberix-*.AppImage
```

**Note:** Pairs seamlessly with flatpak install flathub org.vinegarhq.Sober.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="prism-launcher" -->
<a id="prism-launcher"></a>
<details>
<summary><strong>Prism Launcher</strong> — Minecraft: Java Edition</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `prism-launcher` |
| Tagline | Tidy, open-source multi-instance launcher with built-in shader & mod browsers. |
| Description | A joyful GPLv3 launcher descended from MultiMC. Keep every modpack, Fabric/NeoForge loader, shader pack, and Java version neatly tucked into its own isolated jar. |
| How it works | Separates each Minecraft setup into a clean instance folder and pulls directly from Modrinth, CurseForge, FTB, and Technic APIs. |
| Category key | `runtimes` |
| Category label | Runtime & Wrapper |
| Tone | `honey` |
| Technology | C++ & Qt6 |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Requires a Microsoft account that owns Minecraft: Java Edition. |
| Vibe note | Like a neat wooden spice rack, except every jar is a cozy modded world. |
| Official website | https://prismlauncher.org/ |
| Preview image | https://github.com/PrismLauncher.png?size=512 |
| Preview alt | Prism Launcher project logo |
| Preview fit | `contain` |

**Highlights**

- Download Iris shaders, Sodium, and whole modpacks in two clicks
- First-class Flathub Flatpak and portable x86_64/ARM64 AppImages
- Automatic Java runtime detection & per-instance memory sliders
- Beloved staple on Steam Deck and desktop distros alike

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub org.prismlauncher.PrismLauncher
flatpak run org.prismlauncher.PrismLauncher
```

#### Recipe: .AppImage

**Format:** `.AppImage`

```sh
curl -LO https://github.com/PrismLauncher/PrismLauncher/releases/latest/download/PrismLauncher-Linux-x86_64.AppImage
chmod +x PrismLauncher-Linux-x86_64.AppImage
./PrismLauncher-Linux-x86_64.AppImage
```

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="unleashed-recomp" -->
<a id="unleashed-recomp"></a>
<details>
<summary><strong>UnleashedRecomp</strong> — Sonic Unleashed (Xbox 360)</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `unleashed-recomp` |
| Tagline | Static recompilation that brings Sonic Unleashed natively to Linux at 120+ FPS. |
| Description | One of the coolest open-source breakthroughs of recent years: UnleashedRecomp statically recompiles the original Xbox 360 executable into native C++ code for Linux with Vulkan, ultrawide, and high refresh rates. |
| How it works | Uses XenonRecomp to translate PowerPC Xbox 360 instructions straight into host C++, eliminating traditional CPU emulation overhead. |
| Category key | `recomp` |
| Category label | Static Recomp Port |
| Tone | `berry` |
| Technology | C++ / Vulkan |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Bring your own legally dumped Xbox 360 copy of Sonic Unleashed (+ optional DLC). |
| Vibe note | Pure daytime-stage joy without your laptop fans taking flight. |
| Preview image | https://github.com/hedge-dev.png?size=512 |
| Preview alt | UnleashedRecomp project logo |
| Preview fit | `contain` |

**Highlights**

- Unlocked frame rates, ultrawide resolutions & crisp MSAA on Linux
- Native DualSense, Xbox & Steam Deck glyph/controller support
- Built-in mod manager compatibility for community enhancements
- Zero emulator stutter-runs buttery smooth even on handhelds

**Install options**

#### Recipe: .Flatpak (Release)

**Format:** `.Flatpak`

```sh
# Grab the Linux Flatpak/AppImage from GitHub Releases
flatpak install --user ./UnleashedRecomp.flatpak
flatpak run io.github.hedge_dev.unleashedrecomp
```

**Note:** First launch guides you through pointing to your game files.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="zelda64-recomp" -->
<a id="zelda64-recomp"></a>
<details>
<summary><strong>Zelda 64: Recompiled</strong> — The Legend of Zelda: Majora's Mask</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `zelda64-recomp` |
| Tagline | Plug-and-play N64 static recompilation with RT64, gyro aim & instant loads. |
| Description | Recompiles the classic N64 binary of Majora’s Mask straight into a native Linux executable powered by the RT64 renderer-preserving every original effect while unlocking 144Hz ultrawide bliss. |
| How it works | Powered by N64Recomp + N64ModernRuntime, turning MIPS machine code into native C and rendering via Vulkan/RT64. |
| Category key | `recomp` |
| Category label | Static Recomp Port |
| Tone | `berry` |
| Technology | C / C++ |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Requires your own legally dumped US 1.0 ROM of Majora's Mask. |
| Vibe note | Clock Town has never looked softer, warmer, or smoother. |
| Preview image | https://github.com/Zelda64Recomp.png?size=512 |
| Preview alt | Zelda 64: Recompiled project logo |
| Preview fit | `contain` |

**Highlights**

- Official Linux Flatpak release plus Steam Deck-ready binaries
- True high framerate interpolation, widescreen & ultrawide
- Dual analog camera, gyro aiming, and instant scene transitions
- Supports rich community texture packs and C-API mods

**Install options**

#### Recipe: .Flatpak Bundle

**Format:** `.Flatpak`

```sh
# Download Zelda64Recompiled-*.flatpak from GitHub Releases
flatpak install --user ./Zelda64Recompiled-*.flatpak
flatpak run io.github.zelda64recomp.zelda64recomp
```

**Note:** Drop your ROM in the friendly welcome screen to begin.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="ship-of-harkinian" -->
<a id="ship-of-harkinian"></a>
<details>
<summary><strong>Ship of Harkinian</strong> — The Legend of Zelda: Ocarina of Time</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `ship-of-harkinian` |
| Tagline | Decompiled native Linux port packed with randomizers, HD textures & QoL treats. |
| Description | Built atop the community Ocarina of Time decompilation and libultraship, Ship of Harkinian gives Hyrule a full native Linux home-complete with free camera, 60+ FPS, and an endless built-in randomizer. |
| How it works | Compiles reconstructed C source code natively for Linux and extracts your game’s assets into an OTR archive on first launch. |
| Category key | `recomp` |
| Category label | Static Recomp Port |
| Tone | `matcha` |
| Technology | C & C++ |
| License | Open Source |
| Primary package | `.AppImage` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Requires your own supported Ocarina of Time ROM to generate local assets. |
| Vibe note | Nostalgia warmed up like freshly baked Lon Lon Milk bread. |
| Official website | https://www.shipofharkinian.com/ |
| Preview image | https://github.com/HarbourMasters.png?size=512 |
| Preview alt | Ship of Harkinian project logo |
| Preview fit | `contain` |

**Highlights**

- Official Linux AppImage releases-double click and play
- Built-in randomizer, cosmetic color tuner, and custom music support
- Free camera, d-pad item shortcuts & crisp high-res rendering
- Companion project 2 Ship 2 Harkinian covers Majora’s Mask too

**Install options**

#### Recipe: .AppImage

**Format:** `.AppImage`

```sh
# Download the Linux zip from HarbourMasters/Shipwright Releases
unzip SoH-*-Linux.zip -d ~/Games/ShipOfHarkinian
chmod +x ~/Games/ShipOfHarkinian/soh.appimage
~/Games/ShipOfHarkinian/soh.appimage
```

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="openmw" -->
<a id="openmw"></a>
<details>
<summary><strong>OpenMW</strong> — The Elder Scrolls III: Morrowind</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `openmw` |
| Tagline | A clean-room open-source 3D RPG engine bringing Morrowind natively to Linux. |
| Description | OpenMW completely replaces Morrowind’s 2002 engine with a rock-solid modern C++ implementation. Say goodbye to crashes and hello to distant misty mountains, Lua scripting, and native Linux joy. |
| How it works | Reads your existing Morrowind ESM/BSA data files directly inside a brand-new OpenSceneGraph-powered open-source engine. |
| Category key | `rewrites` |
| Category label | Engine Rewrite |
| Tone | `honey` |
| Technology | C++ & Lua |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Requires your own copy of Morrowind (GOG, Steam, or original discs). |
| Vibe note | Warm lantern light in Balmora, running effortlessly on Linux. |
| Official website | https://openmw.org/ |
| Preview image | https://github.com/OpenMW.png?size=512 |
| Preview alt | OpenMW project logo |
| Preview fit | `contain` |

**Highlights**

- Distant land, water shaders, shadows & native Wayland/X11 scaling
- Modern Lua modding API with huge curated mod lists
- Easy Flathub installation-zero Wine prefixes to wrangle
- Also powers TES3MP for cozy co-op Morrowind nights

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub org.openmw.OpenMW
flatpak run org.openmw.OpenMW
```

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="openrct2" -->
<a id="openrct2"></a>
<details>
<summary><strong>OpenRCT2</strong> — RollerCoaster Tycoon 2</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `openrct2` |
| Tagline | Beloved open-source theme park engine with online co-op & crisp high-DPI UI. |
| Description | OpenRCT2 rewrote Chris Sawyer’s classic assembly masterpiece into portable C++, adding online multiplayer park-building, fast-forward, JavaScript plugins, and native Linux builds. |
| How it works | Reimplements the entire RCT2 game engine cleanly in C++ while loading your original sprites, rides, and sound effects. |
| Category key | `rewrites` |
| Category label | Engine Rewrite |
| Tone | `peach` |
| Technology | C++ |
| License | GPL-3.0 |
| Primary package | `.AppImage` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Needs assets from RollerCoaster Tycoon 2 (and optionally RCT1) from GOG or Steam. |
| Vibe note | Cotton candy skies and gentle isometric bliss. |
| Official website | https://openrct2.io/ |
| Preview image | https://github.com/OpenRCT2.png?size=512 |
| Preview alt | OpenRCT2 project logo |
| Preview fit | `contain` |

**Highlights**

- Build cozy roller coaster parks together in real-time multiplayer
- Smooth high-DPI scaling, unlocked zoom & OpenGL rendering
- JavaScript plugin ecosystem for custom coasters & tools
- Official Linux AppImage & Flathub Flatpak updated constantly

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub io.openrct2.OpenRCT2
flatpak run io.openrct2.OpenRCT2
```

#### Recipe: .AppImage

**Format:** `.AppImage`

```sh
# Grab OpenRCT2-*-linux-x86_64.AppImage from GitHub Releases
chmod +x OpenRCT2-*.AppImage
./OpenRCT2-*.AppImage
```

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="devilutionx" -->
<a id="devilutionx"></a>
<details>
<summary><strong>DevilutionX</strong> — Diablo & Hellfire (1996)</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `devilutionx` |
| Tagline | Faithful C++ source port of Diablo 1 with widescreen, gamepad & stash upgrades. |
| Description | Born from a reverse-engineered decompilation of the original Diablo binary, DevilutionX brings Tristram natively to Linux desktops, handhelds, and ARM boards with optional modern comforts. |
| How it works | Runs the reconstructed native C++ engine directly on SDL2 using your original DIABDAT.MPQ archive. |
| Category key | `rewrites` |
| Category label | Engine Rewrite |
| Tone | `peach` |
| Technology | C++ |
| License | Sustainable Use / Open Source |
| Primary package | `.AppImage` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Copy DIABDAT.MPQ from your legally owned GOG or CD copy of Diablo. |
| Vibe note | Stay awhile and listen-at 16:9 without touching Wine. |
| Preview image | https://github.com/diasurgical.png?size=512 |
| Preview alt | DevilutionX project logo |
| Preview fit | `contain` |

**Highlights**

- Full widescreen, integer scaling & crisp high-FPS animations
- Native controller mapping (feels amazing on Steam Deck!)
- Shared stash, optional auto-gold pickup & ZeroTier multiplayer
- Portable Linux AppImage and Flathub Flatpak available

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub org.diasurgical.DevilutionX
flatpak run org.diasurgical.DevilutionX
```

#### Recipe: .AppImage

**Format:** `.AppImage`

```sh
# Grab devilutionx-linux-x86_64.AppImage from GitHub Releases
chmod +x devilutionx-linux-x86_64.AppImage
./devilutionx-linux-x86_64.AppImage
```

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="faugus-launcher" -->
<a id="faugus-launcher"></a>
<details>
<summary><strong>Faugus Launcher</strong> — Any Windows / Non-Steam Game</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `faugus-launcher` |
| Tagline | A breezy, lightweight GTK launcher for umu-launcher & Proton-GE. |
| Description | When a game doesn’t have a native rewrite yet, Faugus Launcher makes running it through Valve’s umu-launcher and Proton-GE feel wonderfully uncluttered-just pick an .exe, toggle MangoHud, and go. |
| How it works | Acts as a clean, minimal graphical front-end over umu-launcher, letting Proton-GE handle Windows games with minimal setup fuss. |
| Category key | `runtimes` |
| Category label | Runtime & Wrapper |
| Tone | `chamomile` |
| Technology | Python & GTK |
| License | MIT |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Works with your own DRM-free installers, Battle.net, EA App, or standalone games. |
| Vibe note | Zero clutter, soft edges, instant Proton magic. |
| Preview image | https://github.com/Faugus.png?size=512 |
| Preview alt | Faugus Launcher project logo |
| Preview fit | `contain` |

**Highlights**

- Super lightweight alternative to heavier all-in-one launchers
- Downloads & manages Proton-GE versions automatically
- Built-in toggles for GameMode, MangoHud & Gamescope
- Available on Flathub, AUR, and Fedora COPR

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub io.github.Faugus.faugus-launcher
flatpak run io.github.Faugus.faugus-launcher
```

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="whiterecomp" -->
<a id="whiterecomp"></a>
<details>
<summary><strong>WhiteRecomp</strong> — FINAL FANTASY XIII</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `whiterecomp` |
| Tagline | Experimental static recompilation turning your Steam FF13 into a native Linux AppImage. |
| Description | An ambitious open-source static recompiler that translates your own Steam copy of FINAL FANTASY XIII locally into a native x86_64 or ARM64 Linux Vulkan binary-complete with Steam achievements. |
| How it works | Builds a native executable on your own machine from your installed Steam files, optionally bundling it into a single portable AppImage. |
| Category key | `recomp` |
| Category label | Static Recomp Port |
| Tone | `chamomile` |
| Technology | C++ / Vulkan / SDL2 |
| License | Open Source |
| Primary package | `.AppImage` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Requires your own legally purchased Steam copy of FINAL FANTASY XIII. |
| Vibe note | Crystalline Cocoon vibes, freshly compiled on your penguin box. |
| Preview image | https://github.com/ps4star.png?size=512 |
| Preview alt | WhiteRecomp project logo |
| Preview fit | `contain` |

**Highlights**

- Toggle "As AppImage" to package the built native port into one neat file
- Native Vulkan rendering with SDL2 on x86_64 and ARM64 Linux
- Integrates with local steamclient.so for real Steam achievements
- Shows just how wild the modern Linux recompilation scene is getting

**Install options**

#### Recipe: .AppImage Builder

**Format:** `.AppImage`

```sh
# Grab WhiteRecompLauncher_linux from GitHub Releases
chmod +x WhiteRecompLauncher_linux
./WhiteRecompLauncher_linux
```

**Note:** Flip the "As AppImage" toggle before clicking Build for a single-file binary!

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="heroic-games-launcher" -->
<a id="heroic-games-launcher"></a>
<details>
<summary><strong>Heroic Games Launcher</strong> — GOG, Epic Games & Amazon Games</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `heroic-games-launcher` |
| Tagline | A unified launcher for your GOG, Epic and Amazon game libraries. |
| Description | Heroic is an open-source game launcher for Linux, Windows and macOS. On Linux it can install, update, repair and launch games from GOG, Epic Games Store and Amazon Games, while letting you choose Wine or Proton compatibility tools. |
| How it works | Heroic connects to each store through its own download integrations and launches Windows titles through Wine or Proton. It can also import existing installations, organize categories and sync supported cloud saves. |
| Category key | `runtimes` |
| Category label | Game Launcher |
| Tone | `honey` |
| Technology | TypeScript / Electron |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Requires accounts and game entitlements from the stores you use. Game compatibility and anti-cheat support vary by title. |
| Vibe note | One library shelf for several PC game stores. |
| Official website | https://heroicgameslauncher.com/ |
| Preview image | https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/assets/26871415/70c9e0f2-3fa8-4e56-9bb0-0e5f8713c968 |
| Preview alt | Heroic Games Launcher library screenshot |
| Preview fit | `cover` |

**Highlights**

- Combines GOG, Epic Games Store and Amazon Games libraries in one place
- Installs, repairs, updates and imports existing game installations
- Supports Wine and Proton runners with compatibility information
- Includes Steam Deck compatibility details and cloud-save support where available

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub com.heroicgameslauncher.hgl
```

**Note:** The Flatpak is the recommended cross-distro option.

#### Recipe: .AppImage

**Format:** `.AppImage`

```sh
chmod +x Heroic*.AppImage
./Heroic*.AppImage
```

**Note:** Download the Linux AppImage from the project releases before running these commands.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="lutris" -->
<a id="lutris"></a>
<details>
<summary><strong>Lutris</strong> — Games from many eras and platforms</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `lutris` |
| Tagline | A game library and installer hub for native games, emulators and Wine. |
| Description | Lutris is an open gaming platform for Linux. It brings together games from different eras and systems by combining emulators, engine reimplementations and compatibility layers, with community-maintained installer scripts. |
| How it works | Lutris manages game entries and runners from one desktop client. Installer scripts automate setup steps and can be customized, while existing libraries from services such as Steam, GOG and Humble Bundle can be connected. |
| Category key | `runtimes` |
| Category label | Game Launcher |
| Tone | `matcha` |
| Technology | Python / GTK |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Game installers may require original game files, store accounts, emulators or separately installed Wine components. |
| Vibe note | A single front door for a very mixed game collection. |
| Official website | https://lutris.net/ |
| Preview image | https://github.com/lutris.png?size=512 |
| Preview alt | Lutris project logo |
| Preview fit | `contain` |

**Highlights**

- Centralizes games from different stores, emulators and compatibility layers
- Community installer scripts automate common setup steps
- Supports Wine runners and native Linux games
- Available through Flathub and many distribution repositories

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub net.lutris.Lutris
flatpak run net.lutris.Lutris
```

**Note:** The Flatpak includes the runtime dependencies; Windows games may still need suitable drivers and runner configuration.

#### Recipe: Arch Linux

**Format:** `Native`

```sh
sudo pacman -S lutris
```

**Note:** Lutris is available in the official Arch Linux repositories.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="bottles" -->
<a id="bottles"></a>
<details>
<summary><strong>Bottles</strong> — Windows games and applications</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `bottles` |
| Tagline | Manage isolated Wine environments with a clear desktop workflow. |
| Description | Bottles helps run Windows software and games on Linux. Each bottle has its own environment, runner and configuration, with tools for installing dependencies, applying gaming tweaks, monitoring processes and restoring backups. |
| How it works | Bottles groups Wine prefixes into separate, manageable environments. Its runner and dependency controls make it easier to keep different Windows applications isolated instead of sharing one global prefix. |
| Category key | `runtimes` |
| Category label | Compatibility Layer |
| Tone | `chamomile` |
| Technology | Python / GTK |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | You still need legitimate game installers, required accounts and compatible graphics drivers. Not every Windows game works. |
| Vibe note | Separate, tidy environments instead of one tangled Wine prefix. |
| Official website | https://usebottles.com/ |
| Preview image | https://raw.githubusercontent.com/bottlesdevs/Bottles/main/docs/screenshot-dark.png |
| Preview alt | Bottles application screenshot |
| Preview fit | `cover` |

**Highlights**

- Keeps Windows applications separated into individual environments
- Switches runners and installs common dependencies per bottle
- Includes gaming-focused settings, process monitoring and recovery tools
- Distributed primarily as a sandboxed Flatpak

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub com.usebottles.bottles
flatpak run com.usebottles.bottles
```

**Note:** Bottles is primarily distributed as a Flatpak.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="protonup-qt" -->
<a id="protonup-qt"></a>
<details>
<summary><strong>ProtonUp-Qt</strong> — Steam, Lutris, Heroic & Bottles</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `protonup-qt` |
| Tagline | Install and manage community Proton and Wine compatibility tools. |
| Description | ProtonUp-Qt is a graphical manager for compatibility tools such as GE-Proton, Luxtorpeda and other Wine/Proton builds. It supports common Linux game launchers and helps keep custom runners organized. |
| How it works | The app downloads supported compatibility-tool releases and places them in the appropriate launcher directories. It is an independent utility and is not affiliated with the developers of the runners or launchers it manages. |
| Category key | `tools` |
| Category label | Compatibility Tool |
| Tone | `berry` |
| Technology | Python / Qt 6 |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Requires a supported launcher such as Steam, Lutris, Heroic or Bottles. It manages compatibility tools; it does not provide game licenses. |
| Vibe note | A small toolkit for keeping your compatibility runners current. |
| Official website | https://davidotek.github.io/protonup-qt/ |
| Preview image | https://raw.githubusercontent.com/DavidoTek/ProtonUp-Qt/main/.github/images/pupgui2-screenshot2.png |
| Preview alt | ProtonUp-Qt compatibility tool manager screenshot |
| Preview fit | `cover` |

**Highlights**

- Installs and updates GE-Proton and other community compatibility tools
- Supports Steam, Lutris, Heroic Games Launcher and Bottles
- Available as a Flathub Flatpak and a portable AppImage
- Includes handheld-friendly controls for supported Steam Deck workflows

**Install options**

#### Recipe: .Flatpak (Flathub)

**Format:** `.Flatpak`

```sh
flatpak install flathub net.davidotek.pupgui2
```

**Note:** The Flathub release may follow the upstream AppImage release by a few days.

#### Recipe: .AppImage

**Format:** `.AppImage`

```sh
chmod +x ProtonUp-Qt*.AppImage
./ProtonUp-Qt*.AppImage
```

**Note:** Download the current AppImage from the project releases first.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="openttd" -->
<a id="openttd"></a>
<details>
<summary><strong>OpenTTD</strong> — Transport Tycoon Deluxe-inspired transport simulation</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `openttd` |
| Tagline | Build a transport empire with trains, roads, ships and aircraft. |
| Description | OpenTTD is an open-source transport simulation that expands on the original Transport Tycoon Deluxe formula. Design interconnected networks, manage routes and cargo, grow cities, and play solo or with other players. |
| How it works | The project recreates and extends the classic transport-management gameplay in a modern, cross-platform C++ game. Free replacement graphics and sound sets make the default experience accessible without distributing the original commercial assets. |
| Category key | `games` |
| Category label | Open-Source Simulation |
| Tone | `honey` |
| Technology | C++ |
| License | GPL-2.0 |
| Primary package | `Native` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | The game can use free replacement graphics and sound sets. Original Transport Tycoon Deluxe data is optional for players who want the classic assets. |
| Vibe note | A whole railway timetable, tucked into one delightful little map. |
| Official website | https://www.openttd.org/ |
| Preview image | https://github.com/OpenTTD.png?size=512 |
| Preview alt | OpenTTD project organization avatar |
| Preview fit | `contain` |

**Highlights**

- Build road, rail, air and sea transport networks
- Manage cargo routes, timetables, vehicles and company finances
- Play custom scenarios and community-made maps
- Supports multiplayer and extensive user-created content

**Install options**

#### Recipe: Arch Linux

**Format:** `Native`

```sh
sudo pacman -S openttd
```

**Note:** This command is for Arch Linux and derivatives. Other distributions provide OpenTTD through their package managers.

#### Recipe: Flatpak

**Format:** `.Flatpak`

```sh
flatpak install flathub org.openttd.OpenTTD
```

**Note:** The Flathub build is community-provided and marked unverified by Flathub; it is not maintained or endorsed by the OpenTTD team.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="luanti" -->
<a id="luanti"></a>
<details>
<summary><strong>Luanti</strong> — Voxel sandbox worlds and community games</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `luanti` |
| Tagline | A lightweight, moddable voxel platform for building, exploring and multiplayer. |
| Description | Luanti, formerly known as Minetest, is an open-source voxel game platform. Its engine powers block-based worlds, multiplayer servers and a wide range of community-created games, with a simple modding API and a focus on portability. |
| How it works | Luanti provides the engine, world simulation and Lua-based modding APIs. Players can install game packages and mods from the in-game content browser or connect to community servers. |
| Category key | `games` |
| Category label | Open-Source Game Platform |
| Tone | `matcha` |
| Technology | C++ / Lua |
| License | LGPL-2.1 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | No commercial game copy is required. Luanti is a platform; individual game packages and mods may have their own licenses and requirements. |
| Vibe note | A tiny sandbox that can grow into a very large world. |
| Official website | https://www.luanti.org/ |
| Preview image | https://github.com/luanti-org.png?size=512 |
| Preview alt | Luanti project organization avatar |
| Preview fit | `contain` |

**Highlights**

- Lightweight voxel worlds with digging, building and crafting
- Multiplayer servers and locally hosted worlds
- Lua modding API and a large community content ecosystem
- Designed to run on a wide range of desktop hardware

**Install options**

#### Recipe: Flatpak

**Format:** `.Flatpak`

```sh
flatpak install flathub org.luanti.luanti
```

**Note:** The Luanti website lists Flatpak as the stable package for all Linux distributions.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="battle-for-wesnoth" -->
<a id="battle-for-wesnoth"></a>
<details>
<summary><strong>Battle for Wesnoth</strong> — Turn-based high-fantasy strategy</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `battle-for-wesnoth` |
| Tagline | Lead armies through a rich fantasy world of campaigns and tactical battles. |
| Description | Battle for Wesnoth is a free, open-source turn-based strategy game. Recruit units, use terrain and time-of-day advantages, and guide different factions through a large collection of story-driven campaigns or online multiplayer matches. |
| How it works | The game combines hex-based tactical battles with campaign scripting and a content ecosystem built around units, maps, scenarios and add-ons. |
| Category key | `games` |
| Category label | Open-Source Strategy |
| Tone | `berry` |
| Technology | C++ / Lua / WML |
| License | GPL-2.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | The game and its core campaigns are free and open source; no commercial game files are required. |
| Vibe note | A tactical campaign where even one hex can change the whole battle. |
| Official website | https://www.wesnoth.org/ |
| Preview image | https://github.com/wesnoth.png?size=512 |
| Preview alt | Battle for Wesnoth project organization avatar |
| Preview fit | `contain` |

**Highlights**

- Large single-player campaigns with distinct stories and factions
- Hex-grid tactical combat shaped by terrain and time of day
- Online multiplayer and a broad user-created add-on catalogue
- Map, scenario and campaign creation tools

**Install options**

#### Recipe: Flatpak

**Format:** `.Flatpak`

```sh
flatpak install flathub org.wesnoth.Wesnoth
```

**Note:** The Wesnoth project lists Flatpak as a Linux distribution channel.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="endless-sky" -->
<a id="endless-sky"></a>
<details>
<summary><strong>Endless Sky</strong> — Space exploration, trading and combat</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `endless-sky` |
| Tagline | Start with a small ship, then make your own path across a vast galaxy. |
| Description | Endless Sky is a free, open-source space exploration and trading game. Take passenger or cargo jobs, upgrade ships, explore unfamiliar systems, fight pirates, and follow story missions or simply chart your own course. |
| How it works | The game blends a 2D space sandbox with mission scripting, ship outfitting, trading systems and a community-maintained universe of additional content. |
| Category key | `games` |
| Category label | Open-Source Space Game |
| Tone | `chamomile` |
| Technology | C++ |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | The base game is free and open source; no commercial game data is required. |
| Vibe note | One small ship, a very large sky, and no fixed route to follow. |
| Official website | https://endless-sky.github.io/ |
| Preview image | https://github.com/endless-sky.png?size=512 |
| Preview alt | Endless Sky project organization avatar |
| Preview fit | `contain` |

**Highlights**

- Trade cargo, transport passengers and take on missions
- Upgrade ships with new weapons, engines and equipment
- Explore branching storylines and a large star map
- Extend the universe with community-created content

**Install options**

#### Recipe: Flatpak

**Format:** `.Flatpak`

```sh
flatpak install flathub io.github.endless_sky.endless_sky
```

**Note:** The Flathub package is available for Linux desktops.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="openra" -->
<a id="openra"></a>
<details>
<summary><strong>OpenRA</strong> — Command & Conquer, Red Alert and Dune 2000</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `openra` |
| Tagline | A modern open-source RTS engine for classic Westwood-style strategy games. |
| Description | OpenRA rebuilds and modernizes early Westwood real-time strategy games through a flexible open-source engine and a set of mods. It adds modern controls, replays, observer tools and other quality-of-life features while preserving the feel of classic 2D and 2.5D RTS gameplay. |
| How it works | The OpenRA engine provides shared simulation, rendering and networking systems. Individual mods define the rules, units and content for each supported strategy game. |
| Category key | `rewrites` |
| Category label | RTS Engine Reimplementation |
| Tone | `peach` |
| Technology | C# |
| License | GPL-3.0 |
| Primary package | `.AppImage` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | OpenRA is free and includes three mods. Some mods can automatically download original game assets; others may require files from your own original game media. Check each mod's requirements. |
| Vibe note | Classic RTS energy, with a modern engine under the hood. |
| Official website | https://www.openra.net/ |
| Preview image | https://github.com/OpenRA.png?size=512 |
| Preview alt | OpenRA project organization avatar |
| Preview fit | `contain` |

**Highlights**

- Modernized engine for classic Westwood real-time strategy games
- Includes Red Alert, Tiberian Dawn and Dune 2000 mods
- Modern controls, replays, observers and multiplayer
- Linux AppImage builds and community Flatpak packaging

**Install options**

#### Recipe: AppImage

**Format:** `.AppImage`

```sh
chmod +x OpenRA-*.AppImage
./OpenRA-*.AppImage
```

**Note:** Download the Linux AppImage from the official OpenRA download page first. The project recommends AppImage if you need to switch between official and community mods.

#### Recipe: Flatpak

**Format:** `.Flatpak`

```sh
flatpak install flathub net.openra.OpenRA
```

**Note:** The official OpenRA download page warns that Flatpak sandboxing can interfere with switching between official and community mods.

#### Recipe: Arch Linux

**Format:** `Native`

```sh
sudo pacman -S openra
```

**Note:** This command is for Arch Linux and derivatives.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="vcmi" -->
<a id="vcmi"></a>
<details>
<summary><strong>VCMI</strong> — Heroes of Might and Magic III</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `vcmi` |
| Tagline | An open-source engine that brings Heroes III to modern desktop systems. |
| Description | VCMI is an open-source engine for Heroes of Might and Magic III. It rebuilds the strategy game's systems for modern platforms and adds features such as mod support, multiplayer improvements and expanded configuration. |
| How it works | The engine reimplements game logic and rendering while loading the original game's data files supplied by the player. It does not bundle the copyrighted Heroes III assets. |
| Category key | `rewrites` |
| Category label | Engine Reimplementation |
| Tone | `matcha` |
| Technology | C++ |
| License | GPL-2.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | Requires your own Heroes of Might and Magic III game data files. VCMI does not distribute the original assets. |
| Vibe note | A familiar fantasy strategy world, rebuilt for modern Linux. |
| Official website | https://vcmi.eu/ |
| Preview image | https://github.com/vcmi.png?size=512 |
| Preview alt | VCMI project organization avatar |
| Preview fit | `contain` |

**Highlights**

- Modern open-source engine for Heroes of Might and Magic III
- Supports community mods and expansion content
- Includes multiplayer and modern platform improvements
- Official Linux installation documentation covers Flatpak and AppImage

**Install options**

#### Recipe: Flatpak

**Format:** `.Flatpak`

```sh
flatpak install flathub eu.vcmi.VCMI
```

**Note:** The VCMI documentation lists this as the latest public release build for Linux.

#### Recipe: AppImage

**Format:** `.AppImage`

```sh
chmod +x ./*vcmi*.AppImage
./*vcmi*.AppImage
```

**Note:** Download a stable or nightly AppImage from the official VCMI releases first.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="scummvm" -->
<a id="scummvm"></a>
<details>
<summary><strong>ScummVM</strong> — Classic point-and-click adventures and RPGs</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `scummvm` |
| Tagline | Play hundreds of classic adventures on modern Linux systems. |
| Description | ScummVM is an interpreter for a large library of classic graphical adventures and role-playing games. It replaces the original game executables so supported titles can run on systems they were never designed for. |
| How it works | ScummVM implements the game engines and file formats used by supported titles. Players add the game's data files to the launcher, then ScummVM runs the title through its own engine implementations. |
| Category key | `runtimes` |
| Category label | Game Runtime |
| Tone | `honey` |
| Technology | C++ |
| License | GPL-3.0 |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | Most supported games require their original data files. ScummVM replaces the game executable; it does not provide commercial game assets. |
| Vibe note | A little interpreter for a very large library of old adventures. |
| Official website | https://www.scummvm.org/ |
| Preview image | https://github.com/scummvm.png?size=512 |
| Preview alt | ScummVM project organization avatar |
| Preview fit | `contain` |

**Highlights**

- Supports a large library of classic adventure and RPG titles
- Replaces the original game engine executables
- Offers modern scaling, audio, save and input features
- Runs supported titles across Linux and many other platforms

**Install options**

#### Recipe: Flatpak

**Format:** `.Flatpak`

```sh
flatpak install flathub org.scummvm.ScummVM
flatpak run org.scummvm.ScummVM
```

**Note:** The Flatpak is sandboxed; copy game data into a folder ScummVM can access, such as Documents.

#### Recipe: Arch Linux

**Format:** `Native`

```sh
sudo pacman -S scummvm
```

**Note:** This command is for Arch Linux and derivatives. ScummVM is also available in many distribution repositories.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="mangohud" -->
<a id="mangohud"></a>
<details>
<summary><strong>MangoHud</strong> — Vulkan and OpenGL games</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `mangohud` |
| Tagline | Overlay FPS, frame timing, temperatures and CPU/GPU statistics while gaming. |
| Description | MangoHud is a Vulkan and OpenGL overlay for Linux. It can show frame rate, frame times, CPU and GPU activity, temperatures, memory use and other performance metrics while a game is running. |
| How it works | MangoHud hooks into supported Vulkan and OpenGL applications and draws a configurable performance overlay. It can be enabled per game through a launch option or environment variable. |
| Category key | `tools` |
| Category label | Performance Overlay |
| Tone | `chamomile` |
| Technology | C / C++ |
| License | MIT |
| Primary package | `Native` |
| Featured | No |
| Steam Deck friendly | Yes |
| Requirements | Requires a supported Vulkan or OpenGL application and compatible graphics stack. Some 32-bit games need the matching 32-bit package. |
| Vibe note | A clean little dashboard for seeing what your game is doing. |
| Preview image | https://github.com/flightlessmango.png?size=512 |
| Preview alt | MangoHud project organization avatar |
| Preview fit | `contain` |

**Highlights**

- Shows FPS, frame time, GPU/CPU load and temperatures
- Works with Vulkan and OpenGL applications
- Supports per-game configuration and customizable metrics
- Can be enabled from Steam or compatible game launchers

**Install options**

#### Recipe: Arch Linux

**Format:** `Native`

```sh
sudo pacman -S mangohud lib32-mangohud
```

**Note:** Install the 32-bit package as well when you need the overlay for 32-bit games.

#### Recipe: Flatpak layer

**Format:** `.Flatpak`

```sh
flatpak install flathub org.freedesktop.Platform.VulkanLayer.MangoHud
```

**Note:** For Flatpak Steam, the MangoHud README documents enabling the layer with a Flatpak override.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="gamemode" -->
<a id="gamemode"></a>
<details>
<summary><strong>GameMode</strong> — Linux system performance on demand</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `gamemode` |
| Tagline | Let games request temporary system optimizations while they run. |
| Description | GameMode is a daemon and library from Feral Interactive that lets games request performance optimizations on Linux. Depending on configuration and hardware, it can adjust CPU governor settings, process priority, I/O priority, GPU performance modes and more. |
| How it works | A game or launcher sends a request to the GameMode daemon. Applications without native integration can be launched through the gamemoderun helper, including through Steam launch options. |
| Category key | `tools` |
| Category label | Performance Optimizer |
| Tone | `matcha` |
| Technology | C |
| License | BSD-3-Clause |
| Primary package | `Native` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | Requires Linux with the system services and packages supported by your distribution. The optimizations available depend on hardware and configuration. |
| Vibe note | An on-demand performance switch, rather than a permanent tweak. |
| Preview image | https://github.com/FeralInteractive.png?size=512 |
| Preview alt | Feral Interactive project organization avatar |
| Preview fit | `contain` |

**Highlights**

- Provides on-demand CPU and process performance tuning
- Can adjust I/O priority and selected GPU performance controls
- Works with games that integrate GameMode or via gamemoderun
- Packages are available for Arch, Debian, Fedora and other distributions

**Install options**

#### Recipe: Arch Linux

**Format:** `Native`

```sh
sudo pacman -S gamemode lib32-gamemode
```

**Note:** The 32-bit library is useful for 32-bit games. For Steam launch options, use: gamemoderun %command%.

#### Recipe: Launch with GameMode

**Format:** `Native`

```sh
gamemoderun ./your-game
```

**Note:** Use this for games that do not request GameMode automatically. Replace ./your-game with the actual game command.

</details>
<!-- lcg:project:end -->

<!-- lcg:project:start id="lact" -->
<a id="lact"></a>
<details>
<summary><strong>LACT</strong> — AMD, Intel and NVIDIA GPU control</summary>

| Field | Information |
| --- | --- |
| Catalogue ID | `lact` |
| Tagline | Monitor GPU health, tune power limits and manage fan curves on Linux. |
| Description | LACT is a Linux GPU configuration and monitoring application. It provides detailed hardware information, historical charts, power and thermal controls, fan curves and overclocking features where supported by the GPU and driver. |
| How it works | The desktop app communicates with a system service that applies hardware settings. The service can operate independently of a graphical session, while the Flatpak build can also be used for read-only monitoring without installing the service. |
| Category key | `tools` |
| Category label | GPU Monitor & Tuning |
| Tone | `berry` |
| Technology | Rust |
| License | MIT |
| Primary package | `.Flatpak` |
| Featured | No |
| Steam Deck friendly | No |
| Requirements | Hardware controls vary by GPU vendor, model and driver. Full configuration requires LACT's system daemon and appropriate privileges; Flatpak-only monitoring can work without the daemon. |
| Vibe note | A thoughtful control panel for the hardware behind your frames. |
| Preview image | https://github.com/ilya-zlobintsev.png?size=512 |
| Preview alt | LACT project author avatar |
| Preview fit | `contain` |

**Highlights**

- Detailed AMD, Intel and NVIDIA GPU information
- Historical charts for power, temperatures and clocks
- Fan curves, power limits and overclocking on supported hardware
- Profiles can activate automatically for selected processes

**Install options**

#### Recipe: Flatpak

**Format:** `.Flatpak`

```sh
flatpak install flathub io.github.ilya_zlobintsev.LACT
```

**Note:** For full hardware control, follow the upstream Flatpak setup prompt to install and start the system daemon. Read-only monitoring can work without the daemon.

#### Recipe: Arch Linux

**Format:** `Native`

```sh
sudo pacman -S lact
```

**Note:** The Arch package is available in the official repositories. Follow the upstream documentation for enabling the LACT daemon.

</details>
<!-- lcg:project:end -->
<!-- lcg:details:end -->

## Public catalogue API

The build generates:

- `/api/projects.json` — static public JSON API.
- `src/data/projects.generated.json` — data imported by the SPA.

The generated files are not edited manually. Change the README table or its project detail block, then run:

```sh
npm run generate:catalogue
npm run build
```

## Contribution rules

- Prefer official upstream repositories and documentation.
- Do not add pirated game files, ROMs, proprietary assets or download mirrors.
- Explain when users must provide their own legally obtained game data.
- Do not claim Steam Deck compatibility unless it has been tested or documented.
- Use direct HTTPS links for repositories, websites and preview images.
- Keep install commands factual, distro-specific where needed, and safe to copy.
