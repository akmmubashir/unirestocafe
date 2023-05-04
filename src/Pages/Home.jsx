import axios from "axios";
// import { useContext, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import red from "../Images/1.jpg";
import green from "../Images/2.jpg";
// import { wrapper } from "../App";

function Home() {
  // const { count, setCount } = useContext(wrapper);
  const [Dishes, setDishes] = useState([]);

  const incrementCount = (dishid) => {
    setDishes((prevState) => {
      return prevState.map((restaurant) => {
        const newTableMenuList = restaurant.table_menu_list.map((dishcat) => {
          const newCategoryDishes = dishcat.category_dishes.map((dishes) => {
            if (dishes.dish_id === dishid) {
              return { ...dishes, count: (dishes.count || 0) + 1 };
            }
            return dishes;
          });
          return { ...dishcat, category_dishes: newCategoryDishes };
        });
        return { ...restaurant, table_menu_list: newTableMenuList };
      });
    });
  };

  const decrementCount = (dishid) => {
    setDishes((prevState) => {
      return prevState.map((restaurant) => {
        const newTableMenuList = restaurant.table_menu_list.map((dishcat) => {
          const newCategoryDishes = dishcat.category_dishes.map((dishes) => {
            if (dishes.dish_id === dishid) {
              return {
                ...dishes,
                count: Math.max((dishes.count || 0) - 1, 0),
              };
            }
            return dishes;
          });
          return { ...dishcat, category_dishes: newCategoryDishes };
        });
        return { ...restaurant, table_menu_list: newTableMenuList };
      });
    });
  };



  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`)
      .then((res) => {
        setDishes(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div className="container my">
      {Dishes.map((restaurant) => {
        return (
          <div key={restaurant.restaurant_id} className="row">
            <Tabs
              defaultActiveKey="Salads and Soup"
              id="fill-tab-example"
              className="mb-3 cat-lists"
              fill
              // justify
            >
              {restaurant.table_menu_list?.map((dishcat) => (
                <Tab
                  eventKey={dishcat.menu_category}
                  title={dishcat.menu_category}
                  className=""
                  key={dishcat.menu_category_id}
                >
                  {dishcat.category_dishes?.map((dishes) => (
                    <div
                      className="align-items-center row border py-lg-2 py-4 "
                      key={dishes.dish_id}
                    >
                      <div className="col-lg-8 col-12 d-flex">
                        <div className="pe-2">
                          <img
                            src={dishes.dish_Type === 1 ? red : green}
                            style={{ width: "30px", marginTop: "10px" }}
                            alt="re"
                          />
                        </div>
                        <div>
                          <h2>{dishes.dish_name}</h2>
                          <p className="price">
                            {dishes.dish_currency} {dishes.dish_price}
                          </p>
                          <p>{dishes.dish_description}</p>
                          <div className="">
                            {dishes.dish_Availability ? (
                              <div className="d-inline-flex align-items-center count-btn">
                                <button
                                  className="id-btn"
                                  onClick={() => decrementCount(dishes.dish_id)}
                                >
                                  -
                                </button>
                                <button className="id-btn">
                                  {dishes.count ? dishes.count : "0"}
                                </button>
                                <button
                                  className="id-btn"
                                  onClick={() => incrementCount(dishes.dish_id)}
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <p className="text-danger">Not available</p>
                            )}
                          </div>
                          <p>
                            {dishes.addonCat?.map((addons) => (
                              <span key={addons.addon_category_id}>
                                {addons.addon_selection === 1 ? (
                                  <span className="text-danger">
                                    Custmization available
                                  </span>
                                ) : (
                                  ""
                                )}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-2 col-12">
                        <p className="calories">
                          {dishes.dish_calories} Calories
                        </p>
                      </div>
                      <div className="col-lg-2 col-12 text-center">
                        <img
                          src={dishes.dish_image}
                          alt="dish"
                          className="dish"
                        />
                      </div>
                    </div>
                  ))}
                </Tab>
              ))}
            </Tabs>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
