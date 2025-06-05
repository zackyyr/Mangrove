// pages/_app.jsx
import "@/styles/globals.css";
import { Raleway } from "next/font/google";
import 'remixicon/fonts/remixicon.css';


const raleway = Raleway({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
});


export default function App({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  );
}
