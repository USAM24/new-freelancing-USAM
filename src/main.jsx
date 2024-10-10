import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PostJobProvider } from './Contexts/PostJobContext.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <PostJobProvider>
        <App />
      </PostJobProvider>
    </QueryClientProvider>
  </I18nextProvider>
);