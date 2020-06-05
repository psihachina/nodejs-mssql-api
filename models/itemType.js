var ItemType = function(data){
    this.item_type_name = data["item_type_name"].value;
    this.image_path = data["image_path"].value;
    this.description = data["description"].value;
    this.item_type_id = data["item_type_id"].value;
  };
  
  module.exports = ItemType;