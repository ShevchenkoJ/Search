function Search() {
    const form = document.forms.searchForm;
    const searchInput = form.elements.searchbar;

    this.inputHandler(form, searchInput);
}

Search.prototype.inputHandler = function (form, input) {
    API.getDataByInputText(form, input);
};