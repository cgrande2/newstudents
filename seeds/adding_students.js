
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {
          first_name: 'Michael C',
          last_name: 'Hunt',
          grade_point_average: 69,
          bus_rider: true,
        },
        {
          first_name: 'Hugh C',
          last_name: 'Hawk',
          grade_point_average: 69,
          bus_rider: false,
        },
        {
          first_name: 'Peter',
          last_name: 'Longfellow',
          grade_point_average: 2,
          bus_rider: true,
        },
      ]);
    });
};


