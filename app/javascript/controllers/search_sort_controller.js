import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="search-sort"
export default class extends Controller {
  static targets = ['elements', 'elementsWrapper']

  searchValue(event) {
    this.elementsTargets.forEach(function (searchValue) {
      searchValue.classList.remove('d-none')
      if (!searchValue.innerText.toLowerCase().includes(event.currentTarget.value.toLocaleLowerCase())) {
        searchValue.classList.add('d-none')
      }
    })
  }

  descendingSort() {
    const elementsArray = this.elementsTargets
    const sortedElements = this.sortElements (elementsArray, false)
    const container = this.elementsWrapperTarget
    container.innerHTML = ""
    sortedElements.forEach(element => container.appendChild(element));
  }

  ascendingSort() {
    const elementsArray = this.elementsTargets
    const sortedElements = this.sortElements (elementsArray)
    const container = this.elementsWrapperTarget
    container.innerHTML = ""
    sortedElements.forEach(element => container.appendChild(element));
  }

  sortElements(valueArray, ascending = true) {
    const elementsArray = valueArray

    elementsArray.sort((a, b) => {
      // Check if the values are integers.
      const aIsInt = Number.isInteger(parseInt(a.innerHTML, 10));
      const bIsInt = Number.isInteger(parseInt(b.innerHTML, 10));

      // If both values are integers, compare them as numbers.
      if (aIsInt && bIsInt) {
        return ascending ? parseInt(a.innerHTML, 10) - parseInt(b.innerHTML, 10) : parseInt(b.innerHTML, 10) - parseInt(a.innerHTML, 10);
      }

      // If at least one value is not an integer, try parsing both values as dates.
      // If either value is not a valid date, the Date() constructor will return
      // an invalid date, which we can check using the isNaN() function.
      const aValue = new Date(a.innerHTML);
      const bValue = new Date(b.innerHTML);
      if (!isNaN(aValue) && !isNaN(bValue)) {
        return ascending ? aValue.getTime() - bValue.getTime() : bValue.getTime() - aValue.getTime();
      }

      // If at least one value is not a valid date, compare them as strings.
      const aText = a.innerHTML;
      const bText = b.innerHTML;
      return ascending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });

    return elementsArray;
  }
}