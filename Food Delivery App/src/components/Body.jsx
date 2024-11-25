import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(listOfRestaurants);
  const [searchText, setSearchText] = useState("");
  console.log("Before Use Effect")
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
    const json = await data.json();
    console.log(json?.data.cards[11]);
    // const {lati, longi} = json?.data?.cards[11]?.card?.card;
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  }


  const searchRestaurants = () => {
    console.log(listOfRestaurants);
    debugger
    let filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredRestaurants(filteredRestaurants);
  }

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search" className="search-box" value = {searchText} onChange={(e) => setSearchText(e.target.value)}/>
          <button className="search-btn" onClick={searchRestaurants}>Search</button>


          <button className="filterbtn" 
          onClick={()=> {
            let filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4.0);
            console.log(filteredRestaurants);
            setFilteredRestaurants(filteredRestaurants);
          }}

            
            
            >Top Rated Restaurant</button>
        </div>

        <div className="restaurant-container">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={parseInt(restaurant?.info?.id)} resData={restaurant}/>
          ))}
        </div>
      </div>
    );
  };

  export default Body