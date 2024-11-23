import { ApartmentDetails } from "@/components/interestedPeople/ApartmentDetails";
import DropdownPagination from "@/components/interestedPeople/DropdownPagnation";
import SearchAndFilter from "@/components/interestedPeople/SearchAndFilter";
import Header from "@/layouts/Header";


const apartment = {
  name: "La sabana house",
  location: "329 Calle santos, paseo colón, San José",
  bedrooms: 2,
  bathrooms: 1,
  petFriendly: true,
  price: 4058.00
}

const page = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <Header />
      <div className="px-2 md:px-8 mt-8">
        <ApartmentDetails {...apartment} />
        <SearchAndFilter />
        <DropdownPagination paginationVisible />
        <DropdownPagination paginationVisible={false} />
      </div>
    </section>
  )
}

export default page
