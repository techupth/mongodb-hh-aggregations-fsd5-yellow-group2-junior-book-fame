db.pizzaOrders.aggregate([
  {
    $match: {
      $expr: { $eq: [{ $year: "$created_at" }, 2021] },
    },
  },
  {
    $group: {
      _id: {
        year: { $year: "$created_at" },
        month: { $month: "$created_at" },
      },
      total_paid: { $min: "$total_price" },
    },
  },
  { $limit: 1 },
]);
