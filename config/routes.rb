Rails.application.routes.draw do
  scope '/api' do
    resources :colivings, :coworkings do
       resources :comments
     end
  end
end
