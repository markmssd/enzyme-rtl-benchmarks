import { Form } from './Form'

export const NestMe = ({ count = 0 }) =>
    Array.from({ length: count }, (_, i) => <Form key={i}/>);
