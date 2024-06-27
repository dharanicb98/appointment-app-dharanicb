/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Include jsx if you use React
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.dark-scrollbar::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
          display: 'block',
        },
        '.dark-scrollbar::-webkit-scrollbar-track': {
          background: '#d9d9d9',
          borderLeft: '1px solid white',
          borderRight: '1px solid white',
        },
        '.dark-scrollbar::-webkit-scrollbar-thumb': {
          background: 'black',
          borderLeft: '8px solid black',
          borderRight: '8px solid black',
          borderRadius: '10px',
        },
        '.dark-scrollbar::-webkit-scrollbar-thumb:hover': {
          cursor: 'pointer',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.ellipsis': {
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
        '.dashed__border': {
          backgroundImage: "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23333' stroke-width='3' stroke-dasharray='9%2c 14' stroke-dashoffset='7' stroke-linecap='square'/%3e%3c/svg%3e\")",
        },
        '.colored-circle': {
          display: 'inline-block',
          borderRadius: '50%',
        },
      });
    },
  ],
}
