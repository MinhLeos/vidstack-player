/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: "tw-video-",
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      colors: {
        'media-brand': 'rgb(var(--media-brand) / <alpha-value>)',
        'media-focus': 'rgb(var(--media-focus) / <alpha-value>)'
      }, 
      screens: {
        sm: '375px',
        xs: '480px',
        xsm: '640px',
        md: '768px',
        xmd: '880px',
        lg: '1024px',
        mlg: '1170px',
        xmlg: '1200px',
        xlg: '1280px',
        xxlg: '1920px',
      },
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('vidstack/tailwind.cjs')({
      prefix: 'media',
      webComponents: true
    }),
    customVariants
  ]
}

function customVariants({ addVariant, matchVariant }) {
  // Strict version of `.group` to help with nesting.
  matchVariant('parent-data', (value) => `.parent[data-${value}] > &`)

  addVariant('hocus', ['&:hover', '&:focus-visible'])
  addVariant('group-hocus', ['.group:hover &', '.group:focus-visible &'])
}
