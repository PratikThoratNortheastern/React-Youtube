// Index as key anti-pattern in react js.
// Issue is that it represents positions and not by the items in the list itself.
// We will get inconsistent data for the same. Hence we refrain from using index as key.
// There are some cases where we need to use the index and not the item itself.
// For example: hangman game for rendering words, we do not want to directly render the words which we wanna guess
// So index as key will be fine as we get only a list of words and nothing else.

// So basically the following conditions are the only times when we use index as a key:
/**
 * The data does not contain unique id.
 * The list or data is static meaning it will NEVER change
 * The list itself is not filtered or re-ordered.
 * Tip: If we see inconsistent data, check the key used to render that data. 9/10 times it has to be due to the anti pattern of index as key.
 *
 */

export const NameList = () => {
  const names = ["Pratik", "Alan", "Tarun", "Nikhil"];

  const namesList = names.map((name, index) => <h2 key={index}>{name}</h2>);

  return <div>{namesList}</div>;
};
