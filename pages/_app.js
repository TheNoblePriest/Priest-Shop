import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { StateProvider } from "../components/StateProvider";
import reducer, { initialState } from "../components/reducer";
import { Provider } from "react-redux";
import { store } from "../src/app/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <Component {...pageProps} />
        </StateProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
