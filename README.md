# jquery-duplikaator [![Build Status](http://img.shields.io/travis/ain/jquery-duplikaator.svg)](https://travis-ci.org/ain/jquery-duplikaator)

jQuery Duplikaator duplicates form fields and listens for their change to return compound data.

## Options

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `nameGenerator` | `Boolean` | `true` | Automagically appends duplication sequence ID to the end of input name, e.g. `forename` becomes `forename1` on duplication. |
| `emitter` | `Boolean` | `false` | Dispatch `duplicate` event whenever element is duplicated |

## Requirements

- jQuery 1.2.6 or greater

## Example

```html
<form>
  <input type="button" value="Duplicate" data-duplikaator-source="form > fieldset" data-duplikaator-target="form" class="js_duplicate_button">
  <fieldset>
    <input type="text" name="duplikaator_value" value="Duplikaator value">
  <fieldset>
</form>

<script src="scripts/jquery-duplikaator.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $(".js_duplicate_button").duplikaator({
      nameGenerator: true, // generate input names, e.g. duplikaator_value1 for 1st dupe
      emitter: true // emit event with duped element and duplication sequence ID
    });
  });
</script>
```

## Contributions

### Bug reports, suggestions

- File all your issues, feature requests [here](https://github.com/ain/jquery-duplikaator/issues)
- If filing a bug report, follow the convention of _Steps to reproduce_ / _What happens?_ / _What should happen?_
- __If you're a developer, write a failing test instead of a bug report__ and send a Pull Request

### Code

1. Fork it ( https://github.com/[my-github-username]/jquery-duplikaator/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Develop your feature by concepts of [TDD](http://en.wikipedia.org/wiki/Test-driven_development), see [Tips](#tips)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

### Tips

Following tasks are there to help with development:

- `grunt watch:bdd` listens to tests and source, reruns tests
- `grunt qa` runs QA task that includes tests, linting and conventions check
- `grunt build` minifies source to `dist/`

## Licence
Copyright © 2015 Ain Tohvri. Licenced under [GPLv3](LICENSE).
