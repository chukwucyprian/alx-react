// Import Enzyme and the adapter
import { configure } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

// Configure Enzyme to use the adapter
configure({ adapter: new Adapter() });