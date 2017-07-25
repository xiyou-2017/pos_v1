let printReceipt = function (inputs) {
  let carItems = buildItems(inputs);

}

function buildItems(inputs) {
  let allItems = loadAllItems();
  let carItems = [];
  inputs.forEach(function (input, index, array) {
    let barcode = input.split('-')[0];
    let count = 0;
    if (input.split('-')[1]) {
      count = parseFloat(input.split('-')[1]);
    } else count = 1;
    let carItem = carItems.find(function (carItem) {
      return carItem.item.barcode == barcode;
    });
    if (carItem) {
      carItem.count += count;
    }
    else {
      let item = allItems.find(function (item) {
        return item.barcode === barcode
      });
      carItems.push({item: item, count: count});
    }
  });
  return carItems;
}

