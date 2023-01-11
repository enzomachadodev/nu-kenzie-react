import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   :root {
    
    --color-primary: #FD377E;
    --color-primary-focus: #E34981;
    --color-primary-error: #03B898;

	--white: #ffffff;
	
    --gray-1: #F8F9FA;
    --gray-2: #E9ECEF;
    --gray-3: #868E96;
    --gray-4: #212529

	--black: #000000;
    
    --sucess: #82C91E;
    --error: #F03E3E;
    --warning: #FCC419;
    
    --font: 'Nunito', sans-serif;
    }



* {
	margin:0;
	padding: 0;
 	outline:0;
	box-sizing: border-box;
	font-family: var(--font);
	text-decoration: none;
	list-style: none;
}


body,html{
	width: 100vw;
	height: 100vh;
}

.title-1 {
	
}


`;
