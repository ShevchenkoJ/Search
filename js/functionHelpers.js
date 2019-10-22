function $(tag, objectOfAttr) {
    const elem = document.createElement(tag);

    for (let key in objectOfAttr) {
        if (key === 'text') {
            elem.textContent = objectOfAttr[key];
        } else {
            elem.setAttribute(key, objectOfAttr[key]);
        }
    }

    return elem;
}