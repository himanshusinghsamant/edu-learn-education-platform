import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { AppRoutes } from './routes/AppRoutes';
// import { UnderDevelopmentOverlay } from './components/UnderDevelopmentOverlay';
import './index.css';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
// ‼️ import carousel styles after core package styles
import '@mantine/carousel/styles.css';

function App() {
  return (
    <MantineProvider>
      <Notifications />
      {/* <UnderDevelopmentOverlay /> */}
      <Router>
        <AppRoutes />
      </Router>
    </MantineProvider>
  );
}

export default App;
