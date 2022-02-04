import { render, screen } from '@testing-library/react';
import { NestMe } from './NestMe';
import { formElCount } from "./setupTests";

test('RTL Render getAllByRole()', () => {
  render(<NestMe count={formElCount}/>);

  const inputs = screen.getAllByRole(/form/i);
  expect(inputs).toHaveLength(formElCount);
});

test('RTL Render findAllByTestId()', () => {
  render(<NestMe count={formElCount}/>);

  const inputs = screen.getAllByTestId('my-form-id');
  expect(inputs).toHaveLength(formElCount);
});
