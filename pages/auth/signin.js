import {
  signIn,
  getProviders,
  useSession,
  signIn as SignInAsProvider,
} from "next-auth/react";
import Header from "../../components/Header";

function signin({ providers }) {
  const { data: session } = useSession();
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center flex-col w-full h-screen">
        <div className="flex justify-center flex-col items-center mb-32">
          <img
            className="w-40"
            src="https://images.ctfassets.net/3n0fku9d0jjr/4m3Hd15tsiUXxOQuLG5nKz/cbd692deeca4026cbd2e3ac8082feb60/shopping_logo_white__2_.svg"
            alt="signIn_Icon"
          />
          <p>☑️ This is made to educate people..</p>
        </div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="rounded-lg p-2 text-sm font-bold bg-blue-400 text-white"
              onClick={() =>
                SignInAsProvider(provider.id, {
                  callbackUrl: "/",
                })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
