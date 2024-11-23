

export function getOrdersReducer(state = { status: false, orders: [] }, actions) {

    switch (actions.type) {

        case "getOrders":
            return actions.payload;

        default:
            return { status: false, orders: [] };

    }
}
export function getMyOrdersReducer(state = { status: false, myOrders: [] }, actions) {

    switch (actions.type) {

        case "getMyOrders":
            return actions.payload;

        default:
            return state;

    }
}

