db.pizzaOrders.aggregate([
  {
    $match: {
      $expr: { $eq: [{ $month: "$created_at" }, 7] },
    },
  },
  {
    $group: {
      _id: {
        year: { $year: "$created_at" },
        month: { $month: "$created_at" },
      },
      total_paid: { $sum: "$total_price" },
    },
  },
]);
