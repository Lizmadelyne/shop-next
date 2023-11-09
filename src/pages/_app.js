import { ProviderAuth } from '../hooks/useAuth.jsx';
import MainLayout from '../Layout/MainLoyout';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}
export default MyApp;
