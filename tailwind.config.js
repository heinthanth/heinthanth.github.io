const themeFont="Space Mono",{fontFamily:fontFamily}=require("tailwindcss/defaultTheme");module.exports={content:["./src/pages/**/*.{js,ts,jsx,tsx}","./src/components/**/*.{js,ts,jsx,tsx}"],theme:{fontFamily:{sans:[themeFont,...fontFamily.sans],serif:[themeFont,...fontFamily.serif],mono:[themeFont,...fontFamily.mono]},extend:{}},plugins:[require("daisyui")],daisyui:{themes:["light"]}};