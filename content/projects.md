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
  "imageAlt": "Cinnabar project logo",
  "imageFit": "contain"
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
  "imageAlt": "Sober project logo",
  "imageFit": "contain"
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
  "imageAlt": "Soberix project logo",
  "imageFit": "contain"
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
  "imageAlt": "Prism Launcher project logo",
  "imageFit": "contain"
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
  "imageAlt": "UnleashedRecomp project logo",
  "imageFit": "contain"
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
  "imageAlt": "Zelda 64: Recompiled project logo",
  "imageFit": "contain"
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
  "imageAlt": "Ship of Harkinian project logo",
  "imageFit": "contain"
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
  "imageAlt": "OpenMW project logo",
  "imageFit": "contain"
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
  "imageAlt": "OpenRCT2 project logo",
  "imageFit": "contain"
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
  "imageAlt": "DevilutionX project logo",
  "imageFit": "contain"
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
  "imageAlt": "Faugus Launcher project logo",
  "imageFit": "contain"
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
  "imageAlt": "WhiteRecomp project logo",
  "imageFit": "contain"
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
  "imageAlt": "Heroic Games Launcher library screenshot",
  "imageFit": "cover"
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
  "imageAlt": "Lutris project logo",
  "imageFit": "contain"
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
  "imageAlt": "Bottles application screenshot",
  "imageFit": "cover"
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
  "imageAlt": "ProtonUp-Qt compatibility tool manager screenshot",
  "imageFit": "cover"
}
```

## OpenTTD

```json
{
  "id": "openttd",
  "name": "OpenTTD",
  "gameTitle": "Transport Tycoon Deluxe-inspired transport simulation",
  "tagline": "Build a transport empire with trains, roads, ships and aircraft.",
  "description": "OpenTTD is an open-source transport simulation that expands on the original Transport Tycoon Deluxe formula. Design interconnected networks, manage routes and cargo, grow cities, and play solo or with other players.",
  "howItWorks": "The project recreates and extends the classic transport-management gameplay in a modern, cross-platform C++ game. Free replacement graphics and sound sets make the default experience accessible without distributing the original commercial assets.",
  "category": "games",
  "categoryLabel": "Open-Source Simulation",
  "tone": "honey",
  "language": "C++",
  "license": "GPL-2.0",
  "githubUrl": "https://github.com/OpenTTD/OpenTTD",
  "homepageUrl": "https://www.openttd.org/",
  "repoSlug": "OpenTTD/OpenTTD",
  "formats": [
    ".Flatpak",
    "Native"
  ],
  "primaryFormat": "Native",
  "steamDeckFriendly": false,
  "byocRequirement": "The game can use free replacement graphics and sound sets. Original Transport Tycoon Deluxe data is optional for players who want the classic assets.",
  "highlights": [
    "Build road, rail, air and sea transport networks",
    "Manage cargo routes, timetables, vehicles and company finances",
    "Play custom scenarios and community-made maps",
    "Supports multiplayer and extensive user-created content"
  ],
  "recipes": [
    {
      "label": "Arch Linux",
      "format": "Native",
      "command": "sudo pacman -S openttd",
      "note": "This command is for Arch Linux and derivatives. Other distributions provide OpenTTD through their package managers."
    },
    {
      "label": "Flatpak",
      "format": ".Flatpak",
      "command": "flatpak install flathub org.openttd.OpenTTD",
      "note": "The Flathub build is community-provided and marked unverified by Flathub; it is not maintained or endorsed by the OpenTTD team."
    }
  ],
  "vibeNote": "A whole railway timetable, tucked into one delightful little map.",
  "emojiMark": "icon:train",
  "imageUrl": "https://github.com/OpenTTD.png?size=512",
  "imageAlt": "OpenTTD project organization avatar",
  "imageFit": "contain"
}
```

## Luanti

```json
{
  "id": "luanti",
  "name": "Luanti",
  "gameTitle": "Voxel sandbox worlds and community games",
  "tagline": "A lightweight, moddable voxel platform for building, exploring and multiplayer.",
  "description": "Luanti, formerly known as Minetest, is an open-source voxel game platform. Its engine powers block-based worlds, multiplayer servers and a wide range of community-created games, with a simple modding API and a focus on portability.",
  "howItWorks": "Luanti provides the engine, world simulation and Lua-based modding APIs. Players can install game packages and mods from the in-game content browser or connect to community servers.",
  "category": "games",
  "categoryLabel": "Open-Source Game Platform",
  "tone": "matcha",
  "language": "C++ / Lua",
  "license": "LGPL-2.1",
  "githubUrl": "https://github.com/luanti-org/luanti",
  "homepageUrl": "https://www.luanti.org/",
  "repoSlug": "luanti-org/luanti",
  "formats": [
    ".Flatpak"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": false,
  "byocRequirement": "No commercial game copy is required. Luanti is a platform; individual game packages and mods may have their own licenses and requirements.",
  "highlights": [
    "Lightweight voxel worlds with digging, building and crafting",
    "Multiplayer servers and locally hosted worlds",
    "Lua modding API and a large community content ecosystem",
    "Designed to run on a wide range of desktop hardware"
  ],
  "recipes": [
    {
      "label": "Flatpak",
      "format": ".Flatpak",
      "command": "flatpak install flathub org.luanti.luanti",
      "note": "The Luanti website lists Flatpak as the stable package for all Linux distributions."
    }
  ],
  "vibeNote": "A tiny sandbox that can grow into a very large world.",
  "emojiMark": "icon:cuboid",
  "imageUrl": "https://github.com/luanti-org.png?size=512",
  "imageAlt": "Luanti project organization avatar",
  "imageFit": "contain"
}
```

## Battle for Wesnoth

```json
{
  "id": "battle-for-wesnoth",
  "name": "Battle for Wesnoth",
  "gameTitle": "Turn-based high-fantasy strategy",
  "tagline": "Lead armies through a rich fantasy world of campaigns and tactical battles.",
  "description": "Battle for Wesnoth is a free, open-source turn-based strategy game. Recruit units, use terrain and time-of-day advantages, and guide different factions through a large collection of story-driven campaigns or online multiplayer matches.",
  "howItWorks": "The game combines hex-based tactical battles with campaign scripting and a content ecosystem built around units, maps, scenarios and add-ons.",
  "category": "games",
  "categoryLabel": "Open-Source Strategy",
  "tone": "berry",
  "language": "C++ / Lua / WML",
  "license": "GPL-2.0",
  "githubUrl": "https://github.com/wesnoth/wesnoth",
  "homepageUrl": "https://www.wesnoth.org/",
  "repoSlug": "wesnoth/wesnoth",
  "formats": [
    ".Flatpak"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": false,
  "byocRequirement": "The game and its core campaigns are free and open source; no commercial game files are required.",
  "highlights": [
    "Large single-player campaigns with distinct stories and factions",
    "Hex-grid tactical combat shaped by terrain and time of day",
    "Online multiplayer and a broad user-created add-on catalogue",
    "Map, scenario and campaign creation tools"
  ],
  "recipes": [
    {
      "label": "Flatpak",
      "format": ".Flatpak",
      "command": "flatpak install flathub org.wesnoth.Wesnoth",
      "note": "The Wesnoth project lists Flatpak as a Linux distribution channel."
    }
  ],
  "vibeNote": "A tactical campaign where even one hex can change the whole battle.",
  "emojiMark": "icon:shield",
  "imageUrl": "https://github.com/wesnoth.png?size=512",
  "imageAlt": "Battle for Wesnoth project organization avatar",
  "imageFit": "contain"
}
```

## Endless Sky

```json
{
  "id": "endless-sky",
  "name": "Endless Sky",
  "gameTitle": "Space exploration, trading and combat",
  "tagline": "Start with a small ship, then make your own path across a vast galaxy.",
  "description": "Endless Sky is a free, open-source space exploration and trading game. Take passenger or cargo jobs, upgrade ships, explore unfamiliar systems, fight pirates, and follow story missions or simply chart your own course.",
  "howItWorks": "The game blends a 2D space sandbox with mission scripting, ship outfitting, trading systems and a community-maintained universe of additional content.",
  "category": "games",
  "categoryLabel": "Open-Source Space Game",
  "tone": "chamomile",
  "language": "C++",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/endless-sky/endless-sky",
  "homepageUrl": "https://endless-sky.github.io/",
  "repoSlug": "endless-sky/endless-sky",
  "formats": [
    ".Flatpak"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": false,
  "byocRequirement": "The base game is free and open source; no commercial game data is required.",
  "highlights": [
    "Trade cargo, transport passengers and take on missions",
    "Upgrade ships with new weapons, engines and equipment",
    "Explore branching storylines and a large star map",
    "Extend the universe with community-created content"
  ],
  "recipes": [
    {
      "label": "Flatpak",
      "format": ".Flatpak",
      "command": "flatpak install flathub io.github.endless_sky.endless_sky",
      "note": "The Flathub package is available for Linux desktops."
    }
  ],
  "vibeNote": "One small ship, a very large sky, and no fixed route to follow.",
  "emojiMark": "icon:rocket",
  "imageUrl": "https://github.com/endless-sky.png?size=512",
  "imageAlt": "Endless Sky project organization avatar",
  "imageFit": "contain"
}
```

## OpenRA

```json
{
  "id": "openra",
  "name": "OpenRA",
  "gameTitle": "Command & Conquer, Red Alert and Dune 2000",
  "tagline": "A modern open-source RTS engine for classic Westwood-style strategy games.",
  "description": "OpenRA rebuilds and modernizes early Westwood real-time strategy games through a flexible open-source engine and a set of mods. It adds modern controls, replays, observer tools and other quality-of-life features while preserving the feel of classic 2D and 2.5D RTS gameplay.",
  "howItWorks": "The OpenRA engine provides shared simulation, rendering and networking systems. Individual mods define the rules, units and content for each supported strategy game.",
  "category": "rewrites",
  "categoryLabel": "RTS Engine Reimplementation",
  "tone": "peach",
  "language": "C#",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/OpenRA/OpenRA",
  "homepageUrl": "https://www.openra.net/",
  "repoSlug": "OpenRA/OpenRA",
  "formats": [
    ".Flatpak",
    ".AppImage",
    "Native"
  ],
  "primaryFormat": ".AppImage",
  "steamDeckFriendly": false,
  "byocRequirement": "OpenRA is free and includes three mods. Some mods can automatically download original game assets; others may require files from your own original game media. Check each mod's requirements.",
  "highlights": [
    "Modernized engine for classic Westwood real-time strategy games",
    "Includes Red Alert, Tiberian Dawn and Dune 2000 mods",
    "Modern controls, replays, observers and multiplayer",
    "Linux AppImage builds and community Flatpak packaging"
  ],
  "recipes": [
    {
      "label": "AppImage",
      "format": ".AppImage",
      "command": "chmod +x OpenRA-*.AppImage\n./OpenRA-*.AppImage",
      "note": "Download the Linux AppImage from the official OpenRA download page first. The project recommends AppImage if you need to switch between official and community mods."
    },
    {
      "label": "Flatpak",
      "format": ".Flatpak",
      "command": "flatpak install flathub net.openra.OpenRA",
      "note": "The official OpenRA download page warns that Flatpak sandboxing can interfere with switching between official and community mods."
    },
    {
      "label": "Arch Linux",
      "format": "Native",
      "command": "sudo pacman -S openra",
      "note": "This command is for Arch Linux and derivatives."
    }
  ],
  "vibeNote": "Classic RTS energy, with a modern engine under the hood.",
  "emojiMark": "icon:chess",
  "imageUrl": "https://github.com/OpenRA.png?size=512",
  "imageAlt": "OpenRA project organization avatar",
  "imageFit": "contain"
}
```

## VCMI

```json
{
  "id": "vcmi",
  "name": "VCMI",
  "gameTitle": "Heroes of Might and Magic III",
  "tagline": "An open-source engine that brings Heroes III to modern desktop systems.",
  "description": "VCMI is an open-source engine for Heroes of Might and Magic III. It rebuilds the strategy game's systems for modern platforms and adds features such as mod support, multiplayer improvements and expanded configuration.",
  "howItWorks": "The engine reimplements game logic and rendering while loading the original game's data files supplied by the player. It does not bundle the copyrighted Heroes III assets.",
  "category": "rewrites",
  "categoryLabel": "Engine Reimplementation",
  "tone": "matcha",
  "language": "C++",
  "license": "GPL-2.0",
  "githubUrl": "https://github.com/vcmi/vcmi",
  "homepageUrl": "https://vcmi.eu/",
  "repoSlug": "vcmi/vcmi",
  "formats": [
    ".Flatpak",
    ".AppImage"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": false,
  "byocRequirement": "Requires your own Heroes of Might and Magic III game data files. VCMI does not distribute the original assets.",
  "highlights": [
    "Modern open-source engine for Heroes of Might and Magic III",
    "Supports community mods and expansion content",
    "Includes multiplayer and modern platform improvements",
    "Official Linux installation documentation covers Flatpak and AppImage"
  ],
  "recipes": [
    {
      "label": "Flatpak",
      "format": ".Flatpak",
      "command": "flatpak install flathub eu.vcmi.VCMI",
      "note": "The VCMI documentation lists this as the latest public release build for Linux."
    },
    {
      "label": "AppImage",
      "format": ".AppImage",
      "command": "chmod +x ./*vcmi*.AppImage\n./*vcmi*.AppImage",
      "note": "Download a stable or nightly AppImage from the official VCMI releases first."
    }
  ],
  "vibeNote": "A familiar fantasy strategy world, rebuilt for modern Linux.",
  "emojiMark": "icon:crown",
  "imageUrl": "https://github.com/vcmi.png?size=512",
  "imageAlt": "VCMI project organization avatar",
  "imageFit": "contain"
}
```

## ScummVM

```json
{
  "id": "scummvm",
  "name": "ScummVM",
  "gameTitle": "Classic point-and-click adventures and RPGs",
  "tagline": "Play hundreds of classic adventures on modern Linux systems.",
  "description": "ScummVM is an interpreter for a large library of classic graphical adventures and role-playing games. It replaces the original game executables so supported titles can run on systems they were never designed for.",
  "howItWorks": "ScummVM implements the game engines and file formats used by supported titles. Players add the game's data files to the launcher, then ScummVM runs the title through its own engine implementations.",
  "category": "runtimes",
  "categoryLabel": "Game Runtime",
  "tone": "honey",
  "language": "C++",
  "license": "GPL-3.0",
  "githubUrl": "https://github.com/scummvm/scummvm",
  "homepageUrl": "https://www.scummvm.org/",
  "repoSlug": "scummvm/scummvm",
  "formats": [
    ".Flatpak",
    "Native"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": false,
  "byocRequirement": "Most supported games require their original data files. ScummVM replaces the game executable; it does not provide commercial game assets.",
  "highlights": [
    "Supports a large library of classic adventure and RPG titles",
    "Replaces the original game engine executables",
    "Offers modern scaling, audio, save and input features",
    "Runs supported titles across Linux and many other platforms"
  ],
  "recipes": [
    {
      "label": "Flatpak",
      "format": ".Flatpak",
      "command": "flatpak install flathub org.scummvm.ScummVM\nflatpak run org.scummvm.ScummVM",
      "note": "The Flatpak is sandboxed; copy game data into a folder ScummVM can access, such as Documents."
    },
    {
      "label": "Arch Linux",
      "format": "Native",
      "command": "sudo pacman -S scummvm",
      "note": "This command is for Arch Linux and derivatives. ScummVM is also available in many distribution repositories."
    }
  ],
  "vibeNote": "A little interpreter for a very large library of old adventures.",
  "emojiMark": "icon:book-open",
  "imageUrl": "https://github.com/scummvm.png?size=512",
  "imageAlt": "ScummVM project organization avatar",
  "imageFit": "contain"
}
```

## MangoHud

```json
{
  "id": "mangohud",
  "name": "MangoHud",
  "gameTitle": "Vulkan and OpenGL games",
  "tagline": "Overlay FPS, frame timing, temperatures and CPU/GPU statistics while gaming.",
  "description": "MangoHud is a Vulkan and OpenGL overlay for Linux. It can show frame rate, frame times, CPU and GPU activity, temperatures, memory use and other performance metrics while a game is running.",
  "howItWorks": "MangoHud hooks into supported Vulkan and OpenGL applications and draws a configurable performance overlay. It can be enabled per game through a launch option or environment variable.",
  "category": "tools",
  "categoryLabel": "Performance Overlay",
  "tone": "chamomile",
  "language": "C / C++",
  "license": "MIT",
  "githubUrl": "https://github.com/flightlessmango/MangoHud",
  "repoSlug": "flightlessmango/MangoHud",
  "formats": [
    ".Flatpak",
    "Native"
  ],
  "primaryFormat": "Native",
  "steamDeckFriendly": true,
  "byocRequirement": "Requires a supported Vulkan or OpenGL application and compatible graphics stack. Some 32-bit games need the matching 32-bit package.",
  "highlights": [
    "Shows FPS, frame time, GPU/CPU load and temperatures",
    "Works with Vulkan and OpenGL applications",
    "Supports per-game configuration and customizable metrics",
    "Can be enabled from Steam or compatible game launchers"
  ],
  "recipes": [
    {
      "label": "Arch Linux",
      "format": "Native",
      "command": "sudo pacman -S mangohud lib32-mangohud",
      "note": "Install the 32-bit package as well when you need the overlay for 32-bit games."
    },
    {
      "label": "Flatpak layer",
      "format": ".Flatpak",
      "command": "flatpak install flathub org.freedesktop.Platform.VulkanLayer.MangoHud",
      "note": "For Flatpak Steam, the MangoHud README documents enabling the layer with a Flatpak override."
    }
  ],
  "vibeNote": "A clean little dashboard for seeing what your game is doing.",
  "emojiMark": "icon:chart-no-axes-combined",
  "imageUrl": "https://github.com/flightlessmango.png?size=512",
  "imageAlt": "MangoHud project organization avatar",
  "imageFit": "contain"
}
```

## GameMode

```json
{
  "id": "gamemode",
  "name": "GameMode",
  "gameTitle": "Linux system performance on demand",
  "tagline": "Let games request temporary system optimizations while they run.",
  "description": "GameMode is a daemon and library from Feral Interactive that lets games request performance optimizations on Linux. Depending on configuration and hardware, it can adjust CPU governor settings, process priority, I/O priority, GPU performance modes and more.",
  "howItWorks": "A game or launcher sends a request to the GameMode daemon. Applications without native integration can be launched through the gamemoderun helper, including through Steam launch options.",
  "category": "tools",
  "categoryLabel": "Performance Optimizer",
  "tone": "matcha",
  "language": "C",
  "license": "BSD-3-Clause",
  "githubUrl": "https://github.com/FeralInteractive/gamemode",
  "repoSlug": "FeralInteractive/gamemode",
  "formats": [
    "Native"
  ],
  "primaryFormat": "Native",
  "steamDeckFriendly": false,
  "byocRequirement": "Requires Linux with the system services and packages supported by your distribution. The optimizations available depend on hardware and configuration.",
  "highlights": [
    "Provides on-demand CPU and process performance tuning",
    "Can adjust I/O priority and selected GPU performance controls",
    "Works with games that integrate GameMode or via gamemoderun",
    "Packages are available for Arch, Debian, Fedora and other distributions"
  ],
  "recipes": [
    {
      "label": "Arch Linux",
      "format": "Native",
      "command": "sudo pacman -S gamemode lib32-gamemode",
      "note": "The 32-bit library is useful for 32-bit games. For Steam launch options, use: gamemoderun %command%."
    },
    {
      "label": "Launch with GameMode",
      "format": "Native",
      "command": "gamemoderun ./your-game",
      "note": "Use this for games that do not request GameMode automatically. Replace ./your-game with the actual game command."
    }
  ],
  "vibeNote": "An on-demand performance switch, rather than a permanent tweak.",
  "emojiMark": "icon:gauge",
  "imageUrl": "https://github.com/FeralInteractive.png?size=512",
  "imageAlt": "Feral Interactive project organization avatar",
  "imageFit": "contain"
}
```

## LACT

```json
{
  "id": "lact",
  "name": "LACT",
  "gameTitle": "AMD, Intel and NVIDIA GPU control",
  "tagline": "Monitor GPU health, tune power limits and manage fan curves on Linux.",
  "description": "LACT is a Linux GPU configuration and monitoring application. It provides detailed hardware information, historical charts, power and thermal controls, fan curves and overclocking features where supported by the GPU and driver.",
  "howItWorks": "The desktop app communicates with a system service that applies hardware settings. The service can operate independently of a graphical session, while the Flatpak build can also be used for read-only monitoring without installing the service.",
  "category": "tools",
  "categoryLabel": "GPU Monitor & Tuning",
  "tone": "berry",
  "language": "Rust",
  "license": "MIT",
  "githubUrl": "https://github.com/ilya-zlobintsev/LACT",
  "repoSlug": "ilya-zlobintsev/LACT",
  "formats": [
    ".Flatpak",
    "Native"
  ],
  "primaryFormat": ".Flatpak",
  "steamDeckFriendly": false,
  "byocRequirement": "Hardware controls vary by GPU vendor, model and driver. Full configuration requires LACT's system daemon and appropriate privileges; Flatpak-only monitoring can work without the daemon.",
  "highlights": [
    "Detailed AMD, Intel and NVIDIA GPU information",
    "Historical charts for power, temperatures and clocks",
    "Fan curves, power limits and overclocking on supported hardware",
    "Profiles can activate automatically for selected processes"
  ],
  "recipes": [
    {
      "label": "Flatpak",
      "format": ".Flatpak",
      "command": "flatpak install flathub io.github.ilya_zlobintsev.LACT",
      "note": "For full hardware control, follow the upstream Flatpak setup prompt to install and start the system daemon. Read-only monitoring can work without the daemon."
    },
    {
      "label": "Arch Linux",
      "format": "Native",
      "command": "sudo pacman -S lact",
      "note": "The Arch package is available in the official repositories. Follow the upstream documentation for enabling the LACT daemon."
    }
  ],
  "vibeNote": "A thoughtful control panel for the hardware behind your frames.",
  "emojiMark": "icon:sliders-horizontal",
  "imageUrl": "https://github.com/ilya-zlobintsev.png?size=512",
  "imageAlt": "LACT project author avatar",
  "imageFit": "contain"
}
```
