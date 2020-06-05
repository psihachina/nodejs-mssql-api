var Attribute = function (data) {
    this.attribute_id = data["item_type_name"].value;
    this.attribute_name = data["image_path"].value.charAt(0).toUpperCase() + string.slice(1);
    this.description = data["description"].value;
};

module.exports = itemType;