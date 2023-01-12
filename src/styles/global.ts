import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    
    --color-primary: #FD377E;
    --color-primary-focus: #E34981;
    --color-secundary: #03B898;

	--white: #ffffff;
	
    --gray-1: #F8F9FA;
    --gray-2: #E9ECEF;
    --gray-3: #868E96;
    --gray-4: #212529;

	--black: #000000;
    
    --sucess: #82C91E;
    --error: #F03E3E;
    --warning: #FCC419;
    
    --font: 'Nunito', sans-serif;

	--bold: 700;
	--regular: 400;
    }



* {
	margin:0;
	padding: 0;
 	outline:0;
	box-sizing: border-box;
	text-decoration: none;
	list-style: none;
	font-family: var(--font);
}


body {
	width: 100vh;
	height: 100vh;	
	color: var(--white);
	font-size: 1rem;
}
	
	
	/* 


h1 {
	font-size: 38px;
	font-weight: var(--bold);
}

h2 {
	font-size: 22px;
	font-weight: var(--bold);
}
h3 {
	font-size: 16px;
	font-weight: var(--bold);
}
h4 {
	font-size: 12px;
	font-weight: var(--bold);
}
span {
	font-size: 16px;
	font-weight: var(--regular);
}

*/

.button-1 {
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--color-primary);
	color: var(--white);
	font-size: 1rem;
	border-radius: 8px;
	transition: .5s;
	border: none;
}

.button-1:hover {
	background-color: var(--color-primary-focus);
}

.button-2 {
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--gray-2);
	color: var(--gray-3);
	font-size: 1rem;
	border-radius: 8px;
	transition: .5s;
	border: none;
}

.button-2:hover {
	background-color: var(--gray-3);
	color: var(--gray-1);
}



.active {
	background-color: var(--color-primary);
	color: var(--white);
} 
`;

export default GlobalStyle;
