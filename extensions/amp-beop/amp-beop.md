---
$category@: social
formats:
  - websites
teaser:
  text: Embeds BeOp content.
---

# amp-beop

## Usage

The `amp-beop` component allows you to embed [BeOp](https://beop.io/) content in your AMP page for a given BeOp account. BeOp is a tool for content creators to add interactive blocks such as polls and quizzes to their pages. BeOp mostly works with journalists of major media groups in Europe.

### Integration examples

### As a 3rd party

```html
<amp-beop
  width="375"
  height="472"
  layout="responsive"
  data-account="589446dd42ee0d6fdd9c3dfd"
  data-content="5a703a2f46e0fb00016d51b3"
  data-name="content-slot"
>
</amp-beop>
```

### As an ad provider

```html
<amp-ad
  width="300"
  height="220"
  type="beop"
  layout="responsive"
  data-account="589446dd42ee0d6fdd9c3dfd"
  data-name="slot_0"
  data-my-content="0"
>
</amp-ad>
```

### Placeholders & fallbacks

An element marked with a `placeholder` attribute displays while the content for the content is loading or initializing. Placeholders are hidden once the AMP component's content displays. An element marked with a `fallback` attribute displays if `amp-beop` isn't supported by the browser or if the content doesn't exist or has been deleted.

Visit the [Placeholders & fallbacks](https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/placeholders) guide to learn more about how placeholders and fallbacks interact for the `amp-beop` component.

## Attributes

### `data-account`

The ID of the BeOp account (page owner).

### `data-content` (optional)

The ID of the BeOp content to be displayed on the page.

### `data-name` (optional)

The name of the BeOp slot on the page.

[filter formats="ads"]

### `data-my-content` (optional)

For `amp-ad` elements of type `beop`, the value can be set to `"0"`
(default value).

[tip type="important"]

The `amp-beop` element overrides this value to `"1"`, to prevent the
serving of ads outside of an `amp-ad` element.

[/tip]

[/filter]<!-- formats="ads" -->

### title (optional)

Define a `title` attribute for the component to propagate to the underlying `<iframe>` element. The default value is `"BeOp content"`.

## Styling

BeOp does not currently provide an API that yields fixed aspect ratio for embedded contents. Currently, AMP automatically proportionally scales the content to fit the provided size, but this may yield less than ideal appearance. You might need to manually tweak the provided width and height. Also, you can use the `media` attribute to select the aspect ratio based on the screen width.

## Validation

See [amp-beop rules](validator-amp-beop.protoascii) in the AMP validator specification.
