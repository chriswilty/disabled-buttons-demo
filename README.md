# disabled-buttons-demo

Using the "disabled" attribute on HTML buttons is problematic in the context of screen
readers. This really simple app demonstrates how to use aria-disabled instead, and thereby
include everyone 🫶

## The problem

```html
<button disabled onclick="submitForm()">
  problem child
</button>
```

- Visually-able users can see the button. We can also style it to indicate it is disabled.
- However, buttons that are "disabled" are ignored by screen readers, and are not focusable, so the
  user will not even be aware they exist. This treats visually-impaired users as second-class
  citizens.
- Because disabled buttons are not focusable, we cannot give them context specific information to
  explain why they are disabled, other than by using hover states. This excludes all users that do
  not use a mouse.

## The solution

```html
<button aria-disabled="true" aria-describedby="why-disabled" onclick="submitForm()">
  goodboi
</button>
<div role="tooltip" id="why-disabled">
  Fill all mandatory fields to enable submit
</div>
```

- Buttons that are "aria-disabled" are seen and read by screen readers, which will announce them as
  unavailable.
- aria-disabled elements can still be focused, so we can provide context-specific information such
  as why the button is disabled and/or how to make the button available.
- We programmatically disable the _onclick functionality_ of the button depending on application
  state, instead of relying on the button being disabled to prevent unwanted actions.
- We apply styles to the tooltip, so it is only visible when the button is disabled and in hover or
  focused state.

## Heavily inspired by

- https://axesslab.com/disabled-buttons-suck/
- https://css-tricks.com/making-disabled-buttons-more-inclusive/
