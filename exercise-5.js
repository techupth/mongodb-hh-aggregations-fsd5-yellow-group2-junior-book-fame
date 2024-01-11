db.pizzaOrders.aggregate([
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
