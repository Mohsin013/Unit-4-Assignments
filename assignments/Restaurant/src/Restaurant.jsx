import React, { useState } from "react";
import data from "./data.json";
import RestaurantCard from "./RestaurantCard";
import styles from "./Restaurant.module.css"


const Restaurant = () => {
    const [respData, setrespData] = useState(data);
    const [sort, setSort] = useState(0);
    const [type, setType] = useState("");
    const [sortPrice, setSortPrice] = useState("");

    const handleChange = (e) => {
        setSort(e.target.value);
    };

    const handleClick = (e) => {
        setSort(0);
        setType(e.target.name);
    };

    const handlePrice = (e) => {
        setSort(0);
        setType("");
        setSortPrice(e.target.name);
    };
    return (
        <>
            <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
                RestaurentDetails
            </h1>
            <div className={styles.filterBtn}>
                <div>
                    <h4>Filter by:</h4>
                    <select className={styles.slect} name="sort" onChange={handleChange}>
                        <option value="0">Filter</option>
                        <option value="1">Above 1 star</option>
                        <option value="2">Above 2 star</option>
                        <option value="3">Above 3 star</option>
                        <option value="4">Above 4 star</option>
                    </select>
                </div>
                <div className={styles.btn}>
                    <h4> Restaurents Type: </h4>

                    <button name="cash" onClick={handleClick}>
                        Cash Only
                    </button>
                    <button name="card" onClick={handleClick}>
                        Card Only
                    </button>
                    <button name="" onClick={handleClick}>
                        All
                    </button>
                </div>

                <div className={styles.btn}>
                    <h4> Sort By Cost for one: </h4>
                    <button name="h2l" onClick={handlePrice}>
                        High To Low
                    </button>
                    <button name="l2h" onClick={handlePrice}>
                        Low To High
                    </button>
                </div>
            </div>

            <div id={styles.main_container}>
                {sort
                    ? respData
                        .filter((el) => el.rating > sort)
                        .sort((a, b) => a.rating - b.rating)
                        .map((item, index) => <RestaurantCard key={index} {...item} />)
                    : type
                        ? respData
                            .filter((el) => el.payment_methods[type] === true)
                            .map((item, index) => <RestaurantCard key={index} {...item} />)
                        : sortPrice === "h2l"
                            ? respData
                                .sort((a, b) => b.total_cost - a.total_cost)
                                .map((item, index) => <RestaurantCard key={index} {...item} />)
                            : sortPrice === "l2h"
                                ? respData
                                    .sort((a, b) => a.total_cost - b.total_cost)
                                    .map((item, index) => <RestaurantCard key={index} {...item} />)
                                : respData.map((item, index) => (
                                    <RestaurantCard key={index} {...item} />
                                ))}
            </div>
        </>
    );
};

export default Restaurant