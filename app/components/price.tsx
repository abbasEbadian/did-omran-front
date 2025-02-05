import React from "react";

function Price({ amount }: { amount: number }) {
    return (
        <>
            <small className="text-secondary">{Number(amount).toLocaleString()} تومان</small>
        </>
    );
}

export default Price;
