## Data Attributes

Data attributes are a way to `add metadata` to HTML elements. **Data attributes** can be used to indicate weather a particular div or another element needs to be recorded or not.

Data attributes are used for *setting dom elements* data.
Data attributes can be used in javascript as follows: 


### data attributes 
    * used for storing extra information on a html element
    * data attribute starts with data-
    * example data-test
    * to get the data related to the data attribute in javascript - element.dataset.name 
    * can also use the getAttribute method to retrieve the data associated

### example

> html code
 
```html
    <div id="content">
        <ul>
            <li id="b1" data-show="true" data-text="Some text">This is a sample text</li>
            <li id="b2" data-show="false">Another paragraph</li>
            <li id="b3">Last paragraph</li>
        </ul>
    </div>
```

> javascript code

```js
let lis = document.querySelectorAll("li");
let lis_array = Array.from(lis);
lis.forEach(function(elem) {
    elem.addEventListener("click", function(e) {
        if(elem.dataset.show === "true"){
            elem.innerHTML = elem.dataset.text;
        }
    })
});
```