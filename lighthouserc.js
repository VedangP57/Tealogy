module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run build && npm run start",
      startServerReadyPattern: "Ready",
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/category/tea",
        "http://localhost:3000/category/coffee",
      ],
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
        },
      },
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "categories:performance": ["warn", { minScore: 0.7 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.8 }],
        "categories:seo": ["error", { minScore: 0.9 }],
        "first-contentful-paint": ["warn", { maxNumericValue: 2500 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 3000 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "total-blocking-time": ["warn", { maxNumericValue: 500 }],
        // Relax some checks that are hard to pass in development
        "csp-xss": "off",
        "installable-manifest": "off",
        "unused-javascript": "off",
        "total-byte-weight": "off",
        "bootup-time": "off",
        "dom-size": "off",
        "mainthread-work-breakdown": "off",
        "render-blocking-resources": "off",
        "server-response-time": "off",
        "uses-responsive-images": "off",
        "lcp-lazy-loaded": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
