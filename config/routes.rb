Rails.application.routes.draw do
  scope '/api' do
    resources :colivings, :coworkings do
       resources :comments
     end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
