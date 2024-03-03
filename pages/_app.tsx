import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
  <div>
  <GoogleOAuthProvider clientId="770243850096-t4vqusn04drjltvnf2663f5a0nrkvr4h.apps.googleusercontent.com" >
  <Component {...pageProps} />
  </GoogleOAuthProvider>
  </div>
  );
}
