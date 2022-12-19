import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sort"
export default class extends Controller {
  connect() {
  }

  ascendingSort() {
    let arr = this.makeElementsArray()
    var i, j;
    var len = arr.length;
    var isSwapped = false;
    for(i =0; i < len; i++){
      isSwapped = false;
      for(j = 0; j < len -i -1; j++){
        if(parseInt(arr[j][0]) > parseInt(arr[j + 1][0])){
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
        if(parseInt(arr[j][0]) < parseInt(arr[j + 1][0])){
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
    this.search[1].integerValueTargets.forEach(element => elements.push([element.innerText, element]))
    return elements
  }

  replaceOldElementsWithSortedElements(arr){
    let htmlElements = ""
    // converting array elements to sting to replace the previous elements
    arr.forEach(element => htmlElements += element[1].outerHTML.toString())
    this.search[1].integerValuesWrapperTarget.innerHTML = htmlElements
  }

  get search() {
    return this.application.controllers.filter(controller => {
      return controller.context.identifier === 'search'
    })
  }
}
