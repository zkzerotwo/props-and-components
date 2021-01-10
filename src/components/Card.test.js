import Card from './Card'

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import renderer from 'react-test-renderer';

// this is the test case
it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');

    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Card />, div);

    // clean up code
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});