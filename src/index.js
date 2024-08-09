function decodeMorse(morseCode) {
  
  const morseDict = {
      '0000001111': '-',   
      '0000000010': '.',   
      '**********': ' '    
  };
  
  
  function decodeSegment(segment) {
      return morseDict[segment] || '';
  }

  const segmentLength = 10;  
  const result = [];
  
  for (let i = 0; i < morseCode.length; i += segmentLength) {
      const segment = morseCode.slice(i, i + segmentLength);
      result.push(decodeSegment(segment));
  }
  
  return result.join('');
}

const encodedMessage = '0000001111000000001000000010000000001111**********';
const decodedMessage = decodeMorse(encodedMessage);

console.log(decodedMessage);