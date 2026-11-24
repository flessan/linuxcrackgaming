# LinuxCrackGaming project catalogue

This file is the canonical catalogue source. Each project is one Markdown section with a single fenced `json` metadata block.

To add a project, copy one `##` section and its JSON block, change the fields, and include an `imageUrl` that points to a public project screenshot or logo. Keep `id` unique and use an HTTPS GitHub repository URL. The build script validates the entries and publishes them as `public/api/projects.json`.

Community suggestions should be submitted through the GitHub issue template at https://github.com/flessan/linuxcrackgaming/issues/new?template=add-project.yml. A maintainer reviews the issue and updates this file.


## Cinnabar

```json
{
  "id": "cinnabar",
  "name": "Cinnabar",
  "gameTitle": "Minecraft: Bedrock Edition",
  "tagline": "A silky-fast Rust rewrite of Bedrock with Java-style touches & WASM mods.",
  "description": "Minecraft: Bedrock Edition rebuilt from the ground up in Rust (Bevy + wgpu) paired with a Go networking core. Connects to real servers, Realms, and friend worlds while feeling snappy on desktop Linux and Raspberry Pi.",
  "howItWorks": "Instead of wrapping an Android APK or emulating Windows, Cinnabar renders everything natively via Rust + wgpu while its Go core speaks RakNet & NetherNet directly to Bedrock servers.",
  "category": "rewrites",
  "categoryLabel": "Engine Rewrite",
  "tone": "peach",
  "language": "Rust & Go",
  "license": "Source-Available",
  "githubUrl": "https://github.com/cinnabar-mc/cinnabar",
  "repoSlug": "cinnabar-mc/cinnabar",
  "formats": [
    ".AppImage",
    "Native"
  ],
  "primaryFormat": ".AppImage",
  "featured": true,
  "steamDeckFriendly": true,
  "byocRequirement": "Requires your own Microsoft account owning Minecraft; downloads public vanilla assets after EULA.",
  "highlights": [
    "Java-style first-person hand sway, nametags & shader-friendly wgpu renderer",
    "Live resource pack hot-swapping without leaving your world",
    "Personal WebAssembly (WASM) mod preview + multi-account launcher",
    "Ships portable Linux x86_64 builds, AUR package & ARM64 Raspberry Pi support"
  ],
  "recipes": [
    {
      "label": ".AppImage (Portable)",
      "format": ".AppImage",
      "command": "# Grab the latest Linux AppImage from GitHub Releases\nchmod +x Cinnabar-*.AppImage\n./Cinnabar-*.AppImage",
      "note": "Great for any distro-no system-wide tinkering required."
    },
    {
      "label": "Build from Source",
      "format": "Native",
      "command": "git clone https://github.com/cinnabar-mc/cinnabar.git\ncd cinnabar\nmake play PROFILE=release",
      "note": "Needs Rust, Go, and libwayland-dev / libudev-dev on Debian/Ubuntu."
    }
  ],
  "vibeNote": "Tastes like warm cinnamon toast and 240 FPS chunk streaming.",
  "emojiMark": "https://avatars.githubusercontent.com/u/344119591?s=200&v=4",
  "imageUrl": "https://avatars.githubusercontent.com/u/344119591?s=200&v=4",
  "imageAlt": "Cinnabar project logo"
}
```

## Sober

```json
{
  "id": "sober",
  "name": "Sober",
  "gameTitle": "Roblox Player",
  "tagline": "Play Roblox smoothly on Linux via Flatpak-no Wine, no dual-booting.",
  "description": "Maintained by VinegarHQ, Sober is a clever dedicated Linux runtime that runs Roblox’s Android client directly on your desktop with Vulkan/OpenGL ES, sidestepping Wine limitations with near-native frame rates.",
  "howItWorks": "Sober creates a featherweight Linux runtime layer tailored specifically for the Android x86_64 Roblox binary, packaged neatly inside a sandboxed Flatpak.",
  "category": "runtimes",
  "categoryLabel": "Runtime & Wrapper",
  "tone": "matcha",
  "language": "C++ / Flatpak Runtime",
  "license": "Freeware / VinegarHQ",
  "githubUrl": "https://github.com/vinegarhq/sober",
  "homepageUrl": "https://sober.vinegarhq.org/",
  "repoSlug": "vinegarhq/sober",
  "formats": [
    ".Flatpak"
  ],
  "primaryFormat": ".Flatpak",
  "featured": true,
  "steamDeckFriendly": true,
  "byocRequirement": "Free Roblox account; Sober fetches the official Roblox package on first launch.",
  "highlights": [
    "One-command Flathub install with automatic background updates",
    "Zero Wine translation overhead-silky smooth Vulkan rendering",
    "Supports custom FastFlags JSON tweaks and asset overlay folders",
    "Pairs with Vinegar (vinegarhq/vinegar) if you also need Roblox Studio"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub org.vinegarhq.Sober\nflatpak run org.vinegarhq.Sober",
      "note": "Requires Linux kernel 5.11+ and a CPU with SSE4.1/4.2."
    },
    {
      "label": "Direct Flatpakref",
      "format": ".Flatpak",
      "command": "flatpak install --user https://sober.vinegarhq.org/sober.flatpakref",
      "note": "Handy if you prefer installing directly from sober.vinegarhq.org."
    }
  ],
  "vibeNote": "Smooth as iced matcha oat latte-just click play and hop into obbies.",
  "emojiMark": "https://sober.vinegarhq.org/img/icon/sober.svg",
  "imageUrl": "https://sober.vinegarhq.org/img/icon/sober.svg",
  "imageAlt": "Sober project logo"
}
```

## Soberix

```json
{
  "id": "soberix",
  "name": "Soberix",
  "gameTitle": "Roblox (Sober Companion)",
  "tagline": "The friendly open-source Bloxstrap-style manager built for Sober.",
  "description": "Want quality presets, FastFlags sliders, texture mods, and profile backups for Sober without hand-editing JSON files? Soberix wraps Sober’s config and asset_overlay folders in a cozy GTK4 interface.",
  "howItWorks": "Soberix talks cleanly to ~/.var/app/org.vinegarhq.Sober/ to manage FastFlags, overlay mods, and backups while keeping Sober untouched.",
  "category": "runtimes",
  "categoryLabel": "Runtime & Wrapper",
  "tone": "chamomile",
  "language": "Python & GTK4",
  "license": "MIT",
  "githubUrl": "https://github.com/JADRT22/soberix",
  "repoSlug": "JADRT22/soberix",
  "formats": [
    ".AppImage",
    "Native"
  ],
  "primaryFormat": ".AppImage",
  "steamDeckFriendly": true,
  "byocRequirement": "Requires the Sober Flatpak (org.vinegarhq.Sober) installed first.",
  "highlights": [
    "Visual FastFlags editor with safe presets & one-click reset",
    "Drag-and-drop mod & texture management via asset_overlay",
    "Activity history and automatic local configuration backups",
    "MIT open source, shipped as a neat CI-built Linux AppImage"
  ],
  "recipes": [
    {
      "label": ".AppImage",
      "format": ".AppImage",
      "command": "# Download Soberix-*.AppImage from GitHub Releases\nchmod +x Soberix-*.AppImage\n./Soberix-*.AppImage",
      "note": "Pairs seamlessly with flatpak install flathub org.vinegarhq.Sober."
    }
  ],
  "vibeNote": "Extra caramel drizzle on top of your Sober setup.",
  "emojiMark": "🎛️",
  "imageUrl": "https://github.com/JADRT22.png?size=512",
  "imageAlt": "Soberix project logo"
}
```

## Prism Launcher

```json
{
  "id": "prism-launcher",
  "name": "Prism Launcher",
  "gameTitle": "Minecraft: Java Edition",
  "tagline": "Tidy, open-source multi-instance launcher with built-in shader & mod browsers.",
  "description": "A joyful GPLv3 launcher descended from MultiMC. Keep every modpack, Fabric/NeoForge loader, shader pack, and Java version neatly tucked into its own isolated jar.",
  "howItWorks": "Separates each Minecraft setup into a clean instance folder and pulls directly from Modrinth, CurseForge, FTB, and Technic APIs.",
  "category": "runtimes",
  "categoryLabel": "Runtime & Wrapper",
  "tone": "honey",
  "language": "C++ & Qt6",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/PrismLauncher/PrismLauncher",
  "homepageUrl": "https://prismlauncher.org/",
  "repoSlug": "PrismLauncher/PrismLauncher",
  "formats": [
    ".Flatpak",
    ".AppImage",
    "Native"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": true,
  "byocRequirement": "Requires a Microsoft account that owns Minecraft: Java Edition.",
  "highlights": [
    "Download Iris shaders, Sodium, and whole modpacks in two clicks",
    "First-class Flathub Flatpak and portable x86_64/ARM64 AppImages",
    "Automatic Java runtime detection & per-instance memory sliders",
    "Beloved staple on Steam Deck and desktop distros alike"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub org.prismlauncher.PrismLauncher\nflatpak run org.prismlauncher.PrismLauncher"
    },
    {
      "label": ".AppImage",
      "format": ".AppImage",
      "command": "curl -LO https://github.com/PrismLauncher/PrismLauncher/releases/latest/download/PrismLauncher-Linux-x86_64.AppImage\nchmod +x PrismLauncher-Linux-x86_64.AppImage\n./PrismLauncher-Linux-x86_64.AppImage"
    }
  ],
  "vibeNote": "Like a neat wooden spice rack, except every jar is a cozy modded world.",
  "emojiMark": "🔮",
  "imageUrl": "https://github.com/PrismLauncher.png?size=512",
  "imageAlt": "Prism Launcher project logo"
}
```

## UnleashedRecomp

```json
{
  "id": "unleashed-recomp",
  "name": "UnleashedRecomp",
  "gameTitle": "Sonic Unleashed (Xbox 360)",
  "tagline": "Static recompilation that brings Sonic Unleashed natively to Linux at 120+ FPS.",
  "description": "One of the coolest open-source breakthroughs of recent years: UnleashedRecomp statically recompiles the original Xbox 360 executable into native C++ code for Linux with Vulkan, ultrawide, and high refresh rates.",
  "howItWorks": "Uses XenonRecomp to translate PowerPC Xbox 360 instructions straight into host C++, eliminating traditional CPU emulation overhead.",
  "category": "recomp",
  "categoryLabel": "Static Recomp Port",
  "tone": "berry",
  "language": "C++ / Vulkan",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/hedge-dev/UnleashedRecomp",
  "repoSlug": "hedge-dev/UnleashedRecomp",
  "formats": [
    ".Flatpak",
    ".AppImage",
    "Native"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": true,
  "byocRequirement": "Bring your own legally dumped Xbox 360 copy of Sonic Unleashed (+ optional DLC).",
  "highlights": [
    "Unlocked frame rates, ultrawide resolutions & crisp MSAA on Linux",
    "Native DualSense, Xbox & Steam Deck glyph/controller support",
    "Built-in mod manager compatibility for community enhancements",
    "Zero emulator stutter-runs buttery smooth even on handhelds"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Release)",
      "format": ".Flatpak",
      "command": "# Grab the Linux Flatpak/AppImage from GitHub Releases\nflatpak install --user ./UnleashedRecomp.flatpak\nflatpak run io.github.hedge_dev.unleashedrecomp",
      "note": "First launch guides you through pointing to your game files."
    }
  ],
  "vibeNote": "Pure daytime-stage joy without your laptop fans taking flight.",
  "emojiMark": "💨",
  "imageUrl": "https://github.com/hedge-dev.png?size=512",
  "imageAlt": "UnleashedRecomp project logo"
}
```

## Zelda 64: Recompiled

```json
{
  "id": "zelda64-recomp",
  "name": "Zelda 64: Recompiled",
  "gameTitle": "The Legend of Zelda: Majora's Mask",
  "tagline": "Plug-and-play N64 static recompilation with RT64, gyro aim & instant loads.",
  "description": "Recompiles the classic N64 binary of Majora’s Mask straight into a native Linux executable powered by the RT64 renderer-preserving every original effect while unlocking 144Hz ultrawide bliss.",
  "howItWorks": "Powered by N64Recomp + N64ModernRuntime, turning MIPS machine code into native C and rendering via Vulkan/RT64.",
  "category": "recomp",
  "categoryLabel": "Static Recomp Port",
  "tone": "berry",
  "language": "C / C++",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/Zelda64Recomp/Zelda64Recomp",
  "repoSlug": "Zelda64Recomp/Zelda64Recomp",
  "formats": [
    ".Flatpak",
    "Native"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": true,
  "byocRequirement": "Requires your own legally dumped US 1.0 ROM of Majora's Mask.",
  "highlights": [
    "Official Linux Flatpak release plus Steam Deck-ready binaries",
    "True high framerate interpolation, widescreen & ultrawide",
    "Dual analog camera, gyro aiming, and instant scene transitions",
    "Supports rich community texture packs and C-API mods"
  ],
  "recipes": [
    {
      "label": ".Flatpak Bundle",
      "format": ".Flatpak",
      "command": "# Download Zelda64Recompiled-*.flatpak from GitHub Releases\nflatpak install --user ./Zelda64Recompiled-*.flatpak\nflatpak run io.github.zelda64recomp.zelda64recomp",
      "note": "Drop your ROM in the friendly welcome screen to begin."
    }
  ],
  "vibeNote": "Clock Town has never looked softer, warmer, or smoother.",
  "emojiMark": "🌙",
  "imageUrl": "https://github.com/Zelda64Recomp.png?size=512",
  "imageAlt": "Zelda 64: Recompiled project logo"
}
```

## Ship of Harkinian

```json
{
  "id": "ship-of-harkinian",
  "name": "Ship of Harkinian",
  "gameTitle": "The Legend of Zelda: Ocarina of Time",
  "tagline": "Decompiled native Linux port packed with randomizers, HD textures & QoL treats.",
  "description": "Built atop the community Ocarina of Time decompilation and libultraship, Ship of Harkinian gives Hyrule a full native Linux home-complete with free camera, 60+ FPS, and an endless built-in randomizer.",
  "howItWorks": "Compiles reconstructed C source code natively for Linux and extracts your game’s assets into an OTR archive on first launch.",
  "category": "recomp",
  "categoryLabel": "Static Recomp Port",
  "tone": "matcha",
  "language": "C & C++",
  "license": "Open Source",
  "githubUrl": "https://github.com/HarbourMasters/Shipwright",
  "homepageUrl": "https://www.shipofharkinian.com/",
  "repoSlug": "HarbourMasters/Shipwright",
  "formats": [
    ".AppImage",
    ".Flatpak"
  ],
  "primaryFormat": ".AppImage",
  "steamDeckFriendly": true,
  "byocRequirement": "Requires your own supported Ocarina of Time ROM to generate local assets.",
  "highlights": [
    "Official Linux AppImage releases-double click and play",
    "Built-in randomizer, cosmetic color tuner, and custom music support",
    "Free camera, d-pad item shortcuts & crisp high-res rendering",
    "Companion project 2 Ship 2 Harkinian covers Majora’s Mask too"
  ],
  "recipes": [
    {
      "label": ".AppImage",
      "format": ".AppImage",
      "command": "# Download the Linux zip from HarbourMasters/Shipwright Releases\nunzip SoH-*-Linux.zip -d ~/Games/ShipOfHarkinian\nchmod +x ~/Games/ShipOfHarkinian/soh.appimage\n~/Games/ShipOfHarkinian/soh.appimage"
    }
  ],
  "vibeNote": "Nostalgia warmed up like freshly baked Lon Lon Milk bread.",
  "emojiMark": "🛡️",
  "imageUrl": "https://github.com/HarbourMasters.png?size=512",
  "imageAlt": "Ship of Harkinian project logo"
}
```

## OpenMW

```json
{
  "id": "openmw",
  "name": "OpenMW",
  "gameTitle": "The Elder Scrolls III: Morrowind",
  "tagline": "A clean-room open-source 3D RPG engine bringing Morrowind natively to Linux.",
  "description": "OpenMW completely replaces Morrowind’s 2002 engine with a rock-solid modern C++ implementation. Say goodbye to crashes and hello to distant misty mountains, Lua scripting, and native Linux joy.",
  "howItWorks": "Reads your existing Morrowind ESM/BSA data files directly inside a brand-new OpenSceneGraph-powered open-source engine.",
  "category": "rewrites",
  "categoryLabel": "Engine Rewrite",
  "tone": "honey",
  "language": "C++ & Lua",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/OpenMW/openmw",
  "homepageUrl": "https://openmw.org/",
  "repoSlug": "OpenMW/openmw",
  "formats": [
    ".Flatpak",
    "Native"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": true,
  "byocRequirement": "Requires your own copy of Morrowind (GOG, Steam, or original discs).",
  "highlights": [
    "Distant land, water shaders, shadows & native Wayland/X11 scaling",
    "Modern Lua modding API with huge curated mod lists",
    "Easy Flathub installation-zero Wine prefixes to wrangle",
    "Also powers TES3MP for cozy co-op Morrowind nights"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub org.openmw.OpenMW\nflatpak run org.openmw.OpenMW"
    }
  ],
  "vibeNote": "Warm lantern light in Balmora, running effortlessly on Linux.",
  "emojiMark": "🕯️",
  "imageUrl": "https://github.com/OpenMW.png?size=512",
  "imageAlt": "OpenMW project logo"
}
```

## OpenRCT2

```json
{
  "id": "openrct2",
  "name": "OpenRCT2",
  "gameTitle": "RollerCoaster Tycoon 2",
  "tagline": "Beloved open-source theme park engine with online co-op & crisp high-DPI UI.",
  "description": "OpenRCT2 rewrote Chris Sawyer’s classic assembly masterpiece into portable C++, adding online multiplayer park-building, fast-forward, JavaScript plugins, and native Linux builds.",
  "howItWorks": "Reimplements the entire RCT2 game engine cleanly in C++ while loading your original sprites, rides, and sound effects.",
  "category": "rewrites",
  "categoryLabel": "Engine Rewrite",
  "tone": "peach",
  "language": "C++",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/OpenRCT2/OpenRCT2",
  "homepageUrl": "https://openrct2.io/",
  "repoSlug": "OpenRCT2/OpenRCT2",
  "formats": [
    ".AppImage",
    ".Flatpak",
    "Native"
  ],
  "primaryFormat": ".AppImage",
  "steamDeckFriendly": true,
  "byocRequirement": "Needs assets from RollerCoaster Tycoon 2 (and optionally RCT1) from GOG or Steam.",
  "highlights": [
    "Build cozy roller coaster parks together in real-time multiplayer",
    "Smooth high-DPI scaling, unlocked zoom & OpenGL rendering",
    "JavaScript plugin ecosystem for custom coasters & tools",
    "Official Linux AppImage & Flathub Flatpak updated constantly"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub io.openrct2.OpenRCT2\nflatpak run io.openrct2.OpenRCT2"
    },
    {
      "label": ".AppImage",
      "format": ".AppImage",
      "command": "# Grab OpenRCT2-*-linux-x86_64.AppImage from GitHub Releases\nchmod +x OpenRCT2-*.AppImage\n./OpenRCT2-*.AppImage"
    }
  ],
  "vibeNote": "Cotton candy skies and gentle isometric bliss.",
  "emojiMark": "🎡",
  "imageUrl": "https://github.com/OpenRCT2.png?size=512",
  "imageAlt": "OpenRCT2 project logo"
}
```

## DevilutionX

```json
{
  "id": "devilutionx",
  "name": "DevilutionX",
  "gameTitle": "Diablo & Hellfire (1996)",
  "tagline": "Faithful C++ source port of Diablo 1 with widescreen, gamepad & stash upgrades.",
  "description": "Born from a reverse-engineered decompilation of the original Diablo binary, DevilutionX brings Tristram natively to Linux desktops, handhelds, and ARM boards with optional modern comforts.",
  "howItWorks": "Runs the reconstructed native C++ engine directly on SDL2 using your original DIABDAT.MPQ archive.",
  "category": "rewrites",
  "categoryLabel": "Engine Rewrite",
  "tone": "peach",
  "language": "C++",
  "license": "Sustainable Use / Open Source",
  "githubUrl": "https://github.com/diasurgical/DevilutionX",
  "repoSlug": "diasurgical/DevilutionX",
  "formats": [
    ".AppImage",
    ".Flatpak"
  ],
  "primaryFormat": ".AppImage",
  "steamDeckFriendly": true,
  "byocRequirement": "Copy DIABDAT.MPQ from your legally owned GOG or CD copy of Diablo.",
  "highlights": [
    "Full widescreen, integer scaling & crisp high-FPS animations",
    "Native controller mapping (feels amazing on Steam Deck!)",
    "Shared stash, optional auto-gold pickup & ZeroTier multiplayer",
    "Portable Linux AppImage and Flathub Flatpak available"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub org.diasurgical.DevilutionX\nflatpak run org.diasurgical.DevilutionX"
    },
    {
      "label": ".AppImage",
      "format": ".AppImage",
      "command": "# Grab devilutionx-linux-x86_64.AppImage from GitHub Releases\nchmod +x devilutionx-linux-x86_64.AppImage\n./devilutionx-linux-x86_64.AppImage"
    }
  ],
  "vibeNote": "Stay awhile and listen-at 16:9 without touching Wine.",
  "emojiMark": "🔥",
  "imageUrl": "https://github.com/diasurgical.png?size=512",
  "imageAlt": "DevilutionX project logo"
}
```

## Faugus Launcher

```json
{
  "id": "faugus-launcher",
  "name": "Faugus Launcher",
  "gameTitle": "Any Windows / Non-Steam Game",
  "tagline": "A breezy, lightweight GTK launcher for umu-launcher & Proton-GE.",
  "description": "When a game doesn’t have a native rewrite yet, Faugus Launcher makes running it through Valve’s umu-launcher and Proton-GE feel wonderfully uncluttered-just pick an .exe, toggle MangoHud, and go.",
  "howItWorks": "Acts as a clean, minimal graphical front-end over umu-launcher, letting Proton-GE handle Windows games with minimal setup fuss.",
  "category": "runtimes",
  "categoryLabel": "Runtime & Wrapper",
  "tone": "chamomile",
  "language": "Python & GTK",
  "license": "MIT",
  "githubUrl": "https://github.com/Faugus/faugus-launcher",
  "repoSlug": "Faugus/faugus-launcher",
  "formats": [
    ".Flatpak",
    "Native"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": true,
  "byocRequirement": "Works with your own DRM-free installers, Battle.net, EA App, or standalone games.",
  "highlights": [
    "Super lightweight alternative to heavier all-in-one launchers",
    "Downloads & manages Proton-GE versions automatically",
    "Built-in toggles for GameMode, MangoHud & Gamescope",
    "Available on Flathub, AUR, and Fedora COPR"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub io.github.Faugus.faugus-launcher\nflatpak run io.github.Faugus.faugus-launcher"
    }
  ],
  "vibeNote": "Zero clutter, soft edges, instant Proton magic.",
  "emojiMark": "🪶",
  "imageUrl": "https://github.com/Faugus.png?size=512",
  "imageAlt": "Faugus Launcher project logo"
}
```

## WhiteRecomp

```json
{
  "id": "whiterecomp",
  "name": "WhiteRecomp",
  "gameTitle": "FINAL FANTASY XIII",
  "tagline": "Experimental static recompilation turning your Steam FF13 into a native Linux AppImage.",
  "description": "An ambitious open-source static recompiler that translates your own Steam copy of FINAL FANTASY XIII locally into a native x86_64 or ARM64 Linux Vulkan binary-complete with Steam achievements.",
  "howItWorks": "Builds a native executable on your own machine from your installed Steam files, optionally bundling it into a single portable AppImage.",
  "category": "recomp",
  "categoryLabel": "Static Recomp Port",
  "tone": "chamomile",
  "language": "C++ / Vulkan / SDL2",
  "license": "Open Source",
  "githubUrl": "https://github.com/ps4star/WhiteRecomp",
  "repoSlug": "ps4star/WhiteRecomp",
  "formats": [
    ".AppImage",
    "Native"
  ],
  "primaryFormat": ".AppImage",
  "steamDeckFriendly": true,
  "byocRequirement": "Requires your own legally purchased Steam copy of FINAL FANTASY XIII.",
  "highlights": [
    "Toggle \"As AppImage\" to package the built native port into one neat file",
    "Native Vulkan rendering with SDL2 on x86_64 and ARM64 Linux",
    "Integrates with local steamclient.so for real Steam achievements",
    "Shows just how wild the modern Linux recompilation scene is getting"
  ],
  "recipes": [
    {
      "label": ".AppImage Builder",
      "format": ".AppImage",
      "command": "# Grab WhiteRecompLauncher_linux from GitHub Releases\nchmod +x WhiteRecompLauncher_linux\n./WhiteRecompLauncher_linux",
      "note": "Flip the \"As AppImage\" toggle before clicking Build for a single-file binary!"
    }
  ],
  "vibeNote": "Crystalline Cocoon vibes, freshly compiled on your penguin box.",
  "emojiMark": "❄️",
  "imageUrl": "https://github.com/ps4star.png?size=512",
  "imageAlt": "WhiteRecomp project logo"
}
```

## Heroic Games Launcher

```json
{
  "id": "heroic-games-launcher",
  "name": "Heroic Games Launcher",
  "gameTitle": "GOG, Epic Games & Amazon Games",
  "tagline": "A unified launcher for your GOG, Epic and Amazon game libraries.",
  "description": "Heroic is an open-source game launcher for Linux, Windows and macOS. On Linux it can install, update, repair and launch games from GOG, Epic Games Store and Amazon Games, while letting you choose Wine or Proton compatibility tools.",
  "howItWorks": "Heroic connects to each store through its own download integrations and launches Windows titles through Wine or Proton. It can also import existing installations, organize categories and sync supported cloud saves.",
  "category": "runtimes",
  "categoryLabel": "Game Launcher",
  "tone": "honey",
  "language": "TypeScript / Electron",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher",
  "homepageUrl": "https://heroicgameslauncher.com/",
  "repoSlug": "Heroic-Games-Launcher/HeroicGamesLauncher",
  "formats": [
    ".Flatpak",
    ".AppImage"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": true,
  "byocRequirement": "Requires accounts and game entitlements from the stores you use. Game compatibility and anti-cheat support vary by title.",
  "highlights": [
    "Combines GOG, Epic Games Store and Amazon Games libraries in one place",
    "Installs, repairs, updates and imports existing game installations",
    "Supports Wine and Proton runners with compatibility information",
    "Includes Steam Deck compatibility details and cloud-save support where available"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub com.heroicgameslauncher.hgl",
      "note": "The Flatpak is the recommended cross-distro option."
    },
    {
      "label": ".AppImage",
      "format": ".AppImage",
      "command": "chmod +x Heroic*.AppImage\n./Heroic*.AppImage",
      "note": "Download the Linux AppImage from the project releases before running these commands."
    }
  ],
  "vibeNote": "One library shelf for several PC game stores.",
  "emojiMark": "icon:gamepad",
  "imageUrl": "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/assets/26871415/70c9e0f2-3fa8-4e56-9bb0-0e5f8713c968",
  "imageAlt": "Heroic Games Launcher library screenshot"
}
```

## Lutris

```json
{
  "id": "lutris",
  "name": "Lutris",
  "gameTitle": "Games from many eras and platforms",
  "tagline": "A game library and installer hub for native games, emulators and Wine.",
  "description": "Lutris is an open gaming platform for Linux. It brings together games from different eras and systems by combining emulators, engine reimplementations and compatibility layers, with community-maintained installer scripts.",
  "howItWorks": "Lutris manages game entries and runners from one desktop client. Installer scripts automate setup steps and can be customized, while existing libraries from services such as Steam, GOG and Humble Bundle can be connected.",
  "category": "runtimes",
  "categoryLabel": "Game Launcher",
  "tone": "matcha",
  "language": "Python / GTK",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/lutris/lutris",
  "homepageUrl": "https://lutris.net/",
  "repoSlug": "lutris/lutris",
  "formats": [
    ".Flatpak",
    "Native"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": true,
  "byocRequirement": "Game installers may require original game files, store accounts, emulators or separately installed Wine components.",
  "highlights": [
    "Centralizes games from different stores, emulators and compatibility layers",
    "Community installer scripts automate common setup steps",
    "Supports Wine runners and native Linux games",
    "Available through Flathub and many distribution repositories"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub net.lutris.Lutris\nflatpak run net.lutris.Lutris",
      "note": "The Flatpak includes the runtime dependencies; Windows games may still need suitable drivers and runner configuration."
    },
    {
      "label": "Arch Linux",
      "format": "Native",
      "command": "sudo pacman -S lutris",
      "note": "Lutris is available in the official Arch Linux repositories."
    }
  ],
  "vibeNote": "A single front door for a very mixed game collection.",
  "emojiMark": "icon:gamepad",
  "imageUrl": "https://github.com/lutris.png?size=512",
  "imageAlt": "Lutris project logo"
}
```

## Bottles

```json
{
  "id": "bottles",
  "name": "Bottles",
  "gameTitle": "Windows games and applications",
  "tagline": "Manage isolated Wine environments with a clear desktop workflow.",
  "description": "Bottles helps run Windows software and games on Linux. Each bottle has its own environment, runner and configuration, with tools for installing dependencies, applying gaming tweaks, monitoring processes and restoring backups.",
  "howItWorks": "Bottles groups Wine prefixes into separate, manageable environments. Its runner and dependency controls make it easier to keep different Windows applications isolated instead of sharing one global prefix.",
  "category": "runtimes",
  "categoryLabel": "Compatibility Layer",
  "tone": "chamomile",
  "language": "Python / GTK",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/bottlesdevs/Bottles",
  "homepageUrl": "https://usebottles.com/",
  "repoSlug": "bottlesdevs/Bottles",
  "formats": [
    ".Flatpak"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": false,
  "byocRequirement": "You still need legitimate game installers, required accounts and compatible graphics drivers. Not every Windows game works.",
  "highlights": [
    "Keeps Windows applications separated into individual environments",
    "Switches runners and installs common dependencies per bottle",
    "Includes gaming-focused settings, process monitoring and recovery tools",
    "Distributed primarily as a sandboxed Flatpak"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub com.usebottles.bottles\nflatpak run com.usebottles.bottles",
      "note": "Bottles is primarily distributed as a Flatpak."
    }
  ],
  "vibeNote": "Separate, tidy environments instead of one tangled Wine prefix.",
  "emojiMark": "icon:layers",
  "imageUrl": "https://raw.githubusercontent.com/bottlesdevs/Bottles/main/docs/screenshot-dark.png",
  "imageAlt": "Bottles application screenshot"
}
```

## ProtonUp-Qt

```json
{
  "id": "protonup-qt",
  "name": "ProtonUp-Qt",
  "gameTitle": "Steam, Lutris, Heroic & Bottles",
  "tagline": "Install and manage community Proton and Wine compatibility tools.",
  "description": "ProtonUp-Qt is a graphical manager for compatibility tools such as GE-Proton, Luxtorpeda and other Wine/Proton builds. It supports common Linux game launchers and helps keep custom runners organized.",
  "howItWorks": "The app downloads supported compatibility-tool releases and places them in the appropriate launcher directories. It is an independent utility and is not affiliated with the developers of the runners or launchers it manages.",
  "category": "tools",
  "categoryLabel": "Compatibility Tool",
  "tone": "berry",
  "language": "Python / Qt 6",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/DavidoTek/ProtonUp-Qt",
  "homepageUrl": "https://davidotek.github.io/protonup-qt/",
  "repoSlug": "DavidoTek/ProtonUp-Qt",
  "formats": [
    ".Flatpak",
    ".AppImage"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": true,
  "byocRequirement": "Requires a supported launcher such as Steam, Lutris, Heroic or Bottles. It manages compatibility tools; it does not provide game licenses.",
  "highlights": [
    "Installs and updates GE-Proton and other community compatibility tools",
    "Supports Steam, Lutris, Heroic Games Launcher and Bottles",
    "Available as a Flathub Flatpak and a portable AppImage",
    "Includes handheld-friendly controls for supported Steam Deck workflows"
  ],
  "recipes": [
    {
      "label": ".Flatpak (Flathub)",
      "format": ".Flatpak",
      "command": "flatpak install flathub net.davidotek.pupgui2",
      "note": "The Flathub release may follow the upstream AppImage release by a few days."
    },
    {
      "label": ".AppImage",
      "format": ".AppImage",
      "command": "chmod +x ProtonUp-Qt*.AppImage\n./ProtonUp-Qt*.AppImage",
      "note": "Download the current AppImage from the project releases first."
    }
  ],
  "vibeNote": "A small toolkit for keeping your compatibility runners current.",
  "emojiMark": "icon:wrench",
  "imageUrl": "https://raw.githubusercontent.com/DavidoTek/ProtonUp-Qt/main/.github/images/pupgui2-screenshot2.png",
  "imageAlt": "ProtonUp-Qt compatibility tool manager screenshot"
}
```
