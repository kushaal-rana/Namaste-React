import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // let listOfRestaurants = [
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334475',
  //       name: 'KFC',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '3.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334476',
  //       name: 'Dominos',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.8',
  //     },
  //   },
  //   {
  //     type: 'restaurant',
  //     data: {
  //       id: '334477',
  //       name: 'McDonals',
  //       cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
  //       cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
  //       costForTwo: 40000,
  //       deliveryTime: 36,
  //       avgRating: '4.2',
  //     },
  //   },
  // ];

  return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search" className="search-box" />
          <button className="search-btn">Search</button>



          <button className="filterbtn" 
          onClick={()=> {
            filteredRestaurants = listOfRestaurants.filter((res) => res.data.avgRating > 4.2);
            console.log(listOfRestaurants);
            setListOfRestaurants(filteredRestaurants);
          }}

            
            
            >Top Rated Restaurant</button>
        </div>


        <div className="restaurant-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
          ))}
        </div>
      </div>
    );
  };

  export default Body