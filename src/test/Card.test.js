import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('should render an image', () => {
    render(<Card/>);
    const img = screen.getByRole(/img/i);
    expect(img).toBeInTheDocument();
});

test('should render text("Improve your front-end skills by building projects")', () => {
    render(<Card/>);
    const text = screen.getByText(/Improve your front-end skills by building projects/i);
    expect(text).toBeInTheDocument();
});

test('should render tests ("Scan the QR code to visit Frontend Mentor and take your coding skills to the next level")', () => {
    render(<Card/>);
    const text = screen.getByText(/Scan the QR code to visit Frontend Mentor and take your coding skills to the next level/i);
    expect(text).toBeInTheDocument();
});
