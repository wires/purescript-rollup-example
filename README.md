what is the point of this?

I *really* really don't like pulp.

This is a zero-magic build using `purs`/`psc-package` solution that creates a small codebase using the `rollup` bundler.
it also has dead code elimination and loading of npm modules in purescript FFI

requirements

0. nodejs & npm
1. recent purescript, `npm i -g purescript`
2. install psc-bundle


building

- `npm i` dependencies

then

	npm run build

then

	cd public; superstatic -p 12373

