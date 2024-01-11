db.pizzaOrders.aggregate([
  { $group: { _id: "$size", total_paid: { $sum: "$total_price" } } },
  { $sort: { total_paid: -1 } },
]);
