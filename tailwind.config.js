/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};

/*

NOTE: 

All all the files that you want to be scanned by TailwindCSS in the `content` array.
If you have let say 4 pages in the Root directory of project, then you can add all the 4 pages in the array. 

If your peoject structure look like this for example. 

- index.html
- about.html
- contact.html
- services
    - web-development.html
    - mobile-development.html
    - desktop-development.html

*/

//  Then you can add all the files in the `content` array like this:

// content: [
//     './index.html',
//     './about.html',
//     './contact.html',
//     './services/**/*.html',
//   ],

// If you have any JavaScript files that manipulate your HTML to add classes, make sure you include those as well:

// content: [
//   ...
//   './src/**/*.js',
// ],

// For Detail Config, head over to: `https://tailwindcss.com/docs/content-configuration`
