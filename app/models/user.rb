class User < ApplicationRecord
    has_secure_password

    has_many :messages

    has_many :friendships, dependent: :destroy
    has_many :friends, through: :friendships
    has_many :friend_requests_sent, ->{where(status: false)}, class_name: 'Friendship'
    has_many :requests_sent, through: :friend_requests_sent, source: :friend
    has_many :friend_requests_received, ->{where(status: false)}, class_name: 'Friendship', foreign_key: 'friend_id'
    has_many :requests_received, through: :friend_requests_received, source: :user

    validates :username, presence: true
    validates :password, on: :create, presence: true
end
