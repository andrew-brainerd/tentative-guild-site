import Officers from '../components/Officers/Officers';
import Schedule from '../components/Schedule/Schedule';
import Home from '../components/Home/Home';

export default [
  { path: '/', name: 'Home', Component: Home },
  { path: '/officers', name: 'Officers', Component: Officers },
  { path: '/schedule', name: 'Schedule', Component: Schedule }
];
