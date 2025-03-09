/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "hero-bg":'url(/src/assets/hero-sec.jpeg)',
        "banner-bg":'url(/src/assets/banner-sec.jpeg)',
      },
      fontFamily : {
        Poppins : 'Poppins'
      },
      fontFamily : {
        DMSans : 'DM Sans'
      },
      fontFamily : {
        Lato : 'Lato'
      },
      colors : {
        "GS900" : '#212121',
        "GS800" : '#424242',
        "GS700" : '#616161',
        "GS600" : '#757575',
        "GS500" : '#9E9E9E',
        "GS400" : '#BDBDBD',
        "GS300" : '#E0E0E0',
        "GS200" : '#EEEEEE',
        "GS100" : '#F5F5F5',
        "GS50"  : '#FAFAFA',
        "dark-primary" : '#222325',
        "dark-secondary" : '#333333AD',
        "dark-disabled" : '#3A354161',
        "light-primary" : '#FFFFFF',
        "light-secondary" : '#C1C2C4',
      },
      borderColor : {
        "vborder" : '#3A35411F'
      },
      backgroundColor : {
      "light-disabled" : '#9D9EA1',
      "base-bg" : '#F4F5FA',
      "secondary-bg" : '#F9FAFC',
      "primary-main" : '#3ECF4C',
      "primary-100"  : '#E2FCD9',        
      }
    },
    screens : {
      'desktop' : '1280px',
      'laptop' : '1008px',
      'tablet' : '640px',
      'mobile' : '300px'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // function ({addUtilities}) {
    //   const newUtilities = {
    //     ".scrollbar-webkit": {
    //       "&::-webkit-scrollbar" : {
    //         height: "6px",
    //         innerWidth: "2px",
    //         outerWidth: "2px",
    //         width: "2px"
    //       },
    //       "&::-webkit-scrollbar-track": {
    //         background : "transparent",
    //       },
    //       "&::-webkit-scrollbar-thumb": {
    //         backgroundColor: "#DC2626",
    //         borderRadius: "10px",
    //       },
    //     },
    //   };
    //   addUtilities(newUtilities, ["responsive","hover"]);
    // }
  ],
}

