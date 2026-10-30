# Image optimization — 2026-10-30

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
