export interface Product {
  id: string;
  name: string;
  brand: string;
  asin: string;
  affiliateUrl: string;
  imageUrl: string;
  bestFor: string;
  summary: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  category: string;
}
// ── Wireless Lavalier Mics ────────────────────────────────────────────────────
export const lavalierMics: Product[] = [
  {
    id: "labstandard-wireless-lav",
    name: "Labstandard Professional Wireless Lavalier Lapel Microphone",
    brand: "Labstandard",
    asin: "B0C146LJ6G",
    affiliateUrl: "https://www.amazon.com/Professional-Microphone-Recording-Interview-Livestream/dp/B0C146LJ6G?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=5023b47ce517a9eac06d2cf0cadcdc43&language=en_US&ref_=as_li_ss_tl",
    imageUrl: "https://m.media-amazon.com/images/I/71np-qUsiWL._AC_SL1500_.jpg",
    bestFor: "Creators who need a reliable wireless lav with a clean, professional sound",
    summary:
      "The Labstandard Professional Wireless Lavalier delivers solid audio performance that punches above its price. The omnidirectional capsule captures clear voice while the 2.4GHz transmission keeps latency negligible — ideal for talking-head YouTube videos and TikTok content filmed in a controlled room environment.",
    pros: [
      "Clean, flat frequency response suits voice content without EQ",
      "2.4GHz wireless keeps latency imperceptible during filming",
      "Compact transmitter clips discreetly to clothing",
      "Works with smartphones and cameras via included adapters",
    ],
    cons: [
      "No onboard recording backup for dropout protection",
      "Range is adequate for room use but limited outdoors",
      "Basic app experience compared to DJI or Rode equivalents",
    ],
    specs: {
      "Frequency Range": "2.4 GHz",
      Range: "Up to 100m",
      "Battery Life": "6 hrs",
      Connectivity: "USB-C / 3.5mm",
      Backup: "No",
    },
    category: "lavalier-mics",
  },
  {
    id: "mini-mic-pro",
    name: "Mini Mic Pro (Latest Model)",
    brand: "Mini Mic",
    asin: "B0CMJTSVRW",
    affiliateUrl: 'https://www.amazon.com/Mini-Mic-Pro-Professional-Microphone/dp/B0CMJTSVRW?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=d7560a5fec53fc7ff4ee4251705ce80f&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/711s6fypzWL._AC_SL1500_.jpg",
    bestFor: "Smartphone creators who want a truly pocket-sized wireless mic setup",
    summary:
      "The Mini Mic Pro lives up to its name — the transmitter is genuinely tiny, making it the least visible wireless lav you can wear. The latest model improves noise handling over its predecessor, and the plug-and-play USB-C connection means zero driver headaches when you're ready to film.",
    pros: [
      "Ultra-compact transmitter is nearly invisible under a collar",
      "Plug-and-play USB-C — no app or pairing required",
      "Improved noise rejection over previous generation",
      "Charging case included for on-the-go power",
    ],
    cons: [
      "Not suitable for cameras — smartphone-only design",
      "Very short range vs dedicated wireless systems",
      "Capsule audio quality is functional but not studio-grade",
    ],
    specs: {
      "Frequency Range": "2.4 GHz",
      Range: "Up to 50m",
      "Battery Life": "5 hrs",
      Connectivity: "USB-C",
      "Charging Case": "Yes",
    },
    category: "lavalier-mics",
  },
  {
    id: "hollyland-lark-a1-usbc",
    name: "Hollyland Lark A1 Wireless Microphone (USB-C RX)",
    brand: "Hollyland",
    asin: "B0F3CV3RMQ",
    affiliateUrl: 'https://www.amazon.com/Hollyland-Wireless-Microphone-Intelligent-Magnetic/dp/B0F3CV3RMQ?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=04dcc510c0715fb258b4acab329041db&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/51vTpIJg0TL._AC_SL1500_.jpg",
    bestFor: "Android and USB-C laptop creators who want Hollyland audio quality without adapters",
    summary:
      "Hollyland built the Lark A1 with USB-C native output, which means Android phone and USB-C MacBook users get clean digital audio with zero adapter fuss. The audio quality carries forward Hollyland's reputation for punching above the price point, with built-in noise reduction that handles typical apartment ambient noise.",
    pros: [
      "Native USB-C receiver — no 3.5mm adapter needed for modern devices",
      "Hollyland's reliable noise reduction reduces room ambience",
      "Magnetic clip attaches in seconds without fiddling",
      "Clear 24-bit audio output suits most creator workflows",
    ],
    cons: [
      "USB-C only — Lightning iPhone users need a separate solution",
      "No dual-channel option at this price point",
      "Range is spec'd generously — real-world varies by environment",
    ],
    specs: {
      "Frequency Range": "2.4 GHz",
      Range: "Up to 100m",
      "Battery Life": "7 hrs",
      Connectivity: "USB-C",
      "Noise Reduction": "Yes",
    },
    category: "lavalier-mics",
  },
  {
    id: "hollyland-lark-a1-white",
    name: "Hollyland Lark A1 Wireless Mini Microphone (White, Charging Case)",
    brand: "Hollyland",
    asin: "B0F31Y1JZ1",
    affiliateUrl: 'https://www.amazon.com/Hollyland-Wireless-Microphone-Intelligent-Vlogging/dp/B0F31Y1JZ1?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=00198edc4cc4fd51b41fb232275f1c72&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/61zBnvGYGXL._AC_SL1500_.jpg",
    bestFor: "Creators who prefer a clean white aesthetic or film in bright clothing",
    summary:
      "The white version of the Lark A1 includes a charging case for extended shoots and targets creators who care about the transmitter matching their look on camera. Functionally identical to the standard Lark A1, it delivers Hollyland's dependable audio quality in a more visible-friendly colorway for light-colored wardrobe.",
    pros: [
      "White colorway blends with light clothing and bright studio setups",
      "Charging case extends total recording time for long shoot days",
      "Same audio quality as the full Lark A1 line",
      "Compact and lightweight — barely noticeable when worn",
    ],
    cons: [
      "Color choice is the primary differentiator over standard version",
      "Limited to one transmitter — no dual-channel recording",
      "Slightly higher price than the base model for similar performance",
    ],
    specs: {
      "Frequency Range": "2.4 GHz",
      Range: "Up to 100m",
      "Battery Life": "7 hrs (case extends to 21 hrs)",
      Color: "White",
      "Charging Case": "Yes",
    },
    category: "lavalier-mics",
  },
  {
    id: "sony-wh-ch720n",
    name: "Sony WH-CH720N Noise Canceling Wireless Headphones",
    brand: "Sony",
    asin: "B0BS1QCFHX",
    affiliateUrl: 'https://www.amazon.com/Sony-WH-CH720N-Canceling-Headphones-Microphone/dp/B0BS1QCFHX?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=31beeb629bea8efe31f72424660189bb&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/51rpbVmi9XL._AC_SL1200_.jpg",
    bestFor: "Creators who monitor their audio during editing or recording sessions",
    summary:
      "The Sony WH-CH720N brings Sony's adaptive noise cancellation to a lightweight, creator-friendly form factor. For monitoring audio playback during editing, reviewing recordings, or taking calls between sessions, the 35-hour battery and effective ANC make these a practical addition to any creator workspace.",
    pros: [
      "Adaptive noise cancellation blocks distracting room noise during monitoring",
      "35-hour battery life covers full-day creator work sessions",
      "Lightweight 192g design is comfortable for extended wear",
      "Multipoint Bluetooth connects to phone and laptop simultaneously",
    ],
    cons: [
      "Not studio-flat — some coloration in the low-midrange",
      "ANC is effective but not class-leading at this price",
      "Plastic build feels light compared to Sony's premium lines",
    ],
    specs: {
      "Driver Size": "30mm",
      "Battery Life": "35 hrs (ANC on)",
      "ANC": "Adaptive",
      Connectivity: "Bluetooth 5.2",
      Weight: "192g",
    },
    category: "lavalier-mics",
  },
];

// ── Streaming & Content Creation Lights ──────────────────────────────────────
export const streamingLights: Product[] = [
  {
    id: "altson-60-led-selfie-light",
    name: "ALTSON 60 LED Portable Selfie Light Video Conference Lighting",
    brand: "ALTSON",
    asin: "B0C2C9QT91",
    affiliateUrl: 'https://www.amazon.com/ALTSON-Portable-Conference-Lighting-Rechargeable/dp/B0C2C9QT91?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=55efa37d32fa5101d2aef7471a8bbede&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/71mi169ArHL._AC_SL1500_.jpg",
    bestFor: "Work-from-home creators and streamers who need portable clip-on lighting",
    summary:
      "The ALTSON 60 LED clip light solves the most common streaming problem: looking washed out or too dark on camera. The 60-LED panel clips directly to a laptop or monitor, and the adjustable color temperature lets you match your room's ambient light without fiddling with settings mid-stream.",
    pros: [
      "Clips directly to a laptop or monitor — no stand or tripod needed",
      "60-LED panel provides even, shadow-free face lighting",
      "USB-powered from any port — no extra cables or power bricks",
      "Adjustable brightness and color temperature for any environment",
    ],
    cons: [
      "Clip-on form limits positioning options vs a standalone stand",
      "Not bright enough to serve as primary lighting for large rooms",
      "Short cable limits placement on larger monitor setups",
    ],
    specs: {
      LEDs: "60",
      Power: "USB",
      "Color Temp": "Adjustable warm–cool",
      Mount: "Clip-on",
      Portable: "Yes",
    },
    category: "streaming-lights",
  },
  {
    id: "sensyne-ring-light-50",
    name: "Sensyne Ring Light with Stand 50\"",
    brand: "Sensyne",
    asin: "B08B3X7NXC",
    affiliateUrl: 'https://www.amazon.com/Extendable-Sensyne-YouTube-Compatible-Phones/dp/B08B3X7NXC?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=509cb7d829e01c14008646b50f2c6a9d&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/61ANURHY7qL._AC_SL1372_.jpg",
    bestFor: "TikTok and Instagram creators who need a full-height ring light at an accessible price",
    summary:
      "The Sensyne ring light bundles a 50-inch stand with a capable ring that covers most creator lighting needs. The included phone holder and remote shutter mean you can set up, adjust, and trigger recordings completely solo — a genuinely complete starter kit for room creators.",
    pros: [
      "50-inch stand brings light to eye level for standing content",
      "Phone holder and remote shutter included — ready to film solo",
      "Three color modes cover warm, cool, and daylight scenarios",
      "Competitive price for a full ring + stand package",
    ],
    cons: [
      "50-inch maximum is slightly short for tall creators doing full-body shots",
      "Stand stability is adequate but basic — keep away from drafts",
      "Dimmer control is touch-only rather than app or remote",
    ],
    specs: {
      "Stand Height": "Up to 50 inches",
      "Color Modes": "3 (warm, cool, daylight)",
      Power: "AC adapter",
      Includes: "Stand, phone holder, remote",
      Remote: "Bluetooth shutter",
    },
    category: "streaming-lights",
  },
  {
    id: "ubeesize-12-ring-light-62",
    name: "UBeesize 12'' LED Ring Light with 62'' Tripod Stand",
    brand: "UBeesize",
    asin: "B08L5VKNWR",
    affiliateUrl: 'https://www.amazon.com/UBeesize-Recording%EF%BC%86Live-Streaming-Instagram-Compatible/dp/B08L5VKNWR?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=d493c00d5d2ca3d68aaf2d713b6482f4&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/61tKCv30rNL._AC_SL1500_.jpg",
    bestFor: "Creators who need full eye-level lighting for seated or standing content",
    summary:
      "UBeesize pairs a 12-inch LED ring with a generous 62-inch tripod to give creators a lighting setup that works for both desk and standing content. The combination of a larger ring and taller stand makes this one of the better value packages in this price range.",
    pros: [
      "62-inch stand enables full-height positioning for any filming angle",
      "12-inch ring provides noticeably more light spread than 10-inch alternatives",
      "Dimmable from 10–100% for precise exposure matching",
      "Phone holder with 360-degree rotation for portrait and landscape",
    ],
    cons: [
      "Assembly takes 10–15 minutes — not tool-free",
      "Stand legs take up floor space in small rooms",
      "No app control — manual knob adjustments only",
    ],
    specs: {
      "Ring Diameter": "12 inches",
      "Stand Height": "Up to 62 inches",
      "Color Temp": "3000–5500K",
      Dimmable: "10–100%",
      Rotation: "360°",
    },
    category: "streaming-lights",
  },
  {
    id: "niceveedi-2pack-video-light",
    name: "NiceVeedi 2-Pack LED Video Light Kit",
    brand: "NiceVeedi",
    asin: "B0BF976MJY",
    affiliateUrl: 'https://www.amazon.com/NiceVeedi-2800-6500K-Photography-Recording-Streaming/dp/B0BF976MJY?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=40e8d2475eb6530131775dc86bad9ade&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/71Gd5Jhv+WL._AC_SL1500_.jpg",
    bestFor: "Streamers and YouTubers who want two-point lighting for a more cinematic look",
    summary:
      "A single ring light creates a flat, even look — two panel lights give you control over key and fill lighting that transforms your on-camera presence. The NiceVeedi 2-pack gives you a full two-light setup at a price that undercuts buying two separate lights, with adjustable stands and individual brightness control per panel.",
    pros: [
      "Two-light setup enables key + fill or key + background lighting",
      "Individual brightness control on each panel for precise balance",
      "Panel lights eliminate the circular catch-light issue of ring lights",
      "Adjustable stands position each light independently",
    ],
    cons: [
      "Takes more floor space than a single ring light setup",
      "Panel diffusion quality is soft but not professional-grade",
      "No app control — manual dials on each unit",
    ],
    specs: {
      "Pack Size": "2 lights + 2 stands",
      "Color Temp": "3200–5500K",
      Control: "Manual per panel",
      Power: "AC adapter each",
      "Stand Type": "Adjustable",
    },
    category: "streaming-lights",
  },
  {
    id: "weilisi-10-ring-light-72",
    name: "Weilisi 10\" Ring Light with Stand 72''",
    brand: "Weilisi",
    asin: "B08JPCSDMP",
    affiliateUrl: 'https://www.amazon.com/Holders-Stepless-Dimmable-YouTube-Photography/dp/B08JPCSDMP?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=4bf783473e77b4e4d9ba300b43b13f42&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/718TMy8lXmL._AC_SL1500_.jpg",
    bestFor: "Creators who need maximum stand height for full-body or overhead filming angles",
    summary:
      "The Weilisi pairing of a 10-inch ring with a 72-inch stand gives creators the tallest reach in this category. The 72-inch maximum height means the light can position above head level for dramatic angles, or extend to ceiling height for overhead flat-lay and product filming scenarios.",
    pros: [
      "72-inch stand is the tallest in this category — maximum positioning flexibility",
      "10-inch ring is compact enough for desk use at lower heights",
      "Color temperature adjusts across a wide 2700–6500K range",
      "Bluetooth remote for hands-free photo and video triggering",
    ],
    cons: [
      "10-inch ring provides less light spread than 12–18 inch alternatives",
      "Very tall stand can be unstable at maximum extension — use in draft-free rooms",
      "Assembly is fiddly due to the stand height",
    ],
    specs: {
      "Ring Diameter": "10 inches",
      "Stand Height": "Up to 72 inches",
      "Color Temp": "2700–6500K",
      Remote: "Bluetooth",
      Dimmable: "Yes",
    },
    category: "streaming-lights",
  },
];

// ── Phone Tripods ─────────────────────────────────────────────────────────────
export const phoneTripods: Product[] = [
  {
    id: "sensyne-62-selfie-stick-tripod",
    name: "SENSYNE 62\" Phone Tripod & Selfie Stick",
    brand: "SENSYNE",
    asin: "B09TQY66NH",
    affiliateUrl: 'https://www.amazon.com/Sensyne-Extendable-Wireless-Compatible-Android/dp/B09TQY66NH?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=1b2b68716075fddaf223fe6cbb9240fc&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/51svJuNXDyL._AC_SL1500_.jpg",
    bestFor: "Budget creators who want a full-height tripod and selfie stick in one",
    summary:
      "The SENSYNE 62-inch combo gets the job done for most room-based creator scenarios: it converts between a full-height tripod and a selfie stick in seconds, includes a Bluetooth remote for hands-free shooting, and fits any phone width up to 3.5 inches. A reliable, affordable starting point.",
    pros: [
      "Converts between tripod and selfie stick without tools",
      "62-inch height covers standing and eye-level filming angles",
      "Bluetooth remote included for solo recording",
      "Universal phone clamp handles most phone sizes and cases",
    ],
    cons: [
      "Lightweight build wobbles at full height in drafty conditions",
      "Clamp spring tension weakens over time with heavy phones",
      "Not rated for mirrorless cameras — phone and small action cameras only",
    ],
    specs: {
      "Max Height": "62 inches",
      "Min Height": "18 inches",
      Remote: "Bluetooth",
      "Phone Width": "Up to 3.5 inches",
      "Max Load": "2.2 lbs",
    },
    category: "phone-tripods",
  },
  {
    id: "toneof-68-magnetic-selfie-tripod",
    name: "TONEOF 68\" Magnetic Selfie Stick Tripod",
    brand: "TONEOF",
    asin: "B0F21QY3H8",
    affiliateUrl: 'https://www.amazon.com/TONEOF-Magnetic-Aluminum-Rotatable-Rechargeable/dp/B0F21QY3H8?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=06cf6774e878c3291ae7ff6a8e84faf6&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/618JNIVFMbL._AC_SL1500_.jpg",
    bestFor: "MagSafe iPhone users who want a faster, more secure phone mounting system",
    summary:
      "The TONEOF 68-inch magnetic tripod is built for creators on MagSafe-compatible iPhones. Snap the phone onto the magnetic head in a second flat — no clamp to fidget with, no spring tension to wrestle. The 68-inch height provides the most reach in this category for top-of-frame headroom in standing content.",
    pros: [
      "Magnetic mount snaps MagSafe iPhones on and off instantly",
      "68-inch height is the tallest in this category",
      "Smooth tilt head for precise angle adjustment",
      "Tripod and selfie stick modes for varied filming scenarios",
    ],
    cons: [
      "Magnetic mount is iPhone/MagSafe-specific — Android users need a separate clamp",
      "Magnetic attachment less secure than a locking clamp for vigorous movement",
      "Higher price than basic clamp alternatives",
    ],
    specs: {
      "Max Height": "68 inches",
      Mount: "Magnetic (MagSafe compatible)",
      Remote: "Bluetooth",
      Modes: "Tripod + selfie stick",
      "Max Load": "2 lbs",
    },
    category: "phone-tripods",
  },
  {
    id: "eucos-62-phone-tripod",
    name: "EUCOS 62\" Phone Tripod",
    brand: "EUCOS",
    asin: "B09XHZ8F7F",
    affiliateUrl: 'https://www.amazon.com/Upgraded-Solidest-Compatible-Samsung/dp/B09XHZ8F7F?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=3ad27eab9676fdf4a91b6a3f8d173339&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/61LnPbT7KML._AC_SL1500_.jpg",
    bestFor: "Creators who want a no-frills stable tripod that stays put during filming",
    summary:
      "EUCOS builds a clean, functional 62-inch tripod that prioritizes stability over extra features. The aluminum alloy legs handle normal filming conditions reliably, and the universal clamp accommodates phones from compact to large-frame without adjustment issues. A practical buy for creators who just need a dependable stand.",
    pros: [
      "Aluminum alloy construction holds position better than all-plastic competitors",
      "Universal phone clamp fits 4–8 inch phones including cases",
      "Bluetooth remote included for hands-free solo filming",
      "Compact collapsed size stores easily in a bag or closet",
    ],
    cons: [
      "No selfie stick mode — pure tripod use only",
      "Basic pan/tilt head without fluid movement",
      "Legs splay at a fixed angle with limited adjustment range",
    ],
    specs: {
      "Max Height": "62 inches",
      Material: "Aluminum alloy",
      Remote: "Bluetooth",
      "Phone Width": "2.0\"–3.7\"",
      "Max Load": "2.2 lbs",
    },
    category: "phone-tripods",
  },
  {
    id: "vimose-phone-tripod-remote",
    name: "Vimose Phone Tripod & Selfie Stick with Remote",
    brand: "Vimose",
    asin: "B0DCMQF2SN",
    affiliateUrl: 'https://www.amazon.com/Portable-Lightweight-Recording-Extendable-Compatible/dp/B0DCMQF2SN?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=7d886e29e19d48c71aea57a6a078657c&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/71cedH1Bh8L._AC_SL1500_.jpg",
    bestFor: "Creators who film in multiple locations and need a compact, travel-ready tripod",
    summary:
      "The Vimose tripod is built with portability in mind — it collapses smaller than most competitors while still extending to a usable 60+ inch height. The included remote shutter pairs via Bluetooth in seconds and handles both photo and video triggering, making it a capable travel-friendly option for creators who film in and out of the home.",
    pros: [
      "Compact collapsed size makes it genuinely travel-ready",
      "Bluetooth remote handles both photo and video triggering",
      "Converts between tripod and selfie stick quickly",
      "Flexible rubber feet grip uneven surfaces",
    ],
    cons: [
      "Slightly shorter maximum height than dedicated full-height tripods",
      "Lighter build trades some stability for portability",
      "Remote battery is not rechargeable — CR2032 replaceable",
    ],
    specs: {
      "Max Height": "60 inches",
      "Collapsed Length": "7 inches",
      Remote: "Bluetooth",
      Modes: "Tripod + selfie stick",
      Feet: "Flexible rubber",
    },
    category: "phone-tripods",
  },
  {
    id: "liphisy-64-tripod",
    name: "Liphisy 64\" Tripod for Cell Phone & Camera",
    brand: "Liphisy",
    asin: "B0CMM89Y6Z",
    affiliateUrl: 'https://www.amazon.com/Liphisy-Tripod-Portable-Recording-Cellphone/dp/B0CMM89Y6Z?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=d88c4857d737e79756ea7fb9d053b242&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/61G1zIdlFwL._AC_SL1500_.jpg",
    bestFor: "Creators who plan to upgrade from phone to compact camera without replacing gear",
    summary:
      "The Liphisy 64-inch tripod is one of the few options in this price range with a 1/4\"-20 screw mount rated for compact cameras as well as phones. If you're currently filming on a phone but plan to add a mirrorless or point-and-shoot to your setup, the Liphisy handles both without needing a separate camera tripod.",
    pros: [
      "1/4\"-20 screw mount accepts phones, action cameras, and compact mirrorless cameras",
      "64-inch height provides good reach for standing or elevated angles",
      "Ball head enables quick angle changes between shots",
      "Bluetooth remote included",
    ],
    cons: [
      "Load rating is modest — not suitable for heavier camera bodies with large lenses",
      "Ball head locking can slip slightly under heavier cameras",
      "Basic phone clamp — not as secure as dedicated phone grips",
    ],
    specs: {
      "Max Height": "64 inches",
      Mount: "1/4\"-20 (phone + camera)",
      Head: "Ball head",
      Remote: "Bluetooth",
      "Max Load": "3 lbs",
    },
    category: "phone-tripods",
  },
];

// ── Webcams ───────────────────────────────────────────────────────────────────
export const webcams: Product[] = [
  {
    id: "logitech-c270",
    name: "Logitech C270 Webcam 720p",
    brand: "Logitech",
    asin: "B004FHO5Y6",
    affiliateUrl: 'https://www.amazon.com/Logitech-Desktop-Widescreen-Calling-Recording/dp/B004FHO5Y6?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=bc31e8a3758fc130aba738a4936be0f1&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/61yo4swj-PL._AC_SL1500_.jpg",
    bestFor: "Budget streamers and video callers who need a reliable plug-and-play webcam",
    summary:
      "The Logitech C270 has been the entry point for affordable webcam video for years — and for good reason. Plug-in USB, 720p output, and Logitech's driver reliability mean it just works without setup friction. For creators in well-lit rooms who don't need 1080p, it delivers clean, stable video.",
    pros: [
      "Plug-and-play USB — recognized by every streaming app instantly",
      "Logitech build quality and driver support outlasts cheaper alternatives",
      "Compact and light — clips securely to any monitor",
      "Very low price makes it a zero-risk first webcam purchase",
    ],
    cons: [
      "720p output falls short of 1080p competitors at similar prices",
      "Low-light performance degrades quickly without good room lighting",
      "Fixed focus only — no autofocus for close-up or varied distances",
    ],
    specs: {
      Resolution: "720p (1280x720)",
      "Frame Rate": "30fps",
      Focus: "Fixed",
      Microphone: "Built-in mono",
      Connection: "USB 2.0",
    },
    category: "webcams",
  },
  {
    id: "logitech-brio-101",
    name: "Logitech Brio 101 Full HD 1080p Webcam",
    brand: "Logitech",
    asin: "B0BXGFFSL1",
    affiliateUrl: 'https://www.amazon.com/Logitech-Webcam-Meetings-Streaming-Built/dp/B0BXGFFSL1?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=a288fedd920e5304ca40dc4eaa3b677a&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/71A0Pp767BL._AC_SL1500_.jpg",
    bestFor: "Streamers and remote workers who want clean 1080p without spending on premium cameras",
    summary:
      "The Logitech Brio 101 brings 1080p full HD into a slim, privacy-first design aimed at hybrid work and streaming. The RightLight auto-exposure handles changing room lighting automatically, and the physical privacy shutter gives creators peace of mind when the camera is off between sessions.",
    pros: [
      "Full HD 1080p at 30fps delivers noticeably cleaner image than 720p competitors",
      "RightLight auto-exposure adjusts to window light changes in real time",
      "Physical privacy shutter built into the housing",
      "Show Mode support for displaying content below the camera",
    ],
    cons: [
      "30fps only — no 60fps for smoother fast-motion content",
      "Built-in microphone is functional but benefits from a dedicated mic",
      "No manual exposure or color controls",
    ],
    specs: {
      Resolution: "1080p (1920x1080)",
      "Frame Rate": "30fps",
      Focus: "Auto",
      "Privacy Shutter": "Yes",
      Connection: "USB-C",
    },
    category: "webcams",
  },
  {
    id: "emeet-c960",
    name: "EMEET C960 1080P Webcam with Microphone",
    brand: "EMEET",
    asin: "B0DSPJPRXD",
    affiliateUrl: 'https://www.amazon.com/EMEET-Microphone-C960-2025-Version/dp/B0DSPJPRXD?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=11e441467eb43be0205ddfb42dfbfbed&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/61Z8eKKUIcL._AC_SL1419_.jpg",
    bestFor: "Streamers who want 1080p video and a decent built-in microphone in one device",
    summary:
      "EMEET designed the C960 as an all-in-one streaming solution — the dual built-in microphones with noise reduction reduce the need for a dedicated mic for casual streamers. 1080p autofocus handles changing distances without going soft, making it practical for creators who move around at their desk.",
    pros: [
      "Dual built-in mics with noise reduction reduce echo for casual streaming",
      "1080p autofocus adjusts when you lean back or forward at the desk",
      "Wide 96-degree field of view captures more room context",
      "Plug-and-play — no software installation required",
    ],
    cons: [
      "Built-in mic quality doesn't replace a dedicated external microphone",
      "Wide FOV can make the background more visible than desired",
      "Autofocus occasionally hunts in low-contrast lighting",
    ],
    specs: {
      Resolution: "1080p",
      "Frame Rate": "30fps",
      "Field of View": "96°",
      Focus: "Autofocus",
      Microphone: "Dual with noise reduction",
    },
    category: "webcams",
  },
  {
    id: "logitech-c922x",
    name: "Logitech C922x HD Pro PC Webcam",
    brand: "Logitech",
    asin: "B01LXCDPPK",
    affiliateUrl: 'https://www.amazon.com/Logitech-C922x-Pro-Stream-Webcam/dp/B01LXCDPPK?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=83850b29877ec58e90390653e34f8ad8&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/61lsdoyu1yL._AC_SL1500_.jpg",
    bestFor: "Streamers who need background replacement without a green screen",
    summary:
      "The C922x is the streaming-specific evolution of Logitech's webcam line. The 1080p/30fps and 720p/60fps modes give streamers flexibility across different content types, and the included XSplit license and background removal algorithm make virtual background streaming more seamless than most webcam alternatives.",
    pros: [
      "720p/60fps mode delivers smooth motion for fast-paced gameplay streams",
      "Background replacement works without a physical green screen",
      "Compatible with all major streaming platforms and apps",
      "Flexible mounting — clips to monitor or attaches to tripod",
    ],
    cons: [
      "1080p is capped at 30fps — 1080p/60fps requires a camera upgrade",
      "Background removal quality drops significantly in poor lighting",
      "XSplit bundle adds cost that streaming-only users may not need",
    ],
    specs: {
      Resolution: "1080p/30fps or 720p/60fps",
      Focus: "Autofocus",
      "Background Removal": "Yes (software)",
      Mount: "Monitor clip + tripod thread",
      Connection: "USB",
    },
    category: "webcams",
  },
  {
    id: "niveoli-1080p-webcam",
    name: "Webcam 1080P with Microphone & Privacy Cover (NIVEOLI)",
    brand: "NIVEOLI",
    asin: "B0G29MV7GK",
    affiliateUrl: 'https://www.amazon.com/NIVEOLI-1080P-Microphone-Correction-Streaming/dp/B0G29MV7GK?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=4e30995a4b03a57991144c547b669096&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/61dVXCdhW7L._AC_SL1500_.jpg",
    bestFor: "Budget-conscious creators who need 1080p with a physical privacy cover",
    summary:
      "The NIVEOLI webcam delivers full 1080p output at the lowest price point in this category. The physical privacy cover slides over the lens when not in use — a feature usually reserved for higher-priced models. For creators who primarily use a separate mic and just need clean video, this is a strong value option.",
    pros: [
      "1080p at a price point that undercuts most branded alternatives",
      "Physical privacy cover included — slides over lens when not filming",
      "Plug-and-play USB — compatible with all major streaming software",
      "Flexible clip fits monitors of various thicknesses",
    ],
    cons: [
      "Low-light performance is notably weaker than Logitech alternatives",
      "Built-in microphone is basic — use an external mic for any serious audio",
      "Brand support and long-term driver updates less established",
    ],
    specs: {
      Resolution: "1080p",
      "Frame Rate": "30fps",
      "Privacy Cover": "Physical slide cover",
      Focus: "Fixed",
      Connection: "USB",
    },
    category: "webcams",
  },
];

// ── LED Strip Lights ──────────────────────────────────────────────────────────
export const ledStripLights: Product[] = [
  {
    id: "govee-rgbic-16ft",
    name: "Govee RGBIC LED Strip Lights 16.4ft",
    brand: "Govee",
    asin: "B0991Q94KP",
    affiliateUrl: 'https://www.amazon.com/Govee-Control-Segmented-Bluetooth-Changing/dp/B0991Q94KP?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=383823a01fcbad94ca17e70fdf0ca10d&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/71tjdZg28vL._AC_SL1500_.jpg",
    bestFor: "Streamers who want app-controlled RGBIC multi-color lighting scenes behind their setup",
    summary:
      "Govee's RGBIC technology allows multiple colors simultaneously on the same strip — a significant visual upgrade over standard RGB strips where every LED is the same color at once. The Govee Home app gives full control over color zones, effects, and music sync, making it a popular choice for streamer desk and monitor backlighting.",
    pros: [
      "RGBIC technology displays multiple colors simultaneously on one strip",
      "Govee Home app enables custom color zones and lighting scenes",
      "Music sync mode reacts to audio in real time for stream ambiance",
      "Works with Alexa and Google Home for voice control",
    ],
    cons: [
      "RGBIC strips cannot be cut — length is fixed at 16.4ft",
      "App is feature-rich but has a learning curve",
      "Wi-Fi connection required — Bluetooth-only mode has fewer features",
    ],
    specs: {
      Length: "16.4ft",
      "LED Type": "RGBIC",
      Control: "App (Wi-Fi + Bluetooth)",
      "Music Sync": "Yes",
      "Smart Home": "Alexa, Google Home",
    },
    category: "led-strip-lights",
  },
  {
    id: "daybetter-130ft",
    name: "DAYBETTER LED Strip Lights 130ft",
    brand: "DAYBETTER",
    asin: "B0D4DJ6BRR",
    affiliateUrl: 'https://www.amazon.com/DAYBETTER-Lights-Bedroom-Indoor-Brithday/dp/B0D4DJ6BRR?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=56eef90791ba5f22cdb92953ed2de737&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/81Pru4iSlsL._AC_SL1500_.jpg",
    bestFor: "Gaming room creators who want to cover an entire room with LED accent lighting",
    summary:
      "DAYBETTER's 130ft roll is the go-to option for full room coverage — enough strip to line every wall, ceiling edge, and furniture piece in a typical gaming or creator room in a single purchase. The included app and remote control offer both convenience options without requiring a smart home setup.",
    pros: [
      "130ft covers an entire large room in one purchase",
      "Remote control included for quick color changes without a phone",
      "App and remote control both work independently",
      "Good adhesive backing holds on clean, smooth surfaces",
    ],
    cons: [
      "Cut-and-reconnect is possible but requires basic electrical knowledge",
      "Standard RGB — one color per strip section, not RGBIC",
      "Very long length can be challenging to manage neatly during installation",
    ],
    specs: {
      Length: "130ft",
      "LED Type": "RGB",
      Control: "App + remote",
      Cuttable: "Yes",
      "Music Sync": "Yes",
    },
    category: "led-strip-lights",
  },
  {
    id: "ksipze-100ft-rgb",
    name: "KSIPZE 100ft Led Strip Lights RGB",
    brand: "KSIPZE",
    asin: "B09V366BDY",
    affiliateUrl: 'https://www.amazon.com/Changing-Control-Lighting-Flexible-Decoration/dp/B09V366BDY?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=76ad4f64c20ac76f5dc1df3d4e6254da&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/71lntIT6FfL._AC_SL1500_.jpg",
    bestFor: "Budget creators who want whole-room LED coverage without premium pricing",
    summary:
      "KSIPZE delivers 100 feet of RGB strip at one of the most competitive prices per foot in this category. The app control and music sync are functional, and the strip cuts cleanly at marked points for custom length installations. A strong option when coverage area matters more than advanced color effects.",
    pros: [
      "100ft length at a competitive price per foot",
      "Cuttable at marked intervals for custom room lengths",
      "App control with color, brightness, and effects",
      "Music sync built in for reactive ambient lighting",
    ],
    cons: [
      "Standard RGB only — all LEDs one color at a time",
      "Adhesive backing is adequate but can fail in warm or humid rooms",
      "App is functional but less polished than Govee's",
    ],
    specs: {
      Length: "100ft",
      "LED Type": "RGB",
      Control: "App + remote",
      Cuttable: "Yes",
      "Music Sync": "Yes",
    },
    category: "led-strip-lights",
  },
  {
    id: "leeleberd-100ft-bedroom",
    name: "Leeleberd Led Lights for Bedroom 100ft",
    brand: "Leeleberd",
    asin: "B0C2MHG632",
    affiliateUrl: 'https://www.amazon.com/Leeleberd-Bedroom-Changing-Control-Bluetooth/dp/B0C2MHG632?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=efb4b2c89deebb23bb5a3931b1a6c963&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/815sBbUN7LL._AC_SL1500_.jpg",
    bestFor: "Bedroom and desk setup creators who want easy installation with strong adhesive",
    summary:
      "Leeleberd focuses on the bedroom and desk aesthetic market with LED strips that emphasize ease of installation and clean, consistent color output. The reinforced adhesive backing is a standout feature — it holds reliably on painted walls and furniture edges where cheaper strips peel after a few weeks.",
    pros: [
      "Reinforced adhesive backing outperforms basic strips on painted surfaces",
      "100ft covers a full bedroom plus desk area",
      "Consistent color uniformity along the full strip length",
      "App control with preset scene modes for gaming and relaxation",
    ],
    cons: [
      "Standard RGB without RGBIC multi-zone color capability",
      "App setup requires account creation",
      "Remote included but basic — no fine brightness adjustment",
    ],
    specs: {
      Length: "100ft",
      "LED Type": "RGB",
      Adhesive: "Reinforced",
      Control: "App + remote",
      "Music Sync": "Yes",
    },
    category: "led-strip-lights",
  },
  {
    id: "hbowmdjia-200ft-bedroom",
    name: "HBOWMDJIA Led Lights for Bedroom 200ft",
    brand: "HBOWMDJIA",
    asin: "B0DFYBYPZM",
    affiliateUrl: 'https://www.amazon.com/HBOWMDJIA-Application-Changing-Synchronization-Decoration/dp/B0DFYBYPZM?th=1&linkCode=ll2&tag=cliproomstudi-20&linkId=80d25ee0cf07342bd9046bd0677b3938&language=en_US&ref_=as_li_ss_tl',
    imageUrl: "https://m.media-amazon.com/images/I/81Mok5fFrYL._AC_SL1500_.jpg",
    bestFor: "Creators who want to light a large room or multiple spaces with a single purchase",
    summary:
      "At 200 feet, the HBOWMDJIA roll is the highest-volume option in this category — enough to light a large gaming room, wrap a double bed frame, line ceiling corners, and still have strip left for a desk setup. The music sync and app control work reliably, and the price per foot makes it the best value for high-volume installs.",
    pros: [
      "200ft roll covers large rooms and multiple zones in one purchase",
      "Best price per foot of any option in this category",
      "Music sync with built-in microphone reacts to room audio",
      "Cuttable at marked points for custom-length sections",
    ],
    cons: [
      "Standard RGB without advanced multi-color effects",
      "200ft is significant length to manage — plan installation before unrolling",
      "Brand support is limited compared to established names like Govee",
    ],
    specs: {
      Length: "200ft",
      "LED Type": "RGB",
      Control: "App + remote",
      Cuttable: "Yes",
      "Music Sync": "Built-in mic",
    },
    category: "led-strip-lights",
  },
];

export const allProducts: Product[] = [
  ...lavalierMics,
  ...streamingLights,
  ...phoneTripods,
  ...webcams,
  ...ledStripLights,
];
