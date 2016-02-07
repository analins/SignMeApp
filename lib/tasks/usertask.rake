
namespace :usertask do

  desc 'generate users'
  task :users => :environment do
    10.times do
      User.create({
        firstname: Faker::Name.first_name,
        lastname: Faker::Name.last_name,
        email: Faker::Internet.email,
        book: Faker::Book.title,
        review: Faker::Hipster.paragraph
         })
    end
  end
end
