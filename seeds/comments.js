
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          // id: 1,
          name: 'Megan',
          comment: 'Looks soo good!',
          link_id: 1
        },
        {
          // id: 2,
          name: 'Anne',
          comment: 'Yum!',
          link_id: 3
        }

      ]);
    });
};
