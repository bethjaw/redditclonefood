
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {
          // id: 1,
          title: 'Butternut Squash Enchilada Casserole',
          link: 'http://makingthymeforhealth.com/butternut-squash-enchilada-casserole/',
          vote: 3
      },
        {
          // id: 2,
          title: 'The Science of Hangry',
          link: 'http://www.cnn.com/2015/07/20/health/science-behind-being-hangry/index.html',
          vote: 1
        },
        {
          // id: 3,
          title: 'Peanut Butter Brownie Skillet',
          link: 'https://wildfriendsfoods.com/blogs/community/peanut-butter-brownie-skillet',
          vote: 2
      }
      ]);
    });
};
