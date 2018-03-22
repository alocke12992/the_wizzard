json.array! @users do |users| 
  json.id user.id 
  json.name user.name
  json.image user.image 
  json.tags user.tags
end 
