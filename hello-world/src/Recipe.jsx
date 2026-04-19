/**
 * Keeping components pure. This basically means the following:
 * Our components should ALWAYS return JSX only that does not change any object data or values after or during the rendering process.
 * for example y = 2x will always return a consistent value where y will be twice the value of x always.
 * We will not get any random values for the same. Take drinkers prop value for example.
 * The prop value will not change at all once passes. If it's 2 it will remain 2 and not turn into some arbitrary value
 * Refer the deep dive parts in this: https://react.dev/learn/keeping-components-pure
 *
 */

export const Recipe = ({ drinkers }) => {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
};
