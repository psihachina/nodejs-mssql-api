var Item = function(data){
    this.item_id = data["item_id"].value;
    this.item_name = data["item_name"].value;
    this.item_type_name = data["item_type_name"].value;
    this.required_level = data["required_level"].value;
    this.durability = data["durability"].value;
    this.image_path = data["image_path"].value;
    this.description = data["description"].value;
    this.item_type_id = data["item_type_id"].value;
  };
  
  module.exports = Item;