Rails.application.routes.draw do
  scope '/api' do
    resources :colivings, :coworkings, :comments
  end
end
