import { mount, shallow, render } from 'enzyme';
import { NestMe } from './NestMe';
import { formElCount } from "./setupTests";

test('Enzyme Render', () => {
  const view = render(<NestMe count={formElCount}/>);

  const forms = view.find('form');
  expect(forms).toHaveLength(formElCount);
});

test('Enzyme Mount', () => {
  const wrapper = mount(<NestMe count={formElCount}/>);

  const forms = wrapper.find('form');
  expect(forms).toHaveLength(formElCount);
});

test('Enzyme Shallow', () => {
  const wrapper = shallow(<NestMe count={formElCount}/>);

  const forms = wrapper.find('form');
  // shallow does not render the forms
  expect(forms).toHaveLength(0);
});
