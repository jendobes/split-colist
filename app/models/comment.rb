class Comment < ApplicationRecord
  belongs_to :coliving, optional: true
  belongs_to :coworking, optional: true
end
