# Squeel - SQL-like wrapper for querying HTML nodes

Squeel is a lightweight JavaScript library for building DOM queries in a simple and expressive way. It allows you to construct complex queries with ease, providing a fluent interface for selecting elements based on node type, class, ID, and attributes.

## Installation

You can include Squeel in your project by adding the following script tag to your HTML file:

`<script src="https://raw.githubusercontent.com/cemreefe/squeel/main/Squeel.js"></script>`

## Usage

### Creating a Squeel instance

`const sq = new Squeel();`

### Selecting Elements

Use the `select` method to specify the type of HTML element you want to select:

`sq.select('div');`

### Filtering by Class or ID

Use the `where` method to filter elements by class or ID:

```javascript
sq.where('class', '=', 'example-class')
  .where('id', '=', 'example-id')
.run();
```

## Adding Attribute Filters
Add additional attribute filters using the `where` method:

```
sq.where('data-type', '=', 'example')
  .where('data-enabled', '!=', 'false')
.run();
```

## Running the Query
Execute the query and get the selected elements with the run method:

```
sq.select('h1')

const result = sq.run();
```

Example

```
const result = new Squeel()
                .select('input')
                .where('type', '=', 'text')
                .where('class', '=', 'form-control')
                .run();
```

## Compile Query

If you want to see the compiled query string without executing it, use the compileQuery method:

```
const queryString = squeel.compileQuery();
console.log(queryString);
```

## Contributing
Contributions are welcome! If you find a bug or have an idea for improvement, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
