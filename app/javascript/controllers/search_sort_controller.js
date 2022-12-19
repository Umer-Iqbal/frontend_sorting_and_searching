import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="search-sort"
export default class extends Controller {

  connect() {
    this.elements = []
  }


  searchValue(event) {

    this.search.forEach(function (searchValue) {
      searchValue.element.classList.remove('d-none')
      if (!searchValue.element.innerText.toLowerCase().includes(event.currentTarget.value.toLocaleLowerCase())) {
        searchValue.element.classList.add('d-none')
      }
    })
  }

  ascendingSort() {
    let arr = this.makeElementsArray()
    var i, j;
    var len = arr.length;
    var isSwapped = false;
    for(i =0; i < len; i++){
      isSwapped = false;
      for(j = 0; j < len -i -1; j++){
        if(arr[j][0] > arr[j + 1][0]){
          var temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          isSwapped = true;
        }
      }
      if(!isSwapped){
        break;
      }
    }
    this.replaceOldElementsWithSortedElements(arr)
  }

  descendingSort() {
    let arr = this.makeElementsArray()
    var i, j;
    var len = arr.length;
    var isSwapped = false;
    for(i =0; i < len; i++){
      isSwapped = false;
      for(j = 0; j < len -i -1; j++){
        if(arr[j][0] < arr[j + 1][0]){
          let temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          isSwapped = true;
        }
      }
      if(!isSwapped){
        break;
      }
    }
    this.replaceOldElementsWithSortedElements(arr)
  }

  makeElementsArray() {
    let elements = []
    //make array of key value pare where
    // key = the element on the base of which we want to sort and  value will be the element it self that will be sort
    this.search.stringValueTargets.forEach(element => elements.push([element.innerText, element]))
    return elements
  }

  replaceOldElementsWithSortedElements(arr){
    let htmlElements = ""
    // converting array elements to sting to replace the previous elements
    arr.forEach(element => htmlElements += element[1].outerHTML.toString())
    this.search.stringValuesWrapperTarget.innerHTML = htmlElements
  }

  get search() {
    return this.application.controllers.find(controller => {
      return controller.context.identifier === 'search'
    })
  }
}
