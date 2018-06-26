# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Coliving.create(name: 'A Landing Pad', location: 'Barcelona, Spain', website: 'https://www.alandingpad.com', rating: 0, about: 'Situated in the emerging Poble Sec neighborhood, A Landing Pad is a small coworking and coliving community for digital nomads and a nice starting point for enjoying Barcelona.')
Coliving.create(name: 'Roam', location: 'Tokyo, Japan', website: 'https://www.roam.co/places/tokyo', rating: 0, about: 'Roam coliving is known around the world for its luxury housing. Experience Tokyo in style!')
Coliving.create(name: 'Quarters', location: 'New York City, NY', website: 'https://new-york.goquarters.com/eastvillage/', rating: 0, about: 'Quarters offers hassle free coliving in the heart of East Village.')

Coworking.create(name: 'WeWork', location: 'Rio de Janeiro, Brazil', website: 'https://www.wework.com/buildings/ipanema--rio-de-janeiro', rating: 0, about: 'WeWork offices around the world offer remote workers a relaxing space. Take some time in Rio!')
Coworking.create(name: 'La Vaca', location: 'Barcelona, Spain', website: 'https://www.lavacacoworking.com', rating: 0, about: 'This hip coworking space in Barcelona was created from an old dairy factory (la vaca means cow in Spanish!)')
Coworking.create(name: 'The Shard', location: 'London, UK', website: 'https://www.spacing.com/location/3297_21', rating: 0, about: 'The Shard is where you go for some seriously inspiring views and workspaces in London - feel upsacle and empowered!')

Comment.create(body: 'A Landing Pad was really cool, but it needs some work done. The people there became family though!', coliving_id: 1)
Comment.create(body: 'I loved working at La Vaca. Met some really cool people. Would be nice if it were easier to get to with public transit', coworking_id: 2)
