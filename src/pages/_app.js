// src/pages/_app.js
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;


// import React from "react";
// import { FavoritesProvider } from "../contexts/FavoritesContexts";
// import ChooseCandidate from "../pages/chooseCandidate/[career]";

// function App() {
//   return (
//     <FavoritesProvider>
//       <ChooseCandidate />
//     </FavoritesProvider>
//   );
// }

// export default App;