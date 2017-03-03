Rails.application.routes.draw do
  devise_for :users

  post 'home/feedback'
  get 'home/sign_up_form'
  get 'about', to: 'site#about'
  get 'faq', to: 'site#faq'

  mount ActionCable.server => '/cable'

  resources :rooms do
    member do
      get :story_list
      get :user_list
      post :set_room_status
      get :draw_board
    end
  end

  get 'profile' => 'profile#show'
  get 'profile/edit' => 'profile#edit'
  patch 'profile/update' => 'profile#update'
  patch 'profile/update_password' => 'profile#update_password'
  resources :dashboard, only: [:index]

  match "/404" => "errors#not_found", via: [ :get, :post, :patch, :delete ]

  root 'home#index'
end
