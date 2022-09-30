import React from "react";
import styles from "./Restaurant.module.css"

const RestaurantCard = ({
    category,
    total_votes,
    total_reviews,
    total_cost,
    payment_methods,
    url,
    rating,
    name,
}) => {
    const { card, cash, upi } = payment_methods;

    return (
        <div className={styles.res_card}>
            <div className={styles.upperCard}>
                <img src={url} alt={url} />
                <div className={styles.upperCard}>
                    <h2>{name}</h2>
                    <p className={styles.muted_text}>{category}</p>
                    <p className={styles.muted_text}>{`Cost ₹${total_cost} for one`}</p>
                    <p>Min ₹50 Up to 30 min </p>
                    <p>
                        Accepts
                        {card && cash && upi
                            ? " all payments"
                            : cash && card
                                ? " cash & card payments only"
                                : cash
                                    ? " cash payments only"
                                    : card
                                        ? " card payments only"
                                        : " upi payments only"}
                    </p>
                </div>
                <div className={styles.right_card}>
                    <h3>{rating}</h3>
                    <p>{total_votes} votes</p>
                    <p>{total_reviews} reviews</p>
                </div>
            </div>
            <div className={styles.lowerCard}>
                <div></div>
                <button>Order online</button>
            </div>
        </div>
    );
};

export default RestaurantCard