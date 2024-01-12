import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/RestaurantMock.json"
import "@testing-library/jest-dom"

it("should render RestaurantCard component with props data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("NIC Ice Creams");

    expect(name).toBeInTheDocument()
})