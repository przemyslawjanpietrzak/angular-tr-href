# Angular tr href
Directive for modify DOM table.
Browse doesn't allow to put <a> tag into <tr> tag.
Angular-tr-href add <a> with ui-sref, ng-href or href attribute to all his <th> child tags.

## Install
```
npm install
```

## Build
```
gulp
```

## Test
```
npm test
```

## How it works
### Basic use
```html
<table>
   <tr tr-href ui-sref="some/ui/sref">
       <td>1</td>
       <td>2</td>
       <td>3</td>
   </tr>
</table>
```
Will be modify into:
```html
<table class="ng-scope">
    <tbody>
        <tr tr-href="" ui-sref="some/ui/sref">
            <td><a ui-sref="some/ui/sref">1</a></td>
            <td><a ui-sref="some/ui/sref">2</a></td>
            <td><a ui-sref="some/ui/sref">3</a></td>
        </tr>
    </tbody>
</table>
```
### Different td href than tr href
```html
<table>
    <tr tr-href ui-sref="some/ui/sref">
        <td>1</td>
        <td>2</td>
        <td tr-href-ignore>3</td>
    </tr>
</table>
```
Will be modify into:
```html
<table class="ng-scope">
    <tbody>
        <tr tr-href="" ui-sref="some/ui/sref">
            <td><a ui-sref="some/ui/sref">1</a></td>
            <td><a ui-sref="some/ui/sref">2</a></td>
            <td tr-href-ignore="">3</td>
        </tr>
    </tbody>
</table>
```
### Don't append to td
````html
<table>
    <tr tr-href ui-sref="some/ui/sref">
        <td>1</td>
        <td>2</td>
        <td td-ui-sref="diffrent/url">3</td>
    </tr>
</table>
```
Will be modify into:
```html
<table class="ng-scope">
  <tbody>
      <tr tr-href="" ui-sref="some/ui/sref">
          <td><a ui-sref="some/ui/sref">1</a></td>
          <td><a ui-sref="some/ui/sref">2</a></td>
          <td td-ui-sref="diffrent/url"><a ui-sref="diffrent/url">3</a></td>
      </tr>
  </tbody>
</table>
```