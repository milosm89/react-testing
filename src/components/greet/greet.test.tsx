/*
Greet should the render the text hello and if a name is passed into the component
It should render hello folowed by the name
*/

import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe("Greet", () => {

   test('render correctly', () => {
      render(<Greet/>)
      const textelement = screen.getByText(/Hello/i)
      expect(textelement).toBeInTheDocument()
   })
   
   describe('Nested', () => {

      test('renders with a name', () => {
         render(<Greet name = "Miskec"/>)
         const textElement = screen.getByText(/Hello Miskec/i)
         expect(textElement).toBeInTheDocument()
      })
   })
})