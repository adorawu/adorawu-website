function changePage(page_name) {
  var page_names = ["Home", "About", "Experience", "Projects", "Contact"]
  var curr_page = document.getElementById(page_name)
  curr_page.style.opacity = 1
  curr_page.style.zIndex = 10

  for ( var i= 0; i < page_names.length; i++) {
    var page = document.getElementById(page_names[i])
    if ( page !== curr_page ) {
      page.style.opacity = 0
    }
  }
}