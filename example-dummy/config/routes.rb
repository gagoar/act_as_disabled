Dummy::Application.routes.draw do
  root 'comments#index'
  resources :comments, only: [:index] do
    collection do
      get 'some'
    end
  end
end
