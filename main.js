var i;

var supreme_url_shop = "http://www.supremenewyork.com/shop/all"

var category = "/jackets";
var item_name = "Diamond";
var color = "Red";

var item_url = "";

var category_url = supreme_url_shop.concat(category);

function autofill() {

  var user_name_main = "Ritwik";
  var user_email = "awasthi.ritwik@gmail.com";
  var user_tel = "4707670574";
  var user_address = "705 Marine Street";
  var user_zip = "80302";
  var user_city = "Boulder";
  var user_state = "CO";
  var user_c_number = "1111222233334444";
  var user_month = "03";
  var user_year = "2020";
  var user_cvv = "111";

  document.getElementById("order_billing_name").value = user_name_main;
  document.getElementById("order_email").value = user_email;
  document.getElementById("order_tel").value = user_tel;
  document.getElementById("bo").value = user_address;
  document.getElementById("order_billing_zip").value = user_zip;
  document.getElementById("order_billing_city").value = user_city;
  document.getElementById("order_billing_state").value = user_state;
  document.getElementById("nnaerb").value = user_c_number;
  document.getElementById("credit_card_month").value = user_month;
  document.getElementById("credit_card_year").value = user_year;
  document.getElementById("orcer").value = user_cvv;

  document.getElementsByClassName("iCheck-helper")[1].click();

}

function addToCart() {
    document.getElementsByName('commit')[0].click();
}

function checkout() {
    document.getElementsByClassName('button checkout')[0].click();
}

function pick_category(){
  chrome.storage.sync.get('category', function(data) {
    var redirect = category_url;
    var replace = redirect.replace("hats", category);
    chrome.runtime.sendMessage({redirect: replace});
  });
}

function pick_item(){
  chrome.storage.sync.get('category', function(data) {
    var items = document.getElementsByClassName('name-link');
    for(i = 0; i < items.length; i++) {
      if((items[i].innerHTML).includes(item_name)) {
        var k = i + 1;
        if(document.getElementsByClassName('name-link')[k].innerHTML.includes(color)) {
          item_url = items[i].href;
          chrome.runtime.sendMessage({redirect: items[i].href});
          break;
        }
      }
    }
  });
}

var url = window.location.href;

if (url == "https://www.supremenewyork.com/shop/all"){
  pick_category();
}

if (url == "https://www.supremenewyork.com/shop/all/jackets"){
  pick_item();
}

if (url == "https://www.supremenewyork.com/shop/jackets/h8gwk0duv/zl2rpaygk") {
  addToCart();
  checkout();
}

if (url == "https://www.supremenewyork.com/shop") {
  checkout();
}

if (url == "https://www.supremenewyork.com/checkout") {
  autofill();
}
