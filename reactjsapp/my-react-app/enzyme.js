import Enzyme, {shallow, mount, configure} from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Lets configure the Adapter with the Enzyme Object Model

configure({
    adapter: new Adapter()
});
// export the configured object model for the Enzyme with shallow so that the
// test will be executed
export {shallow, mount};
export default Enzyme;