import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("test App component", () => {

  test("existe párrafo", () => {
    render(<App />);
    const element = screen.getByText("Números agregados");
    expect(element).toBeInTheDocument();
  });

  test("existe boton Agregar", () => {
    render(<App />);
    const element = screen.getByText("agregar");
    expect(element).toBeInTheDocument();
  });
  
  test("agregar un número a partir del input", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("agrega un número");
    input.value = 5;
    const boton = screen.getByText("agregar");
    fireEvent.click(boton);
    const span = screen.getByText("5")

    expect(span).toBeInTheDocument();
  });


});

