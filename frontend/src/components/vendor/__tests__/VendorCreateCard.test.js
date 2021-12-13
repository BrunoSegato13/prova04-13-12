import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import VendorCreateCard from "../VendorCreateCard";
import React from "react";

const mockVendor = {
  name: "Informática"
}

const mockCloseForm = jest.fn();

test("should send a valid vendor to create and expect api is called", () =>{

  axios.post.mockImplementation(() => Promise.resolve(mockVendor));
  render(<VendorCreateCard openForm={true} closeForm={mockCloseForm}/>);

  const nameElement = screen.getByTestId(/name/i);
  const addButtonElement = screen.getByTestId(/add-button/i);

  fireEvent.change(nameElement, {target: { value: "Informática"}});
  fireEvent.click(addButtonElement);

  expect(nameElement).toBeInTheDocument();
  expect(addButtonElement).toBeInTheDocument();

  expect(axios.post).toHaveBeenCalled();

});