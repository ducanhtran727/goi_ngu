# Image optimization — 2026-10-30

## Hero clarity follow-up

The hero now uses `assets/webp/hero-nano-carbon-v6-original.webp`: 1254 × 1254, lossless WebP, 1,472,838 bytes. Removed the hero's responsive downsampled candidates to preserve source detail on every device. Decoded RGB pixels were verified identical to the original PNG. Its new filename avoids reusing cached compressed versions. Other images retain responsive compression. Rechecked all 18 images in Chrome at 390px and 1440px without loading failures, horizontal overflow or JavaScript errors. Updated full-set totals at DPR 2: 2,346,526 bytes mobile and 2,970,110 bytes desktop. The earlier totals below describe the initial optimization before this clarity adjustment.

Converted all 18 local images referenced by index.html to responsive WebP assets in assets/webp/. Original sources are retained and no image content was generated or changed. Facebook's remote tracking pixel remains unchanged.

- Encoder: bundled Sharp, WebP quality 85, effort 6, proportional resizing, no enlargement.
- Original referenced files: 29,380,123 bytes.
- Largest WebP variant for each image combined: 1,772,580 bytes (94.0% smaller).
- Browser-selected assets at 390px / DPR 2: 975,252 bytes combined.
- Browser-selected assets at 1440px / DPR 2: 1,677,176 bytes combined.
- Hero: eager loading with high fetch priority; remaining local images: lazy loading. All have asynchronous decoding and responsive srcset/sizes.
- Original dimensions/alt text and page content retained. Existing width/height attributes reserve layout space.

Validation: Chrome at mobile and desktop widths decoded all 18 assets, with no horizontal overflow or JavaScript errors. Hero screenshot visually inspected. Tests block external requests, do not send orders, and force lazy images to load to verify the complete set. Byte totals above are full image sets, not initial page transfer sizes or measured real-network load times. Live hosting/cache/Meta performance has not been measured or changed.

Artifacts: image-optimization.json maps originals to generated variants; webp-browser-report.json records browser selection; verify-webp.cjs verifies loading. Deploy index.html together with assets/webp/. The conversion script guards against recompressing already-optimized assets.
