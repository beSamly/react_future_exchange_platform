export const isSameOrderId = (data: string, orderId: string) => {
    return data.replace(/ /g, '') === orderId.replace(/ /g, '') ? true : false;
};
