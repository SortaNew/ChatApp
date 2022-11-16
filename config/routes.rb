Rails.application.routes.draw do
  resources :messages
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'
  resources :users
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  resources :messages, only: [:create]
  post "friendships", to: "friendships#create"
  get "friendships", to: "friendships#index"
  post "interests", to: "interests#create"
  get "interests", to: "interests#index"
  mount ActionCable.server => '/cable'
  
end
