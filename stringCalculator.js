function add(numbers) {
  if (!numbers) {
    return 0;
  }

  const delimiters = [',', '\n'];
  let processedInput = numbers;

  // Check for custom delimiter
  if (numbers.startsWith('//')) {
    const customDelimiter = numbers[2];
    processedInput = numbers.substring(4);
    delimiters.push(customDelimiter);
  }

  const numberArray = processedInput.split(new RegExp(`[${delimiters.join('')}]`));
  
  const negativeNumbers = numberArray
    .map(num => parseInt(num))
    .filter(num => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(',')}`);
  }

  return numberArray
    .map(num => parseInt(num))
    .filter(num => !isNaN(num) && num <= 1000)
    .reduce((sum, num) => sum + num, 0);
}

module.exports = { add };