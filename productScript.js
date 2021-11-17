var url_string = window.location.href;
var url = new URL(url_string);
var type = url.searchParams.get("type");
if (type === "grips") {
  document.getElementById("two").checked = true;
}
if (type === "plates") {
  document.getElementById("three").checked = true;
}
if (type === "other") {
  document.getElementById("four").checked = true;
}
