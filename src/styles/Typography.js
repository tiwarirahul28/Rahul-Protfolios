import { createGlobalStyle } from 'styled-components';
// import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
// import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
// import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

const Typography = createGlobalStyle`
  html{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: var(--gray-1);
  }
  *{
    ${'' /* font-family: 'RobotoMono Regular'; */}
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

`;

export default Typography;
